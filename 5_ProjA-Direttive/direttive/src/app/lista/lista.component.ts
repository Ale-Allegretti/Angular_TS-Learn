import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit, OnDestroy {

  libri: string[] = [
    'Il gabbiano',
    'Capuccetto',
    'Pinocchio'
  ];


  constructor() { }

  ngOnInit(): void {
    // l'applicazione ha inizializzato il component e si può andare ad implementare qualche logica
    // caricata nell'app
    console.log("Lista component inizializzata");   // cliccando su "comico"
  }

  ngOnDestroy(): void {
    /** l'applicazione non ha più bisogno di questo component e lo distrugge. In questo metodo si può 
     * andare a liberare risorse o interrompere un chiamata verso un web-service 
     */
     console.log("Lista component distrutta");    // cliccando su altri
  }

  stileRigaPari(pari: boolean) {
    if(pari) {
      return {
        'background-color': 'red'
      };
    } else {
      return {
        'background-color': 'white'
      };
    }
  }

  classRigaDispari(dispari: boolean) {
    if(dispari){
      return 'text-end'
    } else {
      return 'text-start'
    }
  }


}
