function jePrvocislo(vstup) {
    let cislo = parseInt(vstup);
    // pokud je číslo sudé nebo 1, tak to není prvočíslo
    if (cislo % 2 === 0 || cislo===1) {
        return cislo===2;  // pokud je číslo 2, tak je to prvočíslo, jinak ne (jediné sudé prvočíslo)
    }
    let delitel = 3;  // začínáme od 3 s krokem 2 (lichá čísla), protože sudá čísla už jsme ošetřili
    while (delitel <= Math.sqrt(cislo)) {
        if (cislo % delitel === 0) {
            // pokud se najde dělitel beze zbytku, tak číslo není prvočíslo
            return false;
        }
        delitel += 2;
    }
    return true;
}

const txtCislo = document.querySelector('#txtCislo'); 
// případně lze použít i document.getElementById('txtCislo');
const tlacitko = document.querySelector('button');
const pVysledek = document.querySelector('#pVysledek');

// při kliknutí na tlačítko se zavolá událostní funkce
tlacitko.onclick = function() {
    let cislo = parseInt(txtCislo.value);  // přečtení hodnoty z textového pole a její převedení na číslo; pokud se nepodaří převést, tak výsledkem bude NaN
    if (isNaN(cislo)) {
        pVysledek.textContent = 'Musíš zadat číslo';
    } else {
        if (jePrvocislo(cislo)) {
            pVysledek.textContent = 'Číslo je prvočíslo';
        } else {
            pVysledek.textContent = 'Číslo není prvočíslo';
        }
    }
}