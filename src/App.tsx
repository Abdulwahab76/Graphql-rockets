import React,{useState} from 'react';
import {MissionInfoContainer} from "./components/missionInfo/index"
import {MissionContainer} from "./components/mission/index";
import Header from "./components/HEADER/Header"
import Title from './components/HEADER/Title'
import './App.css'
function App() {
  const Id=useState("25");

  return (
    <div className="App ">
      <Header />
<Title />

      <div className="py-4 back-blue">
       <div className="row py-4" style={{display: 'flex !important', flexDirection:'column', justifyContent: 'center',alignItems: 'center', width:'100%'}}>
         <div className="col-12 col-sm-12 py-4" style={{width:'77%'}}>
            
   <a href="#section2">  <div id="section1"> <MissionInfoContainer Id={Id}  /></div></a>


         </div>
         
         <div className="col-12 col-sm-7 py-4" style={{marginLeft:'15px'}}>
           <div className="py-4" id="section2" >  <MissionContainer Id={Id[0]} /></div>
       
    
      
               </div>
       </div>
      </div>

    
    </div>
  );
}

export default App;
