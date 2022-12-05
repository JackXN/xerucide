import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const UnderConstruction = () => {
    return (
        <>
  <div className="container" style={{display: 'flex'}}>
    {/* <nav>
      <ul>
        <li id="about">/about</li>
        <li id="contact">/contact</li>
      </ul>
    </nav> */}

    <main style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
    <div className='contentContainer'>
       <img src='./prank_glasses.svg' alt='logo' height='150px' width='150px'/>
       <h1 style={{fontSize: '34px', fontWeight: 'bold'}} className='batchTitle'>BATCHFORUM:$<span class="cursor">|</span></h1>

       <p className='batchSub'>2023</p>
   </div>
    

    </main>
  </div>

        </>
    )
}



const styles = {
    container: {
        backgroundColor: '#333',
        fontFamily:'Roboto Mono',

    }
}
export default UnderConstruction
