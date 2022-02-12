import { BloodType } from './bloodType';

export type Uranai = {
  blood_type: BloodType;
  day: number;
  lucky_item: string;
  month: number;
  rank: number;
  status: 'OK' | 'NG';
  status_message: string;
  zodiac: string;
};
