import axios from "axios";
import React,{useState} from "react";


const CrudoperationPage =  () => {

    const [studentList,updateStudentList] = useState([]);
    const [studentDetails,updateStudentDetails] = useState ({
        
            name:"",
            age:"",
            salary:""   
    });

    const [selectedStudent,updateSelectedStudent] = useState(undefined);

    const loadStudentDetails = () => {
        // alert("working");

        const url ="http://localhost:5000/api/list/students";
        axios.get(url)
        .then((response) => {
            console.log(response.data)
            updateStudentList(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    const handelEditInput = (id, event) => {
        // console.log(id,event);
        const index = id - 1;
        studentList[index][event.target.name] = event.target.value;
        updateStudentList([...studentList]);
    }

    let recordList = studentList.map((value,index) => {
        return(
            <div  className="student-list" key={index}>
                {
                selectedStudent === value.id ?
                <div>
                    <input type="text" name="name" placeholder="Student Name" value={value.name} onChange={handelEditInput.bind(this,value.id)}/>
                    <input type="text" name="age" placeholder="Student Age" value={value.age} onChange={handelEditInput.bind(this,value.id)}/>
                    <input type="text" name="salary" placeholder="Student Location"value={value.salary} onChange={handelEditInput.bind(this,value.id)}/>
                </div>
            
                :
                <div>
                    <h3>{value.name}</h3>
                    <h3>{value.age}</h3>
                    <h3>{value.salary}</h3>
                </div>
                }
                
                <button onClick={() => deleteStudent(value.id)}>Delete</button>
                {
                    selectedStudent === value.id ? 
                    <button onClick={() => saveStudent(value)}>Save</button> 
                    :
                   <button onClick={() => editStudent(value.id)}>Edit</button>

                }
            </div>
        )
    });

    const editStudent = (id) => {
        updateSelectedStudent(id);
    }

    const saveStudent = (value) => {
        // console.log(value);
        const url ="http://localhost:5000/api/updtae/employeeDetails/" + value.id
        axios.put(url,value)
        .then((response) => {
            alert(response.data);
            updateSelectedStudent(undefined);

        })
        .catch((error) => {
            // console.log(error);
            alert(error.response.data);
        })
    }

    const deleteStudent = (id) => {
        // alert(id);

        const url ="http://localhost:5000/api/delete/details/" + id;
        axios.delete(url)
        .then((response) => {
          console.log(response.data);
          loadStudentDetails();
        })
        .catch((error) => {
            console.log(error);
        })
    }

    const handleInputfild = (event) => {
        console.log(event.target.value,event.target.name);
        updateStudentDetails({...studentDetails,[event.target.name] : event.target.value});

    }

    const uploadStudentDetails = () => {
        console.log(studentDetails);

        const url ="http://localhost:5000/api/list/details";
        axios.post(url,studentDetails)
        .then((response)=> {
            console.log(response.data);
            loadStudentDetails();
            //clear the form
            updateStudentDetails({
                name:"",
                age:"",
                salary:""
            })
            // alert(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    return(
        <div>
            <h2>crate studen info</h2>
            <input type="text" name="name" value={studentDetails.name} placeholder="enter name" onChange={handleInputfild}/>
            <input type="number" name="age"value={studentDetails.age} placeholder="enter age" onChange={handleInputfild}/>
            <input type="number"name="salary" value={studentDetails.salary} placeholder="enter salary" onChange={handleInputfild}/>
            <button onClick={() => uploadStudentDetails()}>submit</button>
            <h2>Students Details here</h2>
            <button onClick={() => loadStudentDetails()}>load student details</button>
            <div className="student-container">
            {recordList.length == 0 ?
            <h2>No Student Record Found</h2>
            :
            recordList
            }
            </div>
        </div>
    )
}

export default CrudoperationPage; 