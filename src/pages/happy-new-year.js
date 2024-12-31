import React, { useState } from "react";

const HappyNewYearForm  = () => {

   const [newyearFormDetails,UpadtenewaYearDetails] = useState ({
           name: "",
           age: "",
           dateofbirth: "",
           in_time: "",
           gender: "",
           food_type: [],
           coach_type: ""
   });

   const [errorFormDetails,errorDetails] = useState ({
            name: false,
            age: false,
            dateofbirth: false,
            in_time: false,
            gender: false,
            food_type: false,
            coach_type: false
    });

   const handleInputFormDetails = (event) => {
    // console.log(event.target.value,event.target.name);
    if(event.target.name === "food_type"){

        if(event.target.checked){
            newyearFormDetails.food_type.push(event.target.value);
        }else{
            let index = newyearFormDetails.food_type.indexOf(event.target.value);
            newyearFormDetails.food_type.splice(index,1);
        }

    }else{
        UpadtenewaYearDetails({...newyearFormDetails,[event.target.name] : event.target.value});
    }
   }

   const onSubmitForm = () => {
    console.log(newyearFormDetails);
    errorDetails({...errorFormDetails,
        name: newyearFormDetails.name == "" ? true :false,
        age: newyearFormDetails.age == "" ? true :false,
        dateofbirth: newyearFormDetails.dateofbirth == "" ? true :false,
        in_time: newyearFormDetails.in_time == "" ? true :false,
        gender: newyearFormDetails.gender == "" ? true :false,
        food_type: newyearFormDetails.food_type.length === 0 ? true :false,
        coach_type:newyearFormDetails.coach_type == "" ? true :false  
    });
   }

    return(
        <div>
            <h1 className="new-year-msg">HAPPY NEW YEAR 2025</h1>
            <div className="new-year-from-container">
                <div className="bottom-space">
                    <lable  className="lableText" >Enter your Name:</lable>
                    <input type="text"  name="name" placeholder="Enter your Name"  onChange={handleInputFormDetails}/> 
                    { errorFormDetails.name && <span className="error-msg">Name Should not be empty </span>} 
                </div>
                <div className="bottom-space">
                    <lable  className="lableText" >Enter your Age:</lable>
                    <input type="number" name="age" placeholder="Enter your Age"  onChange={handleInputFormDetails}/> 
                    { errorFormDetails.age && <span className="error-msg">Age Should not be empty </span>}  
                </div>
                <div className="bottom-space">
                    <lable  className="lableText" >Enter your D.O.B:</lable>
                    <input type="date" name="dateofbirth" placeholder="Enter your D.O.B" onChange={handleInputFormDetails}/>
                    { errorFormDetails.dateofbirth && <span className="error-msg">D.O.B Should not be empty </span>}   
                </div>
                <div className="bottom-space">
                    <lable  className="lableText" >Enter your Time:</lable>
                    <input type="time" name="in_time" placeholder="Enter your Time"  onChange={handleInputFormDetails}/> 
                    { errorFormDetails.in_time && <span className="error-msg">Time Should not be empty </span>}  
                </div>
                <div className="bottom-space">
                    <lable  className="lableText" >Enter your Gender:</lable>
                    <input type="radio" name="gender" value="Male" onChange={handleInputFormDetails}/> Male 
                    <input type="radio" name="gender" value="Female" onChange={handleInputFormDetails}/> Female
                    <input type="radio" name="gender" value="Others" onChange={handleInputFormDetails}/> Others
                    { errorFormDetails.gender && <span className="error-msg">Gender Should not be empty </span>} 
                </div>
                <div className="bottom-space">
                    <lable  className="lableText" >Enter your Food type:</lable>
                    <input type="checkbox" name="food_type" value="Veg" onChange={handleInputFormDetails}/> Veg 
                    <input type="checkbox" name="food_type" value="Non-veg" onChange={handleInputFormDetails}/> Non-veg 
                    <input type="checkbox" name="food_type" value="Both" onChange={handleInputFormDetails}/> Both 
                    { errorFormDetails.food_type && <span className="error-msg">Food type Should not be empty </span>} 
                </div>
                <div className="bottom-space">
                <lable  className="lableText" >Choose your Class:</lable>
                <select defaultValue={""} name="coach_type" onChange={handleInputFormDetails}>
                <option disabled value="">Select Your coach</option>
                    <option >AC</option>
                    <option >First class</option>
                    <option >Second class</option>
                    <option >Third Class</option>
                </select>
                { errorFormDetails.coach_type && <span className="error-msg">coach Should not be empty </span>} 
                </div>
                <div className="bottom-space">
                    <button onClick={() => onSubmitForm()}>Submit</button>
                </div>
            </div>
        </div>
    )
};

export default HappyNewYearForm;