import { SEND_MESSAGE, DELETE_MESSAGE } from '../Actions/messageAction.js';
import { LOAD_CHATS_SUCCESS } from '../actions/chatActions';

const initialStore = {
    messages: {},
    isLoading: false
};

export default function chatReducer(store = initialStore, action) {
    switch (action.type) {
        case SEND_MESSAGE: {
            const { messageId, text, author } = action;

            return {
                messages: {
                    ...store.messages,
                    [messageId]: {
                        text,
                        author
                    }
                }
            };
        }
        case DELETE_MESSAGE: {
            const { messageId } = action;
            // делаем копию сообщений, так как нельзя напрямую изменять store
            const newMessages = { ...store.messages };
            delete newMessages[messageId]; // удаляем по идентификатору
            console.log(newMessages);
            return {
                ...store,
                messages: newMessages
            };
        }
        case LOAD_CHATS_SUCCESS: {
            const {messages} = action.payload.entities;
            return {
                ...store,
                messages
            };
        }
        default:
            return store;
    };
};
