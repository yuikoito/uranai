import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import { useCallback, useEffect, useState } from 'react';
import useAllData from '../hooks/useAllData';
import { Uranai } from '../models/uranai';

const UranaiList: React.FC<{}> = ({}) => {
  const [allData, setAllData] = useState<Uranai[]>([]);
  const [page, setPage] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const { uranaiData, hasNext } = useAllData(page);

  useEffect(() => {
    setAllData([...allData, ...uranaiData]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uranaiData]);
  const loadMore = useCallback(() => {
    const loadItems = async () => {
      await new Promise((resolve) =>
        setTimeout(() => {
          setPage((page) => page + 1);
          setLoading(false);
          resolve(true);
        }, 1500)
      );
    };
    setLoading(true);
    loadItems();
  }, [page]);
  const handleScroll = (e: { target: any }) => {
    const element = e.target;
    const { scrollHeight, scrollTop, clientHeight } = element;
    const bottom = scrollHeight - clientHeight;
    const distanceBottom = Math.round((bottom / 100) * 20);
    if (scrollTop > bottom - distanceBottom && hasNext && !loading) {
      loadMore();
    }
  };
  return (
    <List
      sx={{
        width: '350px',
        maxHeight: '500px',
        overflowY: 'scroll',
        bgcolor: 'background.paper',
      }}
      onScroll={handleScroll}
    >
      {allData.map((uranai, index) => (
        <ListItem key={index}>
          <ListItemAvatar>
            <Avatar>{uranai.rank}</Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={`${uranai.rank}位${uranai.zodiac}年${uranai.month}月${uranai.day}日生まれ`}
            secondary={`${uranai.lucky_item}`}
            secondaryTypographyProps={{
              style: {
                width: '100%',
                wordBreak: 'break-all',
                whiteSpace: 'pre-line',
              },
            }}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default UranaiList;
