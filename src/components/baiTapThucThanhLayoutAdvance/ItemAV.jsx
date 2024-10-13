import React, { Component } from 'react';

class ItemAV extends Component {
    render() {
        return (

            <div className="row justify-content-center">
                <div className="mt-3">
                    <div className="vertical-item">
                        <img src="https://via.placeholder.com/400x250" alt="Item Image" />
                        <div className="vertical-item-content">
                            <h5>Beautiful Item Title</h5>
                            <p>Here’s a short description of the item. Discover more details about this feature-rich product.</p>
                            <a href="#" className="btn btn-primary">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}

export default ItemAV;