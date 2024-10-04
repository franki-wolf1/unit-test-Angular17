/*Presenters con Métodos y Signals
Componente: Presenter con Métodos y Signal
Este presenter contiene un método que actualiza el estado de un Signal.*/
// presenter.service.ts
import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PresenterService {
  private presenterSignal = signal<number>(0);

  getPresenterSignal() {
    return this.presenterSignal;
  }

  incrementSignal() {
    this.presenterSignal.update(val => val + 1);
  }

  resetSignal() {
    this.presenterSignal.set(0);
  }
}
