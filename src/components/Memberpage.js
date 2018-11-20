import React from "react";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./Memberpage.css"
import ilseopimg from '../img/ilseop.jpg'
import geonhoimg from '../img/geonho.jpg'

const Memberpage = () => {
  return (
    <section className="team-section text-center my-5">
      <div className="member-navbar member-sticky">
        <a href="https://master.cerebroscholar.com">Back</a>
      </div>

      <h2 className="h1-responsive font-weight-bold my-5">
        Members Introduction
      </h2>
      <p className="grey-text w-responsive mx-auto mb-5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error
        amet numquam iure provident voluptate esse quasi, veritatis totam
        voluptas nostrum quisquam eum porro a pariatur veniam.
      </p>

      <div className="row">
        <div className="col-lg-4 col-md-6 mb-lg-0 mb-5">
          <div className="avatar mx-auto">
            <img
              src="https://mdbootstrap.com/img/Photos/Avatars/img%20(3).jpg"
              className="rounded-circle z-depth-1"
              alt="Sample avatar"
            />
          </div>
          <h5 className="font-weight-bold mt-4 mb-3">John Doe</h5>
          <p className="text-uppercase blue-text">
            <strong>Web developer</strong>
          </p>
          <p className="grey-text">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem ipsa
            accusantium doloremque rem laudantium totam aperiam.
          </p>
          <ul className="list-unstyled mb-0">
            <a className="p-2 fa-lg fb-ic">
              <i className="fa fa-facebook blue-text"> </i>
            </a>
            <a className="p-2 fa-lg ins-ic">
              <i className="fa fa-instagram blue-text"> </i>
            </a>
          </ul>
        </div>

		    <div className="col-lg-4 col-md-6 mb-lg-0 mb-5">
		      <div className="avatar mx-auto">
		        <img src={geonhoimg} className="rounded-circle z-depth-1 ilseop"
		          alt="Sample avatar" />
		      </div>
		      <h5 className="font-weight-bold mt-4 mb-3">GeonHo Han</h5>
		      <p className="text-uppercase blue-text"><strong>Web & Dev Ops & AWS</strong></p>
		      <p className="grey-text">Code Base management, Integrations, CI/CD System in this project. <br/> Interests are in Data.
						<br/>  </p>
		      <ul className="list-unstyled mb-0">
		                <a className="p-2 fa-lg fb-ic" href="https://github.com/hrg921">
		          <i className="fa fa-github blue-text"> </i>
		        </a>
		                <a className="p-2 fa-lg mail-ic" href="mailto:hrg921@gmail.com">
		          <i className="fa fa-envelope blue-text"> </i>
		        </a>
						<a className="p-2 fa-lg resume-ic" href="https://hrg921.github.io/resume/">
							<i className="fa fa-file blue-text"> </i>
						</a>
		      </ul>
		    </div>
		    
		    <div className="col-lg-4 col-md-6 mb-md-0 mb-5">
		      <div className="avatar mx-auto">
		        <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg" className="rounded-circle z-depth-1"
		          alt="Sample avatar" />
		      </div>
		      <h5 className="font-weight-bold mt-4 mb-3">Maria Smith</h5>
		      <p className="text-uppercase blue-text"><strong>Photographer</strong></p>
		      <p className="grey-text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
		        mollit anim est fugiat nulla id eu laborum.</p>
		      <ul className="list-unstyled mb-0">
		                <a className="p-2 fa-lg fb-ic">
		          <i className="fa fa-facebook blue-text"> </i>
		        </a>
		                <a className="p-2 fa-lg ins-ic">
		          <i className="fa fa-instagram blue-text"> </i>
		        </a>
		                <a className="p-2 fa-lg ins-ic">
		          <i className="fa fa-dribbble blue-text"> </i>
		        </a>
		      </ul>
		    </div>
		    
		    <div className="col-lg-4 col-md-6">
		      <div className="avatar mx-auto">
		        <img src={ilseopimg} className="rounded-circle z-depth-1 ilseop" alt="ilseop" />
		      </div>
		      <h5 className="font-weight-bold mt-4 mb-3">IL SEOP LEE</h5>
		      <p className="text-uppercase blue-text"><strong>Data Engineering & Backend API</strong></p>
		      <p className="grey-text">I'm interested in Data Engineering, Information Retrieval, Natural Language Processing.</p>
		      <ul className="list-unstyled mb-0">
		        {/*<a className="p-2 fa-lg fb-ic">
        <div className="col-lg-4 col-md-6 mb-md-0 mb-5">
          <div className="avatar mx-auto">
            <img
              src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
              className="rounded-circle z-depth-1"
              alt="Sample avatar"
            />
          </div>
          <h5 className="font-weight-bold mt-4 mb-3">JUNG EUN KIM</h5>
          <p className="text-uppercase blue-text">
            <strong>Team Leader. Data Analysis & Visualization</strong>
          </p>
          <p className="grey-text">
            I'm interesed in making a world a better place by solving an
            everyday problem. <br />
            This project will be go on to build efficient research ecosystem. If
            Cerebro helped you please email below!:)
          </p>
          <ul className="list-unstyled mb-0">
            {/* <a className="p-2 fa-lg fb-ic">
              <i className="fa fa-facebook blue-text"> </i>
            </a>
            <a className="p-2 fa-lg ins-ic">
              <i className="fa fa-instagram blue-text"> </i>
            </a>
            <a className="p-2 fa-lg ins-ic">
              <i className="fa fa-dribbble blue-text"> </i>
						</a> */}
            <a className="p-2 fa-lg" href="mailto:cerebro.scholar0@gmail.com">
              <i className="fa fa-envelope blue-text"> </i>
            </a>
            <a className="p-2 fa-lg" href="https://github.com/jjunghub">
              <i className="fa fa-github blue-text"> </i>
            </a>
          </ul>
        </div>

        <div className="col-lg-4 col-md-6">
          <div className="avatar mx-auto">
            <img
              src={ilseopimg}
              className="rounded-circle z-depth-1 ilseop"
              alt="ilseop"
            />
          </div>
          <h5 className="font-weight-bold mt-4 mb-3">IL SEOP LEE</h5>
          <p className="text-uppercase blue-text">
            <strong>Data Engineering & Backend API</strong>
          </p>
          <p className="grey-text">
            I'm interested in Data Engineering, Information Retrieval, Natural
            Language Processing.
          </p>
          <ul className="list-unstyled mb-0">
            {/*<a className="p-2 fa-lg fb-ic">
		          <i className="fa fa-facebook blue-text"> </i>
		        </a>
		    	*/}
            <a className="p-2 fa-lg ins-ic" href="https://github.com/lis123kr">
              <i className="fa fa-github blue-text"> </i>
            </a>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Memberpage;
