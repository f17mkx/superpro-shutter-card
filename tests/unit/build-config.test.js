// Tests for the config-merge logic that powers SuperproShutterCardNew. The
// pure version is exported from src/superpro-shutter-card.js; tests here
// must NOT instantiate the LitElement class itself - that path lives in the
// Playwright smoke suite.
import { describe, it, expect } from 'vitest';
import {
  buildConfig,
  CONFIG_DEFAULT,
  ESC_PRESET,
  DEPRECATED,
  REMOVED,
  getUniqueKeysFromObjects,
} from '../../src/superpro-shutter-card.js';

describe('buildConfig - merge order', () => {
  it('default config is the base layer', () => {
    const merged = buildConfig(CONFIG_DEFAULT, { entity: 'cover.foo' });
    expect(merged.entity).toBe('cover.foo');
    // current_position default is 0 from CONFIG_DEFAULT
    expect(merged.current_position).toBe(0);
  });

  it('user override wins over default', () => {
    const merged = buildConfig(CONFIG_DEFAULT, {
      entity: 'cover.foo',
      current_position: 50,
    });
    expect(merged.current_position).toBe(50);
  });

  it('preset (curtain) overrides default closing direction', () => {
    // CONFIG_DEFAULT has closing_direction: 'down'. ESC_PRESET.curtain flips
    // it to 'right'. User config selects the preset via shutter_preset.
    const merged = buildConfig(CONFIG_DEFAULT, {
      entity: 'cover.bar',
      shutter_preset: 'curtain',
    });
    expect(merged.closing_direction).toBe('right');
  });

  it('user override wins over preset (curtain) when both present', () => {
    const merged = buildConfig(CONFIG_DEFAULT, {
      entity: 'cover.bar',
      shutter_preset: 'curtain',
      closing_direction: 'down', // user explicitly forces down
    });
    expect(merged.closing_direction).toBe('down');
  });

  it('awning preset enables invert flags', () => {
    const merged = buildConfig(CONFIG_DEFAULT, {
      entity: 'cover.awning',
      shutter_preset: 'awning',
    });
    expect(merged.invert_open_close_ui).toBe(true);
    expect(merged.invert_percentage_ui).toBe(true);
    expect(merged.show_tilt).toBe(false);
  });

  it('blind preset enables tilt', () => {
    const merged = buildConfig(CONFIG_DEFAULT, {
      entity: 'cover.blind',
      shutter_preset: 'blind',
    });
    expect(merged.show_tilt).toBe(true);
    expect(merged.closing_direction).toBe('right');
  });

  it('roller-shutter preset (default) hides tilt', () => {
    const merged = buildConfig(CONFIG_DEFAULT, {
      entity: 'cover.roll',
      shutter_preset: 'roller-shutter',
    });
    expect(merged.show_tilt).toBe(false);
  });

  it('shade preset sets a colour-fill slat', () => {
    const merged = buildConfig(CONFIG_DEFAULT, {
      entity: 'cover.shade',
      shutter_preset: 'shade',
    });
    expect(merged.shutter_slat_image).toBe('#00000080');
  });

  it('unknown preset name yields empty preset object (default kept)', () => {
    const merged = buildConfig(CONFIG_DEFAULT, {
      entity: 'cover.x',
      shutter_preset: 'does-not-exist',
    });
    // Falls through to CONFIG_DEFAULT entirely
    expect(merged.show_tilt).toBe(CONFIG_DEFAULT.show_tilt);
  });
});

