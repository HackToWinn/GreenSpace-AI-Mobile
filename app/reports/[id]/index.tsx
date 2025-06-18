import CommentBox from "@/components/CommentBox";
import CustomButton from "@/components/CustomButton";
import { reports } from "@/constants";
import { Ionicons } from "@expo/vector-icons";
import { Link, useLocalSearchParams } from "expo-router";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native"

const ReportsDetail = () => {
  const { id } = useLocalSearchParams();
  const report = reports.find((r) => r.id === id);

  if (!report) {
    return (
      <View className="flex-1 px-12 justify-center items-center bg-white">
        <Text className="text-xl font-Bold text-red-500">Report not found</Text>
        <Text className="text-md text-gray-500">The report you&apos;re looking for doesn&apos;t exist.</Text>
        <Link href="/(tabs)/report" asChild>
          <CustomButton title="Go back" bgVariant="primary" textVariant="secondary" className="mt-4 w-24" IconLeft={() => <Ionicons name='arrow-back-outline' size={24} color='white' className='mr-2' />} />
        </Link>
      </View>
    );
  }


  return (
    <ScrollView className="flex-1 bg-[#F8FDFC]">
      <Image source={require('@/assets/images/reports/report1.png')} className="w-full h-[20rem] mb-8" resizeMode="cover" />
      <View className="px-8 mb-8 flex flex-col gap-y-4">
        <View className="flex flex-row items-center gap-x-2">
          <Image source={require('@/assets/images/profile/profil_gg.jpg')} className="w-8 h-8 rounded-full" />
          <Text className="text-md text-primary-600 font-SemiBold max-w-[50%]" numberOfLines={1}>{report?.username}</Text>
          <Text className='text-md text-gray-500 font-SemiBold'>•</Text>
          <Text className='text-md text-gray-500 font-SemiBold'>{report?.date}</Text>
        </View>
        <View>
          <Text className='text-xl font-Bold'>{report?.title}</Text>
        </View>
        <View>
          <Text className='text-md font-Regular'>{report?.description}</Text>
        </View>
        <View className="mt-2 flex flex-row justify-between items-center">
          <View className="flex flex-row items-center gap-x-1">
            <Ionicons name='location-outline' size={24} color='#3E9E45' />
            <Text className='text-md font-SemiBold max-w-[80%]' numberOfLines={1}>{report?.location}</Text>
          </View>
          <View className="flex flex-row items-center gap-x-1">
            <Ionicons name='ellipsis-horizontal-outline' size={24} color='#3E9E45' />
          </View>
        </View>
      </View>
      <View className="w-full h-0.5 mb-8 bg-gray-300" />
      <View className="px-8 mb-8 flex flex-col gap-y-4">
        <View className="flex flex-row items-center gap-x-2">
          <Text className="text-lg font-Bold">Comments</Text>
          <Text className="text-lg font-Bold">-</Text>
          <Text className="text-md text-gray-500 font-SemiBold">{report?.comments?.length ?? 0} comments</Text>
        </View>
        {report?.comments?.map((item) => (
          <CommentBox key={item.id} {...item} />
        ))}
      </View>
    </ScrollView>
  )
}

export default ReportsDetail;