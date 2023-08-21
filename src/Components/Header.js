import React from 'react';
import { AppBar, Toolbar, styled, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from 'react-router-dom'

const Logo = styled('img')`
  width: 80px;
  margin-left: 15%;
`;

const Input = styled('input')`
  width: 45%;
  height: 40px;
`;

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Logo
          src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"
          alt="Logo"
        />
        <Typography style={{ fontWeight: 'bold', marginLeft: '0', marginTop: '20px' }}>
          Explore
        </Typography>
        <Typography style={{ color: '#FCD12A', marginTop: '20px' }}>Plus</Typography>
        <Input />
        <SearchIcon />
      <Link to='/cart'><ShoppingCartIcon style={{marginLeft:"30px",width:"200px"}}/></Link>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
