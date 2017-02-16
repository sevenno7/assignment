import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { trim } from 'lodash';

import { CONSTANTS } from '../../constants';
import { login } from '../../actions/account';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: ''
        };    
    }

    onInputChange = (e) => { this.setState({ userName: e.target.value }); }

    submit = (e) => {
        e.preventDefault();
        const userName = trim(this.state.userName),
            {login} = this.props,
            {router} = this.context;

        if (userName.length > 0) {
            login(userName);
            router.push(CONSTANTS.ROUTES.HOME);
        }
    };

    render() {
        return (
            <form className="form-signin">
                <h3 className="form-signin-heading">Please login to use the app</h3>
                <label htmlFor="userName" className="sr-only">Your name</label>
                <input type="text"
                    id="userName"
                    className="form-control"
                    placeholder="Your name"
                    autoFocus
                    onChange={this.onInputChange}
                    onKeyUp={this.onInputKeyUp} />
                <br />
                <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={this.submit}>Sign in</button>
            </form>
        );
    }
}

Login.contextTypes = {
    router: PropTypes.object
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        login: bindActionCreators(login, dispatch),
    }
}
export default connect(null, mapDispatchToProps)(Login);