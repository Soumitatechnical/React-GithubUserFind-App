import React from 'react'

const Navbar = () => {
    return (
        <div style={navStyle}>
            <i className="fab fa-github fa-2x p"></i>
            <p className="lead" style={{marginLeft:"20px"}}>Search Github Users</p> 
        </div>
    )
}

const navStyle={
    width:"100%",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
   
}

export default Navbar
