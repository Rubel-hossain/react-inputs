import React from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from "./Features/Profile";
import Tasks from "./Components/tasks";
import Inputs from "./Components/Inputs";
function App() {
  const profile_data = {
     personal_info: {
      name:"Rubel Hossain",
      email:"rubel2585@yahoo.com",
      phone:"01763633959"
     },
     skills: ["html5","css3","javascript","jquery"],
     social_profile: [
       { name: "facebook", url: "#"},
       { name: "twitter", url: "#"},
       { name: "pinterest", url: "#"}
     ]
  }
  return (
    <div className="App">
    <Inputs/>
      {/* <Tasks/> */}
      {/* <Profile 
        personal_info={profile_data.personal_info} 
        skills={profile_data.skills} 
        social_profile={profile_data.social_profile} /> */}
    </div>
  );
}

export default App;
