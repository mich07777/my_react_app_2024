import React,{useState} from "react";
import axios from "axios";

const SalaryDetailsForEmployee = () => {

    const [salaryDetailsInputField,SalaryDetailsInputField] = useState({
        name :  "",
        age :  "",
        address : "",
        employee_id : "",
        location : "",
        salary : ""

    });
    const [salaryofficeList,SalaryEmployeeList] = useState([]);
    const [EmployeeSalaryUpdateDetails,EmployeeSalary] = useState(undefined);

    const onHandleInputField = (event) => {
        // console.log(event.target.value,event.target.name);
        SalaryDetailsInputField({...salaryDetailsInputField,[event.target.name] : event.target.value});
    }


    const onSubmit = () => {

        const url ="http://localhost:5000/api/employeedetails/records/usersdetailslist/SalaryExpectaions";
        axios.post(url,salaryDetailsInputField)
        .then((response) => {
            // console.log(response.data);
            SalaryDetailsInputField(
                {
                    name :  "",
                    age :  "",
                    address : "",
                    employee_id : "",
                    location : "",
                    salary : ""
                }
            );
            salarydetailsShows();
        })
        .catch((error) => {
            console.log(error);
        })
    }

    const salarydetailsShows  = () => {
        const url ="http://localhost:5000/api/employeedetails/records/usersdetailslist"
        axios.get(url)
        .then((response) =>{
            SalaryEmployeeList(response.data);
        })
        .catch((error) =>{
            console.log(error);
        })
    }

    const onHandleInputUpdateField = (id,event) => {
        const index =salaryofficeList.findIndex((value) => {
            return value.id === id;
        });
        if(index > -1) {
            const updateSalary = [...salaryofficeList];
            updateSalary[index][event.target.name] = [event.target.value];
            SalaryEmployeeList(updateSalary);
        }
    }

    const EmployeeSalarySaveDetails = (value) => {
        const url ="http://localhost:5000/api/employeedetails/records/usersdetailslist/SalaryDetails/Offers/" + value.id;
        axios.put(url,value)
        .then((response) => {
            console.log(response.data);
            EmployeeSalary(undefined);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    const EmployeeSalaryEditDetails = (id) => {
        EmployeeSalary(id);
    }

    const EmployeeSalaryDeleteDetails = (id) => {
        const url = "http://localhost:5000/api/employeedetails/records/usersdetailslist/SalaryDetails/Offers/sold/" + id;
        axios.delete(url)
        .then((response) =>{
            console.log(response);
            salarydetailsShows();
        })
        .catch((error) =>{
            console.log(error);
        })
    }

    const SalaryList = salaryofficeList.map((value,index) => {
        return(
            <tr key={index}>
                {
                    EmployeeSalaryUpdateDetails === value.id ? (
                    <> 
                            <td><input type="text" placeholder="Enter the name" name="name" value={value.name} onChange={onHandleInputUpdateField.bind(this,value.id)}/></td>
                            <td><input type="number" placeholder="Enter the age" name="age" value={value.age} onChange={onHandleInputUpdateField.bind(this,value.id)}/></td>
                            <td><input type="text" placeholder="Enter the address" name="address" value={value.address} onChange={onHandleInputUpdateField.bind(this,value.id)}/></td>
                            <td><input type="number" placeholder="Enter the emp id" name="employee_id" value={value.employee_id} onChange={onHandleInputUpdateField.bind(this,value.id)}/></td>
                            <td><input type="text" placeholder="Enter the location" name="location" value={value.location} onChange={onHandleInputUpdateField.bind(this,value.id)}/></td>
                            <td><input type="number" placeholder="Enter the salary" name="salary" value={value.salary} onChange={onHandleInputUpdateField.bind(this,value.id)}/></td>
                    </>
                        
                    ):(
                    <> 
                        <td>{value.name}</td>
                        <td>{value.age}</td>
                        <td>{value.address}</td>
                        <td>{value.employee_id}</td>
                        <td>{value.location}</td>
                        <td>{value.salary}</td>
                    </>
                    )}

                        <td onClick={() => EmployeeSalaryDeleteDetails(value.id)}><button>Delete</button></td>
                        <td>
                        {
                             EmployeeSalaryUpdateDetails === value.id ? (
                                <td onClick={() => EmployeeSalarySaveDetails(value)}><button>Save</button></td>         
                             ):( 
                                <td onClick={() => EmployeeSalaryEditDetails(value.id)}><button>Edit</button></td> 
                        )} 
                        </td>       
            </tr>
        )
    })



    return(
        <div>
            <h2>Employee Salary Details</h2>
            <div className="salary-form-container">
            <div>
                <label>Name:</label>
                <input type="text" placeholder="Enter the name" name="name" value={salaryDetailsInputField.name} onChange={onHandleInputField}/>
            </div>
            <div>
                <label>Age:</label>
                <input type="number" placeholder="Enter the age" name="age" value={salaryDetailsInputField.age} onChange={onHandleInputField}/>
            </div>
            <div>
                <label>Address:</label>
                <input type="text" placeholder="Enter the address" name="address" value={salaryDetailsInputField.address} onChange={onHandleInputField}/>
            </div>
            <div>
                <label>Employee id:</label>
                <input type="number" placeholder="Enter the emp id" name="employee_id" value={salaryDetailsInputField.employee_id} onChange={onHandleInputField}/>
            </div>
            <div>
                <label>location:</label>
                <input type="text" placeholder="Enter the location" name="location" value={salaryDetailsInputField.location} onChange={onHandleInputField}/>
            </div>
            <div>
                <label>salary:</label>
                <input type="number" placeholder="Enter the salary" name="salary" value={salaryDetailsInputField.salary} onChange={onHandleInputField}/>
            </div>
            <div>
                <button onClick={() => onSubmit()}>Submit</button>
            </div>
            <div>
                <button onClick={() => salarydetailsShows()}>Salary Details</button>
            </div>
            </div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Address</th>
                            <th>Employee id</th>
                            <th>Location</th>
                            <th>Salary</th>
                            <th>Edit</th>
                            <th>Delete</th>  
                        </tr>
                    </thead>
                    <tbody>
                       {SalaryList}
                    </tbody>
                </table>
            </div>
        </div>
    ) 
}

export default SalaryDetailsForEmployee;




