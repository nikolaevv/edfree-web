const initialState = {
    books: [],
    courses: [],
    num: 0,
    anyItemsFound: true
};

const reducer = (state = initialState, action) => {
    let recentNum;

    switch (action.type) {
        case 'COURSES_ADDED':
            recentNum = state.num + action.payload.length;
            return {
                ...state,
                courses: [...state.courses, ...action.payload],
                num: recentNum,
                anyItemsFound: recentNum > 0 ? true : false,
            };

        case 'BOOKS_ADDED':
            recentNum = state.num + action.payload.length;
            return {
                ...state,
                books: [...state.books, ...action.payload],
                num: recentNum,
                anyItemsFound: recentNum > 0 ? true : false,
            };

        case 'RESET':
            return initialState;

        default:
            return state;
    };
};

export default reducer;