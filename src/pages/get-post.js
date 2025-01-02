import React,{useState} from "react";
import axios from "axios";

const GetPostPage = () => {

    let [viewtableData,updateTable] = useState ([]);
    let [viewInputData,updateInput] = useState({
        name: "",
        age: "",
    });

    // getApi
    const getDataVisual = () => {
  
      const url = "https://reqres.in/api/users?page=2";

      axios.get(url)
        .then((respones) => {
          console.log(respones.data);
          updateTable(respones.data.data);
        })
        .catch((error) => {
          console.log(error);
          alert(error.message);
        });
    };

    let tableDataList = viewtableData.map((value,index) => {
        return(
            <tr key={index}>
                <td>{value.first_name}</td>
                <td>{value.last_name}</td>
                <td>{value.email}</td>
                <td><img src={value.avatar} width="60" alt=""/></td>
            </tr>
        )  
    })


    const handelInput = (event) => {
        console.log(event.target.value,event.target.name);
        updateInput({...viewInputData,[event.target.name] : event.target.value})
    }

    //postapi
    const  inputSubmit = () => {

        const url = "https://reqres.in/api/users";
        axios.post(url,viewInputData)
        .then((respones) => {
            console.log(respones.data)
        })
        .catch((error) => {
            console.log(error);
            alert(error.message);
        })
    }

    return(
        <div>
            <h3>Get Post Api</h3>
            <button onClick={() => getDataVisual()}>Get</button>
            <div>
                <table>
                    <tr>
                        <thead>
                            <th>firstname</th>
                            <th>lastname</th>
                            <th>email</th>
                            <th>avtar</th>
                        </thead>
                        <tbody>
                           {tableDataList}
                        </tbody>
                    </tr>
                </table>
            </div>

            <h2>POST Method</h2>
            <div>
                <div>
                <label>Enter Your Name:</label>
                <input type="text" name="name"  placeholder="Enter Name" onChange={handelInput} />
                </div>
                <div>
                <label>Enter Your Job:</label>
                <input type="text" name="age"   placeholder="Enter Name" onChange={handelInput}/>
                </div>
                <button onClick={() => inputSubmit()}>submit</button>
            </div>
        </div>
    )
};

export default GetPostPage;