import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import store from './store/store';
import Login from './Components/Login';
import WelcomePage from './Components/WelcomePage';
import PostProperty from './Components/PostProperty';
import PropertyListing from './Components/PropertyListing';
import UpdatePropertyDetails from './Components/UpdatePropertyDetails';
import Signup from './Components/Signup';
import PropertyDetailCard from './Components/PropertyDetailCard';
import WelcomeContainer from './Components/WelcomeContainer';
import WelcomeBiz from './Components/WelcomeBiz';
import PostDish from './Components/PostDish';
import DishListing from './Components/DishListing';
import AreYouBiz from './Components/AreYouBiz';
import AreYouNest from './Components/AreYouNest';
import NestSeekerListing from './Components/NestSeekerListing';
import BizSeekerListing from './Components/BizSeekerListing';
import DishDetailCard from './Components/DishDetailCard';
import UpdateDishDetails from './Components/UpdateDishDetails';

const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Signup">
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="WelcomeContainer" component={WelcomeContainer} />
          <Stack.Screen name="WelcomePage" component={WelcomePage} />
          <Stack.Screen name="WelcomeBiz" component={WelcomeBiz} />
          <Stack.Screen name="PropertyListing" component={PropertyListing} />
          <Stack.Screen name="NestSeekerListing" component={NestSeekerListing} />
          <Stack.Screen name="BizSeekerListing" component={BizSeekerListing} />
          <Stack.Screen name="DishListing" component={DishListing} />
          <Stack.Screen name="PostProperty" component={PostProperty} />
          <Stack.Screen name="PostDish" component={PostDish} />
          <Stack.Screen name="AreYouBiz" component={AreYouBiz} />
          <Stack.Screen name="AreYouNest" component={AreYouNest} />
          <Stack.Screen name="UpdatePropertyDetails" component={UpdatePropertyDetails} />
          <Stack.Screen name="UpdateDishDetails" component={UpdateDishDetails} />
          <Stack.Screen name="PropertyDetailCard" component={PropertyDetailCard} />
          <Stack.Screen name="DishDetailCard" component={DishDetailCard} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
