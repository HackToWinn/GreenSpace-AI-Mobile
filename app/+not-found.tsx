import { Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import CustomButton from '@/components/CustomButton';
import { Ionicons } from '@expo/vector-icons';

const NotFoundScreen = () => {
  const router = useRouter();

  return (
    <View className="flex-1 px-12 justify-center items-center bg-white">
      <Text className="text-xl font-Bold text-red-500">404 Page not found</Text>
      <Text className="text-md text-gray-500">The page you&apos;re looking for doesn&apos;t exist.</Text>
      <CustomButton onPress={() => router.back()} title="Go back" bgVariant="primary" textVariant="secondary" className="mt-4 w-24" IconLeft={() => <Ionicons name='arrow-back-outline' size={24} color='white' className='mr-2' />} />
    </View>
  );
};

export default NotFoundScreen;
