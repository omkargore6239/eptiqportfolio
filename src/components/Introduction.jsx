import TypingEffect from 'react-typing-effect';

function Introduction() {
  return (
    <section className="relative bg-gradient-to-r from-blue-500 to-white text-white w-full min-h-screen flex items-center justify-center">
      <div className="text-center space-y-4 px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold animate-fadeInUp">
          Welcome to Eptiq Technologies
          {/* <span className="text-blue-700">
            <TypingEffect
              text={['Eptiq Technologies']} // Add the text you want to type
              speed={80} // Speed of typing (in ms)
              eraseDelay={100} // Delay before the text is erased
              cursorRenderer={(cursor) => <h1>{cursor}</h1>} // Customize the cursor
            />
          </span> */}
        </h2>
        <p className="text-lg md:text-xl font-light">
          Your trusted partner in delivering cutting-edge IT solutions, including
          <span className="font-bold"> Web Development</span>,
          <span className="font-bold"> App Development</span>, and <span className="font-bold"> Software Services</span>.
        </p>
        <a
          href="https://eptiq.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full shadow-md animate-pulse inline-block"
        >
          Learn More
        </a>
      </div>
    </section>
  );
}

export default Introduction;
