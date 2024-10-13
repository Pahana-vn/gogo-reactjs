import React, { Component } from 'react';
import BannerAV from './BannerAV';
import ItemAV from './ItemAV';

class BodyAV extends Component {
    render() {
        return (
            <div className='container'>
                <BannerAV />

                <div className="row">
                    <div className="col-md-3">
                        <ItemAV />
                    </div>
                    <div className="col-md-3">
                        <ItemAV />
                    </div>
                    <div className="col-md-3">
                        <ItemAV />
                    </div>
                    <div className="col-md-3">
                        <ItemAV />
                    </div>
                </div>

            </div>
        );
    }
}

export default BodyAV;