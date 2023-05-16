import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

// screens
import Weather from "../screens/Weather";
import SavePlaces from "../screens/SavePlaces";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          height: 60,
          borderTopColor: "none",
          backgroundColor: "none",
          elevation: 25,
        },
      }}>
      <Tab.Screen
        name="Weather"
        component={Weather}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name="cloud-sun-rain"
              size={35}
              color={focused ? "orange" : "rgba(97, 97, 97, .8)"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="SavedPlaces"
        component={SavePlaces}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="location-city"
              size={35}
              color={focused ? "orange" : "rgba(97, 97, 97, .8)"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
