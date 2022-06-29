import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function List() {
  return (
    <Card sx={{ maxWidth: 345, pb:4 }}>
    
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <Stack  style={{color:'white' , backgroundColor: '#9E0036'}} justifyContent="center" alignItems="center" spacing={2} >
          Name of person
          </Stack>
          
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <Stack direction="row" justifyContent="center"
  alignItems="center" spacing={2}>
          
      <Avatar
        alt="Remy Sharp"
        src="/assets/full.jpg"
        sx={{ width: 120, height: 120 }}
      />
    </Stack>
      
    </Card>
  );
}
