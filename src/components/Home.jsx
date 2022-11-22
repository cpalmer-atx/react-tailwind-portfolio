import profileImage from '../assets/profileImg.png'

const Home = () => {

  const styles = {
    home: 'relative container mx-auto pt-24 h-screen max-w-full bg-primary',
    homeContainer: 'flex flex-col py-8 px-6 justify-center items-center mx-auto h-full max-w-5xl md:flex-row',
    homeContent: 'flex flex-col text-secondaryTxt',
    imageContainer: ' drop-shadow-2xl pt-10',
    profile: 'p-1 mx-auto rounded-tr-3xl rounded-bl-3xl bg-secondaryTxt opacity-75 w-1/2 md:w-full'
  }
  const { home, homeContainer, homeContent, imageContainer, profile } = styles

  return (
    <section name='home' className={home}>
      <div className={homeContainer}>
        <div className={homeContent}>
          <h3 className='text-2xl text-center md:text-left'>Hi, my name is</h3>
          <h2 className='text-primaryTxt text-center md:text-left font-logo text-7xl py-2'>Chad Palmer</h2>
          <p className='py-4 pr-9 text-center md:text-left'>
            I'm a software developer bringing you digital solutions from the beautiful Texas hill country.  I specialize in web applications and development utilizing the latest technologies, and I'm always looking for likeminded developers to grow my experience with!
          </p>
        </div>
        <div className={imageContainer}>
          <img src={profileImage} className={profile} alt='me' />
        </div>
      </div>
    </section>
  )
}

export default Home