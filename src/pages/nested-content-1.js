import React,{useState} from "react";

const NestedRouting1 = () =>{

    let [Uservaluetext,updateValue] = useState("");
 
    const handleTextArea = (event) =>{
        console.log(event.target.value);
        updateValue(event.target.value)
    }

    return(
        <div>
            <h3>content 1</h3>
            <label>Enter any Text Area</label>
            <textarea onChange={handleTextArea}></textarea>

            <p>Uservaluetext</p>
        </div>
    )
}

export default NestedRouting1;