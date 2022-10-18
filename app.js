function f()
{
    currentDate = new Date();
    startDate = new Date(currentDate.getFullYear(), 0, 1);
    let days = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000));
    let weekNumber = Math.ceil(days / 7);
    let table
    
    if(weekNumber % 2 === 0){
        table = document.getElementById('fw')
    }
    else {
        table = document.getElementById('sw')
    }
    
    const rows = table.getElementsByTagName('tr')
    
    const rlen = rows.length
    const day = new Date().getDay()
    
    for (let i = 0; i < rlen; i++){
    let cells = rows[i].getElementsByTagName('td')
        cells[day].style.background = 'lightblue'
    }
}

function noLink(){
    alert('Нажаль, посилання ще нема :(')
}