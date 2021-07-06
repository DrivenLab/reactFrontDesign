import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { LoginStackNavigator, HomeStackNavigator } from "./StackNavigator";
import { colors } from "../../res/colors";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        tintColor: colors.accent,
        activeTintColor: colors.primary,
        activeBackgroundColor: colors.accent,
        inactiveTintColor: colors.grey7,
        inactiveBackgroundColor: colors.grey3
      }}
    >
      <Tab.Screen name="Home" component={HomeStackNavigator} />
      <Tab.Screen name="About" component={LoginStackNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
