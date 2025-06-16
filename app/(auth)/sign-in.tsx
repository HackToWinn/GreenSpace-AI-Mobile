import AuthLayout from '@/components/AuthLayout';
import CustomButton from '@/components/CustomButton';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Text, Image } from 'react-native';

const SignIn = () => {
  return (
    <AuthLayout>
      <Image source={require('@/assets/icons/ic-logo.png')} className='w-32 h-32 mb-4' />
      <Text className='font-Bold text-3xl text-center mb-4'>Connect with Internet Identity</Text>
      <Text className='font-Regular text-lg text-center mb-12'>Join our community of environmental advocates. Report and track ecological issues in your area to create a greener tomorrow.</Text>
      <CustomButton title='Connect with Internet Identity' bgVariant='primary' textVariant='secondary' onPress={() => router.replace('/(tabs)/home')} className="w-11/12" IconLeft={() => <Ionicons name='log-in-outline' size={24} color='white' className='mr-2' />} />
    </AuthLayout>
  )
}

export default SignIn;