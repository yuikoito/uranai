import { default as AdapterDateFns } from '@mui/lab/AdapterDateFns';
import DatePicker from '@mui/lab/DatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import jaLocale from 'date-fns/locale/ja';

type Props = {
  date: Date | null;
  setDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
};
const Calender: React.FC<Props> = ({ date, setDate }) => {
  return (
    <LocalizationProvider
      dateAdapter={AdapterDateFns}
      dateFormats={{ monthAndYear: 'yyyy MM' }}
      locale={jaLocale}
    >
      <Stack spacing={3}>
        <DatePicker
          inputFormat="yyyy/M/d"
          openTo="year"
          views={['year', 'month', 'day']}
          label="生年月日を入力"
          disableCloseOnSelect={false}
          okText="閉じる"
          cancelText="キャンセル"
          value={date}
          onChange={(newValue) => {
            setDate(newValue!!);
          }}
          renderInput={(params) => <TextField {...params} helperText={null} />}
        />
      </Stack>
    </LocalizationProvider>
  );
};

export default Calender;
