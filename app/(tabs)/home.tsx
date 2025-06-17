import CustomButton from '@/components/CustomButton';
import DashboardCard from '@/components/DashboardCard';
import Layout from '@/components/Layout';
import TooltipContent from '@/components/TooltipContent';
import { dashboardCards as staticDashboardCards } from '@/constants';
import { useCamera } from '@/context/CameraContext';
import { useAPI } from '@/hooks/useAPI';
import { useCurrentLocation } from '@/hooks/useCurrentLocation';
import { Ionicons } from '@expo/vector-icons';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';
import Tooltip from 'react-native-walkthrough-tooltip';

export default function Home() {
  const { location, loading, errorMsg, refreshLocation, getMapRegion } = useCurrentLocation();
  const [dashboardCards, setDashboardCards] = useState(staticDashboardCards);
  const [isLoading, setLoading] = useState(false);
  const { openCameraModal } = useCamera();
  const [tooltipStep, setTooltipStep] = useState(0);
  const { getReports } = useAPI();
  const { data, isPending } = useQuery({
    queryKey: ['reportData'],
    queryFn: () => getReports()
  });
  console.log(data);

  useEffect(() => {
    setTooltipStep(1);
  }, []);

  return (
    <Layout>
      <Tooltip isVisible={tooltipStep === 1} placement="center" useReactNativeModal={true} contentStyle={{ height: 170 }} content={<TooltipContent title="Welcome to the Homepage" description="This is where you can see brief information about the environment around you." buttonText="Next" onButtonPress={() => setTooltipStep(2)} />} onClose={() => setTooltipStep(0)}>
        <View />
      </Tooltip>
      <View className="flex flex-col items-start gap-y-4">
        <Text className="font-Bold text-4xl">Dashboard</Text>
        <View className="flex flex-row items-start gap-x-2">
          <Ionicons name="location-outline" size={24} color={'#3E9E45'} className="mt-1" />
          <View className="flex flex-col pr-8">
            <View className="w-full flex flex-row items-center justify-between">
              <Text className="font-SemiBold text-md text-primary-600">Your Location</Text>
              <TouchableOpacity onPress={refreshLocation} className="p-1" disabled={loading}>
                <Ionicons name={loading ? 'refresh' : 'refresh-outline'} size={18} color="#3E9E45" />
              </TouchableOpacity>
            </View>
            {loading ? (
              <View className="flex flex-row items-center gap-x-2">
                <ActivityIndicator size="small" color="#3E9E45" />
                <Text className="font-Medium text-sm text-gray-500">Getting location...</Text>
              </View>
            ) : (
              <Text className="font-Bold text-md" numberOfLines={1} ellipsizeMode="tail">
                {location?.address || 'Location not available'}
              </Text>
            )}
            {errorMsg && <Text className="font-Medium text-xs text-red-500">{errorMsg}</Text>}
          </View>
        </View>
        <Tooltip isVisible={tooltipStep === 2} placement="top" useReactNativeModal={true} contentStyle={{ height: 170 }} content={<TooltipContent title="Location Map" description="Here you can see your current location. This will help when creating a report." buttonText="Next" onButtonPress={() => setTooltipStep(3)} />} onClose={() => setTooltipStep(0)}></Tooltip>
        <View style={{ width: '100%', height: 160 }} className="rounded-2xl overflow-hidden border border-gray-200 mb-2">
          {loading ? (
            <View className="flex-1 justify-center items-center bg-gray-100">
              <ActivityIndicator size="large" color="#3E9E45" />
              <Text className="mt-2 text-gray-600">Loading map...</Text>
            </View>
          ) : location ? (
            <></>
          ) : (
            // <MapView accessibilityLanguage="id" style={{ flex: 1 }}  initialRegion={getMapRegion()} region={getMapRegion()} showsUserLocation={true} showsMyLocationButton={true} followsUserLocation={false}>
            //   <UrlTile urlTemplate="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" maximumZ={19} flipY={false} />
            //   <Marker
            //     coordinate={{
            //       latitude: location.latitude,
            //       longitude: location.longitude
            //     }}
            //     title="Your Current Location"
            //     description={location.address || 'Current position'}
            //   />
            // </MapView>
            <View className="flex-1 justify-center items-center bg-gray-100">
              <Ionicons name="location-outline" size={40} color="#9CA3AF" />
              <Text className="mt-2 text-gray-600">Unable to load map</Text>
            </View>
          )}
        </View>
        <Tooltip isVisible={tooltipStep === 3} placement="center" useReactNativeModal={true} contentStyle={{ height: 184 }} content={<TooltipContent title="Report Cards" description="These cards provide you with quick access to the most important information about your environment." buttonText="Next" onButtonPress={() => setTooltipStep(4)} />} onClose={() => setTooltipStep(0)}></Tooltip>
        <View className="flex flex-row flex-wrap justify-between w-full">
          {dashboardCards.map((item, index) => (
            <DashboardCard key={index} onPress={item.onPress} title={item.title} value={item.value} iconName={item.iconName} CTAIcon={item.CTAIcon} isLoading={item.title === 'Reports This Week' && isLoading} />
          ))}
        </View>
        <Tooltip isVisible={tooltipStep === 4} placement="center" useReactNativeModal={true} contentStyle={{ height: 184 }} content={<TooltipContent title="Report an Issue" description="Click the button below to open the camera and take a picture of a problem you see in your environment." buttonText="Got it" onButtonPress={() => setTooltipStep(0)} />} onClose={() => setTooltipStep(0)}></Tooltip>
        <View className="w-full">
          <CustomButton title="Report an Issue" bgVariant="primary" textVariant="secondary" IconLeft={() => <Ionicons name="clipboard-outline" size={24} color="white" className="mr-2" />} onPress={openCameraModal} />
        </View>
      </View>
    </Layout>
  );
}
