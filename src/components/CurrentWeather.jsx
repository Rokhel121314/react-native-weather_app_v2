import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

const CurrentWeather = () => {
  return (
    <View style={styles.currentWeatherContainer}>
      <StatusBar style="light" />
      <View style={styles.cityContainer}>
        <Text style={styles.cityText}>San Francisco</Text>
      </View>

      <View style={styles.temperatureContainer}>
        <Text style={styles.temperatureText}>18°</Text>
      </View>

      <View style={styles.weatherContainer}>
        <View style={styles.weatherButton}>
          <Text style={styles.weatherText}>Sunny</Text>
        </View>
      </View>

      <View style={styles.statusContainer}>
        <View style={styles.perStatusContainer}>
          <Feather name="droplet" size={24} color="white" />
          <Text style={styles.perStatusText}>13%</Text>
        </View>

        <View style={styles.perStatusContainer}>
          <MaterialCommunityIcons
            name="clock-time-six-outline"
            size={24}
            color="white"
          />
          <Text style={styles.perStatusText}>0.553 mBar</Text>
        </View>

        <View style={styles.perStatusContainer}>
          <MaterialCommunityIcons
            name="weather-windy"
            size={24}
            color="white"
          />
          <Text style={styles.perStatusText}>13 km/h</Text>
        </View>
      </View>

      <View style={styles.setContainer}>
        <View style={styles.sunriseContainer}>
          <View style={styles.sunrise}></View>
          <Text style={styles.timeText}>07:00 AM</Text>
        </View>
        <View style={styles.sunsetContainer}>
          <Text style={styles.timeText}>07:00 PM</Text>
          <View style={styles.sunset}></View>
        </View>
      </View>
    </View>
  );
};

export default CurrentWeather;

const styles = StyleSheet.create({
  currentWeatherContainer: {
    flex: 1,
    // backgroundColor: "#2E3A48",
  },
  cityContainer: {
    flex: 2,
    justifyContent: "flex-end",
  },
  cityText: {
    fontSize: 20,
    paddingLeft: 20,
    paddingBottom: 10,
    color: "white",
  },
  temperatureText: {
    fontSize: 72,
    fontWeight: 500,
    paddingLeft: 20,
    color: "white",
  },
  temperatureContainer: {
    flex: 2,
  },
  weatherContainer: {
    flex: 1,
    alignItems: "flex-start",
  },
  weatherButton: {
    marginLeft: 20,
    backgroundColor: "orange",
    borderRadius: 15,
  },
  weatherText: {
    fontSize: 16,
    fontWeight: 600,
    letterSpacing: 1,
    paddingHorizontal: 15,
    paddingVertical: 5,
    color: "white",
  },
  statusContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
  perStatusContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  perStatusText: {
    color: "black",
    fontWeight: 400,
    marginLeft: 5,
    color: "white",
  },
  setContainer: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sunriseContainer: {
    paddingLeft: 20,
    paddingTop: 10,
    flexDirection: "row",
  },
  sunrise: {
    backgroundColor: "#FE7897",
    height: 20,
    width: 20,
    borderRadius: 10,
  },
  sunset: {
    backgroundColor: "#FFE4A9",
    height: 20,
    width: 20,
    borderRadius: 10,
  },
  sunsetContainer: {
    paddingRight: 20,
    paddingBottom: 10,
    flexDirection: "row",
    alignSelf: "flex-end",
  },
  timeText: {
    marginHorizontal: 5,
    color: "white",
  },
});
