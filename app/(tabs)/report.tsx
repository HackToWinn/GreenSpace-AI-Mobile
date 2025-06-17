import Layout from '@/components/Layout';
import { ReportCard } from '@/components/ReportCardComponent';
import { reports } from '@/constants';
import { Text, View, FlatList, Dimensions, ScrollView } from 'react-native';

export default function Report() {
  return (
    <Layout>
      <ScrollView showsVerticalScrollIndicator={false} >
        <View className='flex flex-col items-start gap-y-8'>
          <Text className='text-4xl font-Bold'>Report Hub</Text>
          <View className='flex flex-col gap-y-4'>
            <View className='w-full flex flex-row justify-between items-center'>
              <Text className='text-xl font-Bold'>Latest Reports</Text>
              <Text className='text-md text-primary-500 font-Bold'>See All</Text>
            </View>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ gap: 16 }}
              snapToInterval={Dimensions.get("window").width}
              decelerationRate="fast"
              snapToAlignment="start"
              data={reports}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <ReportCard {...item} />}
            />
            <View className='w-full flex flex-row justify-between items-center'>
              <Text className='text-xl font-Bold'>Nearby Reports</Text>
              <Text className='text-md text-primary-500 font-Bold'>See All</Text>
            </View>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ gap: 16 }}
              snapToInterval={Dimensions.get("window").width}
              decelerationRate="fast"
              snapToAlignment="start"
              data={reports}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <ReportCard {...item} />}
            />
            <View className='w-full flex flex-row justify-between items-center'>
              <Text className='text-xl font-Bold'>Your Reports</Text>
              <Text className='text-md text-primary-500 font-Bold'>See All</Text>
            </View>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ gap: 16 }}
              snapToInterval={Dimensions.get("window").width}
              decelerationRate="fast"
              snapToAlignment="start"
              data={reports}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <ReportCard {...item} />}
            />
          </View>
        </View>
      </ScrollView>
    </Layout>
  );
}
