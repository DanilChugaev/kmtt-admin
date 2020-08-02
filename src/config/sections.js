import {
    publicationsComponents,
    messengerComponents,
    weeklyNewsletterSubscribeComponents,
    availableCitiesComponents,
    blockedUsersComponents,
    blacklistLinksComponents,
    userManagementComponents,
    firstComponents,
    secondComponents,
    thirdComponents,
    fourthComponents,
} from './components.js';

const firstSection = {
    title: 'Статистика',
    pages: [
        {
            id: 'publications',
            name: 'Публикации',
            components: publicationsComponents,
        },
        {
            id: 'messenger',
            name: 'Мессенджер',
            components: messengerComponents,
        },
    ],
};

const secondSection = {
    pages: [
        {
            id: 'weekly-newsletter-subscribe',
            name: 'Подписка на еженедельную рассылку',
            components: weeklyNewsletterSubscribeComponents,
        },
    ],
};

const thirdSection = {
    title: 'Списки данных',
    pages: [
        {
            id: 'available-cities',
            name: 'Доступные города',
            components: availableCitiesComponents,
        },
        {
            id: 'blocked-users',
            name: 'Заблокированные пользователи',
            components: blockedUsersComponents,
        },
        {
            id: 'blacklist-links',
            name: 'Черный список ссылок',
            components: blacklistLinksComponents,
        },
        {
            id: 'user-management',
            name: 'Управление пользователями',
            components: userManagementComponents,
        },
    ],
};


const fourthSection = {
    title: 'Дополнительно',
    pages: [
        {
            id: 'first',
            name: 'Первая страница',
            components: firstComponents,
        },
        {
            id: 'second',
            name: 'Вторая страница',
            components: secondComponents,
        },
        {
            id: 'third',
            name: 'Третья страница',
            components: thirdComponents,
        },
        {
            id: 'fourth',
            name: 'Четвертая страница',
            components: fourthComponents,
        },
    ],
};

export default [
    firstSection,
    secondSection,
    thirdSection,
    fourthSection,
];
