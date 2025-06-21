import Layout from '@/components/Layout';
import ProfilePicture from '@/components/ProfilePicture';
import TooltipContent from '@/components/TooltipContent';
import WalletCardComponent from '@/components/WalletCardComponent';
import { useProfile } from '@/context/ProfileContext';
import { FontAwesome, MaterialIcons, SimpleLineIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import Tooltip from 'react-native-walkthrough-tooltip';

export default function Profile() {
  const router = useRouter();
  const [tooltipStep, setTooltipStep] = useState(0);
  const {profile, setProfile} = useProfile();

  const handleLogout = async () => {
    // Clear profile data from context and storage
    await AsyncStorage.removeItem('profile-data');
    await AsyncStorage.removeItem('delegation');
    await AsyncStorage.removeItem('identity-key');
    setProfile(null);
    // Navigate to the login page
    router.push('/(auth)/sign-in');
  };

  useEffect(() => {
    setTooltipStep(1);
  }, []);

  return (
    <Layout>
      <Tooltip
        isVisible={tooltipStep === 1}
        placement='center'
        useReactNativeModal={true}
        contentStyle={{ height: 184 }}
        content={
          <TooltipContent
            title='Welcome to the Profile Page'
            description='This is the profile page, where you can view your profile information and manage your ICP wallet & settings.'
            buttonText='Got it'
            onButtonPress={() => setTooltipStep(0)}
          />
        }
        onClose={() => setTooltipStep(0)}>
        <View />
      </Tooltip>
      <View className="flex-1 items-center mt-4 ">
        <ProfilePicture source={profile?.pictureCid ? profile.pictureCid : ''}/>
        <Text className="text-2xl font-Bold text-gray-800 mb-6">{profile?.username ? profile.username : "Guest User"}</Text>
        <View className='flex flex-row justify-center items-center gap-x-1 mb-6'>
          <Text className="text-sm font-SemiBold text-black">Email: {profile?.email ? profile.email : "Unknown"} </Text>
          <Text className="text-sm font-Regular text-black"></Text>
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
          <Pressable onPress={()=> handleLogout()} className="flex-row justify-between items-center py-4 border-b border-gray-200">
            <View className="flex-row gap-4 items-center ">
              <SimpleLineIcons name="logout" size={24} color="red" />
              <Text className="text-base font-Regular text-red-700">Logout</Text>
            </View>
            <FontAwesome name="chevron-right" size={16} color="red" />
          </Pressable>
        </View>
      </View>
    </Layout>
  )
};

