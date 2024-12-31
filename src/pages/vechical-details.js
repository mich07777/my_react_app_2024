import React,{useState} from 'react';

const VechicalDetails = () => {

    let [vechicalDetails,updateVechicalDetails] = useState({
        vechicalname:"",
        vechicalmodel:"",
        vechicalprice:"",
        vechicalclour:"",
        vechicalenginid:"",
        vechicalpasscode:""
    });

    const updateDetailsVechical = (event) => {
        updateVechicalDetails({...vechicalDetails,[event.target.name] : event.target.value});
    }
   
    let [vechicalshowDetials,updateShowsDetails] = useState([]);

    const Onsubmitshows = () => {
        // console.log(vechicalDetails);
        updateShowsDetails([...vechicalshowDetials, vechicalDetails ])
    }


    const resultVechicalList = vechicalshowDetials.map((value,index)=>{
       return(
        <tr key={index}>
            <td>{value.vechicalname}</td>
            <td>{value.vechicalmodel}</td>
            <td>{value.vechicalprice}</td>
            <td>{value.vechicalclour}</td>
            <td>{value.vechicalenginid}</td>
            <td>{value.vechicalpasscode}</td>
        </tr>
       )
    })
 
    return(
        <div className="form">
            <div className="salary-from-container">
            <h3>Vechical Details</h3>
            <br />
            <lable>Vechical Name:</lable>
            <input type="text" name="vechicalname" placeholder="Enter The Vechical Name" onChange={updateDetailsVechical}/>
            <br />
            <lable>Vechical Model:</lable>
            <input type="text" name="vechicalmodel" placeholder="Enter Vechical Model" onChange={updateDetailsVechical}/>
            <br />
            <lable>Vechical Price:</lable>
            <input type="number" name="vechicalprice" placeholder="Enter Vechical Price" onChange={updateDetailsVechical}/>
            <br />
            <lable>Vechical clour:</lable>
            <input type="text" name="vechicalclour" placeholder="Enter  Vechical clour" onChange={updateDetailsVechical}/>
            <br />
            <lable>Engine id:</lable>
            <input type="number" name="vechicalenginid"  placeholder="Enter Engine id" onChange={updateDetailsVechical}/>
            <br />
            <lable>Vechical Passcode:</lable>
            <input type="password"  name="vechicalpasscode" placeholder="Enter Vechical Passcode" onChange={updateDetailsVechical}/>
            <br /><br />
            <button onClick={() => {Onsubmitshows()}}>Submit</button>
            </div>
            <div className="salary-output-container">
            <table>
                    <tr>
                        <thead>
                            <th>Vechical Name</th>
                            <th>Vechical Model</th>
                            <th>Vechical Price</th>
                            <th>Vechical clour</th>
                            <th>Engine id</th> 
                            <th>Vechical Passcode</th>
                        </thead>
                        <tbody>
                         {resultVechicalList}
                        </tbody>
                    </tr>
                </table>
            </div>
        </div>
      
    )
};

export default VechicalDetails;