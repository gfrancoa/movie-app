import React from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components/native';
import {useTheme} from '@react-navigation/native';

export default function Subtitles(props) {
  const {colors} = useTheme();

  const Container = styled.View`
    flex-direction: row;
  `;

  const Text = styled.Text`
    font-family: 'OpenSans-Regular';
    font-size: 13px;
    color: ${colors.text};
    margin-top: 5px;
  `;

  const TextContainer = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    flex: 4;
  `;

  const TextBold = styled.Text`
    font-family: 'OpenSans-SemiBold';
    font-size: 13px;
    color: ${colors.text};
    margin-top: 5px;
    flex: 1;
  `;
  return (
    <Container>
      <TextBold>{props.title}</TextBold>
      <TextContainer>
        {typeof props.subtitle == 'string' ? (
          <Text>{props.subtitle}</Text>
        ) : (
          props.subtitle.map((item, index) => {
            return (
              <Text key={index}>
                {item.name}
                {index == props.subtitle.length - 1 ? '' : ', '}
              </Text>
            );
          })
        )}
      </TextContainer>
    </Container>
  );
}
