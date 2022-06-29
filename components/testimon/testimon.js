import React from 'react'
import List from './list'
import styles from './test.module.css'
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Testimon = () => {
  return (
    <Box mt={2} >
    <Stack    
    spacing={{ xs: 1, sm: 2, md: 4 }} >
      <Item >
         <div className={styles.container}>
           <p>OUR TESTIMONIALS</p>
           <h1>What Our Patients Say</h1>
         </div>
      </Item>
         <Item 
            
         >
         <Stack 
         style={{display:'flex'}}
         
         direction={{ xs: 'column', sm: 'row' }}
         spacing={{ xs: 1, sm: 2, md: 4 }}
         >
             <List />
             <List />
             <List />
             <List />
       </Stack>
         </Item>
      
    </Stack>
    </Box>
  )
}

export default Testimon
