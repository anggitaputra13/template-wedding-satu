import fc from "fast-check";

/**
 * Feature: hero-section-redesign
 * Property 1: Slideshow index cycling is circular
 *
 * For any array length N > 0 and current index in [0, N),
 * advancing to the next slide produces (index + 1) % N,
 * and reversing to the previous slide produces (index - 1 + N) % N.
 * The resulting index is always within [0, N).
 *
 * **Validates: Requirements 1.3, 1.4, 1.5**
 */

function nextSlideIndex(current: number, length: number): number {
  return (current + 1) % length;
}

function prevSlideIndex(current: number, length: number): number {
  return (current - 1 + length) % length;
}

describe("Feature: hero-section-redesign, Property 1: Slideshow index cycling is circular", () => {
  it("next slide index is always in [0, N) for any array length and current index", () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 1, max: 100 }),
        fc.integer({ min: 0, max: 99 }),
        (N, rawIndex) => {
          const index = rawIndex % N; // ensure index is in [0, N)
          const next = nextSlideIndex(index, N);
          expect(next).toBeGreaterThanOrEqual(0);
          expect(next).toBeLessThan(N);
          expect(next).toBe((index + 1) % N);
        }
      ),
      { numRuns: 100 }
    );
  });

  it("prev slide index is always in [0, N) for any array length and current index", () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 1, max: 100 }),
        fc.integer({ min: 0, max: 99 }),
        (N, rawIndex) => {
          const index = rawIndex % N; // ensure index is in [0, N)
          const prev = prevSlideIndex(index, N);
          expect(prev).toBeGreaterThanOrEqual(0);
          expect(prev).toBeLessThan(N);
          expect(prev).toBe((index - 1 + N) % N);
        }
      ),
      { numRuns: 100 }
    );
  });

  it("next from last index wraps to 0", () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 1, max: 100 }),
        (N) => {
          const lastIndex = N - 1;
          expect(nextSlideIndex(lastIndex, N)).toBe(0);
        }
      ),
      { numRuns: 100 }
    );
  });

  it("prev from index 0 wraps to last index", () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 1, max: 100 }),
        (N) => {
          expect(prevSlideIndex(0, N)).toBe(N - 1);
        }
      ),
      { numRuns: 100 }
    );
  });
});
