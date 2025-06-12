import { Ionicons } from '@expo/vector-icons';
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { dashboardCards as staticDashboardCards } from '@/constants';
import DashboardCard from '@/components/DashboardCard';
import CustomButton from '@/components/CustomButton';
import { router } from 'expo-router';
import Layout from '@/components/Layout';
import { useCurrentLocation } from '@/hooks/useCurrentLocation';
import { useEffect, useState } from 'react';
import { getTotalReportsThisWeek } from '@/lib/api';
export default function Home() {
  const { location, loading, errorMsg, refreshLocation, getMapRegion } = useCurrentLocation();
  const [dashboardCards, setDashboardCards] = useState(staticDashboardCards);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const fetchReportsThisWeek = async () => {
      setLoading(true);
      const total = await getTotalReportsThisWeek();

      setDashboardCards(prevCards =>
        prevCards.map(card =>
          card.title === 'Reports This Week'
            ? {
              ...card,
              value: total !== null ? total : "?",
            }
            : card
        )
      );

      setLoading(false);
    };

    fetchReportsThisWeek();
  }, []);

  return (
    <Layout>
      <View className='flex flex-col items-start gap-y-4'>
        <Text className='font-Bold text-4xl'>Dashboard</Text>
        <View className='flex flex-row items-start gap-x-2'>
          <Ionicons name='location-outline' size={24} color={'#3E9E45'} className='mt-1' />
          <View className='flex flex-col pr-8'>
            <View className='w-full flex flex-row items-center justify-between'>
              <Text className='font-SemiBold text-md text-primary-600'>Your Location</Text>
              <TouchableOpacity
                onPress={refreshLocation}
                className="p-1"
                disabled={loading}
              >
                <Ionicons
                  name={loading ? 'refresh' : 'refresh-outline'}
                  size={18}
                  color="#3E9E45"
                />
              </TouchableOpacity>
            </View>
            {loading ? (
              <View className='flex flex-row items-center gap-x-2'>
                <ActivityIndicator size="small" color="#3E9E45" />
                <Text className='font-Medium text-sm text-gray-500'>Getting location...</Text>
              </View>
            ) : (
              <Text className='font-Bold text-md' numberOfLines={1} ellipsizeMode='tail'>
                {location?.address || 'Location not available'}
              </Text>
            )}
            {errorMsg && (
              <Text className='font-Medium text-xs text-red-500'>{errorMsg}</Text>
            )}
          </View>
        </View>
        <View className="rounded-2xl overflow-hidden border border-gray-200 mb-2" style={{ height: 160, width: '100%' }}>
          {loading ? (
            <View className="flex-1 justify-center items-center bg-gray-100">
              <ActivityIndicator size="large" color="#3E9E45" />
              <Text className="mt-2 text-gray-600">Loading map...</Text>
            </View>
          ) : location ? (
            <MapView
              accessibilityLanguage="id"
              style={{ flex: 1 }}
              initialRegion={getMapRegion()}
              region={getMapRegion()}
              showsUserLocation={true}
              showsMyLocationButton={true}
              followsUserLocation={false}
            >
              <Marker
                coordinate={{
                  latitude: location.latitude,
                  longitude: location.longitude
                }}
                title="Your Current Location"
                description={location.address || "Current position"}
              />
            </MapView>
          ) : (
            <View className="flex-1 justify-center items-center bg-gray-100">
              <Ionicons name="location-outline" size={40} color="#9CA3AF" />
              <Text className="mt-2 text-gray-600">Unable to load map</Text>
            </View>
          )}
        </View>
        <View className="flex flex-row flex-wrap justify-between w-full">
          {dashboardCards.map((item, index) => (
            <DashboardCard
              key={index}
              onPress={item.onPress}
              title={item.title}
              value={item.value}
              iconName={item.iconName}
              CTAIcon={item.CTAIcon}
              isLoading={item.title === 'Reports This Week' && isLoading}
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
