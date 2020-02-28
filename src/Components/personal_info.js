import React from "react";

function PersonalInfo(props){
    const { name, email, phone } = props.personal_info;

         return(
          <>
           <h3>Personal Information</h3>
           <h6>Name: {name}</h6>
           <h6>Email: {email}</h6>
           <h6>Phone: {phone}</h6>
          </>
         );
}

export default PersonalInfo;