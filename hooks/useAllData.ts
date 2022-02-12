import axios from 'axios';
import { useEffect, useState } from 'react';
import { Uranai } from '../models/uranai';

const useAllData = (page: number) => {
  const [uranaiData, setUranaiData] = useState<Uranai[]>([]);
  const [hasNext, setHasNext] = useState<boolean>(true);
  const MULTIPUL = 30;

  useEffect(() => {
    let unmounted = false;
    (async () => {
      if (!unmounted) {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_ENDPOINT}allrank/${
            page * MULTIPUL + 1
          }?multipul=${MULTIPUL}`
        );
        if (res.data.status === 'OK') {
          setUranaiData(res.data.result);
          if (res.data.result.includes((item: Uranai) => item.rank === 17532)) {
            setHasNext(false);
          }
        }
        // TODO エラーハンドリング
      }
    })();
    return () => {
      unmounted = true;
    };
  }, [page]);

  return {
    uranaiData,
    hasNext,
  };
};

export default useAllData;
