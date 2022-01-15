import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import styled from 'styled-components/native';
import {useTheme} from '@react-navigation/native';
import {COLORS, URL_IMG} from '../../utils/constants';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function Avatar(props) {
  const {colors} = useTheme();
  const Container = styled.View`
    align-items: center;
    margin-right: 20px;
    margin-top: 10px;
  `;
  const ImageBackground = styled.ImageBackground`
    width: 50px;
    height: 50px;
    border-radius: 50px;
    overflow: hidden;
    background-color: ${!props.profilePath ? COLORS.grey : 'transparent'};
  `;

  const Title = styled.Text`
    text-align: center;
    font-family: 'OpenSans-Regular';
    font-size: 12px;
    line-height: 18px;
    margin-top: 10px;
    width: 60px;

    color: ${colors.text};
  `;
  return (
    <Container>
      <ImageBackground
        resizeMode="cover"
        source={{uri: URL_IMG + props.profilePath}}>
        {!props.profilePath ? (
          <MaterialIcons
            name="person"
            color="rgba(255,255,255,0.3)"
            size={wp('5%')}
            style={{alignSelf: 'center'}}
          />
        ) : null}
      </ImageBackground>
      <Title>{props.name}</Title>
    </Container>
  );
}
