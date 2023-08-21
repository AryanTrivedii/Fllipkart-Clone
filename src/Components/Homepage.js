import React from 'react'
import {Box} from '@mui/material'
//import Shopping from './Shopping';

const  Options=[
"https://rukminim2.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100",
'https://rukminim2.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100',
'https://rukminim2.flixcart.com/fk-p-flap/128/128/image/0d75b34f7d8fbcb3.png?q=100',
'https://rukminim2.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100',
'https://rukminim2.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100',
'https://rukminim2.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100',
'https://rukminim2.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100',
'https://rukminim2.flixcart.com/fk-p-flap/128/128/image/05d708653beff580.png?q=100'
]


function Homepage() {
  return (
    <>
    <Box style={{display:'flex'}}>
    {Options.map((option, index) => (
        <Box key={index} m={1}>
          <img src={option} alt={`Option ${index}`} style={{ width: '128px', height: '128px' }} />
        </Box>
      ))}
    </Box>
  
    </>
  )
}

export default Homepage