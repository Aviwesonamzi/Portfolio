import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gray-800 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-teal-400">Aviwe's Portfolio</h1>
        <nav className="space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'text-teal-400 font-semibold' : 'text-gray-300 hover:text-white transition'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? 'text-teal-400 font-semibold' : 'text-gray-300 hover:text-white transition'
            }
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? 'text-teal-400 font-semibold' : 'text-gray-300 hover:text-white transition'
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              isActive ? 'text-teal-400 font-semibold' : 'text-gray-300 hover:text-white transition'
            }
          >
            Portfolio
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? 'text-teal-400 font-semibold' : 'text-gray-300 hover:text-white transition'
            }
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;