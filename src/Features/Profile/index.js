import React from "react";
import PersonalInfo from "../../Components/personal_info";
import Skills from "../../Components/skills";
import SocialProfile from "../../Components/social_profile";
function Profile({ personal_info, social_profile, skills}) {
   return(
    <>
     <div className="container">
        <div className="row">
           <div className="col-md-6">
              <div className="card p-4">
               <PersonalInfo personal_info={personal_info} />
               <Skills skills={skills} />
              <SocialProfile social_profile={social_profile}/> 
              </div>
           </div>
        </div>
     </div>
    </>
   )
}

export default Profile;