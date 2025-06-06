import CustomButton from '@/components/CustomButton'
import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const PlugWallet = () => {
  return (
    <SafeAreaView className='flex flex-1 justify-center items-center bg-primary-50 px-4'>
      <Text className='font-Bold text-3xl text-center mb-4'>Connect to Plug Wallet</Text>
      <Text className='font-Regular text-lg text-center mb-12'>Great! You&apos;re now connected with Internet Identity. To enjoy more features, connect to your Plug Wallet below.</Text>
      <CustomButton title='Connect with Plug Wallet' onPress={() => router.replace('/(tabs)/home')} className="w-11/12" IconLeft={() => <Ionicons name='wallet-outline' size={24} color='black' className='mr-2' />} />
    </SafeAreaView>
  )
}

export default PlugWallet