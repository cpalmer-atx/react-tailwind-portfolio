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
      color: '#00ED64'
    },
    {
      src: mongodb,
      title: 'MongoDB',
      color: '#00ED64'
    },
    {
      src: github,
      title: 'GitHub',
      color: 'shadow-gray-400'
    },
  ]

  return (
    <div name='skills' className='relative container mx-auto p-6 pt-24 h-screen max-w-full bg-primary'>
      <div>
        <div>
          <h2>My technologies</h2>
        </div>
        <div>
          {/* Reserved for skill cards */}
        </div>
      </div>
    </div>
  )
}

export default Skills