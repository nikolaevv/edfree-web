const initialState = {
    books: [],
    courses: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'COURSES_ADDED':
            return {
                ...state,
                courses: state.courses.push(...action.payload)
            };

        case 'BOOKS_ADDED':
            return {
                ...state,
                books: state.books.push(...action.payload)
            };

        default:
            return state;
    };
};

export default reducer;