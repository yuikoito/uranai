import DateFnsUtils from '@date-io/date-fns';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DatePicker from '@mui/lab/DatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { format } from 'date-fns';
import jaLocale from 'date-fns/locale/ja';
import { useState } from 'react';

export default function ViewsDatePicker() {
  const [value, setValue] = useState<Date>();

  class JaLocalizedUtils extends DateFnsUtils {
    // ヘッダ部分のテキストを取得するメソッド
    getDatePickerHeaderText(date: Date) {
      return format(date, 'M月d日(E)', { locale: this.locale });
    }
  }

  return (
    <LocalizationProvider
      dateAdapter={AdapterDateFns}
      locale={jaLocale}
      utils={JaLocalizedUtils}
    >
      <Stack spacing={3}>
        <DatePicker
          inputFormat="yyyy年M月d日"
          openTo="year"
          views={['year', 'month', 'day']}
          label="Year, month and date"
          disableCloseOnSelect
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
