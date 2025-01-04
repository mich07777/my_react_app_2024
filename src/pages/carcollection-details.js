import React,{useState} from "react";
import axios from "axios";

const CarCollcetionDetailsPage = () => {

    const [carGetDetailsForm,UpdateGetDetails] = useState ({
            name: "",
            price: "",
            model: "",
            color: "",
    });

    const [carListView,UpdateCarListView] = useState([]);


    const handleInputFormFilds = (event) => {
        console.log(event.target.value,event.target.name);
        UpdateGetDetails({...carGetDetailsForm,[event.target.name] : event.target.value});
    };


    const getDetailsCars = () => {

        const url = "http://localhost:5000/api/car/GetDetails";

        axios.get(url)
        .then((response) => {
            // console.log(response.data);
            UpdateCarListView(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
    };

    const CarsListView = carListView.map((value,index) => {
        return(
            <div className="cars-list" key={index}> 
                <h3>{value.name}</h3>
                <h3>{value.price}</h3>
                <h3>{value.model}</h3>
                <h3>{value.color}</h3>
                <button onClick={() => CarsViewDelete(value.id)}>Delete</button>
            </div>
        )
    });

    const CarPostSumbitDetails = () => {
        const url ="http://localhost:5000/api/car/PostDetails"

        axios.post(url,carGetDetailsForm)
        .then((respones) => {
            console.log(respones.data);
            getDetailsCars();
        })
        .catch((error) => {
            console.log(error);
        })
    };

    const CarsViewDelete = (id) => {
        const url = "http://localhost:5000/api/car/DeleteDetails/" + id;
        axios.delete(url)
        .then((respones) => {
            console.log(respones.data);
            getDetailsCars();
        })
        .catch((error) => {
            console.log(error);
        })
    }
     

    return(
        <div>
            <h3>Car Details</h3>
            <div className="cars-container">
            {CarsListView}
            </div>
            <br /> <br />
            <button onClick={() => getDetailsCars()}>GetDetails</button>
            <h3>UserForm Details</h3>
            <div>
            <label>Name:</label>
            <input type="text" name="name" placeholder="enter name" onChange={handleInputFormFilds}/>
            </div>
            <div>
            <label>price:</label>
            <input type="number" name="price" placeholder="enter price" onChange={handleInputFormFilds}/>
            </div> 
            <div>
            <label>model:</label>
            <input type="text" name="model" placeholder="enter model" onChange={handleInputFormFilds}/>
            </div> 
            <div>
            <label>color:</label>
            <input type="text" name="color" placeholder="enter Salary" onChange={handleInputFormFilds}/>
            </div> 
             <div>
                <button onClick={() => CarPostSumbitDetails()}>Submit</button>
             </div>
        </div>
    )
};

export default CarCollcetionDetailsPage;