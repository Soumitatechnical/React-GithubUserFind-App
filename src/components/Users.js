import React from 'react'

const Users = (props) =>{

   
   
        // const {id, login, avatar_url}=this.props.users;
        // console.log(this.props.users);
        return (
            <div className="grid-3 container">
                {
                    props.users.map(user=>(
                        <div className="card " key={user.id}>
                            <img src={user.avatar_url} alt="" />
                            <h3 className="text-center">{user.login}</h3>
                            <button className="btn btn-light p-2"><a href={user.html_url}>Profile</a></button>
                        </div>
                    ))
                }
            </div>
        )

}




export default Users