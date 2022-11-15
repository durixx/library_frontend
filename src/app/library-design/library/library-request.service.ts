import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {filter, map, Observable} from 'rxjs';
import {Library} from './creation-form/library.model';
import {HttpConfigService} from '../../shared/http-config.service';

@Injectable({
  providedIn: 'root',
})

export class LibraryRequestService {

  private readonly LIBRARY: string = '/library';

  constructor(private http: HttpClient, private httpConfigService: HttpConfigService) {
  }

  getAllLibraries(): Observable<Library[]> {
    return this.http.get<Library[]>(this.httpConfigService.rootUrl + this.LIBRARY + '/all');
  }

  postLibrary(library: Library): Observable<Library> {
    return this.http.post<Library>(`${this.httpConfigService.rootUrl}${this.LIBRARY}`, library);
  }

  patchLibrary(library: Library): Observable<Library> {
    return this.http.patch<Library>(`${this.httpConfigService.rootUrl}${this.LIBRARY}/${library.id}`, library);
  }

  stringOfUrl(library: Library) {
    return (`${this.httpConfigService.rootUrl}${this.LIBRARY}/${library.id}`);
  }
}
