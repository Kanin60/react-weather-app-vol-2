/* Denne funktion henter den nuværende location.
Vi bruger den når siden loads og når vi trykker på knappen. 
Navigator er en variable, hvor en af property'erne er geolocation.
Vi sætter getCurrentPosition() på navigator, som en metode. 
Jeg ved ikke om det er kode fra react eller axios

Grunden til at denne function er i Helpers.js er fordi vi bruger den til 
at hente nuværende location både i FetchLocation og LocationButton */




export function getCurrentPosition() {
    return new Promise((resolve, reject) => {
        // console.log("getCurrent Position functionen kører")
        navigator.geolocation.getCurrentPosition(resolve, reject);
    }
    );
}