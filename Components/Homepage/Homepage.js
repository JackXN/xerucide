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
                <Text as='h1' color='white' className='glitch'>
                <span aira-hidden="true">PERSPECTIVES</span>
                PERSPECTIVES
                <span aira-hidden="true">PERSPECTIVES</span>
                </Text>
            </Box>
            <Box sx={styles.content} className='glitch'>
<img src='/italicsArt.jpeg' alt='image test'/>
            </Box>
            <Box sx={styles.footer}>
            <Text as='h1' fontFamily='Roboto' fontWeight='bold'>OUT NOW</Text>
            <Box sx={styles.button}>
                <Button sx={styles.spotifyButton} >
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
        backgroundImage: 'url(/bg.png)',
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

        'h1': {
        fontSize: ['20px'],
        }
    },
    spotifyButton: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        mt: '17px',
        borderRadius: '20px',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        padding: '20px'
        
    }
}



export default Homepage
