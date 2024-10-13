import React, { Component } from 'react';

class StateDemo extends Component {

    //state : là thuộc tính có sẵn của reactjs giúp đinh nghĩa những nội dung có thay đổi mà người dùng thao tác
    state = {
        status: false
    }


    loginUser = {
        name: "Nhan",
        age: "16"
    }

    login = () => {
        let newState = {
            status: true
        }
        this.setState(newState, () => {
            console.log(newState)
        })


    }

    renderUserLogin = () => {
        if (this.state.status) {
            return <p>Hello, {this.loginUser.name}</p>
        }
        return <button onClick={() => { this.login() }}>Clicl me!</button>
    }

    //setState là phương thức có sẵn của reactjs giúp thay đổi giá trị và render lại giao diện

    render() {
        return (
            <div>
                {this.renderUserLogin()}
            </div>
        );
    }
}

export default StateDemo;