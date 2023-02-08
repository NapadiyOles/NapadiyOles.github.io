const subjects = {
    'КІСТ': {
        Name: 'Корпоративні інформаційні системи та технології',
        Link: 'https://us04web.zoom.us/j/9937940977?pwd=Y1praFZJdkhXQTliemFBZkZVZmxUUT09',
        Teacher: 'доц. Тимошин Ю.А.'
    },
    'ТПР': {
        Name: 'Теорія прийняття рішень',
        Link: 'https://us04web.zoom.us/j/79577021806?pwd=Le3Id5Cjt7bTMjkHDpYVtQLeMoclvl.1',
        Teacher: 'ст. вик. Анікін В.К.'
    },
    'СППР': {
        Name: 'Системи підтримки прийняття рішень',
        Link: 'https://us02web.zoom.us/j/81427644875?pwd=SVdEOGtVMUxQN3d6YktFQ1B3MFVHUT09',
        Teacher: 'проф., Онищенко В.В.'
    },
    'МТПП': {
        Name: 'Методи та технології паралельного програмування',
        Link: 'https://us04web.zoom.us/j/73325585125?pwd=tdqm55PsXz99zXXSd1eTIx4beXbbet.1',
        Teacher: 'проф. Дорошенко А.Ю.'
    },
    'СМОМД': {
        Name: 'Сучасні методи обробки масивів даних',
        Link: 'https://us02web.zoom.us/j/9470737287?pwd=endFbkJ6d0Izb1Z6K0Y1R1VQL1poUT09',
        Teacher: 'ст. вик. Тимофеєва Ю.С.'
    },
    'НДРМД': {
        Name: 'Науково-дослідна робота за темою магістерської дисертації',
        Link: 'https://us04web.zoom.us/j/7292429058?pwd=cDVQYlVvbW1EQUN1L28wNGp6eEhmQT09',
        Teacher: 'пос. Коган А. В.'
    },
    'Eng': {
        Name: 'Практичний курс іноземної мови для ділової комунікації',
        Link: 'https://us04web.zoom.us/j/8894287667?pwd=L211bFZ1YWVqUlJvdTR5d2o1YkFqdz09',
        Teacher: 'доц. Колісник М. П.'
    },
    'СІР': {
        Name: 'Сталий інноваційний розвиток',
        Link: 'https://us02web.zoom.us/j/8938582848?pwd=anV1QzY5MWxUam41R0F2UVc3cmFvUT09',
        Teacher: 'доц. Бендюг В. І.'
    },
    'УРІБ': {
        Name: 'Управління ризиками інформаційної безпеки',
        Link: 'https://us04web.zoom.us/j/79075770842?pwd=a1BJV1dqM004a3l6ak83UjAwL1cyUT09',
        Teacher: '-'
    }
}

const schedule = {
    week1: [
        {
            "Mon": "",
            "Tue": "",
            "Wed": "",
            "Thu": "",
            "Fri": {
                Subject: subjects['СППР'],
                Type: 'Лек'
            }
        },
        {
            "Mon": {
                Subject: subjects['КІСТ'],
                Type: 'Лек'
            },
            "Tue": {
                Subject: subjects['СІР'],
                Type: 'Прак'
            },
            "Wed": {
                Subject: subjects['ТПР'],
                Type: 'Лек'
            },
            "Thu": {
                Subject: subjects['УРІБ'],
                Type: 'Лек'
            },
            "Fri": ""
        },
        {
            "Mon": {
                Subject: subjects['МТПП'],
                Type: 'Лек'
            },
            "Tue": {
                Subject: subjects['ТПР'],
                Type: 'Лаб'
            },
            "Wed": "",
            "Thu": {
                Subject: subjects['УРІБ'],
                Type: 'Лаб'
            },
            "Fri": ""
        },
        {
            "Mon": "",
            "Tue": {
                Subject: subjects['СІР'],
                Type: 'Лек'
            },
            "Wed": "",
            "Thu": "",
            "Fri": {
                Subject: subjects['Eng'],
                Type: 'Прак'
            }
        },
        {
            "Mon": "",
            "Tue": "",
            "Wed": {
                Subject: subjects['СМОМД'],
                Type: 'Лек'
            },
            "Thu": {
                Subject: subjects['СМОМД'],
                Type: 'Лаб'
            },
            "Fri": ""
        },
        {
            "Mon": "",
            "Tue": "",
            "Wed": "",
            "Thu": "",
            "Fri": ""
        }
    ],
    week2: [
        {
            "Mon": "",
            "Tue": "",
            "Wed": "",
            "Thu": {
                Subject: subjects['КІСТ'],
                Type: 'Лаб'
            },
            "Fri": {
                Subject: subjects['СППР'],
                Type: 'Лек'
            }
        },
        {
            "Mon": {
                Subject: subjects['КІСТ'],
                Type: 'Лек'
            },
            "Tue": {
                Subject: subjects['СППР'],
                Type: 'Лаб'
            },
            "Wed": {
                Subject: subjects['ТПР'],
                Type: 'Лек'
            },
            "Thu": {
                Subject: subjects['НДРМД'],
                Type: 'Прак'
            },
            "Fri": ""
        },
        {
            "Mon": {
                Subject: subjects['МТПП'],
                Type: 'Лек'
            },
            "Tue": {
                Subject: subjects['МТПП'],
                Type: 'Лаб'
            },
            "Wed": "",
            "Thu": "",
            "Fri": ""
        },
        {
            "Mon": "",
            "Tue": "",
            "Wed": "",
            "Thu": "",
            "Fri": {
                Subject: subjects['Eng'],
                Type: 'Прак'
            }
        },
        {
            "Mon": "",
            "Tue": "",
            "Wed": {
                Subject: subjects['СМОМД'],
                Type: 'Лек'
            },
            "Thu": "",
            "Fri": ""
        },
        {
            "Mon": "",
            "Tue": "",
            "Wed": "",
            "Thu": "",
            "Fri": ""
        }
    ]
}
