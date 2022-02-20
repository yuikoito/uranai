import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import React, { useState } from 'react';
import BloodTypeSelecter from '../components/BloodTypeSelecter';
import Calender from '../components/Calender';
import UranaiList from '../components/UranaiList';
import { BloodType } from '../models/bloodType';
import { Uranai } from '../models/uranai';

const DesignedBox = styled(Paper)(({ theme }) => ({
  width: '90%',
  borderRadius: '5px',
  background: 'white',
  padding: '16px',
  [theme.breakpoints.up('sm')]: {
    width: '350px',
  },
}));

const DesignedContainer = styled(Box)(({ theme }) => ({
  background: '#FFA170',
  width: '100vw',
  height: '50vh',
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.up('sm')]: {
    padding: '32px 0',
    height: '100vh',
  },
}));

const Main = () => {
  const [date, setDate] = useState<Date | null>(null);
  const [bloodType, setBloodType] = useState<BloodType>();
  const [myrank, setMyrank] = useState<Uranai>();
  const [loading, setLoading] = useState<boolean>(false);

  const getMyrank = async () => {
    if (!date || !bloodType) return;
    setLoading(true);
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_ENDPOINT}myrank`,
      {
        blood_type: bloodType,
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        day: date.getDate(),
      }
    );
    if (res.data.status === 'OK') {
      setLoading(false);
      setMyrank(res.data);
    } else {
      setLoading(false);
      window.alert(res.data.status_message);
    }
  };

  return (
    <>
      <DesignedContainer>
        <Typography variant="h4" component="h1" sx={{ color: 'white' }}>
          うらないん
        </Typography>
        <Box my={2}>
          <Typography variant="body1" component="div" sx={{ color: 'white' }}>
            干支・生年月日・血液型を使った超細かすぎる占いです。
          </Typography>
          <Typography variant="body1" component="div" sx={{ color: 'white' }}>
            占い結果は一日に一回更新され、診断結果は驚きの17,532通り！
          </Typography>
          <Typography variant="body1" component="div" sx={{ color: 'white' }}>
            生年月日と血液型を入力するだけで簡単に診断できます。
          </Typography>
        </Box>
        <DesignedBox>
          <Calender
            date={date}
            setDate={(date) => date && setDate(date as Date)}
          />
          <BloodTypeSelecter
            bloodType={bloodType}
            setBloodType={setBloodType}
          />
          <Button
            onClick={getMyrank}
            color="primary"
            variant="contained"
            sx={{ width: '100%' }}
          >
            診断する
          </Button>
        </DesignedBox>
      </DesignedContainer>
      {myrank && (
        <DesignedBox>
          <Typography variant="body1" component="div">
            {myrank.zodiac}年{myrank.month}月{myrank.day}日生まれの今日の順位は
            {myrank.rank}/17,532位です！ ラッキーアイテムは{myrank.lucky_item}
            です。
          </Typography>
        </DesignedBox>
      )}
      <Box
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <UranaiList />
      </Box>
    </>
  );
};

export default Main;
