import React from "react";

function Skills({skills}){
        return(
           <>
            <div className="skills_wrapper">
              <h3>Our Skills</h3>
              <ul>
                {skills.map(skill=>(
                  <li>{skill}</li>
                ))}
              </ul>
            </div>
           </>
        );
}

export default Skills;