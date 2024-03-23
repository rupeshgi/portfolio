import React from 'react'
import experience from './data/experience.json'

export default function Experience() {
  return (
    <>
      <div className="container exp" id="exp">
        <h1>EXPERIENCE</h1>
          {
            experience.map((data) => {
              return(
                <>
                  <div key={data.id} className="exp-items text-center my-5" data-aos="zoom-in" data-aos-duration="1000">
                    <div className="left">
                      <img src={`/assets/${data.imgSrc}`} alt="logo" />
                    </div>
                    <div className="right">
                      <h2>{data.role}</h2>
                      <h4><span className='exp-duration'>{data.startDate} {" "} {data.endDate} </span> {" "}<span className='location'>{data.location}</span></h4>
                      <h5 className="location">{data.experience[0]}</h5>
                      <h5 className="location">{data.experience[1]}</h5>
                    </div>
                     
                  </div>
                </>
              )

            }
          )}


      </div>
    </>
  )
}
