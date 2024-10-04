/*Pruebas de Comportamientos Asíncronos con Signals
Componente: Comportamientos Asíncronos con Signal
Este servicio utiliza una operación asíncrona que luego actualiza un Signal.*/
// async.service.ts
import { Injectable, signal } from '@angular/core';
import { of, delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AsyncService {
  private asyncSignal = signal<string>('initial');

  getAsyncSignal() {
    return this.asyncSignal;
  }

  fetchData() {
    of('asyncData').pipe(delay(1000)).subscribe(data => {
      this.asyncSignal.set(data);
    });
  }
}
