import React from "react";

function SocialProfile({ social_profile}){
         return(
          <>
           <div className="social-profile-wrapper">
             <h3>Social Profile</h3>
             <ul>
                 {social_profile.map(social_link=>(
                   <li><a href={social_link.url}>{social_link.name}</a></li>
                 ))}
             </ul>
           </div>
          </>
         )
}

export default SocialProfile;