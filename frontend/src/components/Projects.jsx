import reactTailwindExpress from '../assets/react-tailwind-express.png'

const Projects = () => {

  const styles = {
    projectsComponent: 'relative container mx-auto p-6 py-80 lg:py-24 h-screen max-w-full bg-primary',
    projectsContainer: 'mx-auto p-4 flex flex-col justify-center w-full h-full max-w-5xl',
    header: 'text-primaryTxt text-4xl text-center md:text-left',
    description: 'py-4 pr-9 text-secondaryTxt text-center text-sm md:text-left',
    projectsGrid: 'text-secondaryTxt w-full grid justify-center grid-cols-1 sm:grid-cols-3 gap-8 text-center py-8 px-8 sm:px-0',
    projectCard: 'shadow-md min-w-min md:max-w-min shadow-gray-600 rounded-lg',
    projectImg: 'rounded-md duration-200 hover:scale-105',
    cardBtnContainer: 'flex items-center justify-center',
    cardButton: 'w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'
  }
  const { projectsComponent, projectsContainer, header, description, projectsGrid, projectCard, projectImg, cardBtnContainer, cardButton } = styles;

  const content = {
    header: 'Featured Projects',
    content: "Visit the code for a detailed description of technologies used found in the README.md file.",
  }

  const projects = [
    {
      src: reactTailwindExpress,
      demoURL: 'https://www.cnpalmer.com',
      codeURL: 'https://github.com/cpalmer-atx/react-tailwind-portfolio'
    },
  ]

  return (
    <div name='projects' className={projectsComponent}>
      <div className={projectsContainer}>
        <div>
          <h1 className={header}>{content.header}</h1>
          <p className={description}>{content.content}</p>
        </div>
        <div className={projectsGrid}>
          {projects.map(({ src, demoURL, codeURL }) => (
            <div key={src} className={projectCard}>
              <img src={src} alt="" className={projectImg} />
              <div className={cardBtnContainer}>
                <button 
                  onClick={() => window.open(demoURL, '_blank', null)}
                  className={cardButton}
                  >Demo
                </button>
                <button 
                  onClick={() => window.open(codeURL, '_blank', null)}
                  className={cardButton}
                  >Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects