import React, {Component} from 'react';


class MainPage extends Component {
    async componentDidMount(){
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div className="w3-container w3-margin" style={{padding: '128px 16px'}}>
                <div className={'w3-row'}>
                    <h1>Main Page</h1>
                </div>
            </div>
        )
    }
}

export default MainPage;
