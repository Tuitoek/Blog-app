import React, { Component } from 'react'

class Blog extends Component {
    state = {  } 
    render() { 
        return (
            <div className='main-box'>
                <div className='sub-main'>
                    <div>
                        <div>
                            <h1>sign Up page</h1>
                        </div>
                        <div>
                            
                            <input className='input-field' type="text" placeholder='enter your name'/><br />
                            <input className='input-field' type="text" placeholder='enter your email'/><br />
                            <input className='input-field' type="text" placeholder='type password'/><br />
                            <input className='input-field' type="text" placeholder='confirm password'/><br />

                            <button className='button'>sign up</button>

                        </div>
                    </div>

                </div>
            </div>
        );
    }
}
 
export default Blog;