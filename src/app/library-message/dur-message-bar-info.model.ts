export class DurMessageBarInfo {

  public icon: 'check' | 'warning' | 'error' | 'info';
  public primaryText: 'Success message' | 'Warning message' | 'Error message' | 'Info message';
  public color: '#198754' | '#ffc107' | '#0d6efd' | '#ff0000';

  public static SUCCESS: DurMessageBarInfo = {
    icon: 'check',
    primaryText: 'Success message',
    color: '#198754',
  };

  public static WARNING: DurMessageBarInfo = {
    icon: 'warning',
    primaryText: 'Warning message',
    color: '#ffc107',
  };

  public static ERROR: DurMessageBarInfo = {
    icon: 'error',
    primaryText: 'Error message',
    color: '#ff0000',
  };

  public static INFO: DurMessageBarInfo = {
    icon: 'info',
    primaryText: 'Info message',
    color: '#0d6efd',
  };
}
