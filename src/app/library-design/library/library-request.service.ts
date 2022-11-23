import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {filter, map, Observable} from 'rxjs';
import {Library} from './creation-form/library.model';
import {Rack} from '../rack/rack-creation-form/rack.model';
import {Book} from '../book/book-creation-form/book.model';
import {HttpConfigService} from '../../shared/http-config.service';

@Injectable({
  providedIn: 'root',
})

export class LibraryRequestService {

  private readonly LIBRARY: string = '/library';
  private readonly RACK: string = '/rack';
  private readonly BOOK: string= '/book';

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

  getLabel(library: Library): Observable<any> {
    return this.http.get(`${this.httpConfigService.rootUrl}${this.RACK}/${library.id}/unique-identifier`);
  }

  postRack(rack: Rack, idOfLib: number): Observable<Rack> {
    return this.http.post<Rack>(`${this.httpConfigService.rootUrl}${this.RACK}/${idOfLib}`, rack);
  }

  getAllRacks(library: Library): Observable<Rack[]> {
    return this.http.get<Rack[]>(`${this.httpConfigService.rootUrl}${this.RACK}/${library.id}/all`);
  }

  postBook(book: Book): Observable<Book> {
    return this.http.post<Book>(`${this.httpConfigService.rootUrl}${this.BOOK}`, book);
  }
}
