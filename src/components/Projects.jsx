import reactTailwindExpress from '../assets/react-tailwind-express.png'

const Projects = () => {

  const projects = [
    {
      src: reactTailwindExpress,
      demo: '',
      code: 'https://github.com/cpalmer-atx/react-tailwind-portfolio'
    }
  ]
  return (
    <div name='projects' className='relative container mx-auto p-6 py-80 lg:py-24 h-screen max-w-full bg-primary'>
      <div className='mx-auto p-4 flex flex-col justify-center w-full h-full max-w-5xl'>
        <div>
          <h1 className='text-primaryTxt text-4xl text-center md:text-left'>Featured Projects</h1>
          <p className='py-4 pr-9 text-secondaryTxt text-center text-sm md:text-left'>Visit the code for a detailed description of technologies used found in the README.md file.</p>
        </div>
        <div className='text-secondaryTxt w-full grid justify-center grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
          {/* Reserved for project cards */}
          {projects.map(({ src, demo, code }) => (
            <div key={src} className='shadow-md min-w-min md:max-w-min shadow-gray-600 rounded-lg'>
              <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
              <div className='flex items-center justify-center'>
                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects