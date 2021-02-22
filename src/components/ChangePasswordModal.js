import React, {Component, useRef, useEffect} from 'react';

class ChangePasswordModal extends Component {
    constructor(props) {
        super(props);
        this.innerRef = React.createRef();
        // this.innerRef = this.innerRef.bind(this);
        // this.handleClickOutside = this.handleClickOutside.bind(this);
        this.state = {};

    }


    async componentDidMount() {
        window.scrollTo(0, 0);
        // Attach a click listener on the document.
        // document.addEventListener('click', () => console.log('document clicked'));

        // Detach the click listener on the document.
        // document.removeEventListener('click', () => console.log('document clicked'));

    }


    clickListen = async () => {
        // Attach a click listener on the document.
        document.addEventListener('click', () => console.log('document clicked'));

        // Detach the click listener on the document.
        document.removeEventListener('click', () => console.log('document clicked'));

    };

    render() {
        return (
            <div className={`w3-modal ${this.props.displayModal ? "w3-show" : ""}`} ref={this.innerRef}>
                <div className={"w3-modal-content w3-animate-bottom"}>
                    <header className={"w3-container w3-blue-grey"}>
                        <span onClick={this.props.close} className={"w3-button w3-display-topright"}>&times;</span>
                        <h2>Change password</h2>
                    </header>
                    <div className={"w3-container"} style={{
                        height: '50vh'
                    }}>
                        <div className={'w3-margin w3-padding'}>
                            <label>Current password :</label>
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
                        <div>
                            <div className={'w3-margin w3-padding'}>
                                <label>New password :</label>
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
                                <label>Confirm new password :</label>
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
                        </div>
                    </div>
                    <footer className={"w3-container w3-blue-grey"}>
                        <div className={'w3-margin w3-padding'}>
                            <button className={'w3-btn w3-white'} style={{
                                width: 200
                            }}>VALIDATE
                            </button>
                            <button className={'w3-btn w3-white w3-right'} onClick={this.props.close} style={{
                                width: 200
                            }}>CANCEL
                            </button>
                        </div>
                    </footer>
                </div>
            </div>
        )
    }
}

export default ChangePasswordModal;
