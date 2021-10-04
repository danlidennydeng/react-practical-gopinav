import { HiAcademicCap } from "react-icons/hi"
import { MdApi } from "react-icons/md"

import { IconContext } from 'react-icons'

import { FaAmazon } from "react-icons/fa"
import './App.css';

function App() {
  return (
    <div className="App">
     <FaAmazon color='purple' size='10rem' />

      <IconContext.Provider value={{color: 'blue', size: '5rem'}}>
        <MdApi />
        <HiAcademicCap color='red' size='8rem' />
      </IconContext.Provider> 
    </div>
  );
}

export default App;
