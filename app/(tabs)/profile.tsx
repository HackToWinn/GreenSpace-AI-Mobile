import Layout from '@/components/Layout';
import WalletCardComponent from '@/components/WalletCardComponent';
import { FontAwesome, MaterialIcons, SimpleLineIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Pressable, Text, View } from 'react-native';

export default function Profile() {
  const router = useRouter();
  return (
    <Layout>
      <View className="flex-1 items-center mt-4 ">
        {/* <Image source={{ uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fid.pinterest.com%2Fpin%2F804174077250339329%2F&psig=AOvVaw32AGrM95BZmHAGePXgh9Tg&ust=1749245070149000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPDs4Oqb240DFQAAAAAdAAAAABAE' }} className="w-24 h-24 rounded-full mb-4" /> */}
        <View className="w-24 h-24 rounded-full mb-4 bg-primary-900"></View>
        <Text className="text-2xl font-Bold text-gray-800">Hanif Ahmad</Text>
        <View className='flex flex-row justify-center items-center gap-x-1 mb-6'>
          <Text className="text-sm font-SemiBold text-black">23</Text>
          <Text className="text-sm font-Regular text-black">Total Reports</Text>
        </View>

        <WalletCardComponent />

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
