import NotFoundScreen from "@/app/+not-found";
import CommentBox from "@/components/CommentBox";
import { getReportById } from "@/lib/api";
import { Ionicons } from "@expo/vector-icons";
import { useQuery } from "@tanstack/react-query";
import { useLocalSearchParams } from "expo-router";
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
} from "react-native";

const ReportsDetail = () => {
  const headerHeight = 70;
  const { id } = useLocalSearchParams<{ id: string }>();

  const {
    data: report,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["reportById", id],
    queryFn: () => getReportById(id),
    enabled: !!id,
  });

  if (isLoading) {
    return (
      <View className="flex-1 items-center justify-center bg-white">
        <ActivityIndicator size="large" color="#3E9E45" />
      </View>
    );
  }

  if (isError || !report) {
    NotFoundScreen();
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={headerHeight}
      style={{ flex: 1 }}
    >
      <ScrollView
        className="flex-1 bg-[#F8FDFC]"
        contentContainerStyle={{ paddingBottom: 16 }}
      >
        <Image
          source={{ uri: `https://gateway.ipfs.io/ipfs/${report.imageCid}` }}
          className="w-full h-[20rem] mb-8"
          resizeMode="contain"
        />
        <View className="px-8 mb-8 flex flex-col gap-y-4">
          <View className="flex flex-row items-center gap-x-2">
            <Image
              source={{
                uri: `https://gateway.ipfs.io/ipfs/${report.user.pictureCid}`,
              }}
              className="w-8 h-8 rounded-full"
            />
            <Text
              className="text-md text-primary-600 font-SemiBold max-w-[50%]"
              numberOfLines={1}
            >
              {report.user.username}
            </Text>
            <Text className="text-md text-gray-500 font-SemiBold">•</Text>
            <Text className="text-md text-gray-500 font-SemiBold">
              {new Date(report.timestamp).toLocaleDateString("id-ID", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </Text>
          </View>
          <View>
            <Text className="text-xl font-Bold">{report.title}</Text>
          </View>
          <View>
            <Text className="text-md font-Regular">{report.description}</Text>
          </View>
          <View className="mt-2 flex flex-row justify-between items-center">
            <View className="flex flex-row items-center gap-x-1">
              <Ionicons name="location-outline" size={24} color="#3E9E45" />
              <Text
                className="text-md font-SemiBold max-w-[80%]"
                numberOfLines={1}
              >
                {report.location}
              </Text>
            </View>
            <View className="flex flex-row items-center gap-x-1">
              <Ionicons
                name="ellipsis-horizontal-outline"
                size={24}
                color="#3E9E45"
              />
            </View>
          </View>
        </View>
        <View className="w-full h-0.5 mb-8 bg-gray-300" />
        <View className="px-8 flex flex-col gap-y-4">
          <View className="flex flex-row items-center gap-x-2">
            <Text className="text-lg font-Bold">Comments</Text>
            <Text className="text-lg font-Bold">-</Text>
            <Text className="text-md text-gray-500 font-SemiBold">
              {report.comments?.length ?? 0} comments
            </Text>
          </View>
          {report.comments?.map((item: any) => (
            <CommentBox key={item.id} {...item} />
          ))}
        </View>
      </ScrollView>
      <View className="px-4 pt-2 pb-8 bg-white border-t border-gray-200">
        <View className="flex-row items-center bg-primary-100 rounded-full px-4 py-2">
          <TextInput
            className="flex-1 text-base mr-2"
            placeholder="Write a comment..."
            multiline
            style={{ minHeight: 40, maxHeight: 120 }}
          />
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="send" size={20} color="#3E9E45" />
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default ReportsDetail;
