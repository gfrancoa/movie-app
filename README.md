# 🎥 Movie App Challenge 🎞
This app was fully developed in React Native v0.66.4 using TypeScript and Redux-Toolkit for global state management.

![alt text](https://www.pngitem.com/pimgs/m/514-5142665_react-native-transparent-react-native-logo-png-png.png)

📱 It consists of two screens based on the following design : https://www.uplabs.com/posts/movies-e0f9c1ea-a644-4666-857b-10933c4089ca
📱 It was integrated to The Movie DB Api in it's third version: https://developers.themoviedb.org/3/getting-started/introduction

📱 The app contains a fully functional search bar, shows the list of Recommended movies, which was based on the popular movies list that the API provides and also
shows the list of top rated movies. Every movie is a button and redirects to the detailed information of said movie.

Other features include the use of light-dark mode 🌛, styled components💅, redux toolkit ⚛️. Usage of commitizen to make commits.

Note: Light/Dark mode can be accessed by changing the configuration of the phone. There's no button for toggling the appearance, according to the proposed design.
Note 2: This app is optimized for Android only. It was not tested on iOS. 

To run the project 💻:
1. Clone this repository
2. Go to the project's folder
3. npm install
4. Open an android simulator or connect your phone.
5. Run npx react-native run-android
