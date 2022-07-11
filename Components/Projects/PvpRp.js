import React from 'react';


// Components
import { Box, Text,  Image, Grid,GridItem} from '@chakra-ui/react';


import styled from '../../styles/PvpRp.module.scss';


const PvpRp = () => {
    return (
        // REWRITE AS GRID
        <Box sx={styles.container}>
            <Text as='h1' sx={styles.title} className='glitch'>PVP RP</Text>
            <Box sx={styles.contentContainer}>
            <Grid templateColumns='repeat(5, 1fr)' gap={1} sx={styles.wrapper}>
  <GridItem colSpan={2} h='500'  textAlign='center' sx={styles.textContainer}>
      <Text as='h4'>
                    My largest project to this date, PVPRP is a site dedicated to posting and downloading resource (texture) packs for Minecraft.</Text>
                    
                    <Text as='h4'>
                    Originally started for YouTubers to post their work turned into a public place filled with users and content. This site is still entirely worked on by me both front and back end.
                    </Text>
  </GridItem>
  <GridItem colStart={2} colEnd={6} h='90'  sx={styles.imageContainer}>
      <img src='/pvprp.png' alt='image of pvprpg' className='glitch'/>
  </GridItem>
</Grid>
            </Box>
        </Box>
    )
}

export default PvpRp





const styles = {
 container: {
     textAlign: 'center',
     display: ['flex'],
     flexDirection: 'column',
     
     
 },
 contentContainer: {
    textAlign:'center',
    
    fontWeight: 'bold',
   p: {
       color: '#ffff',
       padding: ['20px'],
        fontSize: ['13px']
    }
 },
 title: {
     textShadow: '0 0 6vh white',
     color:'#fff',
    //  mb: ['20px'],
    pt: ['50px'],
     fontSize: ['45px'],
     mb: ['58px']
 },

 imageContainer: {
     boxShadow: '20px 50px 114px 23px rgba(106,26,237,0.4)',
     padding: ['25px', '50px'],
     position:'relative',
     bottom: ['150px', '0px']
 },

textContainer: {
    color: 'white',
    padding: ['35px', '50px'],
    textAlign: 'left',
    fontFamily: 'Roboto',
    fontWeight: '900'

},

wrapper: {
    display: ['flex'],
    flexDirection: ['column', 'row']
}


}   