/**
* Ezzel a függvényel táblázatunkat hozzuk létre
* 
*/
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

/**
* Ezzel a függvényel azt ellenőrizzük hogy egy adott input mező üres e
* 
*/
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

/**
* Ezzel a függvényel azt ellenőrizzük hogy két mezőből bármelyik üres e
* 
*/
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

/**
* Ezzel a függvényel a fejlécet generáljuk le
* 
*/
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

/**
* Ezzel a függvényel a formunkat generáljuk le
* 
*/
    function generateForm(formD){  //Függvényt definiálunk
        const form = document.createElement('form') //Létrehozom a formot
        document.body.appendChild(form) //Hozzá appendelem a body-hoz
        form.id = "form" //A form id-ja form
        form.action = "#" //A form action-je #
    
        for(let i = 0; i < formD.length; i++ ){  //A form összes elemén végig megyünk egy ciklussal
            const div =  document.createElement('div') //Létrehozok egy div elemet
            form.appendChild(div) //Hozzá appendelem a formhoz
            
            const label = document.createElement('label') //Létrehozok egy label elemet
            div.appendChild(label) //Hozzá appendelem a div-hez
    
            label.htmlFor = formL[i].id //htmlFor egyenlő lesz a form-idjával
            label.innerHTML = formL[i].label //A label innerHTML értéke a form1 objektumban eltárolt label lesz
    
            const br = document.createElement('br') //Sortörést hozok létre
            div.appendChild(br) //Hozzá appendelem a div-hez
    
            const input = document.createElement('input') //Inputot hozok létre
            div.appendChild(input)//Hozzá appendelem a div-hez
            input.type = "text" //Input tipusa text
            input.id = formL[i].id //Input id megegyezik az objektumban eltárolt id-val
            input.name = formL[i].id //Input name megegyezik az objektumban eltárolt id-val
    
            const br2 = document.createElement('br') //Sortörést hozok létre
            div.appendChild(br2) //Hozzá appendelem a div-hez
    
            const span = document.createElement('span') //Spant hozok létre
            div.appendChild(span) //Hozzá appendelem a div-hez
            span.className = "error" //A span classa az error lesz
             
            const br3 = document.createElement('br') //Sortörést hozok létre
            div.appendChild(br3) //Hozzá appendelem a div-hez
            
        }
    
        const button = document.createElement('button') //Létrehozok egy gombot
        button.innerHTML = "Hozzáadás" //A gomb értéke a "Hozzáadás" szöveg lesz
        form.appendChild(button) //Hozzá appendelem a formhoz a gombot
    }

    