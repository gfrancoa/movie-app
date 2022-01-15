import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styled from 'styled-components/native';
import {COLORS} from '../../utils/constants';
import {useTheme} from '@react-navigation/native';
import MovieCard from './MovieCard';
import Loading from './Loading';

interface Props {
  title: string;
  movieList: any[];
}

export default function SingleMovieList(props) {
  const {colors} = useTheme();

  const Container = styled.View`
    flex: 1;
    justify-content: center;
    margin-top: 13px;
  `;

  const TitleContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  `;

  const Title = styled.Text`
    font-size: 13px;
    font-family: 'OpenSans-SemiBold';
    color: ${colors.text};
  `;

  const ButtonText = styled.Text`
    font-size: 13px;
    font-family: 'OpenSans-Regular';
    opacity: 0.5;
    color: ${colors.text};
    padding-right: 25px;
  `;

  return (
    <Container>
      <TitleContainer>
        <Title>{props.title}</Title>
        <TouchableOpacity>
          <ButtonText>See all</ButtonText>
        </TouchableOpacity>
      </TitleContainer>
      {props.loading ? (
        <Loading />
      ) : (
        <FlatList
          horizontal={true}
          data={props.movieList}
          initialNumToRender={8}
          onEndReachedThreshold={1}
          keyExtractor={item => item.id.toString()}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  props.navigation.navigate('MovieDetails', {
                    movieId: item.id,
                  });
                }}>
                <MovieCard
                  rating={item.vote_average}
                  picture={item.poster_path}
                  title={item.title}
                  movieId={item.id}
                />
              </TouchableOpacity>
            );
          }}
        />
      )}
    </Container>
  );
}
