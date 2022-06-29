import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

const ServiceList = ({imgUrl , serviceName , des}) => {
  return (
     <Stack 
     
      
     >
    <Card sx={{ maxWidth: 600 , mb:6 ,  ml:8 }}>
      <CardMedia
        component="img"
        height="300"
        image={imgUrl}
        alt="healing hands"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {serviceName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
           {des}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Read More</Button>
      </CardActions>
    </Card>
    </Stack>
  )
}

export default ServiceList