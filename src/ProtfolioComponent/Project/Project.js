import React from 'react'
import PortfolioData from './PortfolioData';
import Card from './Card';
const Project = () => {
  return (
    <div>
      <section className="portfolio top" id="portfolio">
        <div className='container'>
          <div className='heading text-center'>
            <h4> VISIT MY PORTFOLIO AND GIVE YOUR FEEDBACK</h4>
            <h1> My Portfolio</h1>
          </div>
          <div className='content grid'>
            {PortfolioData.map((value, index) => {
              return <Card key={index} image={value.image} category={value.category} totalLike={value.totalLike} title={value.title} />
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Project
