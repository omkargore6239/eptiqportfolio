import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-4 bg-blue-300 text-white">
      <img
        src="/eptiqlogo.jpg"
        alt="Eptiq Technologies Logo"
        className="h-12"
      />
      
    </header>
  );
}

export default Header;
