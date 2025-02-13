import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen'; 
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import CustomDrawerContent from '../components/CustomDrawerContent';
import LoadingScreen from '../screens/LoadingScreen';
import TodayTaskScreen from '../screens/TodayTaskScreen';
import UpcomingTaskScreen from '../screens/UpcomingTaskScreen';
import TaskHistoryScreen from '../screens/TaskHistoryScreen';
import TaskDetailsScreen from '../screens/TaskDetailsScreen';


const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator 
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false, // Hide default header
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
      <Drawer.Screen name="Loading" component={LoadingScreen} />
      <Drawer.Screen name="TodayTask" component={TodayTaskScreen} />
      <Drawer.Screen name="UpcomingTask" component={UpcomingTaskScreen} />
      <Drawer.Screen name="TaskHistory" component={TaskHistoryScreen} />
      <Drawer.Screen name="TaskDetails" component={TaskDetailsScreen} options={{ drawerLabel: () => null, title: 'Task Details' }} />

     
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
