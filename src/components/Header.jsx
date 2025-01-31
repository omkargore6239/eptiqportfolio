import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-4 bg-blue-300 text-white">
      <img
        src="/eptiqlogo.jpeg"
        alt="Eptiq Technologies Logo"
        className="h-12"
      />

<a
          href="https://eptiq.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full shadow-md animate-pulse inline-block"
        >
          Visit Website
        </a>
      
    </header>
  );
}

export default Header;
