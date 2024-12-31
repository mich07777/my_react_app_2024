import React,{useState} from 'react';

const CondtionalRendering = ()  => {

    const [visiblity,updatevisiblity] = useState(true);

    const showHide = () => {
        // console.log(visiblity);
        updatevisiblity(!visiblity);
    }

    return(
        <div>
            <h3>Condtional Rendering (hide/Show)</h3>

            {visiblity &&  <img src={require("../images/tvk.ruling part.jpeg")} width={100}/> }


            <h2>condtional inline IF</h2>
            <button onClick={() => showHide()}>show/hide</button>
            
            {/* {
                {condtion && HTML Code} -either true or false
            } */}

            {/* {true &&  <img src={require("../images/tvk.ruling part.jpeg")} width={100}/> } */}

            {/* {false &&  <img src={require("../images/tvk.ruling part.jpeg")} width={100}/> } */}

           

            <h2>condtional inline IFELSE</h2>

            {/* {
                {condtion ? HTML code 1 : HTML Code 2}
            } */}

            {/* {
                true ? <h2>login permission granted</h2> : <h2>login access denied</h2>
            }

            {
                false ? <h2>login permission granted</h2> : <h2>login access denied</h2>
            } */}

            {
                visiblity ? <h2>login permission granted</h2> : <h2>login access denied</h2>
            }

        </div>
    )
};

export default CondtionalRendering;