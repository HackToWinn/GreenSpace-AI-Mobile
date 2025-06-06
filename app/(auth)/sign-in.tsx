import CustomButton from '@/components/CustomButton';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SignIn = () => {
  return (
    <SafeAreaView className='flex flex-1 justify-center items-center bg-primary-50 px-4'>
      <Text className='font-Bold text-3xl text-center mb-4'>Welcome to GreenSpace</Text>
      <Text className='font-Regular text-lg text-center mb-12'>Join our community of environmental advocates. Report and track ecological issues in your area to create a greener tomorrow.</Text>
      <CustomButton title='Connect with Internet Identity' onPress={() => router.replace('/(auth)/plug-wallet')} className="w-11/12" IconLeft={() => <Ionicons name='infinite-outline' size={24} color='black' className='mr-2' />} />
    </SafeAreaView>
  )
}

export default SignIn;