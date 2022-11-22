const About = () => {
  return (
    <div name='about' className="relative container mx-auto p-6 pt-24 h-screen max-w-full bg-primary">
      <div className="flex flex-col p-8 justify-center mx-auto h-full max-w-5xl">
        <h1 className="text-primaryTxt text-4xl text-center md:text-left">About Me</h1>
        <p className="text-secondaryTxt text-sm text-center md:text-left pt-4">
          Originally from the Pacific Northwest, I relocated to Southern California after high school and enlisted in the United States Coast Guard shortly after.  As a coastie, I specialized in vessel inspections with an emphasis on engineering and cargo systems.  After three tours in San Diego, Miami, and Long Beach, I relocated to Austin where I received a BS in Computer Science minoring in Applied Mathematics from Texas State University. When asked why I switched to software, I always describe it as engineering with unlimited potential, and I've always had an aptitude for it building computers in my earlier years.  I currently reside in Spring Branch, TX with my wife Cynthia and our two boys, Chase and Christopher.  
        </p>
      </div>
    </div>
  )
}

export default About