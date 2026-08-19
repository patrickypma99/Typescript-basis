"use strict";
const producten = [
    {
        naam: "Gibson Les Paul Standard",
        prijs: 1999,
        status: "op voorraad",
        beschrijving: "Gibson les paul model uit 2017"
    },
    {
        naam: "Fender Stratocaster White 1959",
        prijs: 3499,
        status: "uitverkocht"
    },
    {
        naam: "Fender Telecaster",
        prijs: 2499,
        status: "op voorraad",
        beschrijving: "Fender Telecaster uit 1980"
    },
    {
        naam: "Epiphone Les Paul",
        prijs: 499,
        status: "op voorraad",
        beschrijving: "Epiphone gitaar uit china voor de beginde gitarist"
    }
];
function maakProductTekst(product) {
    let tekst = product.naam + " / €" + product.prijs;
    tekst = tekst + " / " + product.status;
    if (product.beschrijving) {
        tekst = tekst + " / " + product.beschrijving;
    }
    return tekst;
}
for (const product of producten) {
    console.log(maakProductTekst(product));
}
console.log("Producten die op voorraad zijn:");
function toonProductenOpVoorraad(lijst) {
    for (const product of lijst) {
        if (product.status === "op voorraad") {
            console.log(product.naam);
        }
    }
}
toonProductenOpVoorraad(producten);
console.log("Producten die uitverkocht zijn:");
function toonProductenUitverkocht(lijst) {
    for (const product of lijst) {
        if (product.status === "uitverkocht") {
            console.log(product.naam);
        }
    }
}
toonProductenUitverkocht(producten);
