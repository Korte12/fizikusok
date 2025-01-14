const table = document.createElement('table'); //Létrehozom a table-t
document.body.appendChild(table);//Hozzá appendelem a body-hoz

const thead = document.createElement('thead');//Létrehozom a thead-et
table.appendChild(thead);//Hozzá appendelem a table-hez

const tr = document.createElement('tr');//Létrehozom a tr-t
thead.appendChild(tr);//Hozzá appendelem a thead-hez

const th1 = document.createElement('th');//Létrehozom az első th-t
th1.innerHTML = "Fizika területe"; //Megadom az értékét
tr.appendChild(th1);//Hozzá appendelem a sorhoz

const th2 = document.createElement('th');//Létrehozom a második th-t
th2.innerHTML = "Időszak";//Megadom az értékét
tr.appendChild(th2);//Hozzá appendelem a sorhoz

const th3 = document.createElement('th');//Létrehozom a harmadik th-t
th3.innerHTML = "Képviselők";//Megadom az értékét
th3.colSpan = 2;//colSpan-t állitok be hogy jó legyen az elrendezés
tr.appendChild(th3);//Hozzá appendelem a sorhoz

const tbody = document.createElement('tbody');//Létrehozom a tbody-t
table.appendChild(tbody);//Hozzá appendelem a table-hez


const row1 = document.createElement('tr');//Létrehozom az első sort
tbody.appendChild(row1);// Hozzá appendelem a tbody-hoz


const cell1_1 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell1_1.innerHTML = "Optika";//Megadom az értékét
row1.appendChild(cell1_1);//Hozzá appendelem a sorhoz a cellát

const cell1_2 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell1_2.innerHTML = "XI. század";//Megadom az értékét
row1.appendChild(cell1_2);//Hozzá appendelem a sorhoz a cellát

const cell1_3 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell1_3.innerHTML = "Alzahen";//Megadom az értékét
cell1_3.colSpan = 2;//colSpan-t állitok be hogy jó legyen az elrendezés
row1.appendChild(cell1_3);//Hozzá appendelem a sorhoz a cellát


const row2 = document.createElement('tr');//Létrehozom a második sort
tbody.appendChild(row2);// Hozzá appendelem a tbody-hoz


const cell2_1 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell2_1.innerHTML = "Asztonómia";//Megadom az értékét
row2.appendChild(cell2_1);//Hozzá appendelem a sorhoz a cellát

const cell2_2 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell2_2.innerHTML = "reneszánsz";//Megadom az értékét
row2.appendChild(cell2_2);//Hozzá appendelem a sorhoz a cellát

const cell2_3 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell2_3.innerHTML = "Kepler";//Megadom az értékét
row2.appendChild(cell2_3);//Hozzá appendelem a sorhoz a cellát

const cell2_4 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell2_4.innerHTML = "Galiei";//Megadom az értékét
row2.appendChild(cell2_4);//Hozzá appendelem a sorhoz a cellát


const row3 = document.createElement('tr');//Létrehozom a harmadik sort
tbody.appendChild(row3);// Hozzá appendelem a tbody-hoz


const cell3_1 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell3_1.innerHTML = "Kvantumfizika";//Megadom az értékét
row3.appendChild(cell3_1);//Hozzá appendelem a sorhoz a cellát

const cell3_2 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell3_2.innerHTML = "XIX-XX. század";//Megadom az értékét
row3.appendChild(cell3_2);//Hozzá appendelem a sorhoz a cellát

const cell3_3 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell3_3.innerHTML = "Max Planck";//Megadom az értékét
row3.appendChild(cell3_3);//Hozzá appendelem a sorhoz a cellát

const cell3_4 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell3_4.innerHTML = "Albert Einstein";//Megadom az értékét
row3.appendChild(cell3_4);//Hozzá appendelem a sorhoz a cellát


const row4 = document.createElement('tr');//Létrehozom a negyedik sort
tbody.appendChild(row4);// Hozzá appendelem a tbody-hoz


const cell4_1 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell4_1.innerHTML = "Modern fizika";//Megadom az értékét
row4.appendChild(cell4_1);//Hozzá appendelem a sorhoz a cellát

const cell4_2 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell4_2.innerHTML = "XX-XXI. század";//Megadom az értékét
row4.appendChild(cell4_2);//Hozzá appendelem a sorhoz a cellát

const cell4_3 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell4_3.innerHTML = "Richard Feynman";//Megadom az értékét
row4.appendChild(cell4_3);//Hozzá appendelem a sorhoz a cellát

const cell4_4 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell4_4.innerHTML = "Stephen Hawking";//Megadom az értékét
row4.appendChild(cell4_4);//Hozzá appendelem a sorhoz a cellát