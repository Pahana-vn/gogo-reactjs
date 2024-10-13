import React, { Component } from 'react';

class DataBinding extends Component {
    //thuoc tinh
    name = 'Pham Hoai Nhan';

    student = {
        address: 'Ho Chi Minh',
        phone: '0823925414',
    }
    //phuong thuc
    renderImage = () => {
        return <img src="https://static-images.vnncdn.net/vps_images_publish/000001/000003/2024/9/13/iran-bac-tin-chuyen-ten-lua-dan-dao-cho-nga-trieu-tap-cac-dai-su-chau-au-1131.jpg?width=360&s=dUtD85tfZN-tYbi6Jx8SGg" alt="" />
    }

    renderMultipleRemote = () => {
        return <ul className="nav nav-tabs">
            <li className="nav-item">
                <a href="#" className="nav-link active">Active</a>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#">Action</a>
                </div>
            </li>
            <li className="nav-item">
                <a href="#" className="nav-link">Another link</a>
            </li>
            <li className="nav-item">
                <a href="#" className="nav-link disabled">Disabled</a>
            </li>
        </ul>

    }

    render() {
        const school = 'Fpt Aptech';
        return (
            <div>
                Hello, {this.name} , lean: {school} <br />
                address: {this.student.address} <br />
                phone: {this.student.phone} <br />
                {this.renderImage()}
                {this.renderMultipleRemote()}
            </div>
        );
    }
}

export default DataBinding;