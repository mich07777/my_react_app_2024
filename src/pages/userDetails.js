import React, { useState } from "react";
import axios from "axios";

const UserDetails = () => {

let [userformdetails,updateUserFormdetails] = useState ({
        name: "",
        age: "",
        salary: "",
});

let [userformGetDetails,UpdateUserFormGetDetails] = useState ([]);


const handelInputType = (event) => {
    console.log(event.target.value,event.target.name);
    updateUserFormdetails({...userformdetails,[event.target.name] : event.target.value})

}

const onSubmit = () => {
    const url = "https://reqres.in/api/users";
    axios.post(url,userformdetails)
    .then((respones) => {
        console.log(respones.data)
    })
    .catch((error) => {
        console.log(error);
        alert(error.message)
    })
}


const userGetFormDetails = () => {

    const url = "https://reqres.in/api/users?page=2";
    axios.get(url)
    .then((response)=>{
        console.log(response.data.data);
        UpdateUserFormGetDetails(response.data.data)
    })
    .catch((error)=>{
        console.log(error);
        alert(error.message);
    })
}

const UserList = userformGetDetails.map((value,index) => {
    return(
        <tr key={index}>
        <td>{value.first_name}</td>
        <td>{value.last_name}</td>
        <td>{value.email}</td>
        <td><img src={value.avatar} width="60" alt=""/></td>
    </tr>
    )
})


    return(
        <div>
            <h1>UserDetails</h1>
            <table>
             <thead>
               <th>FirstName</th> 
               <th>LastName</th>
               <th>Email</th>
               <th>Avatar</th>       
             </thead>  
             <tbody>
                {UserList}
             </tbody>
            </table>


            <div>
            <lable>Enter the Name</lable>
            <input type="text" name="name" placeholder="Enter Name" onChange={handelInputType}/>
            </div>
            <div>
            <lable>Enter the Age</lable>
            <input type="number" name="age" placeholder="Enter Age" onChange={handelInputType}/>
            </div>
            <div>
            <lable>Enter the salary</lable>
            <input type="number" name="salary" placeholder="Enter number" onChange={handelInputType}/>
            </div>
            <button onClick={() => onSubmit()}>Submit</button>
            <br></br>
            <button onClick={() => userGetFormDetails()}>GetDetails</button>
        </div>
    )
};

export default UserDetails;