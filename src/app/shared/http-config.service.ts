import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpConfigService {
  public rootUrl = 'http://localhost:4200/api';
}
