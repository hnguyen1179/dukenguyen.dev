import React, { useContext } from 'react'

import PortfolioContext from '../context/context';
import Title from '../components/Title'
import Footer from '../components/Footer'
import Project from '../components/Project';

export default function Projects() {
  const { projectsData } = useContext(PortfolioContext);

  const renderProjects = (
    projectsData.projects.map(project => (
      <Project key={project.id} data={project} />
    ))
  )

  return (
    <div className="Projects page">
      <Title />
      <main className="Projects__main page__content">
        {renderProjects}
      </main>
      <Footer />
    </div>
  )
}
