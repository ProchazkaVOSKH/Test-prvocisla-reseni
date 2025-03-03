function jePrvocislo(cislo) {
    if (cislo<2) return false; // cislo je menší než 2 a pak není prvočíslem
    if (cislo % 2 === 0) {
        // cislo je sudé, tedy pravděpodobně není prvočíslem
        return cislo === 2;  // pokud je to ale 2, pak prvočíslem
    }
    let i=3;
    // testujeme i menší než druhá odmocnina zadaného čísla
    while (i <= Math.sqrt(cislo)) {
        if (cislo % i === 0) {  
            return false;  // cislo je dělitelné i, tedy není prvočíslem
        }
        i += 2; // zkoušíme jen lichá i
    }
    return true;
}

// odkazy na prvky stránky
const tlacitko = document.querySelector('button');
const vstup = document.querySelector('#cislo');
const vysledek = document.querySelector('#vysledek');

tlacitko.onclick = function() {
    let cislo = parseInt(vstup.value);
    if (isNaN(cislo)) {     // funkce isNaN vyhodnotí stav, kdy výsledkem převodu je neurčitá hodnota
        vysledek.textContent = 'Neplatná hodnota';
    } else {
        vysledek.textContent = vstup.value + (jePrvocislo(cislo) ? ' je prvočíslo' : ' není prvočíslo');
    }
}
