const array = [
    {
        terulet: "Optika", // értékadás a tulajdonságnak
        ido: "XI. század" , // értékadás a tulajdonságnak
        tudos: "Alhazen"  // értékadás a tulajdonságnak
    },

    {
        terulet: "Asztronómia", // értékadás a tulajdonságnak
        ido: "reneszánsz" , // értékadás a tulajdonságnak
        tudos: "Kepler", // értékadás a tulajdonságnak
        tudos2: "Galilei" // értékadás a tulajdonságnak
    },

    {
        terulet: "Kvantumfizika", // értékadás a tulajdonságnak
        ido: "XIX-XX. század" , // értékadás a tulajdonságnak
        tudos: "Max Planck", // értékadás a tulajdonságnak
        tudos2: "Albert Einstein" // értékadás a tulajdonságnak
    },

    {
        terulet: "Modern fizika", // értékadás a tulajdonságnak
        ido: "XX-XXI. század" , // értékadás a tulajdonságnak
        tudos: "Richard Feynman", // értékadás a tulajdonságnak
        tudos2: "Stephen Hawking" // értékadás a tulajdonságnak
    }
]

const table = document.createElement('table'); //Létrehozom a table-t
document.body.appendChild(table);//Hozzá appendelem a body-hoz

const tbody = document.createElement('tbody') //Létrehozok egy tbody elemet
table.appendChild(tbody) //Hozzá appendelem a táblázathoz

generateHeader() //Meghivom a header függvényt

function renderTable(){ //Elkezdem megírni a renderTable függvényt
    tbody.innerHTML = ''; // tbody innerHtml-je üres string

    for(let i = 0; i < array.length; i++){ //Végig iterálok az array tömbön
        const tr = document.createElement('tr') //Létrehozok egy tr elemet
        tbody.appendChild(tr) //Hozzá appendelem a tbody-hoz

        const cell1 = document.createElement('td') //Létrehozok egy td elemet
        cell1.innerHTML = array[i].terulet //Megadom az értékét
        tr.appendChild(cell1) //Hozzá appendelem a sorhoz

        const cell2 = document.createElement('td') //Létrehozok egy td elemet
        cell2.innerHTML = array[i].ido //Megadom az értékét
        tr.appendChild(cell2) //Hozzá appendelem a sorhoz

        if(array[i].tudos2){ //Ha létezik a tudos2 érték
            const cell3 = document.createElement('td') //Létrehozok egy td elemet
            cell3.innerHTML = array[i].tudos //Megadom az értékét
            tr.appendChild(cell3) //Hozzá appendelem a sorhoz

            const cell4 = document.createElement('td') //Létrehozok egy td elemet
            cell4.innerHTML = array[i].tudos2 //Megadom az értékét
            tr.appendChild(cell4) //Hozzá appendelem a sorhoz
        }
        else{ //Ha nincs második tudós
            const cell3 = document.createElement('td') //Létrehozok egy td elemet
            cell3.colSpan = 2 //Beállítom a colspan értékét 2-re
            cell3.innerHTML = array[i].tudos //Megadom az értékét
            tr.appendChild(cell3) //Hozzá appendelem a sorhoz
        }
    }
}

function ValidateField(inputElement, ErrorMessage){//Függvényt definiálunk
    let valid = true;//A valid értéke igaz
    if(inputElement.value === ""){//Ha az inputElement üres
        const parentElement = inputElement.parentElement //Az inputElement szülő elemét hozzá rendeljük a parentElementhez
        const error = parentElement.querySelector(".error"); // Megkeressük az első elemet amin rajta van az error
        if(error) { //Ha az error
            error.innerHTML = ErrorMessage; // Kiirjuk a hibaüzenetet
        }
        valid = false // A valid változó értékét hamisra cseréljük
    }
    return valid //Valid értékkel térek vissza
}

function ValidateField2(firstElement, secondElement, ErrorMessage){ //Függvényt definiálunk
    let valid = true //A valid értéke igaz
    if(firstElement.value != "" && !ValidateField(secondElement, ErrorMessage)){ // Ellenőrizzük hogy a két mező közül az egyik kivan e töltve és ha igen akkor a másik mezőt validáljuk
        valid = false //A valid értéke hamis
    }
    if(secondElement.value != "" && !ValidateField(firstElement, ErrorMessage)){ // Ellenőrizzük hogy a két mező közül az egyik kivan e töltve és ha igen akkor a másik mezőt validáljuk
        valid = false //A valid értéke hamis
    }
    return valid //A valid értékkel térünk vissza
}

