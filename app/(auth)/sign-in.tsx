import AfterLogin from '@/components/AfterLogin';
import AuthLayout from '@/components/AuthLayout';
import LoginButton from '@/components/LoginButton';
import { Image, Text } from 'react-native';

const SignIn = () => {
  return (
    <AuthLayout>
      <AfterLogin/>
      <Image source={require('@/assets/icons/ic-logo.png')} className="w-32 h-32 mb-4" />
      <Text className="font-Bold text-3xl text-center mb-4">Connect with Internet Identity</Text>
      <Text className="font-Regular text-lg text-center mb-12">Join our community of environmental advocates. Report and track ecological issues in your area to create a greener tomorrow.</Text>
      <LoginButton />
    </AuthLayout>
  );
};

export default SignIn;
