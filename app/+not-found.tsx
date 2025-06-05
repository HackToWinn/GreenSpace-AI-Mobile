import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';

const NotFoundScreen = () => {
  return (
    <View>
      <Text style={styles.title}>This screen doesn't exist.</Text>
      <Link href={'/'}>
        <Text style={styles.linkText}>Go to home screen!</Text>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  linkText: {
    marginTop: 16,
    paddingTop: 16,
    fontSize: 16,
    color: '#2e78b7',
  },
});

export default NotFoundScreen;
