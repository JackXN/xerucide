import React from 'react';

// import styles from '../../styles/Homepage.module.scss';
import {Text, Box, Button} from '@chakra-ui/react'

//Components


//Icons 
import {BsSpotify as Spotify} from 'react-icons/bs';


const Homepage = () => {
    return (
        <Box sx={styles.container}>
            <Box sx={styles.header}>
                <Text as='h1' color='white'>
                    PERSPECTIVES
                </Text>
            </Box>
            <Box sx={styles.content}>
<img src='/italicsArt.jpeg' alt='image test'/>
            </Box>
            <Box sx={styles.footer}>
            <Text as='h1' fontFamily='Roboto' fontWeight='bold'>OUT NOW</Text>
            <Box sx={styles.button}>
                <Button sx={styles.spotifyButton} padding='10px'>
                <Spotify color='#1ED760'/>
                <Text as='p' ml='10px'>Listen On</Text>
                <Text as='h2' color='#1ED760' margin='5px'>Spotify</Text>
                </Button>
            </Box>
            </Box>
        </Box>
    )
}



const styles = {
    container: {
        backgroundImage: 'url(/neonbg.png)',
        backgroundPosition: ['left', 'right'],
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        height: '200vh'
    },

    header: {
        display: 'flex',
        textAlign: 'center',
        justifyContent: 'center',

        "h1" : {
            fontSize: ['27px'],
            fontFamily: 'Xenon',
            mt: ['150px']
            

        }
    },
    content: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: ['35px']
    },
    footer: {
        display: 'flex',
        color: 'white',
        flexDirection: 'column',
        textAlign: 'center',
        mb: ['20px'],
        mt:['20px']
    },
    spotifyButton: {
        backgroundColor: '#000000',
        mt: '17px',
        borderRadius: '20px',
        fontFamily: 'Roboto',
        fontWeight: 'bold'
        
    }
}



export default Homepage
