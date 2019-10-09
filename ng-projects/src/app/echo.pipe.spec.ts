import { EchoPipe } from './echo.pipe';

describe('EchoPipe', () => {
  it('create an instance', () => {
    const pipe = new EchoPipe();
    expect(pipe).toBeTruthy();
  });
});
