import React from 'react';
import I18n from'./../../utils/I18n.js';
import "./Home.css";


function home() {

 
    return (
        <div>
            <h1 className='heading'>I18n....</h1>
            <div className='heading1'>
            <h1 >{I18n("welcomeMessage")}</h1>

            <p >{I18n("normalMessage")}</p>

            <h3 >{I18n("greetingMessage")}</h3>

            </div>
            <select 
                defaultValue={localStorage.getItem("lang")}
                onChange={(e) => {
                    localStorage.setItem("lang", e.target.value);
                    window.location.reload();
                }}
                className="text-container">
                <option value="en">English</option>
                <option value="hi">Hindi</option>
                <option value="mr">Marathi</option>
            </select>

           {/* <select 
            defaultvalue={localStorage.getItem("lang")} 
            onChange={(e)=>{
                localStorage.setItem("lang", e.target.value);
                window.location.reload();
            }}>
                <option Value="mr">Marathi</option>
                <option Value="hi">Hindi</option>
                <option Value="en">English</option>
            </select>
           
             
           {/* <p>
               {usersCount} users are learning in this seassion.
            </p>*/}
        </div>
    )
}
   
export default home