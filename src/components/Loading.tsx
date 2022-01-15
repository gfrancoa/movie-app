import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS} from '../../utils/constants';
import styled from 'styled-components/native';

export default function Loading() {
  const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: transparent;
  `;

  return (
    <Container>
      <ActivityIndicator size={wp('20%')} color={COLORS.lightBlue} />
    </Container>
  );
}
