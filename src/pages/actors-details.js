import React,{useState} from "react";

const ActorsDetails = () => {

let [actorsDetails,updateActorsDetails] = useState({
    firstname:"",
    lastname:"",
    nickname:"",
    age:"",
    salary:"",
    phonenumber:"",
    start_date:"",
    end_date:"",
    date_balance:"",
    movie_name:"",
    in_time:"",
    out_time:""
})

const insertActorsDetails = (event) => {
    console.log(event.target.value,event.target.name);
    updateActorsDetails({...actorsDetails,[event.target.name] : event.target.value});
}

let [actorsShowsList,updateActorsShowsList] = useState([]);


const onSubmit = () => {
    console.log(actorsDetails);
    updateActorsShowsList([...actorsShowsList,actorsDetails])
}

const finalActorsList = actorsShowsList.map((value,index) => {
     return(
        <tr key={index}>
            <td>{value.firstname}</td>
            <td>{value.lastname}</td>
            <td>{value.nickname}</td>
            <td>{value.age}</td>
            <td>{value.salary}</td>
            <td>{value.phonenumber}</td>
            <td>{value.start_date}</td>
            <td>{value.end_date}</td>
            <td>{value.date_balance}</td>
            <td>{value.movie_name}</td>
            <td>{value.in_time}</td>
            <td>{value.out_time}</td>
        </tr>
     )
});

    
    return(
        <div className="form">
            <div className="actors-from-container">
            <h3>Actors Details</h3>
            <br />
            <lable>Actor  FirstName:</lable>
            <input type="text" name="firstname" placeholder="Enter the firstname" onChange={insertActorsDetails}/>
            <br />
            <lable>Last Name:</lable>
            <input type="text" name="lastname" placeholder="Enter the lastname" onChange={insertActorsDetails}/>
            <br />
            <lable>Actor NickName:</lable>
            <input type="text" name="nickname" placeholder="Enter the nickName" onChange={insertActorsDetails}/>
            <br />
            <lable>Actor Age:</lable>
            <input type="number" name="age" placeholder="Enter the age" onChange={insertActorsDetails}/>
            <br />
            <lable>Actor Salary:</lable>
            <input type="number" name="salary" placeholder="Enter the salary" onChange={insertActorsDetails}/>
            <br />
            <lable>Actor Phonenumber:</lable>
            <input type="number" name="phonenumber" placeholder="Enter the phonenumber" onChange={insertActorsDetails}/>
            <br />
            <lable>Actor's Start Date:</lable>
            <input type="date" name="start_date" placeholder="Enter the start date" onChange={insertActorsDetails}/>
            <br />
            <lable>Actor's End Date:</lable>
            <input type="date" name="end_date" placeholder="Enter the end date" onChange={insertActorsDetails}/>
            <br />
            <lable>Actor's Date Balance:</lable>
            <input type="number" name="date_balance" placeholder="Enter the balance" onChange={insertActorsDetails}/>
            <br />
            <lable>Actor's MovieName:</lable>
            <input type="text" name="movie_name" placeholder="Enter the  movie name" onChange={insertActorsDetails}/>
            <br />
            <lable>Actor's InTime:</lable>
            <input type="time" name="in_time" placeholder="Enter the in-time" onChange={insertActorsDetails}/>
            <br />
            <lable>Actor's outtime:</lable>
            <input type="time" name="out_time" placeholder="Enter the  out-time" onChange={insertActorsDetails}/>
            <br />
            <button onClick={() => {onSubmit()}}>Submit</button>
            </div>
            <div className="actors-output-container">
              <table>
                <tr>
                    <thead>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Nickname</th>
                        <th>Age</th>
                        <th>Salary</th>
                        <th>Phonenumber</th>
                        <th>Start-date</th>
                        <th>End-date</th>
                        <th>Date-balance</th>
                        <th>Movie-name</th>
                        <th>In-time</th>
                        <th>Out-time</th>
                    </thead>
                    <tbody>
                            {finalActorsList}
                    </tbody>
                </tr>
              </table>
            </div>
        </div>
    )

};

export default ActorsDetails;