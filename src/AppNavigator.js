import React from 'react';

import { Dimensions } from 'react-native';
import Login from './screens/auth/Login';
import Signup from './screens/auth/Signup';
import Home from './screens/Home';
import Order from './screens/Order';
import MyAccount from './screens/MyAccount';
import Drawer from './screens/Drawer';
import Locations from './screens/Locations';
import Profile from './screens/InsideMenu';
import Menu from './screens/Customize';
import Social from './screens/Cart';


import { createDrawerNavigator, createStackNavigator, createSwitchNavigator } from 'react-navigation';

var { height, width } = Dimensions.get('window');

const authNavigator = createStackNavigator(
    {
        Login: {
            screen: Login,
            navigationOptions: {
                header: null
            }
        },
        Signup: {
            screen: Signup,
            navigationOptions: {
                header: null
            }
        },
        Order: {
            screen: Order,
            navigationOptions: {
                header: null
            }
        }
    },
    {
        initialRouteName: 'Login',
    }
);

const mainNavigator = createDrawerNavigator(
    {
        Home: {
            screen: Home,
        },
        Order: {
            screen: Order,
            navigationOptions: {
                header: null,
                drawerLabel: 'Order Online'
            }
        },
        MyAccount: {
            screen: MyAccount,
            navigationOptions: {
                header: null,
                drawerLabel: 'MY ACCOUNT'
            }
        },
        Locations: {
            screen: Locations,
            navigationOptions: {
                header: null,
                drawerLabel: 'Locations'
            }
        },
        Profile: {
            screen: Profile,
            navigationOptions: {
                header: null,
                drawerLabel: 'Profile'
            }
        },
        Menu: {
            screen: Menu,
            navigationOptions: {
                header: null,
                drawerLabel: 'Menu'
            }
        },
        Social: {
            screen: Social,
            navigationOptions: {
                header: null,
                drawerLabel: 'Menu'
            }
        }
    },
    {
        initialRouteName: 'Home',
        contentComponent: (props) => <Drawer {...props}/>,
        contentOptions: {
            labelStyle: {
                fontFamily: 'Blueberry-Pie'
            },
            itemStyle: {
                paddingLeft: 50
            }
        }
    }
);

export const AppNavigator = createStackNavigator(
    {
        Auth: {
            screen: authNavigator,
            navigationOptions: {
                header: null
            }
        },
        Main: {
            screen: mainNavigator,
            navigationOptions: {
                header: null
            }
        }
    },
    {
        initialRouteName: 'Auth'
    }
);