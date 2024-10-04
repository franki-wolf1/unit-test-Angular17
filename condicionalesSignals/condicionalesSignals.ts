/*Pruebas de Condicionales (Ifs) con Signals
Componente: Condicionales con Signal
Este servicio implementa un flujo lógico basado en Signals.*/
// conditional.service.ts
import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConditionalService {
  private conditionSignal = signal<boolean>(true);
  private resultSignal = signal<string>('PathA');

  getConditionSignal() {
    return this.conditionSignal;
  }

  evaluateCondition() {
    if (this.conditionSignal()) {
      this.resultSignal.set('PathA');
    } else {
      this.resultSignal.set('PathB');
    }
  }

  getResultSignal() {
    return this.resultSignal;
  }
}
