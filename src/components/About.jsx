import React from 'react'
import {useParams} from "react-router-dom"


const About = () => {

    const params = useParams();
    console.log(params)


  return (
    <div className='About'>

    <div class="accordion " id="accordionExample">
      <h1> <span class="badge bg-primary  my-4 mx-4">Education Details</span></h1>
    <div class="accordion-item ">
      <h2 class="accordion-header" id="headingOne">
        <button class="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
         Bachelor of Engineering
        </button>
      </h2>
      <div id="collapseOne" class="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <strong>Saraswati College of Engineering</strong> <br />  -Aug'18-June'21 <br /> 
          Mumbai University
          <p>Information Technology</p>
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingTwo">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Diploma Msbte
        </button>
      </h2>
      <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <strong>Vidyalankar Polytechnic</strong> 
         <p>Aug'15-June'18 <br /> MSBTE</p>
          <p>Information Technology</p>
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingThree">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
         SSC
        </button>
      </h2>
      <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
        <div class="accordion-body">
         
          <strong>St.Jude's High School</strong> <br /> - Jun'14-Apr'15 
          
        </div>
      </div>
    </div>
    
    <h1> <span class="badge bg-primary my-4 mx-4">Technical Skills</span></h1>
    <div class="row">
  <div class="col-sm-3 mx-3">
    <div class="card my-4">
      <div class="card-body">
        <h5 class="card-title">Languages</h5>
        <p class="card-text">JavaSript | C++ | C#</p>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card my-4">
      <div class="card-body">
        <h5 class="card-title">Frameworks</h5>
        <p class="card-text">ReactJs | NodeJs | ExpressJs</p>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card my-4">
      <div class="card-body">
        <h5 class="card-title">Databases </h5>
        <p class="card-text">MongdoDb | PostgreSql | Sql Server</p>
      </div>
    </div>
  </div>
  <div class="col-sm-4 mx-5">
    <div class="card my-3 mx-4">
      <div class="card-body">
        <h5 class="card-title"> Others</h5>
        <p class="card-text">Html5 | Css3 | Bootstrap | Git</p>
      </div>
    </div>
  </div>
</div>
   

  </div>
    </div>
  )
}

export default About
