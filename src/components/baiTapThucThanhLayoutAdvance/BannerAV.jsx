import React, { Component } from 'react';

class BannerAV extends Component {
    render() {
        return (
            <div className="banner d-flex align-items-center">
                <div className="banner-overlay" />
                <div className="banner-content container">
                    <h1>Welcome to YourBrand</h1>
                    <p>Discover our exclusive services and enjoy a premium experience with us.</p>
                    <a href="#" className="btn btn-primary">Get Started</a>
                </div>
            </div>

        );
    }
}

export default BannerAV;
