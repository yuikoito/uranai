import { default as AdapterDateFns } from '@mui/lab/AdapterDateFns';
import DatePicker from '@mui/lab/DatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import jaLocale from 'date-fns/locale/ja';
import { useState } from 'react';

export default function ViewsDatePicker() {
  const [value, setValue] = useState<Date>();

  return (
    <LocalizationProvider
      dateAdapter={AdapterDateFns}
      dateFormats={{ monthAndYear: 'yyyy MM' }}
      locale={jaLocale}
    >
      <Stack spacing={3}>
        <DatePicker
          inputFormat="yyyy年M月d日"
          openTo="year"
          views={['year', 'month', 'day']}
          label="Year, month and date"
          disableCloseOnSelect={false}
          okText="閉じる"
          cancelText="キャンセル"
          value={value}
          onChange={(newValue) => {
            setValue(newValue!!);
          }}
          renderInput={(params) => <TextField {...params} helperText={null} />}
        />
      </Stack>
    </LocalizationProvider>
  );
}
