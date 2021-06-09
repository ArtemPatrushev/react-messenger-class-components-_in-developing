import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { bindActionCreators } from 'redux';
import { addChat, markChatRead, loadChats, deleteChat } from '../Actions/chatActions.js';
import ChatList from '../components/ChatList/ChatList.jsx';

const mapStateToProps = (store) => {
    return {
        chats: store.chatReducer.chats,
        isLoading: store.chatReducer.isLoading,
    };
};

const mapDispatchToProps = dispatch => bindActionCreators({ 
    loadChats,
    addChat,
    deleteChat,
    push, 
    markChatRead,
}, dispatch); // это то же самое, что и запись ниже, только короче

// const mapDispatchToProps = (dispatch) => {
//     return {
//         onAddNewChat: (title) => {
//             dispatch(addChat(title))
//         }
//     }
// }
export default connect(mapStateToProps, mapDispatchToProps)(ChatList);
