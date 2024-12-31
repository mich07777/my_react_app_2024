import React, {useState} from 'react';

const PrintOutPutPage = () => {

   let [contentMessage,updateContentMessage] = useState("Hello useState!");

    //interpolation - {variableNmae}  --Primitive type
   
     var username = "Michael";

     //object  - {variableName.key}

     var userdetails = {
        name:"Mic",
        lastname:"kumar"
     }

     //array 

     var userdetailsList =[
        {
            firstName:"mr.abc",
            lastName:234
        },
        {
            firstName:"mr.mic",
            lastName:354
        },
        {
            firstName:"mr.jhon",
            lastName:144
        }
     ];

    var finalResult = userdetailsList.map(function(value,index){
        return(
            <li key={index}>User Full name is {value.firstName} {value.lastName}</li>
        )
     })
     console.log(finalResult)


    //  ES6 function

    //  const dispaly = () => {

    //  }


    const display = () => {
        const meeasage = "Hello bro you did it...!";
        alert(meeasage)
    }

    let  userMessage = "Hello..!"

    const getInputValue = (event) => {
        // console.log(event.target.value);
       userMessage = event.target.value;
       console.log(userMessage);
       updateContentMessage(event.target.value);
    }

    return(
        <div>
            <h3>Print Page</h3>
            <h4>The user name is {username}</h4>
            <h4>The userdetails is {userdetails.name}</h4>
            <h4>The userdetails is {userdetails.lastname}</h4>

            <ol>
            {finalResult}
            </ol>

            {/* onclick */}
            <button onClick={() => display()}>Display</button>
        <br />
            {/* onchange */}
            <input type="text" placeholder="enter message" onChange={getInputValue} />
            <h2>{userMessage}</h2>
            <h2>{contentMessage}</h2>
        </div>
    )
}

export default PrintOutPutPage;
