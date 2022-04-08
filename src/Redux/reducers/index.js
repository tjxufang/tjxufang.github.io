import {combineReducers} from "redux"
import {bannerReducer} from "./bannerReducer";

export default combineReducers({
    // renderReducer,
    // formReducer,
    bannerReducer
})

// const initState = {
//     projects: undefined,
//     employees: undefined,
// }
// const formInit = {
//     contactStatus: undefined,
//     ideasStatus: undefined,
// }
//
// const renderReducer = (state = initState, action) => {
//     const {type, payload} = action
//     switch (type) {
//         case (renderActions.FetchProjects):
//             return {...state, projects: payload}
//         case (renderActions.FetchEmployees):
//             return {...state, employees: payload}
//         default:
//             return state
//     }
// }
// const formReducer = (state = formInit, action) => {
//     const {type, payload} = action
//     switch (type) {
//         case formActions.SetContactStatus:
//             return {...state, contactStatus: payload}
//         case formActions.SetIdeasStatus:
//             return {...state, ideasStatus: payload}
//         default:
//             return state
//     }
// }
