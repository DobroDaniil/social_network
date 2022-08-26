import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'It\'s my first post', likesCount: 11}
            ],
            newPostText: 'it'
        },
        dialogsPage: {
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
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;  //Наблюдатель
    },
// dispatch объект который имеет action
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;