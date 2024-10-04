/*Pruebas de Servicios con Signals
Componente: Servicio con Signal
Este servicio utiliza Signals para manejar el estado reactivo.*/
// signal.service.ts
import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignalService {
  private stateSignal = signal<string>('initialState');

  getStateSignal() {
    return this.stateSignal;
  }

  updateStateSignal(newState: string) {
    this.stateSignal.set(newState);
  }
}
