import React from "react";
import { withRouter } from "react-router-dom";
import Reveal from 'react-reveal/Reveal';

import Abouthome from '../components/Abouthome';
import Carouselclient from '../components/Carouselclient';
import Carouselclientb from '../components/Carouselclientb';
import Carouselteam from '../components/Carouselteam';
import Accomplish from '../components/Accomplish';
import Carouselprojects from '../components/Carouselprojects';
import Footer from '../components/Footer';

import { Efect, Efect1, Efect2  } from "../styles/effect.styles";
  

const About = ({ history }) => {

  return (
    <div>
      <Efect/>
      <Efect1/>
      <Efect2/>

      <div className="jumbotron head"/>

      <Reveal effect="fadeIn">
        <section className='jumbotron imgtop'>
        	<img
	          src="./img/imgabout.jpg"
	          className="img-fluid"
	          alt="#"
	        />
        </section>
       </Reveal>

      <Reveal effect="fadeIn">
        <section className='container-fluid pb-0'>
	        <div className='row m-2-hor'>
	        	<div className='col-md-4'>
	        		<h1>About Interior Designs</h1>
	        	</div>
	        	<div className='col-md-8'>
	        		<div className='content'>Donec posuere bibendum metus. 
	        		Quisque gravida luctus volutpat mauris interdum lectus 
	        		in dapibus molestie quam felis sollicitudin amet tempus velit 
	        		lectus nec lorem. Nullam vel mollis neque. 
	        		Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
	        		Nullam vel enim dui. Cum sociis natoque penatibus et magnis 
	        		dis parturient montes ridiculus mus. Vestibulum cursus convallis 
	        		venenatis. Sed ut blandit mauris. 
	        		</div>
	        	</div>
	        </div>
	    </section>
	   </Reveal>

	  <Reveal effect="fadeInUp">
        <Abouthome/>
      </Reveal>

	<section className='container-fluid bggray mt-5 pb-0'>
	  <div className='row m-2-hor'>
	    <div className='col-12'>
	      <Carouselclient/>
	    </div>
	  </div>
	</section>

	<section className='container-fluid bggray'>
	  <div className='row m-2-hor'>
	    <div className='col-12'>
	      <Carouselclientb/>
	    </div>
	  </div>
	</section>

      <Reveal effect="fadeInUp">
        <section className='container-fluid'>
          <div className='row m-2-hor'>
            <div className='col-12'>
              <div className='heading'>Our Team</div>
            </div>
            <div className='col-12'>
              <Carouselteam/>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal effect="fadeInUp">
        <Accomplish/>
      </Reveal>

      <Reveal effect="fadeInUp">
        <section className='container-fluid py-0'>
          <div className='row m-2-hor'>
            <div className='col-12'>
              <div className='heading'>Our Projects</div>
            </div>
          </div>
          <div className='row'>
            <div className='col-12 p-0'>
              <Carouselprojects/>
            </div>
          </div>
        </section>
      </Reveal>

      <Footer />

    </div>
    
  );
};

export default withRouter(About);
