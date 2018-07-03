import React from 'react';
import { TouchableOpacity, Image, View, Text } from 'react-native'
import { DrawerItems, SafeAreaView } from 'react-navigation';

const routes = [
    {
        label: 'Home',
        routeName: 'Home'
    },
    {
        label: 'My Profile',
        routeName: 'Profile'
    },
    {
        label: 'Order Online',
        routeName: 'Order'
    },
    {
        label: 'Menu',
        routeName: 'Menu'
    },
    {
        label: 'Locations',
        routeName: 'Locations'
    },
    {
        label: 'Social',
        routeName: 'Social'
    },
    {
        label: 'About Us',
        routeName: 'Aboutus'
    }
];

const Drawer = (props) => (
    <SafeAreaView style={{flex: 1, margin: 20}} forceInset={{ top: 'always', horizontal: 'never' }}>
        <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
            <Image source={require('../assets/icons/close.png')} resizeMode="cover" style={{width: 20, height: 20}}/>
        </TouchableOpacity>
        <View style={{flex: 1, justifyContent: 'space-between'}}>
            {
                routes.map((item, index) => 
                    <TouchableOpacity
                        style={{flex: 1, justifyContent: 'center'}}
                        onPress={() => props.navigation.navigate(item.routeName)}
                    >
                        <Text>{item.label}</Text>
                    </TouchableOpacity>
                )
            }
        </View>
    </SafeAreaView>
)

export default Drawer