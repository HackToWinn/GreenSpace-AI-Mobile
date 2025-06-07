import Layout from '@/components/Layout';
import { FontAwesome, MaterialIcons, SimpleLineIcons } from '@expo/vector-icons';
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
        <Text className="text-sm text-gray-500 mb-6">Web3 Enthusiast and Environmental Advocate</Text>

        <View className="w-full bg-primary-50 p-6 rounded-xl border border-gray-200 mb-6">
          <View className="flex-row justify-between items-center mb-1">
            <Text className="text-lg font-SemiBold text-gray-700">ICP Balance</Text>
            <Text className="text-xs text-gray-500 bg-gray-200 px-2 py-1 rounded-full">Wallet Type: Stoic</Text>
          </View>
          <Text className="text-4xl font-Bold text-gray-900 mb-3">150 ICP</Text>

          <TouchableOpacity className="w-full  p-4 rounded-lg flex-row justify-center border-primary-500 border items-center mb-3">
            <FontAwesome name="copy" size={20} color="green" className='' style={{ marginRight: 8 }} />
            <Text className="text-primary-500 text-base font-SemiBold">Copy Address</Text>
          </TouchableOpacity>

          <Pressable className="w-full bg-red-500 p-4 rounded-lg flex-row justify-center items-center mb-8">
            <FontAwesome name="sign-out" size={22} color="white" style={{ marginRight: 8 }} />
            <Text className="text-white text-base font-SemiBold">Disconnect Wallet</Text>
          </Pressable>
        </View>

        <View className="w-full">
          <Pressable onPress={() => router.push('/setting')} className="flex-row justify-between items-center py-4 border-b border-gray-200">
            <View className="flex-row gap-4 items-center ">
              <SimpleLineIcons name="settings" size={24} color="gray" />
              <Text className="text-base text-gray-700">Settings</Text>
            </View>
            <FontAwesome name="chevron-right" size={16} color="gray" />
          </Pressable>
          <Pressable onPress={() => router.push('/(tabs)/feedback')} className="flex-row justify-between items-center py-4 border-b border-gray-200">
            <View className="flex-row gap-4 items-center ">
              <MaterialIcons name="feedback" size={24} color="gray" />
              <Text className="text-base text-gray-700">FeedBack</Text>
            </View>
            <FontAwesome name="chevron-right" size={16} color="gray" />
          </Pressable>
          <Pressable onPress={() => router.push('/(tabs)/faq')} className="flex-row justify-between items-center py-4 border-b border-gray-200">
            <View className="flex-row gap-4 items-center ">
              <SimpleLineIcons name="question" size={24} color="gray" />
              <Text className="text-base text-gray-700">Help & Support</Text>
            </View>
            <FontAwesome name="chevron-right" size={16} color="gray" />
          </Pressable>
        </View>
      </View>
    </Layout>
  );
}
