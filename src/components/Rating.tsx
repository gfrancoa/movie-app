import React from 'react';
import {View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../../utils/constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

interface Props {
  size: number;
  value: number;
  containerStyle: any;
  iconContainerStyle?: any;
  starNumber: number;
  maxRating: number;
}

export default function Rating({
  size,
  value,
  containerStyle,
  iconContainerStyle,
  starNumber,
  maxRating,
}: Props) {
  const amountStarsSelected: number = Math.round(
    (starNumber / maxRating) * value,
  );

  return (
    <View style={containerStyle}>
      {new Array(starNumber).fill('0').map((item, index) => {
        return (
          <View
            style={
              iconContainerStyle
                ? iconContainerStyle
                : {paddingHorizontal: wp('0.5%')}
            }
            key={index}>
            <Ionicons
              name={'star-sharp'}
              size={size}
              color={
                amountStarsSelected
                  ? amountStarsSelected > index
                    ? COLORS.yellow
                    : 'rgba(252,211,7,0.2)'
                  : 'rgba(252,211,7,0.2)'
              }
            />
          </View>
        );
      })}
    </View>
  );
}
