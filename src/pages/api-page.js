import React,{useState} from "react";
import axios from "axios";

const ApiPage = () => {

    let [userList,updateUserList] = useState([]);
    let [userForm,updateForm] = useState({
        name : "",
        age: ""
    })

    

    const getAPImethod = () => {
        const URL = "https://reqres.in/api/users?page=2";

        axios.get(URL)
          .then( (response) => {
            console.log(response.data.data);

            updateUserList(response.data.data);
          })
          .catch((error) =>{
            console.log(error);
            alert(error);
          })

        // axios.get(url)
        //  .then()
        //  .catch()
    }

    let usersResult = userList.map((value,index) => {
        return(
            <tr key={index}>         
                <td>{value.id}</td>
                <td>{value.first_name}</td>
                <td>{value.last_name}</td>
                <td>{value.email}</td>
                <td><img src={value.avatar} width="60" alt=""/></td>
            </tr>   
        )
    });

    const handelInput = (event) => {
        console.log(event.target.value,event.target.name);
        updateForm({...userForm,[event.target.name] : event.target.value });
    }

    const onSubmit = () => {
        console.log(userForm);

        const url = "http://localhost:5000/api/create/user"

        axios.post(url,userForm)
           .then((response) => {
            console.log(response.data)

           })
           .catch((error) => {
            alert(error.message);
            console.log(error)
           })

    }


    const getWelcomeAPIMethod = () => {
        const url = "http://localhost:5000/api/welcome";

        axios.get(url)
         .then((response) => {
            console.log(response);
         })
         .catch((error) => {
            console.log(error);
         })
    }

    return(
        <div>
            <h2>GET Mothod</h2>
            <button onClick={() => getAPImethod()}>Get</button>
            <button onClick={() => getWelcomeAPIMethod()}>Get Welcome API</button>
            <table id="customers">
                <tr>
                    <thead>
                        <tr>
                        <th>Id</th>
                        <th>firstName</th>
                        <th>lastName</th>
                        <th>email id</th>
                        <th>profile picture</th>
                        </tr>  
                    </thead>
                    <tbody>
                        {usersResult}
                    </tbody>
                </tr>
            </table>

            <h2>POST Method</h2>
            <div>
                <div>
                <label>Enter Your Name:</label>
                <input type="text" name="name"  placeholder="Enter Name"  onChange={handelInput}/>
                </div>
                <div>
                <label>Enter Your Job:</label>
                <input type="text" name="age"   placeholder="Enter Name" onChange={handelInput}/>
                </div>
                <button onClick={() => {onSubmit()}}>submit</button>
            </div>
        </div>
    ) 
};

export default ApiPage;