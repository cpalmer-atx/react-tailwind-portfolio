import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import react from '../assets/react.png'
import node from '../assets/node.png'
import tailwind from '../assets/tailwind.png'
import github from '../assets/github.png'
import mongodb from '../assets/mongodb.png'

const Skills = () => {

  const skills = [
    {
      src: html,
      title: 'HTML',
      color: 'shadow-orange-500'
    },
    {
      src: css,
      title: 'CSS',
      color: 'shadow-blue-500'
    },
    {
      src: javascript,
      title: 'JavaScript',
      color: 'shadow-yellow-500'
    },
    {
      src: react,
      title: 'React',
      color: 'shadow-blue-600'
    },
    {
      src: tailwind,
      title: 'TailwindCSS',
      color: 'shadow-sky-400'
    },
    {
      src: node,
      title: 'NodeJS',
      color: 'shadow-lime-500'
    },
    {
      src: mongodb,
      title: 'MongoDB',
      color: 'shadow-lime-300'
    },
    {
      src: github,
      title: 'GitHub',
      color: 'shadow-gray-400'
    },
  ]

  return (
    <div name='skills' className='relative container mx-auto p-6 py-80 lg:py-24 h-screen max-w-full bg-primary'>
      <div className='mx-auto p-4 flex flex-col justify-center w-full h-full max-w-5xl'>
        <div>
          <h1 className='text-primaryTxt text-4xl text-center md:text-left'>My Technologies</h1>
        </div>
        <div className='text-secondaryTxt w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
          {/* Reserved for skill cards */}
          {skills.map(({ src, title, color }) => (
            <div key={title} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${color}`}>
              <img src={src} alt="" className='w-20 mx-auto' />
              <p className='hidden mt-4 md:block'>{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills