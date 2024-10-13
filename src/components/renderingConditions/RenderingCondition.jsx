import React, { Component } from 'react';

class RenderingCondition extends Component {

    login = true;
    userName = "nhan";

    renderContent = () => {
        if (this.login === true) {
            return <p>hello {this.userName}</p>;
        }
        return <button>Login</button>
    }

    render() {
        return (
            <div>
                {/* {this.login === true ? this.userName : <button>Login</button>} */}
                {this.renderContent()}
            </div>
        );
    }
}

export default RenderingCondition;