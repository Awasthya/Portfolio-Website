import React from "react"
import "./Resume.css"
import ResumeApi from "./ResumeApi"
import Card from "./Cards"

const Resume = () => {
  return (
    <>
      <section className='Resume' id='resume'>
        <div className='container top'>
          <div className='heading text-center'>
            <h1>My Resume</h1>
          </div>

          <div className='content-section mtop '>
              <div className='heading'>
                <h4>2007-2010</h4>
                <h1>Education 📚</h1>
              </div>

              <div className='content'>
                {ResumeApi.map((val, id) => {
                  if (val.category === "education") {
                      return <Card key={id} college={val.college}  title={val.title} CGPA={val.CGPA} startDate={val.startDate} endDate={val.endDate} Location={val.Location} />
                  }
                })}

                {/*<div className='box btn_shadow'>
                  <div className='title_content d_flex'>
                    <div className='title'>
                      <h2>Personal Portfolio April Fools</h2>
                      <span>University of DVI (1997 - 2001)</span>
                    </div>
                    <div className='rate'>
                      <button className='btn_shadow '>4.30/5</button>
                    </div>
                  </div>
                  <hr />
                  <p> The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.</p>
                </div>*/}
              </div>
            </div>
            <div className='content-section mtop '>
              <div className='heading'>
                <h4>2007-2010</h4>
                <h1>Experience 💻 </h1>
              </div>

              <div className=''>
                {ResumeApi.map((val, id) => {
                  if (val.category === "experiance") {
                      return <Card key={id} college={val.company}  title={val.Desgination} CGPA={val.Desc} startDate={val.startDate} endDate={val.endDate} Location={val.Location} />
                  }
                })}

                {/*<div className='box btn_shadow'>
                  <div className='title_content d_flex'>
                    <div className='title'>
                      <h2>Personal Portfolio April Fools</h2>
                      <span>University of DVI (1997 - 2001)</span>
                    </div>
                    <div className='rate'>
                      <button className='btn_shadow '>4.30/5</button>
                    </div>
                  </div>
                  <hr />
                  <p> The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.</p>
                </div>*/}
              </div>
            </div>
          </div>
      </section>
    </>
  )
}

export default Resume