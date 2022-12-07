import React from 'react'
import './portfolio.css'
import ReactPlayer from 'react-player'


const portfolioItem = (props) => {
        return (
          <article key={props.id} className={`portfolioItem `}>
            <div className='portfolio_video'>
            <ReactPlayer
              className='react-player'
              url={`${props.video}`}
              controls={true}
              muted
              width='100%'
              height='100%'
            />
            </div>
            <div className='portfolio_title'>
                <h2>{props.title}</h2>
            </div>
            <div className='portfolio_shortText'>
                {/* <p>{props.text}</p> */}
            </div>           
          </article>
      )      
}

export default portfolioItem
