import React from 'react'

import './style.css'

const ProjectBig = () => {
  return (
    <article className="big-project">
      <div className="big-project-text">
        <div className="big-project-details">
          <div className="big-project-title">
            <span>Feature Project</span>
            <h3>Project Name</h3>
          </div>
          <div className="big-project-icons">
            <a href=""><img src="https://raw.githubusercontent.com/padronjosef/Icon-Portfolio-react/3b9cadea124e6438ca1f3554f966e6d27bc48989/icon-github-projects.svg" alt="link to repo"/></a>
            <a href=""><img src="https://raw.githubusercontent.com/padronjosef/Icon-Portfolio-react/3b9cadea124e6438ca1f3554f966e6d27bc48989/icon-external-link.svg" alt="like to live demo"/></a>
          </div>
        </div>
        <p>The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for.</p>
        <ul>
          <li><span>Stack</span></li>
          <li><span>Stack</span></li>
          <li><span>Stack</span></li>
        </ul>
      </div>
      <div className="big-project-img">
        <img src="https://raw.githubusercontent.com/padronjosef/Portfolio-Assets/main/img-project.webp" alt="project image"/>
      </div>
    </article>
  )
}

export default ProjectBig;