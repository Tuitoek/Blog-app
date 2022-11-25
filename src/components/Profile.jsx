import React, { Component } from 'react'
import pic from '../logo192.png';
//import '../index.css';


class Blog extends Component {
    state = {  } 
    render() { 
        return (
            <div className='profilePage'>

                <div className="container">
                    <div className="leftDiv">
                        <div className="pic">
                            <img id='img' src={pic} alt="" />
                        </div>
                    </div>

                    <div className="rightDiv">
                        <div className="innerContainer">
                            <p>Author <span>Sarah</span></p>
                            <p>Email <span>sarah@gmail.com</span></p>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
 
export default Blog;