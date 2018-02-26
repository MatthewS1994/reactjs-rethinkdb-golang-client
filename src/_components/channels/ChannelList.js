import React from 'react';
import PropTypes from 'prop-types';
import Channel from './Channel'

class ChannelList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.channels.map( channel => {
                        return <Channel
                                channel={channel}
                                key={channel.id}
                                setChannel={this.props.setChannel}
                                activeChannel={this.props.activeChannel}
                            />
                    }
                )}
            </ul>
        )
    }
}
ChannelList.propTypes = {
    channels: PropTypes.array.isRequired,
    setChannel: PropTypes.func.isRequired,
    activeChannel: PropTypes.object.isRequired
};

export default ChannelList;