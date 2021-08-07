const coursesAdded = (courses) => {
    return {
        type: 'COURSES_ADDED',
        payload: courses
    };
};

const booksAdded = (books) => {
    return {
        type: 'BOOKS_ADDED',
        payload: books
    };
};

export {
    coursesAdded,
    booksAdded
};