renderTable() //Meghivom a renderTable függvényt és az array paramétert fogja kapni

function generateHeader(){ //Függvényt definiálunk
    const thead = document.createElement('thead'); //Létrehozok egy thead elemet
    table.appendChild(thead);//Hozzá appendelem a táblázathoz
    const tr = document.createElement('tr');//Létrehozok egy sor elemet

    const headerW = ["Fizika területe", "Időszak", "Képviselők"]; //Létrehozom a header tömböt
    thead.appendChild(tr);//Hozzá appendelem a fej részhez

    for (let i = 0; i < headerW.length; i++) { // Végigiterálunk a headerW tömb elemein
        const th = document.createElement('th'); //Létrehozok egy th-t
        th.innerHTML = headerW[i]; //A th innerHTML-je lesz az aktuális headerW elem értéke

        if (i === 2) { // Hogyha az i egyenlő kettővel (harmadik oszlop)
            th.colSpan = 2; // Beállítjuk a colspan értékét 2-re
        }
            tr.appendChild(th) //Hozzá appendeljük a sorhoz a th-t
        }
     
    }

const form = document.getElementById("form") //Lekérem a html form id-ját
form.addEventListener('submit', function(e){//Eseménykezelőt adok a form-hoz
    e.preventDefault()//Megakadályozom hogy a böngésző alapártelmezetten lefusson
    const teruletH = document.getElementById("fizika")//Lekérem a html form id-ját
    const idoH = document.getElementById("ido")//Lekérem a html form id-ját
    const tudos1H = document.getElementById("tudos1")//Lekérem a html form id-ját
    const tudos2H = document.getElementById("tudos2")//Lekérem a html form id-ját

    const teruletV = teruletH.value ///Eltárolom egy változóban az értéket
    const idoV = idoH.value///Eltárolom egy változóban az értéket
    const tudos1V = tudos1H.value///Eltárolom egy változóban az értéket
    const tudos2V = tudos2H.value///Eltárolom egy változóban az értéket

    const thisForm = e.currentTarget //Az aktuális form
    const errorElements = thisForm.querySelectorAll('.error') //Errorokat eltárolom egy változóban

    for(const i of errorElements){ //Végigmegyek az errorokon és "" ra állitom az értéküket
        i.innerHTML = ""
    }

    let valid = true; // A valid változó értéke igaz

    if(!ValidateField(teruletH, "A mező kitöltése kötelező!")){ //Ha a függvényünk hamissal tér vissza akkor kiirja az error üzenetet
        valid = false; //A valid értéke hamis lesz
    }

    if(!ValidateField(idoH, "A mező kitöltése kötelező!")){ //Ha a függvényünk hamissal tér vissza akkor kiirja az error üzenetet
        valid = false; //A valid értéke hamis lesz
    }

    if(!ValidateField(tudos1H, "A mező kitöltése kötelező!")){ //Ha a függvényünk hamissal tér vissza akkor kiirja az error üzenetet
        valid = false; //A valid értéke hamis lesz
    }

    if(!ValidateField2(tudos1H, tudos2H, "A mező kitöltése kötelező!")){ //Ha a függvényünk hamissal tér vissza akkor kiirja az error üzenetet
        valid = false;//A valid értéke hamis lesz
    }

if(valid){ //Ha valid
    if(tudos1V === "" && tudos2V === ""){ //Ha tudos1 es tudos2 üres
    const new_person = { //Létrehozok egy új elemet
        terulet: teruletV, //Értéket adok
        ido: idoV,//Értéket adok
        tudos: tudos1V,//Értéket adok
    }
    
    array.push(new_person)//Hozzárakom az arrayhez az új elemet

    }
    else {
        const new_person = { //Létrehozok egy új elemet
            terulet: teruletV, //Értéket adok
            ido: idoV,//Értéket adok
            tudos: tudos1V,//Értéket adok
            tudos2: tudos2V,//Értéket adok
        }
    array.push(new_person)//Hozzárakom az arrayhez az új elemet
    }
}
    thisForm.reset()//thisFormot vagyis a táblázatunkat resetelem
    renderTable();//Meghivom a renderTable függvényt mégegyszer
})