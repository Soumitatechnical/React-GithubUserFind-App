import React from 'react'

const Form = ({handleGetRequest, clear, clearBtnControl}) => {


    return (
        <div className="container " onSubmit={handleGetRequest}>

            <form className="form">
                <input type="text" name="find" placeholder="Search for users " 
                autoComplete="off"/>
                <button className="btn btn-dark btn-block p-2">Submit</button>    
            </form>

            { clearBtnControl && (
             <button onClick={clear} 
             className="btn btn-light btn-block  my-1">
                 Clear
            </button>
             )} 
        </div>
    )
}

export default Form
