import { colors } from '@/lib/colors';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <LinearGradient colors={[colors.primary[300], colors.primary[200], colors.primary[50]]} className="h-full">
      <SafeAreaView className="px-8 pt-4 h-full">
        <View>
          <Text className="font-extrabold text-2xl">GreenSpace</Text>
        </View>
        {children}
      </SafeAreaView>
    </LinearGradient>
  );
}
