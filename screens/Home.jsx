import * as React from 'react';
import { Text, View, SafeAreaView } from 'react-native';

export const Home = props => {
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home!</Text>
        </SafeAreaView>
    );
}

export default Home;