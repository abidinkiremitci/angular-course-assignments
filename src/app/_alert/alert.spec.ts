import {Alert} from './alert';
import {AlertType} from "./alert-type";

describe('Alert', () => {
  it('should create an instance', () => {
    expect(new Alert("Success", AlertType.SUCCESS)).toBeTruthy();
  });
});
