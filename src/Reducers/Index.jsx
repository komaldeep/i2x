export default function Reducers(state={
    user:{},
    login:false,
    loader:false,
    Recordinglist:false,
}, action){
    switch (action.type){

        case "AUTHORIZATION":
        {
            return {...state, login: action.payload}
        }

        case "LOADER":
        {
            return {...state, loader: action.payload}
        }

        case "RECORDINGS":
        {
            return {...state, Recordinglist: action.payload}
        }

        default: return state;

    }
    return state;
}