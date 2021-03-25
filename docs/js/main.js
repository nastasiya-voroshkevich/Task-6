let table = document.querySelector("#customers");
let rows = table.rows;
for (let i = 0; i < rows.length; i++) {
  if (table.rows[i].innerHTML.includes("Germany") === true) {
    rows[i].style.backgroundColor = "#ffff00";
    rows[i].style.fontWeight = "bold";
  } else if (table.rows[i].innerHTML.includes("Sweden") === true) {
    rows[i].style.color = "#4682B4";
  } else if (table.rows[i].innerHTML.includes("UK") === true) {
    rows[i].style.fontStyle = "italic";
  } else if (table.rows[i].innerHTML.includes("Italy") === true) {
    rows[i].hidden = true;
  }
}

/**
      Применить соответствующие стили ко всей строке в зависимости от страны
     Germany - бэкграунд - желтый, шрифт - жирный
      Sweden - цвет шрифта синий
      UK - шрифт курсив
     * Italy - скрыть строку
     */

/* //Germany
      document.querySelector('tbody > tr:nth-child(1)').style.backgroundColor = '#ffff00';
      document.querySelector('tbody > tr:nth-child(1)').style.fontWeight = 'bold';
      document.querySelector('tbody > tr:nth-child(6)').style.backgroundColor = '#ffff00';
      document.querySelector('tbody > tr:nth-child(6)').style.fontWeight = 'bold';
      document.querySelector('tbody > tr:nth-child(4)').style.backgroundColor = '#ffff00';
      document.querySelector('tbody > tr:nth-child(4)').style.fontWeight = 'bold';
     //Sweden
      document.querySelector('tbody > tr:nth-child(2)').style.color = '#4682B4';
      document.querySelector('tbody > tr:nth-child(10)').style.color = '#4682B4';

     // UK
     document.querySelector('tbody > tr:nth-child(5)').style.fontStyle = 'italic';
     document.querySelector('tbody > tr:nth-child(9)').style.fontStyle = 'italic';
    //Italy
    document.querySelector('tbody > tr:nth-child(8)').hidden = true;*/
