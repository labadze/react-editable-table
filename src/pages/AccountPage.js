import React, {Component} from 'react';
import ChangePasswordModal from "../components/ChangePasswordModal";


class AccountPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            accessToken: null,
            userObj: {},
            displayName: null,
            emailAddress: null,
            role: null,
            exp: 0,
            iat: 0,
            showModal: false
        };

        this.startChangePasswordProcedure = this.startChangePasswordProcedure.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    async componentDidMount(){
        window.scrollTo(0, 0);
        await this.getCurrentUser();
    }

    getCurrentUser = async() => {
        if (localStorage.getItem('_r_usr_access_token') !== null) {
            let token = localStorage.getItem('_r_usr_access_token');
            try {
                let response = await fetch(
                    'http://127.0.0.1:5000/me/',  //this.props.match.params.id,
                    {
                        method: 'GET',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer ' + token
                        }
                    }
                );
                let responseJson = await response.json();
                if (responseJson) {
                    if (response.status === 401 || response.status === 403) {
                        localStorage.removeItem('_r_usr_access_token');
                        window.location.reload();
                    } else {
                        this.setState({
                            userObj: responseJson,
                            displayName: responseJson.data.displayName,
                            emailAddress: responseJson.data.emailAddress,
                            role: responseJson.data.role,
                            exp: responseJson.exp,
                            iat: responseJson.iat
                        });
                    }
                }
            } catch (error) {
                console.log(error);
            }
        }
    };

    startChangePasswordProcedure = async() => {
        this.setState({
            showModal: true
        });
    };

    closeModal = async () => {
        this.setState({
            showModal: false
        });
    };

    render() {
        return (
            <div className="w3-container w3-margin" style={{padding: '128px 16px'}}>
                <div className={'w3-row'}>
                    <h1 className={'w3-margin w3-padding'}>Account</h1>
                    <div className={'w3-rest'}>
                        <div className={"w3-container"}>
                            <ul className={"w3-ul"}>
                                <li>Display name: {this.state.displayName}</li>
                                <li>Email: <a href={'mailto:' + this.state.emailAddress}>{this.state.emailAddress}</a> </li>
                                <li>Role: {this.state.role} </li>
                                <li>IAT: {this.state.iat} </li>
                                <li>EXP: {this.state.exp} </li>
                                <li>
                                    <button onClick={this.startChangePasswordProcedure} className={'w3-btn w3-blue-grey'}>CHANGE PASSWORD</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <ChangePasswordModal close={this.closeModal} displayModal={this.state.showModal} />
            </div>
        )
    }
}

export default AccountPage;
