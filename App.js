import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {
  NotificationServices,
  requestUserPermission,
} from './src/utils/PushNotifications';

const App = () => {
  useEffect(() => {
    requestUserPermission();
    NotificationServices();
    console.log('hello');
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
  },
});

export default App;
