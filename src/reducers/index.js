const initialState = {
    books: [],
    courses: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'COURSES_ADDED':
            console.log(state)
            return {
                ...state,
                courses: [...state.courses, ...action.payload]
            };

        case 'BOOKS_ADDED':
            console.log(state)
            return {
                ...state,
                books: [...state.books, ...action.payload]
            };

        default:
            return state;
    };
};

export default reducer;