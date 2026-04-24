// Locks the position normalisation + tilt-angle math. These two transforms
// are what users actually feel - get the invert wrong and the slider runs
// backwards; get the tilt wrong and the slat graphic spins the wrong way.
import { describe, it, expect } from 'vitest';
import {
  normalisePosition,
  tiltAngleDeg,
  boundary,
} from '../../src/superpro-shutter-card.js';

describe('boundary (clamp helper)', () => {
  it('returns value within range unchanged', () => {
    expect(boundary(50, 0, 100)).toBe(50);
  });

  it('clamps below min', () => {
    expect(boundary(-10, 0, 100)).toBe(0);
  });

  it('clamps above max', () => {
    expect(boundary(150, 0, 100)).toBe(100);
  });

  it('handles flipped min/max args', () => {
    // boundary internally swaps to handle (max, min) callers
    expect(boundary(50, 100, 0)).toBe(50);
  });

  it('default range is 0..100', () => {
    expect(boundary(120)).toBe(100);
    expect(boundary(-1)).toBe(0);
  });
});

describe('normalisePosition - clamp + invert composition', () => {
  it('returns the value as-is when no flags set', () => {
    expect(normalisePosition(42)).toBe(42);
  });

  it('clamps to 0..100', () => {
    expect(normalisePosition(150)).toBe(100);
    expect(normalisePosition(-10)).toBe(0);
  });

  it('invertCover flips: 30 -> 70', () => {
    expect(normalisePosition(30, { invertCover: true })).toBe(70);
  });

  it('invertUi flips: 30 -> 70', () => {
    expect(normalisePosition(30, { invertUi: true })).toBe(70);
  });

  it('both flags double-flip back to identity', () => {
    expect(normalisePosition(30, { invertCover: true, invertUi: true })).toBe(30);
  });

  it('coerces string numbers', () => {
    expect(normalisePosition('42')).toBe(42);
  });

  it('clamp happens before invert', () => {
    // 150 -> clamp to 100 -> invert to 0
    expect(normalisePosition(150, { invertCover: true })).toBe(0);
  });
});

describe('tiltAngleDeg - linear interpolation + negation', () => {
  it('0% slider with default 0..180 range -> 0deg', () => {
    expect(tiltAngleDeg(0)).toBe(-0);
  });

  it('100% slider with default range -> -180deg', () => {
    expect(tiltAngleDeg(100)).toBe(-180);
  });

  it('50% slider with default range -> -90deg', () => {
    expect(tiltAngleDeg(50)).toBe(-90);
  });

  it('respects custom min/max range', () => {
    // 50% between 30..150 -> 90, negated -> -90
    expect(tiltAngleDeg(50, 30, 150)).toBe(-90);
  });

  it('negative slider extrapolates (no clamping by design)', () => {
    expect(tiltAngleDeg(-10, 0, 180)).toBe(18);
  });

  it('linearity sanity: doubling slider doubles deg magnitude', () => {
    expect(tiltAngleDeg(20, 0, 180)).toBe(-36);
    expect(tiltAngleDeg(40, 0, 180)).toBe(-72);
  });
});
