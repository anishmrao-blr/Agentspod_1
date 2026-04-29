import "@testing-library/jest-dom";

class MockIntersectionObserver implements IntersectionObserver {
  root: Element | null = null;
  rootMargin = "0px";
  scrollMargin = "0px";
  thresholds: ReadonlyArray<number> = [0];
  disconnect() {}
  observe() {}
  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }
  unobserve() {}
}

Object.defineProperty(window, "IntersectionObserver", {
  writable: true,
  value: MockIntersectionObserver
});

