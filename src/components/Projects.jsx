import React from 'react'
// import {Link} from 'react-router-dom'

const Projects = () => {
  return (
    <>
    <div className='Projects'>
    <h1> <span class="badge bg-primary  my-3 mx-2 ">Projects</span></h1>

 <div className="row justify-content-center">
  <div className="col-sm-5">
    <div className="card my-3 shadow-lg p-2 mb-3 bg-body rounded">
      <div className="card-body ">
        <h5  className="card-title">Movie-App-React </h5>
        <br />
        <p className="card-text">Search for movies with this app built on react using api</p>
        <a target={'_blank'} rel="noreferrer" href="https://github.com/mujtaba07/
Movie-App-React" className="btn btn-primary">Repository</a>
        <a target={'_blank'} rel="noreferrer" href="https://movie-app-reactaeiou.netlify.app/" className="btn btn-primary mx-4">Deployment Link</a>
      </div>
    </div>
  </div>
  <div className="col-sm-5">
    <div className="card my-3 shadow-lg p-2 mb-3 bg-body rounded">
      <div className="card-body ">
        <h5  className="card-title">Excuse Generator-React </h5>
        <br />
        <p className="card-text">Generate random excuses</p>
        <a target={'_blank'} rel="noreferrer" href="https://github.com/mujtaba07/Excuse-Generator-React" className="btn btn-primary">Repository</a>
        <a target={'_blank'} rel="noreferrer" href="https://fakeexcuses.netlify.app/" className="btn btn-primary mx-4">Deployment Link</a>
      </div>
    </div>
  </div>
  <div className="col-sm-5">
    <div className="card my-3 shadow-lg p-2 mb-3 bg-body rounded">
      <div className="card-body ">
        <h5  className="card-title">To-do-list-React</h5>
        <br />
        <p className="card-text">Add your daily tasks</p>
        <a target={'_blank'} rel="noreferrer" href="https://github.com/mujtaba07/TodoList-Using-React" className="btn btn-primary">Repository</a>
        <a target={'_blank'} rel="noreferrer" href="https://dailytascs-app.netlify.app/" className="btn btn-primary mx-4">Deployment Link</a>
      </div>
    </div>
  </div>
  <div className="col-sm-5">
    <div className="card card my-3 shadow-lg p-3 mb-2 bg-body rounded ">
      <div className="card-body">
        <h5 className="card-title">TextUtils-React</h5>
        <p className="card-text">Play around with your text using this web app</p>
        <a target={'_blank'} rel="noreferrer" href="https://github.com/mujtaba07/TextUtils-React" className="btn btn-primary">Repository</a>
        <a target={'_blank'} rel="noreferrer" href="https://text-utilitee.netlify.app/" className="btn btn-primary mx-4">Deployment Link</a>
        {/* <button > <a  href="https://textgenerator46.netlify.app/" ></a>Deployment Link</button> */}
      </div>
    </div>
  </div>
</div>
<div className="row justify-content-center">
  <div className="col-sm-5">
    <div className="card card my-3 shadow-lg p-3 mb-2 bg-body rounded">
      <div className="card-body">
        <h5 className="card-title">Youtube Clone</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a target={'_blank'} rel="noreferrer" href="https://github.com/mujtaba07/Youtube-Clone" className="btn btn-primary">Repository</a>
        <a target={'_blank'} rel="noreferrer" href="https://mujtaba07.github.io/Youtube-Clone/" className="btn btn-primary mx-4">Deployment Link</a>
      </div>
    </div>
  </div>
  <div className="col-sm-5">
    <div className="card card my-3 shadow-lg p-3 mb-2 bg-body rounded">
      <div className="card-body">
        <h5 className="card-title">Login-Form-asp.net</h5>
        <p className="card-text">Enter the employee details and signup using the form</p>
        <a target={'_blank'} rel="noreferrer" href="https://github.com/mujtaba07/CrudOperation" className="btn btn-primary">Repository</a>
      </div>
    </div>
  </div>
</div>
    </div>
  </>
  )
}

export default Projects
