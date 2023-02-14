
const WeekDays = {
    Mon: 1,
    Tue: 2,
    Wed: 3,
    Thu: 4,
    Fri: 5
}

let week = 0;

function fillTableById(table, week, current_day, fill_back){
    const rows = table.getElementsByTagName('tr');

    const r_len = rows.length
    for (let i = 1; i < r_len; i++) {
        let cells = rows[i].getElementsByTagName('td');
        for (let day in WeekDays){
            let obj = schedule[week][i - 1][day];
            let cell = cells[WeekDays[day]];
            cell.innerHTML = null;
            cell.style.background = 'none';

            if(obj){
                cell.innerHTML = `<div class="card">
                    <a class="card-body" href="${obj.Subject.Link}" target="_blank">${obj.Subject['Name']}</a>
                    </div>
                    <div class="text-secondary">${obj.Type}<br>${obj.Subject.Teacher}</div>`
            }

            if (!([6, 0].includes(current_day)) && fill_back) {
                cells[current_day].style.background = 'lightblue';
            }
        }
    }
}

function enhanceCurrentTable()
{
    let currentDate = new Date();
    let startDate = new Date(currentDate.getFullYear(), 0, 1);
    let days = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000));
    let weekNumber = Math.ceil((days) / 7);
    let table = document.getElementById('schedule')
    let label = document.getElementById('label')

    if(weekNumber % 2 === 0) {
        week = 1;
        label.innerHTML = 'Перший тиждень'
        fillTableById(table, 'week1', currentDate.getDay(), true)
    }
    else {
        week = 2;
        label.innerHTML = 'Другий тиждень'
        fillTableById(table, 'week2', currentDate.getDay(), true)
    }
}

function swapWeeks(){
    let table = document.getElementById('schedule')
    let label = document.getElementById('label')
    let date = new Date();
    if(label.innerText === 'Перший тиждень'){
        table.style.background = '';
        label.innerText = 'Другий тиждень'
        fillTableById(table, 'week2', date.getDay(), week === 2)
    }
    else {
        label.innerText = 'Перший тиждень'
        fillTableById(table, 'week1', date.getDay(), week === 1)
    }
}