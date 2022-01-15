import React from 'react';
import {View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {propsRating, URL_IMG} from '../../utils/constants';
import Rating from './Rating';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styled from 'styled-components/native';
import {useTheme} from '@react-navigation/native';
import MaterialComIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../../utils/constants';

interface Props {
  rating: number;
  title: string;
  picture: string;
  movieId: number;
}

export default function MovieCard(props) {
  const {colors} = useTheme();

  const Container = styled.View`
    justify-content: center;
    margin-left: 10px;
    margin-right: 10px;
  `;

  const Title = styled.Text`
    font-size: 13px;
    font-family: 'OpenSans-SemiBold';
    color: ${colors.text};
    width: 100px;
    margin-top: 10px;
    margin-bottom: 5px;
  `;

  return (
    <Container>
      {props.picture ? (
        <FastImage
          style={{width: wp('35%'), height: wp('45%'), borderRadius: wp('5%')}}
          source={{
            uri: URL_IMG + props.picture,
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
      ) : (
        <View
          style={{
            width: wp('35%'),
            height: wp('45%'),
            borderRadius: wp('5%'),
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: COLORS.grey,
          }}>
          <MaterialComIcons
            name="movie-open"
            color="rgba(255,255,255,0.5)"
            size={wp('7%')}
          />
        </View>
      )}

      <Title numberOfLines={1}>{props.title}</Title>
      <Rating {...propsRating} value={props.rating} />
    </Container>
  );
}
