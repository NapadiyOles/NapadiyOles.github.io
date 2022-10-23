function f()
{
    let currentDate = new Date();
    let startDate = new Date(currentDate.getFullYear(), 0, 1);
    let days = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000));
    let weekNumber = Math.ceil((days - 1) / 7);
    let table, label

    if(weekNumber % 2 === 0){
        table = document.getElementById('fw')
        label = document.getElementById('fw-label')
    }
    else {
        table = document.getElementById('sw')
        label = document.getElementById('sw-label')
    }

    label.scrollIntoView()
    
    const rows = table.getElementsByTagName('tr')
    
    const rlen = rows.length
    const day = new Date().getDay()

    if([6, 0].includes(day)){
        let text = label.innerHTML;
        label.onmouseover = function() {
            this.innerHTML = 'Сьогодні вихідний ✌'
        }
        label.onmouseleave = function (){
            this.innerHTML = text
        }
        return
    }

    for (let i = 0; i < rlen; i++){
        let cells = rows[i].getElementsByTagName('td')
        cells[day].style.background = 'lightblue'
    }
}

function noLink(){
    alert('Нажаль, посилання ще нема :(')
}