import React, { Component } from 'react';

class FooterAV extends Component {
    render() {
        return (
            <footer className="bg-light text-center text-lg-start text-muted mt-5">
                <div className="container p-4">
                    {/* Section: Links */}
                    <div className="row">
                        {/* Column 1 */}
                        <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase fw-bold mb-3">YourBrand</h5>
                            <p>
                                Chúng tôi cam kết cung cấp các dịch vụ tốt nhất đến khách hàng, luôn hướng đến sự hài lòng của bạn.
                            </p>
                        </div>
                        {/* Column 2 */}
                        <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase fw-bold mb-3">Quick Links</h5>
                            <ul className="list-unstyled mb-0">
                                <li><a href="#" className="text-reset">Home</a></li>
                                <li><a href="#" className="text-reset">About</a></li>
                                <li><a href="#" className="text-reset">Services</a></li>
                                <li><a href="#" className="text-reset">Contact</a></li>
                            </ul>
                        </div>
                        {/* Column 3 */}
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase fw-bold mb-3">Contact</h5>
                            <ul className="list-unstyled">
                                <li><i className="bi bi-envelope" /> info@yourbrand.com</li>
                                <li><i className="bi bi-phone" /> +123 456 789</li>
                                <li><i className="bi bi-geo-alt" /> 123 Street, Hanoi, Vietnam</li>
                            </ul>
                        </div>
                        {/* Column 4 */}
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase fw-bold mb-3">Follow Us</h5>
                            <a href="#" className="me-3 text-reset"><i className="bi bi-facebook" /></a>
                            <a href="#" className="me-3 text-reset"><i className="bi bi-twitter" /></a>
                            <a href="#" className="me-3 text-reset"><i className="bi bi-instagram" /></a>
                            <a href="#" className="text-reset"><i className="bi bi-linkedin" /></a>
                        </div>
                    </div>
                    {/* Section: Links */}
                </div>
                {/* Copyright */}
                <div className="text-center p-3 bg-dark text-white">
                    © 2024 YourBrand. All Rights Reserved.
                </div>
            </footer>

        );
    }
}

export default FooterAV;