import React, {Component} from 'react';


class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.handleChangeUserName = this.handleChangeUserName.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.retrieveAccessToken = this.retrieveAccessToken.bind(this);
        this.unlockSendButton = this.unlockSendButton.bind(this);
        this.tryLogin = this.tryLogin.bind(this);
        this.state = {
            accessToken: null,
            userName: null,
            password: null,
            userNameErrorMessage: null,
            passwordErrorMessage: null,
            serverResponseAsError: null,
            serverResponseAsSuccess: null,
            loginSuccess: false,
            sendButtonIsDisabled: true,
            userNameInputIsDisabled: false,
            passwordInputIsDisabled: false
        };
    }

    async componentDidMount() {
        window.scrollTo(0, 0);
        this.setState({
            userName: '',
            password: '',
            userNameErrorMessage: '',
            passwordErrorMessage: '',
            serverResponseAsError: '',
            serverResponseAsSuccess: ''
        })
    }

    checkIfStringIsEmail = async (event) => {
        if (event !== null || typeof event !== 'undefined') {
            let string2Check = event.toLowerCase().trim();
            if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(string2Check)) {
                this.setState({
                    userNameErrorMessage: 'Please provide correct email address...'
                });
                return false;
            } else {
                this.setState({
                    userNameErrorMessage: ''
                });
                return true;
            }
        } else {
            this.setState({
                userNameErrorMessage: 'Email address is not provided...'
            });
            return false;
        }

    };

    checkIfPasswordMeetsRequirements = async (event) => {
        if (event !== null || typeof event !== 'undefined') {
            if (event.length < 8) {
                this.setState({
                    passwordErrorMessage: 'Seems you\'re providing password which does not meet password requirements.'
                });
                return false;
                //    TODO: More condition can be implemented here
            } else {
                this.setState({
                    passwordErrorMessage: ''
                });
                return true
            }
        } else {
            return false;
        }
    };

    clearUserNameError = async () => {
        this.setState({
            userNameErrorMessage: ''
        });
    };

    clearPasswordError = async () => {
        this.setState({
            passwordErrorMessage: ''
        });
        if (this.state.userName !== null && this.state.userName !== '') {
            this.setState({
                userNameInputIsDisabled: true
            })
        }
    };

    handleChangeUserName = async (event) => {
        if (await this.checkIfStringIsEmail(event.target.value)) {
            this.setState({
                userName: event.target.value.toLowerCase().trim()
            });
        } else {
            this.setState({
                userName: ''
            });
        }
    };

    handleChangePassword = async (event) => {
        if (await this.checkIfPasswordMeetsRequirements(event.target.value)) {
            this.setState({
                password: event.target.value.trim()
            });
            if (this.state.password !== null && this.state.password !== '' && this.state.userName !== null && this.state.userName !== '') {
                this.setState({
                    sendButtonIsDisabled: false
                });
            }
        } else {
            this.setState({
                password: ''
            });
        }
    };

    unlockSendButton = async (event) => {
        if (event.target.value.length > 6) {
            this.setState({
                sendButtonIsDisabled: false
            });
        }
    };

    tryLogin = async(e) => {
        // console.log(e.key);
        if (e.key === 'Enter') {
            await this.retrieveAccessToken();
        }
    };

    retrieveAccessToken = async () => {
        if (this.state.password !== null && this.state.password !== '') {
            this.setState({
                passwordInputIsDisabled: true
            });
        }
        if (this.state.userName !== null && this.state.userName !== undefined && this.state.password !== null && this.state.password !== undefined) {
            try {
                let response = await fetch(
                    'http://127.0.0.1:5000/auth/login/',  //this.props.match.params.id,
                    {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            emailAddress: this.state.userName,
                            password: this.state.password
                        })
                    }
                );
                let responseJson = await response.json();
                if (response.status === 400) {
                    this.setState({
                        serverResponseAsError: responseJson.error
                    });
                    setTimeout(() => {
                        this.setState({
                            userNameInputIsDisabled: false,
                            passwordInputIsDisabled: false
                        });
                    }, 3000);
                } else if (response.status === 404) {
                    this.setState({
                        serverResponseAsError: responseJson.error
                    });
                    setTimeout(() => {
                        this.setState({
                            userNameInputIsDisabled: false,
                            passwordInputIsDisabled: false
                        });
                    }, 3000);
                }
                if (responseJson) {
                    if (responseJson.hasOwnProperty('token')) {
                        this.setState({
                            accessToken: responseJson.token
                        });
                        localStorage.setItem('_r_usr_access_token', responseJson.token);
                        if (localStorage.getItem('_r_usr_access_token') !== null) {
                            window.location.reload();
                        }
                    }
                }
                // return responseJson.data;
            } catch (error) {
                // console.log(error);
                this.setState({
                    serverResponseAsError: 'Server responded with error'
                });
                setTimeout(() => {
                    this.setState({
                        userNameInputIsDisabled: false,
                        passwordInputIsDisabled: false
                    });
                }, 3000);
            }
        }
    };


    render() {
        return (
            <div className="w3-container w3-margin" style={{padding: '28px 16px'}}>
                <div className={'w3-row'}>
                    <div className={'w3-rest w3-animate-top'}>
                        <div className="w3-container w3-card-4 w3-light-grey">
                            <h2 className={'w3-margin w3-padding w3-center'}>Authorization</h2>
                            <p className={'w3-margin w3-padding'}>Use Email address and password which was registered in
                                system.</p>

                            <div className={'w3-margin w3-padding'}>
                                <label>Username (Email) :</label>
                                <input
                                    className={`w3-input w3-round ${this.state.userNameErrorMessage !== '' ? "w3-border-red" : "w3-border"}`}
                                    disabled={this.state.userNameInputIsDisabled}
                                    onBlur={this.handleChangeUserName}
                                    onFocusCapture={this.clearUserNameError}
                                    placeholder={'user@domain.suffix'}
                                    type={"email"}
                                    required={true}
                                    autoComplete={'off'}/>
                                <div style={{
                                    height: 20
                                }}>
                                    <p className={'w3-text-red'}>{this.state.userNameErrorMessage}</p>
                                </div>
                            </div>

                            <div className={'w3-margin w3-padding'}>
                                <label>Password :</label>
                                <input
                                    className={`w3-input w3-round ${this.state.passwordErrorMessage !== '' ? "w3-border-red" : "w3-border"}`}
                                    disabled={this.state.passwordInputIsDisabled}
                                    onChange={this.unlockSendButton}
                                    onBlur={this.handleChangePassword}
                                    onFocusCapture={this.clearPasswordError}
                                    onKeyUp={this.tryLogin}
                                    placeholder={' * * * * * * * * '}
                                    type={"password"}
                                    required={true}
                                    autoComplete={'off'}/>
                                <div style={{
                                    height: 20
                                }}>
                                    <p className={'w3-text-red'}>{this.state.passwordErrorMessage}</p>
                                </div>
                            </div>

                            <div className={'w3-margin w3-padding'}>
                                <button className={"w3-btn w3-blue-grey"}
                                        style={{
                                            width: 200
                                        }}
                                        disabled={this.state.sendButtonIsDisabled}
                                        onClick={this.retrieveAccessToken}>Sign In
                                </button>

                                <button className={"w3-btn w3-blue-grey w3-right"} style={{
                                    width: 200
                                }} onClick={() => {
                                    console.log('Forgot.')
                                }}>Forgot password
                                </button>
                            </div>
                            <div className={'w3-margin w3-padding w3-center'} style={{
                                height: 50
                            }}>
                                {this.state.serverResponseAsError !== '' ? (
                                    <p className={'w3-text-red'}>{this.state.serverResponseAsError}</p>
                                ) : null}
                                {this.state.serverResponseAsSuccess !== '' ? (
                                    <p className={'w3-text-green'}>{this.state.serverResponseAsSuccess}</p>
                                ) : null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginPage;
