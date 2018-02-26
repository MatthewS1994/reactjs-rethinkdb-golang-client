import React                from 'react';
import { Router, Route }    from 'react-router-dom';
import { connect }          from 'react-redux';
import { history }          from '../_helpers';
import { alertActions }     from '../_actions';
import Channel from '../_components/Home'

class App extends React.Component {
    constructor(props) {
        super(props);

        const { dispatch } = this.props;
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }

    render() {
        const { alert } = this.props;
        return (
            <div>
                <Router history={history}>
                    <div>
                        {alert.message &&
                        <div className={`alert ${alert.type}`}>{alert.message}</div>
                        }
                        <Route exact path="/" component={Channel}/>
                    </div>
                </Router>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}

export default connect(
    mapStateToProps
)(App);