import TwitterIcon from '@mui/icons-material/Twitter';
import Button from '@mui/material/Button';

const ShareButton = () => {
  return (
    <Button variant="outlined" startIcon={<TwitterIcon />}>
      ツイッターでシェアする
    </Button>
  );
};

export default ShareButton;
