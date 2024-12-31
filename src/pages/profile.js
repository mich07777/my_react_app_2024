import React,{useState} from "react";

const ProfileDetails = () => {

    let [formDetails,UpdateFromDetails] = useState({
        username: "",
        age: "",
        dataOfBirth: "",
        inTime: "",
        gender: "",
        hoobies: [],
        qualification: "",
        address: ""
    });

    let [errorForm,UpdateError] = useState({
        username: false,
        age: false,
        dataOfBirth: false,
        inTime: false,
        gender: false,
        hoobies: false,
        qualification: false,
        address: false
    });

    const handleInputField = (event) => {
        // console.log(event.target.value,event.target.name);
        if(event.target.name === "hoobies"){
            if(event.target.checked) {
                formDetails.hoobies.push(event.target.value);
            }else{
                let index = formDetails.hoobies.indexOf(event.target.value);
                formDetails.hoobies.splice(index,1);
            }  
        }
        else{
            UpdateFromDetails({...formDetails,[event.target.name] : event.target.value});
        }
    }

    let [showsListFormDetails,showsListFormDetials] = useState([]);

    const onSubmit = () => {
        console.log(formDetails);

        showsListFormDetials([...showsListFormDetails,formDetails]);

        UpdateError({ ...errorForm,
            username: formDetails.username == "" ? true : false,
            age: formDetails.age == "" ? true : false,
            dataOfBirth: formDetails.dataOfBirth == "" ? true : false,
            inTime: formDetails.inTime == "" ? true : false,
            gender: formDetails.gender == "" ? true : false,
            hoobies: formDetails.hoobies.length === 0 ? true : false,
            qualification: formDetails.qualification == "" ? true : false,
            address: formDetails.address == "" ? true : false,
        })
    }

    const  viewProfileDetails = showsListFormDetails.map((value,index) => {
        return(
            <tr key={index}>
            <td>{value.username}</td>
            <td>{value.age}</td>
            <td>{value.dataOfBirth}</td>
            <td>{value.inTime}</td>
            <td>{value.gender}</td>
            <td>{value.hoobies}</td>
            <td>{value.qualification}</td>
            <td>{value.address}</td>
        </tr>
        );
    })

  return (
    <div className="form">
      <div className="salary-from-container">
        <div className="bottom-space">
          <lable  className="lableText" >Enter your User Name:</lable>
          <input type="text"   name="username"   placeholder="Enter User Name" onChange={handleInputField}/>
          {errorForm.username && <span className="error-msg">UserName Should not be empty </span>}
        </div>
        <div className="bottom-space">
          <lable  className="lableText" > Enter your Age:</lable>
          <input type="number"   name="age"  placeholder="Enter Age" onChange={handleInputField}/>
          {errorForm.age && <span className="error-msg">Age Should not be empty </span>}
        </div>
        <div className="bottom-space">
          <lable  className="lableText" >Select D.O.B:</lable>
          <input type="date"  name="dataOfBirth"  placeholder="Enter D.O.B " onChange={handleInputField}/>
          {errorForm.dataOfBirth && <span className="error-msg">D.O.B Should not be empty </span>}
        </div>
        <div className="bottom-space">
          <lable  className="lableText" >Select Time:</lable>
          <input type="time"   name="inTime" placeholder="Enter Time " onChange={handleInputField}/>
          {errorForm.inTime && <span className="error-msg">Time Should not be empty </span>}
        </div>
        <div className="bottom-space">
          <lable  className="lableText" >Select your gender:</lable>
          <input type="radio" value="Male" name="gender" onChange={handleInputField}/>Male
          <input type="radio" value="Female" name="gender" onChange={handleInputField}/>Female
          <input type="radio" value="Others" name="gender" onChange={handleInputField}/>Others
          {errorForm.gender && <span className="error-msg">gender Should not be empty </span>}
        </div>
        <div className="bottom-space">
          <lable  className="lableText" >Select your hobbies</lable>
          <input type="checkbox"   name="hoobies"  value="cricket"onChange={handleInputField}/>cricket
          <input type="checkbox"   name="hoobies"  value="basketball" onChange={handleInputField}/>basketball
          <input type="checkbox"   name="hoobies"  value="football"onChange={handleInputField}/>football
          {/* <input type="checkbox"   name="hoobies"  value="chess"onChange={handleInputField}/>chess
          <input type="checkbox"   name="hoobies"  value="hocky" onChange={handleInputField}/>hocky
          <input type="checkbox"   name="hoobies"  value="cyclling"onChange={handleInputField}/>cyclling
          <input type="checkbox"   name="hoobies"  value="swiming"onChange={handleInputField}/>swiming */}
          {errorForm.hoobies && <span className="error-msg">hobbies Should not be empty </span>}
        </div>
        <div className="bottom-space">
          <lable  className="lableText" >Enter your Address:</lable>
          <textarea   name="address" placeholder="Enter Your Address"onChange={handleInputField}></textarea>
          {errorForm.address && <span className="error-msg">Address Should not be empty </span>}
        </div>
        <div className="bottom-space">
          <lable  className="lableText" >Enter your Qualification:</lable>
          <select  name="qualification" defaultValue={""} onChange={handleInputField}>
            <option disabled value="">Select Your Highest Qualification</option>
            <option   value="car" >car</option>
            <option   value="bike" >bike</option>
            <option   value="bus" >bus</option>
            <option   value="cycle" >cycle</option>
            <option   value="walking" >walking</option>
            <option   value="van" >van</option>
            <option   value="flight" >flight</option>
            {errorForm.qualification && <span className="error-msg">Qualification Should not be empty </span>}
          </select>
        </div>
        <div className="bottom-space">
            <button onClick={() => onSubmit()}>Submit</button>
        </div>
      </div>
      <div className="salary-output-container">
                  <table>
                    <tr>
                        <thead>
                            <th>Username</th>
                            <th>Age</th>
                            <th>DataOfBirth</th>
                            <th>InTime</th>
                            <th>Gender </th>
                            <th>Hoobies</th>
                            <th>Qualification</th>
                            <th>Address</th>
                        </thead>
                        <tbody>
                           {viewProfileDetails}
                        </tbody>
                    </tr>
                </table>


        {/* {showsListFormDetails.map((value, index) => (
            <div key={index} className="profile-detail" >
                <p><strong>Username:</strong> {value.username}</p>
                <p><strong>Age:</strong> {value.age}</p>
                <p><strong>Date of Birth:</strong> {value.dateOfBirth}</p>
                <p><strong>In Time:</strong> {value.inTime}</p>
                <p><strong>Gender:</strong> {value.gender}</p>
                <p><strong>Hobbies:</strong> {value.hoobies}</p>
                <p><strong>Qualification:</strong> {value.qualification}</p>
                <p><strong>Address:</strong> {value.address}</p>
            </div>
        ))} */}

      </div>
    </div>
  );
};

export default ProfileDetails;
