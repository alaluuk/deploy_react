import React from "react";
function MyFunction(props){
    return (
    <div className="container">
    <h2>MyFunction</h2>
    <p>Firstname= {props.fname}</p>
    <p>Lastname ={props.lname}</p>
    </div>
    );
}

export default MyFunction;