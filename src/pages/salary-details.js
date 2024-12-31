import React,{useState} from "react";

const SlarayDetailsPage = () => {

    let [salaryDeatials,updateSalaryDeatails] = useState({
        firstname:"",
        lastname:"",
        desgination:"",
        salary:"",
        email_id:"",
        password:""
    })

    const insertSalaryDetails = (event) =>{
        // console.log(event.target.value,event.target.name);
        updateSalaryDeatails({...salaryDeatials,[event.target.name] : event.target.value})
    }

    let [ShowSalryDetailsList,ShowUpdateSalaryDetailsList] = useState([]);

    const onSubmit = () => {
        // console.log(salaryDeatials);
        ShowUpdateSalaryDetailsList([...ShowSalryDetailsList,salaryDeatials ]);
    }

    const resultList = ShowSalryDetailsList.map((value,index) => {
        return (
            <tr key={index}>
            <td>{value.firstname}</td>
            <td>{value.lastname}</td>
            <td>{value.desgination}</td>
            <td>{value.salary}</td>
            <td>{value.email_id}</td>
            <td>{value.password}</td>
        </tr>
        )
    });



    return(
        <div className="form">
            <div className="salary-from-container">
            <h3>salary Details</h3>
            <br />
            <lable>First Name:</lable>
            <input type="text" name="firstname" placeholder="Enter The first name" onChange={insertSalaryDetails}/>
            <br />
            <lable>Last Name:</lable>
            <input type="text" name="lastname" placeholder="Enter The Last name" onChange={insertSalaryDetails}/>
            <br />
            <lable>Designation:</lable>
            <input type="text" name="desgination" placeholder="Enter The Desgination" onChange={insertSalaryDetails}/>
            <br />
            <lable>Salary:</lable>
            <input type="number" name="salary" placeholder="Enter The salary" onChange={insertSalaryDetails}/>
            <br />
            <lable>Email id:</lable>
            <input type="email" name="email_id" placeholder="Enter The Email id" onChange={insertSalaryDetails}/>
            <br />
            <lable>Password:</lable>
            <input type="password" name="password"  placeholder="Enter The Password" onChange={insertSalaryDetails}/>
            <br /><br />
            <button onClick={() => {onSubmit()}}>Submit</button>
            </div>
            <div className="salary-output-container">
                <table>
                    <tr>
                        <thead>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>Desgination</th>
                            <th>Salary</th>
                            <th>Email id</th>
                            <th>Password</th>
                        </thead>
                        <tbody>
                           {resultList}
                        </tbody>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default SlarayDetailsPage;