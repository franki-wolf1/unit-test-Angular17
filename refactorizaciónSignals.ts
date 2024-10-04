/*Refactorización con Signals
Componente: Refactorización de Observables a Signals
Este ejemplo muestra cómo refactorizar un flujo de datos desde Observable a Signal.*/
// refactor.service.ts
import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RefactorService {
  private dataSignal = signal<string>('initialValue');

  getDataSignal() {
    return this.dataSignal;
  }

  updateDataSignal(newValue: string) {
    this.dataSignal.set(newValue);
  }
}
