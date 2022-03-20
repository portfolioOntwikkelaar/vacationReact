import React from 'react'
import Destinations from './components/Destinations';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Search from './components/Search';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Destinations />
      <Search />
    </div>
  );
}

export default App;
