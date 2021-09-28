import React from "react";
import { withRouter } from "react-router-dom";
import emailjs from 'emailjs-com';
import Reveal from 'react-reveal/Reveal';

import SimpleMap from '../components/Map';
import Footer from '../components/Footer';

import { Efect, Efect1, Efect2  } from "../styles/effect.styles";
  

const Contact = ({ history }) => {

    function sendEmail(e) {
    const success = document.getElementById("success");
    const button = document.getElementById("buttonsent");
    const failed = document.getElementById("failed");
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_csfdEZiA', e.target, 'user_zu7p2b3lDibMCDutH5hif')
      .then((result) => {
          console.log(result.text);
          success.classList.add('show');
          button.classList.add('show');
          failed.classList.remove('show');
      }, (error) => {
          console.log(error.text);
          failed.classList.add('show');
      });
  }  

  return (
    <div>
      <Efect/>
      <Efect1/>
      <Efect2/>

      <div className="jumbotron head"/>

      <Reveal effect="fadeInUp">
       <section className='container'>
          <div className='row'>
            <div className='col-12'>
              <h1>Get in touch with us to design <br/>your <span className='color'>dream</span> home</h1>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal effect="fadeInUp">
       <section className='container pt-0'>
          <div className='row'>
            <div className='col-12'>
              <SimpleMap/>
            </div>
            <div className='col-md-6'>
            <div className="text-side">
              <h3 className="heading">Talk with our expert designers </h3>
              <p>Vestibulum volutpat, lacus a ultrices sagittis, 
              mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. <br/>
              Phasellus pede arcu, dapibus eu, fermentum et, 
              dapibus sed, urna.</p>
              <div className='address'>
                <div className='heading'>Our Office</div>
                <div className='list'>
                  <i className="fa fa-map-marker"></i>
                  70 Washington Square South New York, NY 10012, United States
                </div>
                <div className='list'>
                  <i className="fa fa-envelope-o"></i>
                  <a href='mailto:contact_info@homekins.com' target='_blank' rel='noopener noreferrer'>
                    contact_info@homekins.com
                  </a>
                </div>
                <div className='list'>
                  <i className="fa fa-phone"></i>
                  +92 423 567 7
                </div>
                </div>
              </div>
            </div>

            <div className='col-md-6'>
            <div className="form-side">
              <form className="formcontact" onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" required />
                <label>Email</label>
                <input type="email" name="user_email" required />
                <label>Message</label>
                <textarea name="message" required />
                <div id='success' className='hide'>Your message has been sent...</div>
                <div id='failed' className='hide'>Message failed...</div>
                <button type="submit" id='buttonsent'>
                  <span className="shine"></span>
                  <span>Send</span>
                </button>
              </form>
            </div>
          </div>


          </div>
       </section>
      </Reveal>

      

      <Footer />

    </div>
    
  );
};

export default withRouter(Contact);
