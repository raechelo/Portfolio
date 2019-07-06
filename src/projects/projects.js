import React from 'react';
import Slider from 'react-animated-slider';
import projectData from '../data';

export default function Projects() {

  // const displayProjects = (
  //   projectData.map((p, index) => (
  //     <div
  //       key={index}
  //       className='slider-content'
  //       style={{ background: `url('${p.imgLink}') no-repeat center center` }} >
  //         <div className="inner">
  //           <h1>{p.name}</h1>
  //           <p>{p.summary}</p>
  //           <button><a href={p.link}>View on Github</a></button>
  //         </div>
  //       <section>
  //         <span>
  //           Stack used <strong>{p.stack.map(s => (s))}</strong>
  //         </span>
  //       </section>
  //     </div>
  //   ))
  // )

  return (
    <section className="Projects">
      <h2>projects</h2>
      {/* <Slider className="slider-wrapper"> */}
        {
          // displayProjects
          'heyo'
        }
      {/* </Slider> */}
    </section>
  )
}