describe('buildConfig - deprecated keyword migration', () => {
  it('migrates invert_percentage to invert_percentage_cover', () => {
    const merged = buildConfig(CONFIG_DEFAULT, {
      entity: 'cover.legacy',
      invert_percentage: true,
    });
    expect(merged.invert_percentage_cover).toBe(true);
    // The deprecated key is removed from the merged config
    expect(merged.invert_percentage).toBe(CONFIG_DEFAULT.invert_percentage);
  });

  it('emits a Deprecated warning when migrating', () => {
    const messages = [];
    buildConfig(
      CONFIG_DEFAULT,
      { entity: 'cover.legacy', invert_percentage: true },
      (text, level, entityId) => messages.push({ text, level, entityId }),
    );
    const dep = messages.find((m) => m.text.includes('Deprecated'));
    expect(dep).toBeDefined();
    expect(dep.text).toContain('invert_percentage');
    expect(dep.entityId).toBe('cover.legacy');
  });

  it('migrates invert_open_close to invert_open_close_ui', () => {
    const merged = buildConfig(CONFIG_DEFAULT, {
      entity: 'cover.legacy',
      invert_open_close: true,
    });
    expect(merged.invert_open_close_ui).toBe(true);
  });

  it('does not migrate when value is null', () => {
    const messages = [];
    buildConfig(
      CONFIG_DEFAULT,
      { entity: 'cover.x', invert_percentage: null },
      (t) => messages.push(t),
    );
    expect(messages.find((m) => m.includes('Deprecated'))).toBeUndefined();
  });

  it('migrates removed keyword title_position to name_position with error level', () => {
    const messages = [];
    const merged = buildConfig(
      CONFIG_DEFAULT,
      { entity: 'cover.x', title_position: 'bottom' },
      (text, level, entityId) => messages.push({ text, level, entityId }),
    );
    expect(merged.name_position).toBe('bottom');
    const removed = messages.find((m) => m.text.includes('Removed'));
    expect(removed).toBeDefined();
    expect(removed.text).toContain('title_position');
  });
});

describe('buildConfig - unknown keyword warnings', () => {
  it('warns on a keyword not in the base config', () => {
    const messages = [];
    buildConfig(
      CONFIG_DEFAULT,
      { entity: 'cover.x', completely_made_up: true },
      (text, level, entityId) => messages.push({ text, level, entityId }),
    );
    const warn = messages.find((m) => m.text.includes('Unknown keyword'));
    expect(warn).toBeDefined();
    expect(warn.text).toContain('completely_made_up');
  });

  it('does not warn on entity (because entity IS in CONFIG_DEFAULT)', () => {
    const messages = [];
    buildConfig(
      CONFIG_DEFAULT,
      { entity: 'cover.x' },
      (text) => messages.push(text),
    );
    expect(messages.find((m) => m.includes('Unknown keyword'))).toBeUndefined();
  });

  it('warns once per unknown keyword, with the entity id in the message context', () => {
    const messages = [];
    buildConfig(
      CONFIG_DEFAULT,
      { entity: 'cover.foo', made_up_a: 1, made_up_b: 2 },
      (text, level, entityId) => messages.push({ text, level, entityId }),
    );
    const warns = messages.filter((m) => m.text.includes('Unknown keyword'));
    expect(warns).toHaveLength(2);
    expect(warns.every((w) => w.entityId === 'cover.foo')).toBe(true);
  });
});

describe('buildConfig - non-object input', () => {
  it('treats a bare string as an entity id', () => {
    const merged = buildConfig(CONFIG_DEFAULT, 'cover.string-form');
    expect(merged.entity).toBe('cover.string-form');
  });
});

describe('getUniqueKeysFromObjects', () => {
  it('returns keys present in obj1 but not in obj2', () => {
    expect(getUniqueKeysFromObjects({ a: 1, b: 2, c: 3 }, { a: 1, b: 2 })).toEqual(['c']);
  });

  it('returns empty array when obj1 is a subset of obj2', () => {
    expect(getUniqueKeysFromObjects({ a: 1 }, { a: 1, b: 2 })).toEqual([]);
  });

  it('handles empty obj1', () => {
    expect(getUniqueKeysFromObjects({}, { a: 1 })).toEqual([]);
  });

  it('handles empty obj2 (everything from obj1 is unique)', () => {
    expect(getUniqueKeysFromObjects({ a: 1, b: 2 }, {})).toEqual(['a', 'b']);
  });
});

describe('DEPRECATED + REMOVED tables (sanity)', () => {
  it('every DEPRECATED entry maps to an existing CONFIG_DEFAULT key', () => {
    Object.values(DEPRECATED).forEach((entry) => {
      expect(Object.keys(CONFIG_DEFAULT)).toContain(entry.new);
    });
  });

  it('every REMOVED entry maps to an existing CONFIG_DEFAULT key', () => {
    Object.values(REMOVED).forEach((entry) => {
      expect(Object.keys(CONFIG_DEFAULT)).toContain(entry.new);
    });
  });

  it('all preset names live in ESC_PRESET', () => {
    // sanity: 5 known presets
    expect(Object.keys(ESC_PRESET).sort()).toEqual(
      ['awning', 'blind', 'curtain', 'roller-shutter', 'shade', 'test'].sort(),
    );
  });
});
