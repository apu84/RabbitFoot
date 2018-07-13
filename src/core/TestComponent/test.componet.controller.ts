export default class TestController {
  public static $inject: string[] = [];
  public static IID: string = 'cf.test.controller';
  private something = '';

  constructor() {
    this.something = "Test value";
  }
}