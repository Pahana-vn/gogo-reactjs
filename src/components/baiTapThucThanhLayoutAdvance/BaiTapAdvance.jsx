import React, { Component } from 'react';
import BodyAV from './BodyAV';
import FooterAV from './FooterAV';
import HeaderAV from './HeaderAV';

class BaiTapAdvance extends Component {
    render() {
        return (
            <div>
                <HeaderAV />
                <BodyAV />
                <FooterAV />
            </div>
        );
    }
}

export default BaiTapAdvance;