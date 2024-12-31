import React,{useState} from "react";

const NestedRouting3 = () => {

    let [loginForm,UpdateLoginForm] = useState({
        name:"",
        age:"",
        roll_number:"",
        desgnation:"",
        adddress:"",
        pincode:"",
        phone_number:"",
    })

    const handleInputValue = (event) => {
        console.log(event.target.value,event.target.value);
        UpdateLoginForm({...loginForm,[event.target.name] : event.target.value });
    }

    const loginFinalSubmit = () => {
        console.log(loginForm);
    }


    return(
        <div className="form">
            <div className="from-container">
            <h3>Form Control useState</h3>
            <label>name</label>
            <input type="text" name="name" placeholder="Enter the text here" onChange={handleInputValue}/>
            <br/> <br/>
            <label>age</label>
            <input type="number" name="age" placeholder="Enter the text here" onChange={handleInputValue}/>
            <br/> <br/>
            <label>roll number</label>
            <input type="number" name="roll_number" placeholder="Enter the text here" onChange={handleInputValue}/>
            <br/> <br/>
            <label>desgnation</label>
            <input type="text"name="desgnation" placeholder="Enter the text here" onChange={handleInputValue}/>
            <br/> <br/>
            <label>adddress</label>
            <textarea name="adddress" onChange={handleInputValue}></textarea>
            <br/> <br/>
            <label>pincode</label>
            <input type="number" name="pincode" placeholder="Enter the text here" onChange={handleInputValue}/>
            <br/> <br/>
            <label>phone number</label>
            <input type="number"name="phone_number"  placeholder="Enter the text here" onChange={handleInputValue}/>
            <br/> <br/>
            <button onClick={() => loginFinalSubmit()}>Submit</button>
            </div>
           
            <div className="output-container">
            <p>The User is {loginForm.name}</p>
            <p>The User is {loginForm.age}</p>
            <p>The User is {loginForm.roll_number}</p>
            <p>The User is {loginForm.desgnation}</p>
            <p>The User is {loginForm.adddress}</p>
            <p>The User is {loginForm.pincode}</p>
            <p>The User is {loginForm.phone_number}</p>
            </div>

        </div>
    )
}

export default NestedRouting3;