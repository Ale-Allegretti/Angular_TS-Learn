
# Appunti su Angular e alcune funzioni

## Errori di aggiunta librerie

In caso non venga aggiunto correttamente bootstrap agli npm module, provare con:
inserire nel package.json."dependecies" {
    "bootstrap": "^5.1.3"
}

ed eseguire da terminale {
    npm cache clean -f
    npm update
    npm install bootstrap@latest
}

## Prassi nella creazione degli Observable

1. Creare un interfaccia dell'oggetto che si riceve;

2. inserire l'URL principale in enviroments.ts come :
    export const environment = {
    production: false,
    endPoint: "..."};

3. Creare o usare un service (XXX.service.ts) dove tramite un httpClient si esegue una subscribe che    ritorna un Observable<"OGGETTO"> (array o meno)

4. Richiamare una variabili di tipo Service nel component dove necessario, da cui partirà una subscribe  tramite un metodo di GET definito nel service stesso

## CORS nelle chiamate Http nei confronti di un BE

Se c'è un errore di tipo CORS nella response da parte di un server, c'è da contattare il BE per avere le necessarie autorizzazioni per chiamate GET o POST
