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

const formL = [// A tömb létehozása
    {// A tömb első elemét létrehozom
        label: "Terület megnevezése:",//Értékadás
        id: "fizika",//Értékadás
    },
    {// A tömb második elemét létrehozom
        label: "Időszak:",//Értékadás
        id: "ido",//Értékadás
    },
    {// A tömb harmadik elemét létrehozom
        label: "Első tudós:",//Értékadás
        id: "tudos1"//Értékadás
    },
    {// A tömb negyedik elemét létrehozom
        label: "Második tudós:",//Értékadás
        id: "tudos2",//Értékadás
    }
]

generateForm(formL) //Meghivom a függvényt

const table = document.createElement('table'); //Létrehozom a table-t
document.body.appendChild(table);//Hozzá appendelem a body-hoz

const tbody = document.createElement('tbody') //Létrehozok egy tbody elemet
table.appendChild(tbody) //Hozzá appendelem a táblázathoz

generateHeader() //Meghivom a header függvényt

renderTable() //Meghivom a renderTable függvényt

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