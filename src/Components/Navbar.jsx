import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navitems = ['Home', 'Pages', 'Pricing', 'Portfolio', 'Blog', 'Contact']

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <header className="container mx-auto px-4 py-4 my-3 flex items-center justify-around">
      {/* Logo */}
      <div className="flex items-center">
        <span className="text-blue-700 font-bold text-2xl">
          <img src="/img/Logo.png" alt="Logo" className="h-8" />
        </span>
      </div>

      {/* Hamburger for mobile & tablet */}
      <div className="lg:hidden">
        <button onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Desktop Nav (visible only on lg and up) */}
      <nav className="hidden lg:flex items-center space-x-8">
        {navitems.map((navitem) => (
          <Link
            key={navitem}
            to={`/${navitem.toLowerCase()}`}
            className="secondary-font font-normal hover:text-[#3921F5] hover:font-bold hover:border-b-2"
          >
            {navitem}
          </Link>
        ))}
      </nav>

      {/* CTA Button (only on large screens) */}
      <button className="hidden lg:block bg-[#3921F5] secondary-font text-white px-4 py-3 rounded-lg hover:bg-black transition-colors duration-300 cursor-pointer">
        Get Started Free
      </button>

      {/* Mobile/Tablet Menu */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-white px-4 py-4 flex flex-col items-start space-y-4 shadow-md lg:hidden z-50">
          {navitems.map((navitem) => (
            <Link
              key={navitem}
              to={`/${navitem.toLowerCase()}`}
              className="w-full text-left secondary-font font-normal hover:text-[#3921F5] hover:font-bold"
              onClick={() => setIsOpen(false)}
            >
              {navitem}
            </Link>
          ))}
          <button className="bg-[#3921F5] secondary-font text-white w-full px-4 py-3 rounded-lg hover:bg-black  transition-colors duration-300 cursor-pointer">
            Get Started Free
          </button>
        </div>
      )}
    </header>
  )
}

export default Navbar
