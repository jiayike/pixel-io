import matchers, { TestingLibraryMatchers } from '@testing-library/jest-dom/matchers';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace jest {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface Matchers<R = void> extends TestingLibraryMatchers<typeof expect.stringContaining, R> {}
  }
}

expect.extend(matchers);
