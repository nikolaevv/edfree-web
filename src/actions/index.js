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

const reset = {
    type: 'RESET'
}

export {
    reset,
    coursesAdded,
    booksAdded
};