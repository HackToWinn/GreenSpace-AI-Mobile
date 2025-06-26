import Layout from "@/components/Layout";
import { ReportsPageCardComponent } from "@/components/ReportCardComponent";
import { useLatestReports, useMyReports } from "@/hooks/useReports";
import { ReportComments } from "@/lib/types";
import { Link, router } from "expo-router";
import {
  Text,
  View,
  FlatList,
  Dimensions,
  ScrollView,
  ActivityIndicator,
} from "react-native";

export default function Report() {
  const {
    data: latestReportsData = [],
    isLoading: isLoadingLatest,
    isError: isErrorLatest,
    error: errorLatest,
  } = useLatestReports();

  const {
    data: myReportsData = [],
    isLoading: isLoadingMyReports,
    isError: isErrorMyReports,
    error: errorMyReports,
  } = useMyReports();

  if (isLoadingLatest && isLoadingMyReports) {
    return (
      <Layout>
        <ActivityIndicator size="large" color="#3E9E45" />
      </Layout>
    );
  }
  if (isErrorLatest || isErrorMyReports) {
    return (
      <Text className="text-red-500">
        Error loading reports:{" "}
        {(errorLatest?.message ?? "An unknown error occurred") ||
          (errorMyReports?.message ?? "An unknown error occurred")}
      </Text>
    );
  }

  return (
    <Layout>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="flex flex-col items-start gap-y-8">
          <Text className="text-4xl font-Bold">Report Hub</Text>
          <View className="flex flex-col gap-y-4">
            <View className="w-full flex flex-row justify-between items-center">
              <Text className="text-xl font-Bold">Latest Reports</Text>
              <Link href={"/reports/latest"}>
                <Text className="text-md text-primary-500 font-Bold">
                  See All
                </Text>
              </Link>
            </View>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ gap: 16 }}
              snapToInterval={Dimensions.get("window").width}
              decelerationRate="fast"
              snapToAlignment="start"
              data={latestReportsData}
              keyExtractor={(item) => item.id}
              ListEmptyComponent={
                isLoadingLatest ? null : (
                  <Text className="text-gray-500 text-center">
                    There&apos;s no reports yet.
                  </Text>
                )
              }
              renderItem={({ item }) => (
                <ReportsPageCardComponent
                  id={item.id}
                  onPress={() => router.push(`/reports/${item.id}`)}
                  imageCid={{
                    uri: `https://gateway.ipfs.io/ipfs/${item.imageCid}`,
                  }}
                  userProfile={{
                    uri: `https://gateway.ipfs.io/ipfs/${item.user.pictureCid}`,
                  }}
                  username={item.user.username}
                  timestamp={new Date(item.timestamp).toLocaleDateString(
                    "id-ID",
                    {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    },
                  )}
                  title={item.title}
                  description={item.description}
                  location={item.location}
                  comments={item.comments?.map((comment: ReportComments) => ({
                    id: comment.id,
                    username: comment.username,
                    message: comment.message,
                    rating: comment.rating,
                  }))}
                />
              )}
            />
            <View className="w-full flex flex-row justify-between items-center">
              <Text className="text-xl font-Bold">Your Reports</Text>
              <Link href={"/reports/your"}>
                <Text className="text-md text-primary-500 font-Bold">
                  See All
                </Text>
              </Link>
            </View>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ gap: 16 }}
              snapToInterval={Dimensions.get("window").width}
              decelerationRate="fast"
              snapToAlignment="start"
              data={myReportsData}
              keyExtractor={(item) => item.id}
              ListEmptyComponent={
                isLoadingLatest ? null : (
                  <Text className="text-gray-500 text-center">
                    There&apos;s no reports yet.
                  </Text>
                )
              }
              renderItem={({ item }) => (
                <ReportsPageCardComponent
                  id={item.id}
                  onPress={() => router.push(`/reports/${item.id}`)}
                  imageCid={{
                    uri: `https://gateway.ipfs.io/ipfs/${item.imageCid}`,
                  }}
                  userProfile={{
                    uri: `https://gateway.ipfs.io/ipfs/${item.user.pictureCid}`,
                  }}
                  username={item.user.username}
                  timestamp={new Date(item.timestamp).toLocaleDateString(
                    "id-ID",
                    {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    },
                  )}
                  title={item.title}
                  description={item.description}
                  location={item.location}
                  comments={item.comments?.map((comment: ReportComments) => ({
                    id: comment.id,
                    username: comment.username,
                    message: comment.message,
                    rating: comment.rating,
                  }))}
                />
              )}
              style={{ marginBottom: 100 }}
            />
          </View>
        </View>
      </ScrollView>
    </Layout>
  );
}
