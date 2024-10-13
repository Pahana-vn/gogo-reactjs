import React, { Component } from 'react';

class HandleEvent extends Component {
    //định nghĩa hàm sự kiện
    handleClick = (name) => {
        alert("hello " + name + "!");
    }

    render() {
        return (
            <div>
                <button onClick={() => {
                    this.handleClick("Hihi");
                }
                }>Click me!</button>
            </div>
        );
    }
}

export default HandleEvent;