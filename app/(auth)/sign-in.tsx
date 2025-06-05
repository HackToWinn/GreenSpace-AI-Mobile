import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SignIn = () => {
  return (
    <SafeAreaView className='flex justify-center items-center'>
      <Text className='font-bold text-2xl'>Welcome to Green</Text>
    </SafeAreaView>
  )
}

export default SignIn;