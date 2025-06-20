import Layout from '@/components/Layout';
import TooltipContent from '@/components/TooltipContent';
import WalletCardComponent from '@/components/WalletCardComponent';
import { FontAwesome, MaterialIcons, SimpleLineIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import Tooltip from 'react-native-walkthrough-tooltip';
import ProfilePicture from '@/components/ProfilePicture';

export default function Profile() {
  const router = useRouter();
  const [tooltipStep, setTooltipStep] = useState(0);

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
        <ProfilePicture />
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
  )
};

