import React,{useState} from "react";
import axios from "axios";

const AboutPage  = () => {

    let [showEmployeeDetails,UpdateEmployeeDetails] = useState ([]);
    let [employeeDetails,UpdateEmployeeInputDetails] = useState({
                "employeeName": "",
                "designation": "",
                "inTime": "",
                "outTime": "",
                "Salary": ""
    })

    const employeDetailsShows = () => {

        const url ="http://localhost:5000/api/get/employeeDetails";
        axios.get(url)
        .then((response) => {
            console.log(response.data);
            UpdateEmployeeDetails(response.data);
        })
        .catch((error) => {
            console.log(error)
        })
    }

    const EmployeeDetailsList = showEmployeeDetails.map((value,index) => {
        return(
                  <tr key={index}>
                    <td>{value.employeeName}</td>
                    <td>{value.designation}</td>
                    <td>{value.inTime}</td>
                    <td>{value.outTime}</td>
                    <td>{value.Salary}</td>
                    {/* wantedly pass the id */}
                    <td><button onClick={() => employeeDelete(value.id)}>Delete</button></td>
                    <td><button >Edit</button></td>
                 </tr>
        )
    });


    const onHandleInputField = (event) => {
        console.log(event.target.value,event.target.name);
        UpdateEmployeeInputDetails({...employeeDetails,[event.target.name] : event.target.value });
    }

    const onEmployeesubmit = () => {

        const url = "http://localhost:5000/api/post/employeeDetails";
        axios.post(url,employeeDetails)
        .then((response) => {
            console.log(response.data);
            UpdateEmployeeInputDetails(response.data);
            employeDetailsShows();
        })
        .catch((error) => {
            console.log(error);
        })
    }

    const employeeDelete = (id) => {
        // get the id
        const url ="http://localhost:5000/api/delete/employeeDetails/" + id;
        axios.delete(url)
        .then((response) => {
            console.log(response.data);
            employeDetailsShows();
        })
        .catch((error) => {
            console.log(error);
        })

    }

    return (
        <div>
            <lable>about page working</lable>
            <div>
                <input type="name" name="employeeName" placeholder="enter employeeName" onChange={onHandleInputField}/>
                <br />
                <input type="name" name="designation" placeholder="enter designation" onChange={onHandleInputField}/>
                <br />
                <label>InTime</label>
                <input type="time" name="inTime" placeholder="enter inTime" onChange={onHandleInputField}/>
                <br />
                <label>Out Time</label>
                <input type="time" name="outTime" placeholder="enter outTime" onChange={onHandleInputField}/>
                <br />
                <input type="number" name="Salary" placeholder="enter Salary" onChange={onHandleInputField}/>
            </div>
            <div>
                <button onClick={() => onEmployeesubmit()}>Submit</button>
            </div>
            <button onClick={() => employeDetailsShows()}>EmployeeDetails</button>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>employeeName</th>
                            <th>designation</th>
                            <th>inTime</th>
                            <th>outTime</th>
                            <th>Salary</th>
                            <th>Delete</th>
                            <th>Edit</th>
                        </tr>
                     </thead>
                   <tbody>
                      {EmployeeDetailsList}    
                   </tbody> 
                </table>
            </div>
        </div>
    )
}

export default AboutPage;