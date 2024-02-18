import React from 'react';
import { View, ScrollView, Text } from 'react-native';

import styles from './tabs.style';
import { PressableOpacity } from 'react-native-pressable-opacity';
import { COLORS, SIZES } from '../../../constants';

const Tabs = ({ tabs, activeTab, setActiveTab }) => {
    function TabButton({ name }) {
        console.log('press works', name);
        return (
            <PressableOpacity
                style={styles.btn(name, activeTab)}
                onPress={() => setActiveTab(name)}
            >
                <Text
                    style={
                        activeTab === name && {
                            color: COLORS.white,
                            fontWeight: 'bold'
                        }
                    }
                >
                    {name}
                </Text>
            </PressableOpacity>
        );
    }

    return (
        <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
                columnGap: SIZES.small / 2,
                justifyContent: 'space-between',
                width: '100%'
            }}
        >
            {tabs.map(tab => (
                <TabButton name={tab} />
            ))}
        </ScrollView>
    );
};

export default Tabs;
