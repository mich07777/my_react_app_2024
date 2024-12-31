import React,{useState} from "react";

const NestedRouting2 = () =>{

    let  [userNamevalue,updateUserName] = useState("");
    let  [userAgevalue,updateUserAge] = useState("");
    let  [userRollNumbervalue,updateUserRollnumber] = useState("");
    let  [userDesignationvalue,updateUserDesgination] = useState("");
    let  [userAddressvalue,updateUserAddress] = useState("");
    let  [userPincodevalue,updateUserPincode] = useState("");
    let  [userPhoneNumbervalue,updateUserPhoneNumber] = useState("");

    const username = (event) => {
       updateUserName(event.target.value)
    }

    const userage = (event) => {
       updateUserAge(event.target.value) 
    }

    const userrollnumber = (event) => {
       updateUserRollnumber(event.target.value) 
    }

    const userdesgination = (event) => {
        updateUserDesgination(event.target.value)
    }

    const useraddress = (event) => {
        updateUserAddress(event.target.value)
    }

    const userpincode = (event) => {
        updateUserPincode(event.target.value)
    }

    const userphonenumber = (event) => {
        updateUserPhoneNumber(event.target.value)
    }

    const finalSubmit = () => {

       let data = {
            name:userNamevalue,
            age:userAgevalue,
            roll_number:userRollNumbervalue,
            desgnation:userDesignationvalue,
            adddress:userAddressvalue,
            pincode:userPincodevalue,
            phone_number:userPhoneNumbervalue
        }
        console.log(data);
    }
 

    return(
        <div className="form">
            <div className="from-container">
            <h3>content 2</h3>
            <label>name</label>
            <input type="text" placeholder="Enter the text here" onChange={username}/>
            <br/> <br/>
            <label>age</label>
            <input type="number" placeholder="Enter the text here" onChange={userage}/>
            <br/> <br/>
            <label>roll number</label>
            <input type="number" placeholder="Enter the text here" onChange={userrollnumber}/>
            <br/> <br/>
            <label>desgnation</label>
            <input type="text" placeholder="Enter the text here" onChange={userdesgination}/>
            <br/> <br/>
            <label>adddress</label>
            <textarea onChange={useraddress}></textarea>
            <br/> <br/>
            <label>pincode</label>
            <input type="number" placeholder="Enter the text here" onChange={userpincode}/>
            <br/> <br/>
            <label>phone number</label>
            <input type="number" placeholder="Enter the text here" onChange={userphonenumber}/>
            <br/> <br/>
            <button onClick={() => finalSubmit()}>Submit</button>
            </div>
           
            <div className="output-container">
            <p>The User is {userNamevalue}</p>
            <p>The User is {userAgevalue}</p>
            <p>The User is {userRollNumbervalue}</p>
            <p>The User is {userDesignationvalue}</p>
            <p>The User is {userAddressvalue}</p>
            <p>The User is {userPincodevalue}</p>
            <p>The User is {userPhoneNumbervalue}</p>
            </div>

        </div>
    )
}

export default NestedRouting2;