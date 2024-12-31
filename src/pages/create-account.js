import React,{useState} from 'react';

const AcoountPage = () => {

    let [accoutForm,UpdateAcountFrom] = useState ({
            firstName: "",
            lastName:"",
            email:"",
            password:""
        });

    //insert object value
    // let accountList = [];

    //insert array value
    let [accountList,updateAccountList] = useState([]);

    const formSubmit = (event) => {
    //  console.log(event.target.value,event.traget.name);
     UpdateAcountFrom ({...accoutForm,[event.target.name] : event.target.value })
    }

    const fromFinalSumit = () => {
        console.log(accoutForm);
        //insert object value
        // accountList.push({...accoutForm});

        //insert array value
        updateAccountList([...accountList,accoutForm])
    };

    // const showList = () => {
    //     console.log(accountList);
    // }

    const resultList = accountList.map((value,index)  => {
        return (
            <tr key={index}>
            <td>{value.firstName}</td>
            <td>{value.lastName}</td>
            <td>{value.email}</td>
            <td>{value.password}</td>
        </tr>
        )
    });

    return(
        <div>
           <label>Account Creation Form</label> 
           <br></br> 
           <label>First Name</label>
           <input type="text" name="firstName" placeholder="Enter the First Name here" onChange={formSubmit}/>
            <br/> <br/>
            <label>Last Name</label>
            <input type="text" name="lastName" placeholder="Enter the Last Name here" onChange={formSubmit}/>
            <br/> <br/>
            <label>Email id</label>
            <input type="text" name="email"  placeholder="Enter the Email id here" onChange={formSubmit}/>
            <br/> <br/>
            <label>Password</label>
            <input type="password" name="password" placeholder="Enter the Password here"onChange={formSubmit}/>
            <br></br>
            <button onClick={() => {fromFinalSumit()}}>Submit</button>
            <br></br>
            {/* <button onClick={() => {showList()}}>ShowList</button> */}

            <br/> 
            <p>The First Name is {accoutForm.firstName}</p>
            <p>The Last Name is  {accoutForm.lastName}</p>
            <p>The Email id is   {accoutForm.email}</p>
            <p>The Password is   {accoutForm.password}</p>

            <br/>
            <table>
                <thead>
                    <tr>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Email</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                   {resultList}
                </tbody>
            </table>
        
        </div>
    )
};

export default AcoountPage;