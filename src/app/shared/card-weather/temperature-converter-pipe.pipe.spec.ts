import { TemperatureConverterPipePipe } from '../pipes/temperature-converter.pipe';

describe('TemperatureConverterPipePipe', () => {
  it('create an instance', () => {
    const pipe = new TemperatureConverterPipePipe();
    expect(pipe).toBeTruthy();
  });
});
