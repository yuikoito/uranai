import { Button, Stack } from '@mui/material';
import React from 'react';
import { BloodType } from '../models/bloodType';

type Props = {
  bloodType: BloodType | undefined;
  setBloodType: React.Dispatch<React.SetStateAction<BloodType | undefined>>;
};

const BloodTypeSelecter = ({ bloodType, setBloodType }: Props) => {
  const bloodTypeList: BloodType[] = ['A', 'B', 'AB', 'O'];
  return (
    <Stack spacing={1} direction="row" my={1} sx={{ width: '100%' }}>
      {bloodTypeList.map((type, index) => {
        return (
          <Button
            key={index}
            onClick={() => setBloodType(type)}
            color="primary"
            variant={bloodType === type ? 'contained' : 'outlined'}
            sx={{ width: '100%' }}
          >
            {type}
          </Button>
        );
      })}
    </Stack>
  );
};

export default BloodTypeSelecter;
