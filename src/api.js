export const getComments = async () => {
    return [
        {
            id: "1",
            body: "Привет! я добавил комментарий №1",
            username: "Арман",
            userId: "1",
            parentId: null,
        },
        {
            id: "2",
            body: "Мой комментарий №2 Ответ на комментарий №1",
            username: "Арман",
            userId: "1",
            parentId: "1",
        },
        {
            id: "3",
            body: "Я добавил комментарий №3",
            username: "Арман",
            userId: "1",
            parentId: null,
        },
        {
            id: "4",
            body: "Я добавил комментарий №4",
            username: "Арман",
            userId: "1",
            parentId: null,
        },
    ];
};

export const createComment = async (text, parentId = null) => {
    return {
        id: Math.random().toString(36).substr(2, 9),
        body: text,
        parentId,
        userId: "1",
        username: "Арман",
    };
};

export const deleteComment = async () => {
    return {};
};
