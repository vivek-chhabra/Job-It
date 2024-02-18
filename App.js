import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, View, Text, SafeAreaView, StatusBar } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import React from 'react';

import JobSearch from './components/search/Search';
import { ScreenHeaderBtn } from './components';
import JobDetails from './screens/JobDetails';
import { COLORS, icons } from './constants';
import Favorite from './screens/Favorite';
import Home from './screens/Home';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
    function MyDrawer() {
        return (
            <Drawer.Navigator
                screenOptions={{
                    headerShadowVisible: false,
                    headerTitle: '',
                    headerTintColor: COLORS.light_purple,
                    headerTitleAlign: 'center',
                    drawerContentStyle: {
                        backgroundColor: COLORS.white,
                        borderRadius: 50
                    },
                    drawerContentContainerStyle: { borderRadius: 50 },
                    drawerActiveTintColor: COLORS.white,
                    drawerActiveBackgroundColor: COLORS.primary,
                    drawerInactiveTintColor: COLORS.primary,
                    drawerLabelStyle: { fontSize: 16, fontWeight: 'bold', paddingHorizontal: 10 },
                    drawerInactiveBackgroundColor: COLORS.light_purple,
                    drawerItemStyle: { borderRadius: 15, marginVertical: 5,  },
                    drawerStyle: {
                        width: 250,
                        borderTopRightRadius: 20,
                        borderBottomRightRadius: 20
                    },
                    headerLeft: () => (
                        <ScreenHeaderBtn
                            iconUrl={icons.menu}
                            dimension="60%"
                            handlePress={() => navigation.openDrawer()}
                        />
                    ),
                }}
            >
                <Drawer.Screen
                    name="Home"
                    component={Home}
                    options={({ navigation }) => ({
                        headerRight: () => (
                            <ScreenHeaderBtn
                                iconUrl={icons.profile}
                                dimension="100%"
                            />
                        )
                    })}
                />
                <Drawer.Screen name="Favorite" component={Favorite} />
                <Drawer.Screen name="Profile (static)" component={() => {}} />
                <Drawer.Screen name="Job Applications (static)" component={() => {}}/>
                <Drawer.Screen name="Notifications (static)" component={() => {}}/>
                <Drawer.Screen name="About (static)" component={() => {}}/>
                <Drawer.Screen name="Settings (static)" component={() => {}}/>
                <Drawer.Screen name="Help & Support (static)" component={() => {}}/>
            </Drawer.Navigator>
        );
    }
    return (
        <SafeAreaView style={styles.container}>
            {/* <StatusBar backgroundColor="white" barStyle="dark-content" /> */}
            <View style={styles.container}>
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen
                            name="drawer"
                            component={MyDrawer}
                            options={{
                                headerShown: false
                            }}
                        />
                        <Stack.Screen
                            name="JobDetails"
                            component={JobDetails}
                            options={({ navigation }) => ({
                                headerShadowVisible: false,
                                headerTitle: 'Job Details',
                                headerTitleAlign: 'center',
                                headerRight: () => (
                                    <ScreenHeaderBtn
                                        iconUrl={icons.share}
                                        dimension="60%"
                                        color={COLORS.secondary}
                                    />
                                ),
                                animation: 'slide_from_right',
                                headerTintColor: COLORS.secondary
                            })}
                        />
                        <Stack.Screen
                            name="SearchResult"
                            component={JobSearch}
                            options={({ navigation }) => ({
                                headerShadowVisible: false,
                                headerTitle: 'Search Result',
                                headerTitleAlign: 'center',
                                animation: 'slide_from_bottom',
                                headerTintColor: COLORS.secondary
                            })}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
