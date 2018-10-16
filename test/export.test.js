import { BrowserRouter, Link, Route } from '../index';

describe('test export', () => {
  test('BrowserRouter, Link and Route is not undefined', () => {
    expect(BrowserRouter).toBeDefined();
    expect(Link).toBeDefined();
    expect(Route).toBeDefined();
  })
})
