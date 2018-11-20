import React from "react";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./Memberpage.css";
import ilseopimg from "../img/ilseop.jpg";
import geonhoimg from "../img/geonho.jpg";
import jjungimg from "../img/jjung.jpg";

const Memberpage = () => {
  return (
    <section className="team-section text-center my-5">
      <div className="member-navbar member-sticky">
        <a href="https://master.cerebroscholar.com">Back</a>
      </div>

      <h2 className="h1-responsive font-weight-bold my-5">Meet the team!</h2>
      <p className="grey-text w-responsive mx-auto mb-5">
        We are interested in building efficient research ecosystem with data.
      </p>

      <div className="row">
        <div className="col-lg-4 col-md-6 mb-lg-0 mb-5">
          <div className="avatar mx-auto">
            <img
              src={geonhoimg}
              className="rounded-circle z-depth-1 ilseop"
              alt="Sample avatar"
            />
          </div>
          <h5 className="font-weight-bold mt-4 mb-3">GeonHo Han</h5>
          <p className="text-uppercase blue-text">
            <strong>Web & Dev Ops & AWS</strong>
          </p>
          <p className="grey-text">
            Code Base management, Integrations, CI/CD System in this project.{" "}
            <br /> Interests are in Data.
            <br />{" "}
          </p>
          <ul className="list-unstyled mb-0">
            <a className="p-2 fa-lg fb-ic" href="https://github.com/hrg921">
              <i className="fa fa-github blue-text"> </i>
            </a>
            <a className="p-2 fa-lg mail-ic" href="mailto:hrg921@gmail.com">
              <i className="fa fa-envelope blue-text"> </i>
            </a>
            <a
              className="p-2 fa-lg resume-ic"
              href="https://hrg921.github.io/resume/"
            >
              <i className="fa fa-file blue-text"> </i>
            </a>
          </ul>
        </div>

        <div className="col-lg-4 col-md-6">
          <div className="avatar mx-auto">
            <img
              src={jjungimg}
              className="rounded-circle z-depth-1 ilseop"
              alt="Sample avatar"
            />
          </div>
          <h5 className="font-weight-bold mt-4 mb-3">JUNG EUN KIM</h5>
          <p className="text-uppercase blue-text">
            <strong>Team Leader. Data Analysis & Visualization</strong>
          </p>
          <p className="grey-text">
            I love to solve an everyday problem and building solutions. <br />
            Skillset : Deep Learning, Find Insights from data.
            <br />
            Cerebro will be go on, email below to contact continuous-project.
            <br />
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
            Data Collecting & Management, Developing API on AWS.<br />
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
            <a className="p-2 fa-lg" href="mailto:ls123kr@naver.com">
              <i className="fa fa-envelope blue-text"> </i>
            </a>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Memberpage;
