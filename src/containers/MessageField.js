import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sendMessage } from '../Actions/messageAction.js';
import MessageField from '../components/MessageField/MessageField.jsx';

const mapStateToProps = (store) => {
    return {
        chats: store.chatReducer.chats,
        messages: store.messageReducer.messages,
    };
};

const mapDispatchToProps = dispatch => bindActionCreators({
    sendMessage
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MessageField);
