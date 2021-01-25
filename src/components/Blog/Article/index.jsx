import React from 'react';

import './style.css'

const Article = () => {
  return (
    <article className="blogs">
      <div className="img-container">
        <img src="https://raw.githubusercontent.com/padronjosef/Portfolio-Assets/main/img-project.webp" alt="Blog image"/>
      </div>
      <div className="blog-details">
        <time>25 march 2019</time>
        <h3>Lorem Ipsum</h3>
        <p>The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by</p>
      </div>
    </article>
  )
}

export default Article;