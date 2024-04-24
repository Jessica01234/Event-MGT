import React from "react";
import './registerComp.css';
import REGISTER from '../images/Rectangle 14.png';
import { Link } from 'react-router-dom';
import NavBar from "../NAVBAR/navbar";
import { WhatsappShareButton, TelegramShareButton, FacebookShareButton } from 'react-share';
import ShareImage from "../images/Share-Icons.jpg";

function VirtualRegisterForms() {
  const events = localStorage.getItem('VirtualEvents');
  const eventsparse = JSON.parse(events) || [];

  function renderShareButtons(event) {
    const location = event.eLocation;
    const decodedLink = decodeURIComponent('https://event-hubs.vercel.app/register');
    const shareMessage = `Check out my upcoming ${event.eName} event on ${event.eDay} at ${event.eLocation}. It's about: ${event.ePreview}. Link: ${decodedLink}`;

    if (location === 'WhatsApp') {
      return (
        <WhatsappShareButton
          url={`whatsapp://send?text=${decodeURIComponent(shareMessage)}`}
          title={event.eName}
          separator=" - "
        >
          <button className='shareBtn'><img src={ShareImage} alt=""/></button>
        </WhatsappShareButton>
      );
    } else if (location === 'Telegram') {
      return (
        <TelegramShareButton
          url={`telegram://send?text==${decodeURIComponent(shareMessage)}`}
          title={event.eName}
          separator=" - "
        >
           <button className='shareBtn'><img src={ShareImage} alt=""/></button>
        </TelegramShareButton>
      );
    } else if (location === 'Facebook') {
      return (
        <FacebookShareButton
          url={`facebook://send?text=${decodeURIComponent(shareMessage)}`}
          title={event.eName}
          separator=" - "
        >
           <button className='shareBtn'><img src={ShareImage} alt=""/></button>
        </FacebookShareButton>
      );
    }
    return null;
  }
  

  return (
    <>
      <NavBar cName="VRNav" />
      <div className="MainAncestor">
        {eventsparse.length > 0 ? (
          <nav className="ancestor">
            <aside className="aside">
              <h1>
                <Link to={'/register'}>INPERSON</Link>
              </h1>
              <h1>
                <Link to={'/virtualRegister'} className={`${window.location.pathname === '/virtualRegister' ? 'active' : ''}`}>VIRTUAL</Link>
              </h1>
              <h1>
                <Link to={'/hybridRegister'}>HYBRID</Link>
              </h1>
            </aside>

            <div>
              <h1 className="GrandFatherh1">My Virtual Events</h1>
              <div className="reg">
                {eventsparse.map((event, index) => (
                  <div key={index} className="registerComp">
                    <div className="register">
                      <h1>Register For {event.eName}</h1>
                      <img src={event.eImage} alt="" />
                      <section style={{ display: "flex", flexDirection: "column", alignItems: "center", border: "1px solid #ccc",borderRadius: "6px", padding: "20px", margin: "10px" }}>
                        <h4>Happening On {event.eDay}</h4>
                        <h4>At {event.eLocation}</h4>
                      </section>
                     <section className="btnSection">
                     <Link to={`/VirtualEventForm/${event.id}`} className="reg-btn"> 
                          Register Now
                      </Link>
                          {renderShareButtons(event)}
                     </section>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </nav>
        ) : (
          <section className="GrandFather">
            <aside className="aside">
              <h1>
                <Link to={'/register'}>INPERSON</Link>
              </h1>
              <h1>
                <Link to={'/virtualRegister'} className={`${window.location.pathname === '/virtualRegister' ? 'active' : ''}`}>VIRTUAL</Link>
              </h1>
              <h1>
                <Link to={'/hybridRegister'}>HYBRID</Link>
              </h1>
            </aside>
            <div className="father">
              <div className="ImageContainer animate__animated animate__fadeIn">
                <img className="child1" src={REGISTER} alt="" />
              </div>
              <nav className="mother animate__animated animate__fadeInUp">
                <h1 className="child2">Your Event(s)</h1>
                <p className="child3">You don't have any event to Register</p>
                <button className="child4">
                  <Link to={'/createEvent'}>Create Now</Link>
                </button>
              </nav>
            </div>
          </section>
        )}
      </div>
    </>
  );
}

export default VirtualRegisterForms;
