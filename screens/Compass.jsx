import * as React from 'react';
import { Text, View, SafeAreaView } from 'react-native';

export const Compass = props => {
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Compass!</Text>
        </SafeAreaView>
    );
}

export default Compass;