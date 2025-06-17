import { useLocalSearchParams, useRouter } from 'expo-router';
import { Modal, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { goToLogin } from './LoginButton';

export default function AfterLogin() {
  const params = useLocalSearchParams();
  const router = useRouter();

  if (!params.delegation) {
    return;
  }

  const isSuccess = true;
  const message = params.message || (isSuccess ? 'You have logged in successfully!' : 'Login failed. Please try again.');

  const handleClose = () => router.back();
  const handleRetry = () => goToLogin();

  return (
    <Modal animationType="fade" transparent visible>
      <SafeAreaView className="flex-1 items-center justify-center bg-black/25">
        <View className="w-11/12 max-w-md bg-white rounded-2xl p-7 items-center shadow-lg">
          <Text className="text-2xl font-bold mb-4 text-center">{isSuccess ? 'Login Success 🎉' : 'Login Failed 😕'}</Text>
          <Text className="text-base text-gray-700 mb-6 text-center">{message}</Text>

          {isSuccess ? (
            <TouchableOpacity className="bg-emerald-400 px-8 py-3 rounded-full mt-2" onPress={handleClose}>
              <Text className="text-white font-semibold text-lg">Awesome! Continue 🚀</Text>
            </TouchableOpacity>
          ) : (
            <View className="flex-row mt-2">
              <TouchableOpacity className="border border-gray-400 px-6 py-3 rounded-full mr-2 bg-white" onPress={handleClose}>
                <Text className="text-gray-800 font-semibold text-lg">Close</Text>
              </TouchableOpacity>
              <TouchableOpacity className="bg-red-500 px-6 py-3 rounded-full ml-2" onPress={handleRetry}>
                <Text className="text-white font-semibold text-lg">Try Login Again</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </SafeAreaView>
    </Modal>
  );
}
