import CustomButton from '@/components/CustomButton';
import Layout from '@/components/Layout';
import { FontAwesome, Ionicons, MaterialIcons, SimpleLineIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Pressable, Text, TouchableOpacity, View } from 'react-native';

export default function Profile() {
  const router = useRouter();
  return (
    <Layout>
      <View className="flex-1 items-center mt-4 ">
        {/* <Image source={{ uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fid.pinterest.com%2Fpin%2F804174077250339329%2F&psig=AOvVaw32AGrM95BZmHAGePXgh9Tg&ust=1749245070149000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPDs4Oqb240DFQAAAAAdAAAAABAE' }} className="w-24 h-24 rounded-full mb-4" /> */}
        <View className="w-24 h-24 rounded-full mb-4 bg-primary-900"></View>
        <Text className="text-2xl font-Bold text-gray-800">Hanif Ahmad</Text>
        <Text className="text-sm font-Regular text-gray-500 mb-6">Web3 Enthusiast and Environmental Advocate</Text>

        <View className="w-full bg-white p-6 rounded-xl shadow-md shadow-neutral-400 mb-6">
          <View className="flex-row justify-between items-center mb-1">
            <Text className="text-lg font-SemiBold text-gray-700">ICP Balance</Text>
            <Text className="text-xs font-Regular text-gray-500 bg-gray-200 px-2 py-1 rounded-full">Wallet Type: Stoic</Text>
          </View>
          <Text className="text-4xl font-Bold text-gray-900 mb-6">150 ICP</Text>

          <CustomButton title="Copy Address" bgVariant='outline' textVariant='primary' IconLeft={() => <Ionicons name='copy-outline' size={22} color='#4CAF50' className='mr-2' />} className='mb-4' />
          <CustomButton title="Disconnect Wallet" bgVariant='danger' textVariant='secondary' IconLeft={() => <Ionicons name='log-out-outline' size={22} color='#FFFFFF' className='mr-2' />} className='mb-4' />
        </View>

        <View className="w-full">
          <Pressable onPress={() => router.push('/setting')} className="flex-row justify-between items-center py-4 border-b border-gray-200">
            <View className="flex-row gap-4 items-center ">
              <SimpleLineIcons name="settings" size={24} color="gray" />
              <Text className="text-base font-Regular text-gray-700">Settings</Text>
            </View>
            <FontAwesome name="chevron-right" size={16} color="gray" />
          </Pressable>
          <Pressable onPress={() => router.push('/(tabs)/feedback')} className="flex-row justify-between items-center py-4 border-b border-gray-200">
            <View className="flex-row gap-4 items-center ">
              <MaterialIcons name="feedback" size={24} color="gray" />
              <Text className="text-base font-Regular text-gray-700">FeedBack</Text>
            </View>
            <FontAwesome name="chevron-right" size={16} color="gray" />
          </Pressable>
          <Pressable onPress={() => router.push('/(tabs)/faq')} className="flex-row justify-between items-center py-4 border-b border-gray-200">
            <View className="flex-row gap-4 items-center ">
              <SimpleLineIcons name="question" size={24} color="gray" />
              <Text className="text-base font-Regular text-gray-700">Help & Support</Text>
            </View>
            <FontAwesome name="chevron-right" size={16} color="gray" />
          </Pressable>
        </View>
      </View>
    </Layout>
  );
}
