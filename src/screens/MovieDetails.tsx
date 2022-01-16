import React from 'react';
import {Text, View, TouchableOpacity, StatusBar, FlatList} from 'react-native';
import FastImage from 'react-native-fast-image';
import {COLORS, propsRating, URL_IMG} from '../../utils/constants';
import Rating from '../components/Rating';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styled from 'styled-components/native';
import {useTheme} from '@react-navigation/native';
import Subtitles from '../components/Subtitles';
import Avatar from '../components/Avatar';
import {useDispatch, useSelector} from 'react-redux';
import type {RootState} from '../redux/store';
import {getCast, getMovie} from '../redux/movieSlice';
import Loading from '../components/Loading';
import MaterialComIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface Movie {
  backdrop_path: string;
  title: string;
  overview: string;
  production_companies: any[];
  genres: any[];
  vote_average: number;
  release_date: string;
}

interface Cast {
  profile_path: string;
  name: string;
}

const initialMovie: Movie = {
  backdrop_path: '',
  title: '',
  overview: '',
  production_companies: [],
  genres: [],
  vote_average: 0,
  release_date: '',
};

const initialCast: Cast[] = [];

export default function MovieDetails(props) {
  const movieId = props.route.params.movieId;
  const [isPressed, setIsPressed] = React.useState(false);
  const dispatch = useDispatch();
  const {movieDetails, loading, castOfMovie} = useSelector(
    (state: RootState) => state.movies,
  );

  const {colors} = useTheme();

  const Container = styled.ScrollView`
    flex: 1;
    background-color: ${colors.background};
  `;

  const ButtonsContainer = styled.View`
    width: 100%;
    padding-top: 40px;
    padding-horizontal: 30px;
    position: absolute;
    flex-direction: row;
    justify-content: space-between;
  `;

  const TextContainer = styled.View`
    padding-top: 30px;
    padding-horizontal: 30px;
    padding-bottom: 15px;
  `;

  const TitleContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
  `;

  const Title = styled.Text`
    font-family: 'OpenSans-Bold';
    font-size: 24px;
    color: ${colors.text};
  `;

  const Button = styled.TouchableOpacity`
    padding: 8px;
    border-radius: 40px;
    width: 110px;
    background-color: ${colors.primary};
  `;

  const ButtonText = styled.Text`
    font-family: 'OpenSans-Bold';
    font-size: 11px;
    color: #fff;
    text-align: center;
  `;

  const Overview = styled.Text`
    font-family: 'OpenSans-Regular';
    font-size: 13px;
    color: ${colors.text};
    margin-top: 15px;
    line-height: 25px;
  `;

  const ImageBackground = styled.ImageBackground`
    background-color: ${!movieDetails.backdrop_path
      ? COLORS.grey
      : 'transparent'};

    height: 298px;
    align-items: center;
    justify-content: center;
  `;

  React.useEffect(() => {
    dispatch(getCast(movieId));
    dispatch(getMovie(movieId));
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <Container>
      <StatusBar hidden={true} />
      <ImageBackground source={{uri: URL_IMG + movieDetails.backdrop_path}}>
        {!movieDetails.backdrop_path ? (
          <MaterialComIcons
            name="movie-open"
            color="rgba(255,255,255,0.3)"
            size={wp('20%')}
            style={{alignSelf: 'center'}}
          />
        ) : null}
      </ImageBackground>
      <ButtonsContainer>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <MaterialComIcons name="arrow-left" color="#fff" size={wp('6%')} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setIsPressed(!isPressed)}>
          <MaterialComIcons
            name={isPressed ? 'heart' : 'heart-outline'}
            color="#fff"
            size={wp('6%')}
          />
        </TouchableOpacity>
      </ButtonsContainer>

      <TextContainer>
        <TitleContainer>
          <Title>{movieDetails.title}</Title>
          <FastImage
            style={{
              width: wp('5%'),
              height: wp('4%'),
            }}
            source={require('../../assets/4k-fullhd.png')}
            resizeMode={FastImage.resizeMode.cover}
          />
        </TitleContainer>
        <TitleContainer>
          <Button>
            <ButtonText>WATCH NOW</ButtonText>
          </Button>
          <Rating {...propsRating} value={movieDetails.vote_average} />
        </TitleContainer>

        <Overview>{movieDetails.overview}</Overview>
        <FlatList
          horizontal={true}
          data={castOfMovie}
          initialNumToRender={8}
          onEndReachedThreshold={1}
          // keyExtractor={item => item.id.toString()}
          renderItem={({item, index}) => {
            return (
              <View key={index}>
                <Avatar profilePath={item.profile_path} name={item.name} />
              </View>
            );
          }}
        />
        <Subtitles
          title="Studio"
          subtitle={movieDetails.production_companies}
        />
        <Subtitles title="Genre" subtitle={movieDetails.genres} />
        <Subtitles
          title="Release"
          subtitle={movieDetails.release_date.slice(0, 4)}
        />
      </TextContainer>
    </Container>
  );
}
