const Navbar = () => {
  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-logo">CP</h1>
        </div>
        <ul className="hidden space-x-6 md:flex">
          <li>About</li>
          <li>Experience</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
        <a href="#">Resume</a>

        <button>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar