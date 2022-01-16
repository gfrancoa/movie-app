import React from 'react';
import {FlatList, StatusBar, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styled from 'styled-components/native';
import {COLORS} from '../../utils/constants';
import {useTheme} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SingleMovieList from '../components/SingleMovieList';
import MovieCard from '../components/MovieCard';
import {useDispatch, useSelector} from 'react-redux';
import {
  getTopRated,
  getRecommended,
  getSearchResults,
} from '../redux/movieSlice';
import type {RootState} from '../redux/store';

export default function Home(props) {
  const [inputSearch, setInputSearch] = React.useState('');

  let input = '';
  const dispatch = useDispatch();
  const {topRatedMovies, loading, recommendedMovies, searchResults} =
    useSelector((state: RootState) => state.movies);

  React.useEffect(() => {
    dispatch(getRecommended());
    dispatch(getTopRated());
  }, []);

  const searchingMovies = (text: any) => {
    if (text.length > 0) {
      dispatch(getSearchResults(text));
    }
  };

  const {colors} = useTheme();
  const TopContainer = styled.View`
    min-height: ${hp('28%')};
    padding-top: 45px;
    padding-left: 55px;
    padding-right: 30px;
    background-color: ${COLORS.lightBlue};
  `;

  const Container = styled.ScrollView`
    flex: 1;
    background-color: ${COLORS.lightBlue};
  `;

  const BottomContainer = styled.ScrollView`
    min-height: ${hp('72%')};
    background-color: ${colors.background};
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    overflow: hidden;
    padding-top: 20px;
    padding-left: 20px;
    padding-bottom: 10px;
  `;

  const BigText = styled.Text`
    color: #fff;
    font-family: 'OpenSans-Bold';
    line-height: 40px;
    font-size: 26px;
  `;

  const SearchBar = styled.View`
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 50px;
    flex-direction: row;
    align-items: center;
    padding-left: 12px;
    margin-top: 20px;
    height: 30px;
  `;

  const SearchInput = styled.TextInput`
    flex: 1;
    height: 40px;
    font-size: 13px;
    font-family: 'OpenSans-Regular';
    text-align-vertical: center;
  `;

  const Title = styled.Text`
    font-size: 13px;
    font-family: 'OpenSans-SemiBold';
    color: ${colors.text};
    margin-bottom: 20px;
  `;

  return (
    <Container>
      <StatusBar hidden={true} />
      <TopContainer>
        <BigText>Hello, what do you want to watch ?</BigText>
        <SearchBar>
          <MaterialIcons name="search" color="#fff" size={wp('5%')} />
          <SearchInput
            onFocus={() => setInputSearch('')}
            placeholder="Search"
            placeholderTextColor="#fff"
            // value={inputSearch}
            returnKeyType="search"
            onChangeText={text => (input = text)}
            onEndEditing={() => {
              setInputSearch(input);
              searchingMovies(input);
            }}
          />
        </SearchBar>
      </TopContainer>
      <BottomContainer>
        {inputSearch ? (
          <>
            <Title>SEARCH RESULTS</Title>

            <FlatList
              horizontal={true}
              data={searchResults}
              initialNumToRender={8}
              onEndReachedThreshold={1}
              // keyExtractor={item => item.id.toString()}
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
          </>
        ) : (
          <>
            <SingleMovieList
              loading={loading}
              movieList={recommendedMovies}
              title="RECOMMENDED FOR YOU"
              navigation={props.navigation}
            />
            <SingleMovieList
              loading={loading}
              movieList={topRatedMovies}
              title="TOP RATED"
              navigation={props.navigation}
            />
          </>
        )}
      </BottomContainer>
    </Container>
  );
}
