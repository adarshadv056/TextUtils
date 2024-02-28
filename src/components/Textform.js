import React from 'react'

function Textform(props) {
    return (
        <div>
            <h1>{props.heading}</h1>
            <div class="mb-3">
                <label for="myBox" class="form-label">Email address</label>
                <textarea  id="myBox" cols="30" rows="3"></textarea>
            </div>    
        </div>
    )
}

export default Textform