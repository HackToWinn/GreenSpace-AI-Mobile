import { LinearGradient } from 'expo-linear-gradient';
import { Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SimpleLineIcons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function Layout({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <LinearGradient
      colors={['#DFF3E2', '#FBFDFC']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 0.7 }}
      className="flex-1 h-full"
    >

      <SafeAreaView className={className || 'px-8 pt-4 h-full'}>
        <View className={`w-full mb-8 flex-row justify-between items-center ${className ? 'px-8' : ''}`}>
          <Text className="font-Bold text-xl">GreenSpace</Text>
          {/* Container untuk icon settings dan cart bersebelahan */}
          <View className="flex-row items-center space-x-2">
            <Pressable
              onPress={() => router.push('/(tabs)/setting')}
              className="p-2 rounded-full"
              style={({ pressed }) => ({
                opacity: pressed ? 0.6 : 1,
              })}
            >
              <SimpleLineIcons name="settings" size={24} color="#1F7D53" />
            </Pressable>

            <Pressable
              onPress={() => router.push('/(auth)/profileSetup')}
              className="p-2 rounded-full"
              style={({ pressed }) => ({
                opacity: pressed ? 0.6 : 1,
              })}
            >
              <SimpleLineIcons name="basket" size={22} color="#1F7D53" />
            </Pressable>
          </View>
        </View>
        {children}
      </SafeAreaView>
    </LinearGradient>
  );
}
