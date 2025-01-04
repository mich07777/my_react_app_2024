import axios from "axios";
import React,{useState} from "react";


const CrudoperationPage =  () => {

    const [studentList,updateStudentList] = useState([]);
    const [studentDetails,updateStudentDetails] = useState ({
        
            name:"",
            age:"",
            salary:""   
    });


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

    let recordList = studentList.map((value,index) => {
        return(
            <div  className="student-list" key={index}>
                <h3>{value.name}</h3>
                <h3>{value.age}</h3>
                <h3>{value.salary}</h3>
                <button onClick={() => deleteStudent(value.id)}>Delete</button>
            </div>
        )
    });

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
            alert(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    return(
        <div>
            <h2>crate studen info</h2>
            <input type="text" name="name" placeholder="enter name" onChange={handleInputfild}/>
            <input type="number" name="age" placeholder="enter age" onChange={handleInputfild}/>
            <input type="number"name="salary"  placeholder="enter salary" onChange={handleInputfild}/>
            <button onClick={() => uploadStudentDetails()}>submit</button>
            <h2>Students Details here</h2>
            <button onClick={() => loadStudentDetails()}>loaad student details</button>
            <div className="student-container">
            {recordList}
            </div>
        </div>
    )
}

export default CrudoperationPage; 