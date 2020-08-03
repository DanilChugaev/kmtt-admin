export default [
    {
        'ID': { title: '56723', href: 'https://google.com', target: '_blank' }, // переход на внешний сайт
        'Имя': { title: 'Alex Stone' },
        'Email': { title: 'alexstone.greatsoul@gmail.com' },
        'Статус': { title: '✅ Активен' },
        'Действия': {
            id: '1',
            position: 'center',
            action: {
                icon: 'UiIconAction',
                actionList: [
                    {
                        name: 'Удалить',
                        method: 'remove',
                        params: {
                            id: '121221',
                        },
                    },
                    {
                        name: 'Редактировать',
                        method: 'edit',
                        params: {
                            id: '121221',
                        },
                    },
                    {
                        name: 'Забанить',
                        method: 'ban',
                        params: {
                            id: '121221',
                            type: '121221',
                        },
                    },
                ],
            },
        },
    },
    {
        'ID': { title: '458539', href: 'https://google.com', target: '_blank' },
        'Имя': { title: 'Greg Stone' },
        'Email': { title: 'gregstone.greatsoul@gmail.com' },
        'Статус': { title: 'Неактивен' },
        'Действия': {
            id: '2',
            position: 'center',
            action: {
                icon: 'UiIconAction',
                actionList: [
                    {
                        name: 'Удалить',
                        method: 'remove',
                        params: {
                            id: '121221',
                        },
                    },
                    {
                        name: 'Редактировать',
                        method: 'edit',
                        params: {
                            id: '121221',
                        },
                    },
                    {
                        name: 'Забанить',
                        method: 'ban',
                        params: {
                            id: '121221',
                            type: '121221',
                        },
                    },
                ],
            },
        },
    },
    {
        'ID': { title: '789', to: '/index' }, // переход на другую страницу текущего сайта
        'Имя': { title: 'Bob Stone' },
        'Email': { title: 'bobstone.greatsoul@gmail.com' },
        'Статус': { title: 'Неактивен' },
        'Действия': {
            id: '3',
            position: 'center',
            action: {
                icon: 'UiIconAction',
                actionList: [
                    {
                        name: 'Удалить',
                        method: 'remove',
                        params: {
                            id: '121221',
                        },
                    },
                    {
                        name: 'Редактировать',
                        method: 'edit',
                        params: {
                            id: '121221',
                        },
                    },
                    {
                        name: 'Забанить',
                        method: 'ban',
                        params: {
                            id: '121221',
                            type: '121221',
                        },
                    },
                ],
            },
        },
    },
];
