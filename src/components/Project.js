import React from 'react';

export default function Project({ data }) {
  const { title, paragraphs, url, repo, images } = data;

  return (
    <div className="Project">
      <h1 className="Project__title"> {title} </h1>
      <section className="Project__paragraphs">
        {paragraphs.map(text => (
          <p key={text.length}>{text}</p>
        ))}
      </section>
      <video className="Project__video" autoPlay controls loop muted playsInline>
        <source src={images.webm} type="video/webm" />
        <source src={images.mp4} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="Project__links">
        <a href={url} target="_blank" rel="noreferrer"> Live </a>
        <a href={repo} target="_blank" rel="noreferrer"> Repo </a>
      </div>
    </div>
  )
}
