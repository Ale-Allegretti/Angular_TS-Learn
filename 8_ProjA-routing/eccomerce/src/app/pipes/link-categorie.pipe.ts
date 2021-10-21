import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'linkCategorie'
})
export class LinkCategoriePipe implements PipeTransform {

  // deve generare -> <a routerLink="/categoria/...">...</a> per ogni genere trovato
  transform(value: string[], ...args: string[]): string {
    let separatore = args[0] || " / ";
    let html = "";
    for(let genere of value) {
      html += `<a routerLink="/categoria/${genere.toLowerCase()}">${genere}</a>${separatore}`;
    }
    html = html.substring(0, html.length - separatore.length);

    return html;
  }

}
