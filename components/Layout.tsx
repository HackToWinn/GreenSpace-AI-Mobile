import { LinearGradient } from 'expo-linear-gradient';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <LinearGradient colors={['#DFF3E2', '#FBFDFC']} start={{ x: 0, y: 0 }} end={{ x: 0, y: 0.7 }} className="flex-1 h-full">
      <SafeAreaView className="px-8 pt-4 h-full">
        <View className='w-full mb-8'>
          <Text className='font-Bold text-xl'>GreenSpace</Text>
        </View>
        {children}
      </SafeAreaView>
    </LinearGradient>
  );
}
