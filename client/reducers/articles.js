import { FETCH_ALL_ARTICLES } from "../actions/types";

const articleDefault = [{
    title: "A Dog's Life2",
    createdAt: new Date(),
    description: "Through Bitches and Bone"
}, {
    title: "God of war Ragnirok",
    createdAt: new Date(),
    description: "Game of the Decade!!"
}, {
    title: "Toy story",
    createdAt: new Date(),
    description: "IS this neccssary "
}, {
    title: "Buroto",
    createdAt: new Date(),
    description: "They did my boy naruto wrong!!"
}, {
    title: "Testing",
    createdAt: new Date(),
    description: "Testing Testing 123..."
}, {
    title: "Cyberpunk 2077 Flop!",
    createdAt: new Date(),
    description: "Flop of the Decade!!"
},]
let initialState = {
    // articles: articleDefault,
    articles: [],
};

export default (state = initialState, action) => {

    switch (action.type) {
        //action checks the type of payload

        case FETCH_ALL_ARTICLES:
            // console.log('action reducer : ', action)
            console.log('reducer action.payload:', action.payload)
            // console.log('reducer err test:', action.payload.errors)
            // return action.payload.data;
            return {
                ...state,
                articles: action.payload.data, // (action.response.data)
                // errors: action.payload.errors
            }
        // default:
        //     return state
    }
    return state;
};