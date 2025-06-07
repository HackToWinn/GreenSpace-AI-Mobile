import { Ionicons } from '@expo/vector-icons';
import { Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { dashboardCards } from '@/constants';
import DashboardCard from '@/components/DashboardCard';
import CustomButton from '@/components/CustomButton';
import { router } from 'expo-router';
import Layout from '@/components/Layout';

export default function home() {
  return (
    <Layout>
      <View className='flex flex-col items-start gap-y-4'>
        <Text className='font-Bold text-4xl'>Dashboard</Text>
        <View className='flex flex-row items-center gap-x-2'>
          <Ionicons name='location-outline' size={24} color={'#3E9E45'} />
          <View className='flex flex-col'>
            <Text className='font-SemiBold text-md text-primary-600'>Your Location</Text>
            <Text className='font-SemiBold text-md'>Balikpapan, Kalimantan Timur</Text>
          </View>
        </View>
        <View className="rounded-2xl overflow-hidden border border-gray-200 mb-2" style={{ height: 180, width: '100%' }}>
          <MapView
            accessibilityLanguage="id"
            style={{ flex: 1 }}
            initialRegion={{
              latitude: -1.2654,
              longitude: 116.8312,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }}
          >
            <Marker
              coordinate={{ latitude: -1.2654, longitude: 116.8312 }}
              title="Balikpapan"
              description="Most reported area"
            />
          </MapView>
        </View>
        <View className="flex flex-row flex-wrap justify-between w-full">
          {dashboardCards.map((item, index) => (
            <DashboardCard
              key={index}
              title={item.title}
              value={item.value}
              iconName={item.iconName}
            />
          ))}
        </View>
        <View className='w-full'>
          <CustomButton title='Report an Issue' bgVariant='primary' textVariant='secondary' IconLeft={() => <Ionicons name='clipboard-outline' size={24} color='white' className='mr-2' />} onPress={() => router.replace('/(tabs)/camera')} />
        </View>
      </View>
    </Layout>
  );
}
