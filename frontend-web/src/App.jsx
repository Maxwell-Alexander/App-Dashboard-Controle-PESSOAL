import './App.css'

import Navbar from './layouts/Navbar';
import Sidebar from './layouts/Sidebar';
import Container from './layouts/Container';



function App() {

  return (
    <>
      <span className='boxNavbar' id='boxNavbar'>
        <Navbar />
      </span>
      <span className='boxSidebar' id='boxSidebar'>
        <Sidebar />
      </span>
      <span className='boxContainer' id='boxContainer'>
        <Container />
      </span>
    </>
  );
}

export default App;
