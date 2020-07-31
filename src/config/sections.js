const firstSection = {
    title: 'Статистика',
    pages: [
        {
            name: 'Публикации',
            to: '/publications',
        },
        {
            name: 'Мессенджер',
            to: '/messenger',
        },
    ],
};

const secondSection = {
    pages: [
        {
            name: 'Подписка на еженедельную рассылку',
            to: '/weekly-newsletter-subscribe',
        },
    ],
};

const thirdSection = {
    title: 'Списки данных',
    pages: [
        {
            name: 'Доступные города',
            to: '/available-cities',
        },
        {
            name: 'Заблокированные пользователи',
            to: '/blocked-users',
        },
        {
            name: 'Черный список ссылок',
            to: '/blacklist-links',
        },
        {
            name: 'Управление пользователями',
            to: '/user-management',
        },
    ],
};


const fourthSection = {
    title: 'Дополнительно',
    pages: [
        {
            name: 'Первая страница',
            to: '/first',
        },
        {
            name: 'Вторая страница',
            to: '/second',
        },
        {
            name: 'Третья страница',
            to: '/third',
        },
        {
            name: 'Четвертая страница',
            to: '/fourth',
        },
    ],
};

export default [
    firstSection,
    secondSection,
    thirdSection,
    fourthSection,
];
