import { MyorgCoreModule } from './core.module';

describe('MyorgCoreModule', () => {
  it('should work', () => {
    expect(new MyorgCoreModule(null)).toBeDefined();
  });
});
