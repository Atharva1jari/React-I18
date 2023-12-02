import React from 'react';
import "./Home.css"

function home() {

    const usersCount = 10;
    return (
        <div>
            <h1>Welcome</h1>
            <p>We hope you enjoy learning React.</p>

            <h3>Have a great day!</h3>
             
            <p>
               {usersCount} users are learning in this seassion.
            </p>
        </div>
    )
}
   
export default home