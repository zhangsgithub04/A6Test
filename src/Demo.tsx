import * as React from 'react';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import Email from './components/Email';
import Password from './components/Password';
import AspectRatio from '@mui/joy/AspectRatio';
import LogInButton from './components/LogInButton';







export default function SignInSheet() {
  return ( 
    <Card sx ={{ width: 550, height: 406, position: center }}>
      <div>
        <Typography level="title-lg">Welcome to BoardX!</Typography>
        <Email />
        <Password />
        <LogInButton />
        
      </div>
    
  
  </Card>
          );
          }
    


