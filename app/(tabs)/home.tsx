import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MapView, { Marker } from 'react-native-maps';
import { dashboardCards } from '@/constants';
import DashboardCard from '@/components/DashboardCard';
import CustomButton from '@/components/CustomButton';

export default function home() {
  return (
    <LinearGradient colors={['#DFF3E2', '#FBFDFC']} start={{ x: 0, y: 0 }} end={{ x: 0, y: 0.7 }} className='flex-1 w-full'>
      <SafeAreaView className='px-8 py-4 h-full'>
        <View className='w-full mb-8'>
          <Text className='font-Bold text-xl'>GreenSpace</Text>
        </View>
        <View className='flex flex-col items-start gap-y-4'>
          <Text className='font-Bold text-4xl'>Dashboard</Text>
          <View className='flex flex-row items-center gap-x-2'>
            <Ionicons name='location-outline' size={24} color={'#3E9E45'} />
            <Text className='font-Bold text-xl text-primary-600'>Balikpapan, Kalimantan Timur</Text>
          </View>
          {/* <View className='h-[200px] rounded-lg overflow-hidden'>
            <MapView
              className='flex-1'
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
          </View> */}
          <View className='w-full h-[180px] bg-white rounded-2xl flex items-center justify-center'>
            <Text>Map disini</Text>
          </View>
          <View className="flex-2 flex-row flex-wrap justify-between gap-4 w-full">
            {dashboardCards.map((item, index) => (
              <DashboardCard
                key={index}
                title={item.title}
                value={item.value}
                iconName={item.iconName}
              />
            ))}
          </View>
          <View className='py-6 w-full'>
            <CustomButton title='Report an Issue' bgVariant='primary' textVariant='secondary' IconLeft={() => <Ionicons name='clipboard-outline' size={24} color='white' className='mr-2' />} onPress={() => { }} />
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}
