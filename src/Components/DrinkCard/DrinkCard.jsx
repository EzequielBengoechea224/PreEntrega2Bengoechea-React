import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const DrinkCard = ({drink}) => {
    const {strDrink, strCategory, strInstructions, strDrinkThumb} = drink;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="160"
          image={strDrinkThumb}
          alt="Foto de trago"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {strDrink} 
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {strCategory}|{strInstructions} 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
  );
}

export default DrinkCard