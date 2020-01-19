import { createAppContainer, createNavigationContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import Main from './pages/Main';
import Profile from './pages/Profile';

const Routes = createAppContainer(
    createStackNavigator({
        Main: {
            screen: Main,
            navigationOptions: {
                title: 'DevRadar',
                headerTitleAlign: 'center',
            },
        },
        Profile: {
            screen: Profile,
            navigationOptions: {
                title: 'Perfil Github',
                headerTitleAlign: 'center',
            },
        },
    }, { defaultNavigationOptions: {
        headerTintColor: '#fff',
        headerStyle: {
            backgroundColor: '#7d40e7',
        },
     }, 
    } )
);

export default Routes;