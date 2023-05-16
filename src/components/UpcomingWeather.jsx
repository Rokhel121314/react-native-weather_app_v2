import { StyleSheet, Text, View } from "react-native";
import React from "react";

const UpcomingWeather = () => {
  return (
    <View style={styles.upcomingWeatherContainer}>
      <Text>UpcomingWeather</Text>
    </View>
  );
};

export default UpcomingWeather;

const styles = StyleSheet.create({
  upcomingWeatherContainer: {
    flex: 1,
    // backgroundColor: "yellow",
  },
});
