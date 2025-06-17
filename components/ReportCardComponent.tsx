import { ReportCardProps } from "@/lib/types";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, Image, TouchableOpacity } from "react-native";

const ReportCardComponent = ({onPress, image, userProfile, username, date, title, description, location, commentsCount}: ReportCardProps) => {
  return (
    <TouchableOpacity onPress={onPress} className='w-[320px] h-[350px] p-4 flex flex-col gap-y-6 bg-[#FBFDFC] rounded-2xl border border-gray-300 shadow-md shadow-neutral-400'>
      <Image source={image} className='w-full h-[12rem] bg-gray-300 rounded-lg' />
      <View className='flex flex-col gap-y-2'>
        <View className='flex flex-row items-center gap-x-2'>
          <Image source={userProfile} className="w-6 h-6 rounded-full bg-gray-300" />
          <Text className='text-md text-primary-600 font-Bold' numberOfLines={1} style={{ flexShrink: 1 }}>{username}</Text>
          <Text className='text-md text-gray-500 font-Bold'>•</Text>
          <Text className='text-md text-gray-500 font-Bold'>{date}</Text>
        </View>
        <Text className='text-lg font-Bold' numberOfLines={1}>
          {title}
        </Text>
        <Text className='text-md font-Regular' numberOfLines={1}>{description}</Text>
      </View>
      <View className='flex flex-row flex-shrink justify-between items-center'>
        <View className='flex flex-row items-center gap-x-1'>
          <Ionicons name='location-outline' size={24} color='#3E9E45' />
          <Text className='text-md font-SemiBold' numberOfLines={1} style={{ maxWidth: '60%' }}>{location}</Text>
        </View>
        <View className='flex flex-row items-center gap-x-4'>
          <View className='flex flex-row items-center gap-x-1 flex-shrink'>
            <Ionicons name='chatbubble-outline' size={24} color='#3E9E45' />
            <Text className='text-md font-SemiBold' numberOfLines={1}>{commentsCount}</Text>
          </View>
          <View className='flex flex-row items-center gap-x-1'>
            <Ionicons name='ellipsis-horizontal-outline' size={24} color='#3E9E45' />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
};

export const ReportCard = ReportCardComponent