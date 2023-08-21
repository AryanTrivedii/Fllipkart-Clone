import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productsdata } from '../Redux/Productaction';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Shopping() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.data);
  const loading = useSelector((state) => state.products.loading);

  useEffect(() => {
    dispatch(productsdata());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Product Data</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {products.map((product) => (
          <Card key={product._id} sx={{ maxWidth: 345, margin: '10px' }}>
            <CardMedia
              sx={{ height: 0, paddingTop: '56.25%',width:'180px' }}
              image={product.url}
              title={product.title.shortTitle}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {product.title.shortTitle}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product.title.longTitle}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Price: {product.price.mrp} - {product.discount}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small"variant ="contained">Add to Cart</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Shopping;
