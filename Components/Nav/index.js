import React from "react";
import { Box, Text, Link, StylesProvider } from "@chakra-ui/react";

const navItems = [
  {
    id: 1,
    label: "Home",
  },
  {
    id: 2,
    label: "Contact",
  },
  {
    id: 3,
    label: "Store",
  },
  {
    id: 4,
    label: "Promotions",
  },
];

const index = () => {
  return (
    <>
      <Box sx={styles.navContainer} className='glitchTwo '>
          {navItems.map((item,index) => (
              <Box key={item.id} sx={styles.linkItems} >
              <Link key={item.id} target='_blank' >{item.label}</Link>
            </Box>
          ))}
      </Box>
    </>
  );
};

export default index;

const styles = {
  navContainer: {
    display: ['none'],
    // background: '#ffff',
      transform: 'rotate(270deg)',
      position: 'relative',
      zIndex: '10000000',
      // opacity: '0.2'
      
  },
  linkItems: {
    ml:'20px',
    mr:'20px',
    mt: '20px',
    mb: '20px',
    fontSize: ['20px'],
    fontFamily:'Poppins',
   color:'white',
   textUnderline: 'false',

   '&:hover': {
     cursor: 'pointer',
      
   }

   
  }

};
