import React, { Component } from 'react';

class Inputs extends Component {
 state = {
  userName: "",
  userSkill: "",
  programming_lang: "",
  agree: false,
  tools: []
  
 }
 habdleChange = (e) => {
     this.setState({
         [e.target.name]: e.target.value
     });
 }
 handleOptions = (e) => {
   let {tools} = this.state;
    if (e.target.checked){
     let toolExisting = tools.includes(e.target.value);
     if (!toolExisting) {
          tools.push(e.target.value);
         }
     }else {
      tools = tools.filter(tool=> tool !== e.target.value);
     }
    this.setState({tools});
  
 }
 render() {
  return (
   <div className="container my-5">
    <div className="row">
     <div className="col-md-8 mx-auto">
       <input type="text" className="form-control mb-3" name="userName" placeholder="your Name" value={this.state.userName} onChange={this.habdleChange}/>
      <select className="form-control mb-3" onChange={this.habdleChange} name="userSkill">
       <option value="">Select Your Skill</option>
        <option value="php">PHP</option>
        <option value="javascript">Javascript</option>
        <option value="react">ReactJS</option>
        <option value="angular">AngularJS</option>
        <option value="laravel">Laravel</option>
       </select>
       <div className="mb-2"> 
      <div className="form-check form-check-inline">
       <input className="form-check-input" type="radio" name="programming_lang" id="inlineCheckbox1" onChange={this.habdleChange} value="php framework"/>
        <label className="form-check-label" htmlFor="inlineCheckbox1">Php Frameword</label>
       </div>
      <div className="form-check form-check-inline">
       <input className="form-check-input" type="radio" name="programming_lang" id="inlineCheckbox2" onChange={this.habdleChange} value="js framework"/>
        <label className="form-check-label" htmlFor="inlineCheckbox2">JS Frameword</label>
       </div>
      </div>
      <h3>Choose Your Options</h3>
      <div className="form-check form-check-inline">
       <input className="form-check-input" type="checkbox" name="tools" id="option_01" onChange={this.handleOptions} value="js" checked={this.state.tools.includes("js")}/>
       <label className="form-check-label" htmlFor="option_01">JS</label>
      </div>
      <div className="form-check form-check-inline">
       <input className="form-check-input" type="checkbox" name="tools" id="option_02" onChange={this.handleOptions} value="vuejs" checked={this.state.tools.includes("vuejs") }/>
       <label className="form-check-label" htmlFor="option_02" >Vue JS</label>
      </div>
      <div className="form-check form-check-inline">
       <input className="form-check-input" type="checkbox" name="tools" id="option_03" onChange={this.handleOptions} value="reactjs" checked={this.state.tools.includes("reactjs")} />
       <label className="form-check-label" htmlFor="option_03">React JS</label>
      </div>
      <div className="form-check form-check-block">
       <input className="form-check-input" type="checkbox" name="agree" id="inlineCheckbox3" onChange={(e)=>this.setState({agree: e.target.checked})} checked={this.state.agree}/>
        <label className="form-check-label" htmlFor="inlineCheckbox3">Agree With Terms And Condation</label>
       </div>

      <button className="btn btn-primary mt-2" disabled={!this.state.agree}>Submit </button>
        
     </div>
     <div className="col-md-4">
      <div className="results-wrapper">
       {this.state.userName ? <h3>{this.state.userName}</h3>: null}
       {this.state.userSkill ? <h6>your skilled in {this.state.userSkill}</h6> : null} 
       {this.state.programming_lang ? <h6>Favourite Language {this.state.programming_lang}</h6> : null}
       {this.state.tools ? <ul className="list-unstyled">
        {this.state.tools.map(tool=>(
         <li className="badge badge-success m-2">{tool}</li>
        ))}
        
        </ul> : null}
      </div>
     </div>
    </div>
   </div>
  );
 }
}

export default Inputs;