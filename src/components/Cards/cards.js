// Card.js
import React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActions, Button } from '@mui/material';
import Box from "@mui/material/Box";
import arrowIcon from '../../assets/icons/arrow.svg';
import IconButton from "@mui/material/IconButton";

const ProjectCard = ({ image, title, description, link }) => {
  return (
    <Card variant="outlined" 
        sx={{ 
            maxWidth: '1000px', 
            margin: 'auto', 
            mt: 2, 
            backgroundColor: 'transparent', 
            borderColor: 'rgb(64,86,161)', 
            borderWidth: '2px', 
            borderRadius: '20px',
            borderStyle: 'solid',
            display:'flex',
            padding: '12px',
            ":hover": {
                boxShadow: 6,
            },
        }}
    >
    <CardMedia
        component="img"
        sx={{ height: 200, width: 200, borderRadius: "16px", padding: "1%" }}
        image={image}
        alt={title}
    />
    <Box
        sx={{ display: "flex", flexDirection: "column", borderRadius: "16px" }}
    ></Box>
    <CardContent sx={{ alignContent: 'center', maxWidth: '50vw', color:'var(--vext)'}}>
        <Typography gutterBottom variant="h5" component="div" >
            {title}
        </Typography>
        <Typography variant="body2" >
            {description}
        </Typography>
    </CardContent>
    </Card>
  );
};

export default ProjectCard;
