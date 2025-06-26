import Layout from "@/components/Layout";
import { ReportsCardComponent } from "@/components/ReportCardComponent";
import { useMyReports } from "@/hooks/useReports";
import { router } from "expo-router";
import { ActivityIndicator, FlatList, View, Text } from "react-native";

const YourReports = () => {
  const {
    data: myReportsData = [],
    isLoading: isLoadingMyReports,
    isError: isErrorMyReports,
    error: errorMyReports,
  } = useMyReports();

  if (isLoadingMyReports) {
    return (
      <Layout>
        <ActivityIndicator size="large" color="#3E9E45" />
      </Layout>
    );
  }

  if (isErrorMyReports) {
    return (
      <Text className="text-red-500">
        Error loading reports:{" "}
        {errorMyReports?.message ?? "An unknown error occurred"}
      </Text>
    );
  }

  return (
    <View className="flex-1 px-8 pt-4 bg-[#FBFDFC]">
      <View className="flex flex-col gap-y-4">
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ gap: 16 }}
          data={myReportsData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ReportsCardComponent
              id={item.id}
              onPress={() => router.push(`/reports/${item.id}`)}
              imageCid={{
                uri: `https://gateway.ipfs.io/ipfs/${item.imageCid}`,
              }}
              userProfile={{
                uri: `https://gateway.ipfs.io/ipfs/${item.userProfile}`,
              }}
              username={item.username}
              timestamp={new Date(item.timestamp).toLocaleDateString("id-ID", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
              title={item.title}
              category={item.category}
            />
          )}
        />
      </View>
    </View>
  );
};

export default YourReports;
