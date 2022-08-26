const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'James'},
        {id: 2, name: 'Robert'},
        {id: 3, name: 'John'},
        {id: 4, name: 'Michael'},
        {id: 5, name: 'Thomas'},
        {id: 6, name: 'Larry'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is you home'},
        {id: 3, message: 'Yo'}
    ],
    newMessageBody: ""
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [ ...state.messages, {id: 6, message: body}]
            };
        default:
            return state;
    }
}

export const sendMessageCreator = () => {
    return {type: SEND_MESSAGE}
}
export const updateNewMessageBodyCreator = (body) => {
    return {type: UPDATE_NEW_MESSAGE_BODY, body: body}
}

export default dialogsReducer;