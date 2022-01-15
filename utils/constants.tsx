import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const API_HOST: String = 'https://api.themoviedb.org/3';
export const API_KEY: String = '?api_key=74f62becc0c24da29aaa496d02fd01e4';
export const API_TOKEN: String =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NGY2MmJlY2MwYzI0ZGEyOWFhYTQ5NmQwMmZkMDFlNCIsInN1YiI6IjYxZTBjNmMxZmZkNDRkMDA5NzQzYTVmNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.F46EdgVx2rgF4KMXDIAYUHAPkkTIeVoDfOvZ8LKd3F4';
export const URL_IMG: String = 'https://image.tmdb.org/t/p/w500';
export const COLORS = {
  lightBlue: '#5CA0D3',
  darkBlue: '#2C3848',
  yellow: '#FCD307',
  grey: '#707070',
};

export const propsRating = {
  size: wp('4%'),
  value: 0,
  containerStyle: {flexDirection: 'row'},
  starNumber: 5,
  maxRating: 10,
};
