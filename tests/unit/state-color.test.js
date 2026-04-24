// Locks the level -> ICONCOLORS bucket math used by batteryIconColor() and
// signalLevelIndex() in the live class. The render path picks colours from
// ICONCOLORS via these indices; if the quantiser drifts, every battery+
// signal indicator silently re-paints.
import { describe, it, expect } from 'vitest';
import {
  levelToColorKey,
  ICONCOLORS,
} from '../../src/superpro-shutter-card.js';

describe('levelToColorKey - 5-band quantiser', () => {
  it('NaN -> -1 (grey)', () => {
    expect(levelToColorKey(NaN)).toBe(-1);
  });

  it('non-numeric string -> -1', () => {
    expect(levelToColorKey('?')).toBe(-1);
  });

  it('0% -> 0 (red, empty)', () => {
    expect(levelToColorKey(0)).toBe(0);
  });

  it('20% -> 1 (deep orange)', () => {
    expect(levelToColorKey(20)).toBe(1);
  });

  it('40% -> 2 (amber)', () => {
    expect(levelToColorKey(40)).toBe(2);
  });

  it('60% -> 3 (orange)', () => {
    expect(levelToColorKey(60)).toBe(3);
  });

  it('80% -> 4 (slightly dim green)', () => {
    expect(levelToColorKey(80)).toBe(4);
  });

  it('100% -> 5 (green, full)', () => {
    expect(levelToColorKey(100)).toBe(5);
  });

  it('rounds halves up towards next bucket (Math.round semantics)', () => {
    // 10/20=0.5, Math.round in JS rounds .5 up -> 1
    expect(levelToColorKey(10)).toBe(1);
  });

  it('matches the band edges expected by batteryIconColor', () => {
    expect(levelToColorKey(19)).toBe(1);
    expect(levelToColorKey(21)).toBe(1);
    expect(levelToColorKey(99)).toBe(5);
  });
});

describe('ICONCOLORS table', () => {
  it('has the exact six-band palette (-1 plus 0..5)', () => {
    expect(Object.keys(ICONCOLORS).sort()).toEqual(['-1', '0', '1', '2', '3', '4', '5']);
  });

  it('every bucket has a non-empty CSS colour', () => {
    Object.values(ICONCOLORS).forEach((c) => {
      expect(typeof c).toBe('string');
      expect(c.length).toBeGreaterThan(0);
    });
  });

  it('grey for unavailable, red for empty, green for full', () => {
    expect(ICONCOLORS['-1']).toBe('grey');
    expect(ICONCOLORS[0]).toBe('red');
    expect(ICONCOLORS[5]).toBe('green');
  });
});
