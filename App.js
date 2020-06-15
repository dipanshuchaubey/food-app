import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import SearchScreen from './src/screen/Search';
import SearchItemsScreen from './src/screen/SearchItems';

const navigation = createStackNavigator(
  {
    Search: SearchScreen,
    SearchItems: SearchItemsScreen,
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Restaurants Search',
    },
  },
);

export default createAppContainer(navigation);
