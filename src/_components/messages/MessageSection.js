import React from 'react';
import PropTypes from 'prop-types';
import MessageList from './MessageList';
import MessageForm from './MessageForm';

class MessageSection extends React.Component {
    render() {
        let {activeChannel} = this.props;
        return (
            <div className="messages-container panel panel-primary">
                <div className="panel-heading">
                    <strong>{activeChannel.name}</strong>
                </div>
                <div className="panel-body messages">
                    <MessageList {...this.props}/>
                    <MessageForm {...this.props}/>
                </div>
            </div>

        )
    }
}
MessageSection.propTypes = {
    messages: PropTypes.array.isRequired,
    activeChannel: PropTypes.object.isRequired,
    addMessage: PropTypes.func.isRequired
};
export default MessageSection;