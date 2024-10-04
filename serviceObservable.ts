/*Pruebas de Servicios con Observables
Componente: Servicio con Observable
Este servicio devuelve datos desde un Observable y permite una operación asíncrona.
*/

// data.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getData(): Observable<string[]> {
    return of(['item1', 'item2', 'item3']);
  }

  fetchData(): Observable<string> {
    return of('fetchedData');
  }
}
