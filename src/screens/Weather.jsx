import { StyleSheet, ImageBackground, View } from "react-native";
import React from "react";
import CurrentWeather from "../components/CurrentWeather";
import UpcomingWeather from "../components/UpcomingWeather";

const Weather = () => {
  return (
    <ImageBackground
      style={styles.weatherContainer}
      source={{
        uri: "https://cdn.pixabay.com/photo/2012/12/29/21/11/sunrise-73074_960_720.jpg",
      }}>
      <CurrentWeather />
      <UpcomingWeather />
    </ImageBackground>
  );
};

export default Weather;

const styles = StyleSheet.create({
  weatherContainer: {
    flex: 1,
  },
});
