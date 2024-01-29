import React from 'react';
import "./displayData.css";
import Back from '../images/bg-img.png';
const DisplayData = () => {
  const storedDetails = localStorage.getItem('events');
  const details = JSON.parse(storedDetails);

  return (
    <div className='displayComp'>
      <h1>My Events</h1>
      {details && details.length > 0 ? (
        <ol className='display'>
          {details.map((event, index) => (
            <p key={index}  className='events'>
              {/* <p>Event {index + 1}:</p> */}
              <img className='image' src={Back} alt=''/>
              <div className='displays'>
              <div>
                <h4>{event.eMonth}</h4>
                <h1 style={{marginTop:'-1rem'}}>{event.eDay}</h1>
              </div>
              <div>
                <h3>{event.eName}</h3>
                <h4>{event.ePreview}</h4>
              </div>
              </div>
            </p>
          ))}
        </ol>
      ) : (
        <p>No user details available</p>
      )}
    </div>
  );
};
export default DisplayData;