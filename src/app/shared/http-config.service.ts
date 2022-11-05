import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpConfigService {
  public rootUrl: string = 'http://localhost:4200/api';
}
