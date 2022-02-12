import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import React from 'react';
import Form from './Form';

const DesignedBox = styled(Box)(({ theme }) => ({
  width: '90%',
  borderRadius: '5px',
  background: 'white',
  border: '1px solid #4a4d50',
  padding: '16px',
  [theme.breakpoints.up('sm')]: {
    // height: '80vh',
    // minHeight: 500,
    // maxHeight: 1300,
    // レスポンシブ
  },
}));

const DesignedContainer = styled(Container)(({ theme }) => ({
  background: '#ffe168',
  padding: '32px 0',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.up('sm')]: {
    // height: '80vh',
    // minHeight: 500,
    // maxHeight: 1300,
    // レスポンシブ
  },
}));

const Hero = () => {
  return (
    <DesignedContainer>
      <Typography variant="h6" component="h1">
        うらないん
      </Typography>
      <DesignedBox>
        <Typography variant="body1" component="div">
          干支・生年月日・血液型を使った超細かすぎる占いです。
        </Typography>
        <Typography variant="body1" component="div">
          生年月日と血液型を入力するだけで簡単に診断できます。
        </Typography>
      </DesignedBox>
      <DesignedBox>
        <Form />
      </DesignedBox>
    </DesignedContainer>
  );
};

export default Hero;
