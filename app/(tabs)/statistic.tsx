import { useRef, useState } from 'react';
import { Animated, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { LineChart } from 'react-native-gifted-charts';
import MapView, { Marker } from 'react-native-maps';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Statistics() {
  const [showDetail, setShowDetail] = useState(false);
  const [selectedDay, setSelectedDay] = useState('Jan');
  const [selectedYear, setSelectedYear] = useState('2024');
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const slideAnim = useRef(new Animated.Value(0)).current;
  const chartFadeAnim = useRef(new Animated.Value(1)).current;

  // Available years
  const availableYears = ['2022', '2023', '2024'];

  // Data statistik bencana bulanan per tahun (dalam jumlah kejadian)
  const yearlyData = {
    '2024': [
      { value: 12, label: 'Jan' },
      { value: 8, label: 'Feb' },
      { value: 15, label: 'Mar' },
      { value: 22, label: 'Apr' },
      { value: 18, label: 'Mei' },
      { value: 25, label: 'Jun' },
      { value: 30, label: 'Jul' },
      { value: 35, label: 'Agu' },
      { value: 28, label: 'Sep' },
      { value: 20, label: 'Okt' },
      { value: 16, label: 'Nov' },
      { value: 14, label: 'Des' },
    ],
    '2023': [
      { value: 10, label: 'Jan' },
      { value: 14, label: 'Feb' },
      { value: 18, label: 'Mar' },
      { value: 16, label: 'Apr' },
      { value: 20, label: 'Mei' },
      { value: 24, label: 'Jun' },
      { value: 28, label: 'Jul' },
      { value: 32, label: 'Agu' },
      { value: 26, label: 'Sep' },
      { value: 22, label: 'Okt' },
      { value: 18, label: 'Nov' },
      { value: 12, label: 'Des' },
    ],
    '2022': [
      { value: 8, label: 'Jan' },
      { value: 12, label: 'Feb' },
      { value: 16, label: 'Mar' },
      { value: 20, label: 'Apr' },
      { value: 15, label: 'Mei' },
      { value: 22, label: 'Jun' },
      { value: 26, label: 'Jul' },
      { value: 30, label: 'Agu' },
      { value: 24, label: 'Sep' },
      { value: 18, label: 'Okt' },
      { value: 14, label: 'Nov' },
      { value: 10, label: 'Des' },
    ],
  };

  type ChartData = {
    label: string;
    value: number;
  };
  
  const detailData: {
    [year: string]: {
      [month: string]: ChartData[];
    };
  } = {
    '2024': {
      'Jan': [
        { value: 5, label: 'Flood' },
        { value: 3, label: 'Landslide' },
        { value: 2, label: 'Earthquake' },
        { value: 1, label: 'Fire' },
        { value: 1, label: 'Strong Wind' },
      ],
      'Feb': [
        { value: 4, label: 'Flood' },
        { value: 2, label: 'Landslide' },
        { value: 1, label: 'Earthquake' },
        { value: 1, label: 'Fire' },
        { value: 0, label: 'Strong Wind' },
      ],
      'Mar': [
        { value: 8, label: 'Flood' },
        { value: 4, label: 'Landslide' },
        { value: 2, label: 'Earthquake' },
        { value: 1, label: 'Fire' },
        { value: 0, label: 'Strong Wind' },
      ],
      'Apr': [
        { value: 12, label: 'Flood' },
        { value: 6, label: 'Landslide' },
        { value: 2, label: 'Earthquake' },
        { value: 1, label: 'Fire' },
        { value: 1, label: 'Strong Wind' },
      ],
      'Mei': [
        { value: 10, label: 'Flood' },
        { value: 5, label: 'Landslide' },
        { value: 2, label: 'Earthquake' },
        { value: 1, label: 'Fire' },
        { value: 0, label: 'Strong Wind' },
      ],
      'Jun': [
        { value: 15, label: 'Flood' },
        { value: 7, label: 'Landslide' },
        { value: 2, label: 'Earthquake' },
        { value: 1, label: 'Fire' },
        { value: 0, label: 'Strong Wind' },
      ],
      'Jul': [
        { value: 18, label: 'Flood' },
        { value: 8, label: 'Landslide' },
        { value: 2, label: 'Earthquake' },
        { value: 1, label: 'Fire' },
        { value: 1, label: 'Strong Wind' },
      ],
      'Agu': [
        { value: 20, label: 'Flood' },
        { value: 10, label: 'Landslide' },
        { value: 3, label: 'Earthquake' },
        { value: 1, label: 'Fire' },
        { value: 1, label: 'Strong Wind' },
      ],
      'Sep': [
        { value: 16, label: 'Flood' },
        { value: 8, label: 'Landslide' },
        { value: 2, label: 'Earthquake' },
        { value: 1, label: 'Fire' },
        { value: 1, label: 'Strong Wind' },
      ],
      'Okt': [
        { value: 12, label: 'Flood' },
        { value: 5, label: 'Landslide' },
        { value: 2, label: 'Earthquake' },
        { value: 1, label: 'Fire' },
        { value: 0, label: 'Strong Wind' },
      ],
      'Nov': [
        { value: 9, label: 'Flood' },
        { value: 4, label: 'Landslide' },
        { value: 2, label: 'Earthquake' },
        { value: 1, label: 'Fire' },
        { value: 0, label: 'Strong Wind' },
      ],
      'Des': [
        { value: 8, label: 'Flood' },
        { value: 3, label: 'Landslide' },
        { value: 2, label: 'Earthquake' },
        { value: 1, label: 'Fire' },
        { value: 0, label: 'Strong Wind' },
      ],
    },
    '2023': {
      'Jan': [
        { value: 4, label: 'Flood' },
        { value: 3, label: 'Landslide' },
        { value: 2, label: 'Earthquake' },
        { value: 1, label: 'Fire' },
        { value: 0, label: 'Strong Wind' },
      ],
      'Feb': [
        { value: 7, label: 'Flood' },
        { value: 4, label: 'Landslide' },
        { value: 2, label: 'Earthquake' },
        { value: 1, label: 'Fire' },
        { value: 0, label: 'Strong Wind' },
      ],
      'Mar': [
        { value: 10, label: 'Flood' },
        { value: 5, label: 'Landslide' },
        { value: 2, label: 'Earthquake' },
        { value: 1, label: 'Fire' },
        { value: 0, label: 'Strong Wind' },
      ],
      'Apr': [
        { value: 9, label: 'Flood' },
        { value: 4, label: 'Landslide' },
        { value: 2, label: 'Earthquake' },
        { value: 1, label: 'Fire' },
        { value: 0, label: 'Strong Wind' },
      ],
      'Mei': [
        { value: 12, label: 'Flood' },
        { value: 5, label: 'Landslide' },
        { value: 2, label: 'Earthquake' },
        { value: 1, label: 'Fire' },
        { value: 0, label: 'Strong Wind' },
      ],
      'Jun': [
        { value: 14, label: 'Flood' },
        { value: 6, label: 'Landslide' },
        { value: 3, label: 'Earthquake' },
        { value: 1, label: 'Fire' },
        { value: 0, label: 'Strong Wind' },
      ],
      'Jul': [
        { value: 16, label: 'Flood' },
        { value: 8, label: 'Landslide' },
        { value: 3, label: 'Earthquake' },
        { value: 1, label: 'Fire' },
        { value: 0, label: 'Strong Wind' },
      ],
      'Agu': [
        { value: 18, label: 'Flood' },
        { value: 9, label: 'Landslide' },
        { value: 3, label: 'Earthquake' },
        { value: 1, label: 'Fire' },
        { value: 1, label: 'Strong Wind' },
      ],
      'Sep': [
        { value: 15, label: 'Flood' },
        { value: 7, label: 'Landslide' },
        { value: 3, label: 'Earthquake' },
        { value: 1, label: 'Fire' },
        { value: 0, label: 'Strong Wind' },
      ],
      'Okt': [
        { value: 13, label: 'Flood' },
        { value: 6, label: 'Landslide' },
        { value: 2, label: 'Earthquake' },
        { value: 1, label: 'Fire' },
        { value: 0, label: 'Strong Wind' },
      ],
      'Nov': [
        { value: 11, label: 'Flood' },
        { value: 4, label: 'Landslide' },
        { value: 2, label: 'Earthquake' },
        { value: 1, label: 'Fire' },
        { value: 0, label: 'Strong Wind' },
      ],
      'Des': [
        { value: 7, label: 'Flood' },
        { value: 3, label: 'Landslide' },
        { value: 1, label: 'Earthquake' },
        { value: 1, label: 'Fire' },
        { value: 0, label: 'Strong Wind' },
      ],
    },
    '2022': {
      'Jan': [
        { value: 3, label: 'Flood' },
        { value: 2, label: 'Landslide' },
        { value: 2, label: 'Earthquake' },
        { value: 1, label: 'Fire' },
        { value: 0, label: 'Strong Wind' },
      ],
      'Feb': [
        { value: 6, label: 'Flood' },
        { value: 3, label: 'Landslide' },
        { value: 2, label: 'Earthquake' },
        { value: 1, label: 'Fire' },
        { value: 0, label: 'Strong Wind' },
      ],
      'Mar': [
        { value: 9, label: 'Flood' },
        { value: 4, label: 'Landslide' },
        { value: 2, label: 'Earthquake' },
        { value: 1, label: 'Fire' },
        { value: 0, label: 'Strong Wind' },
      ],
      'Apr': [
        { value: 11, label: 'Flood' },
        { value: 5, label: 'Landslide' },
        { value: 3, label: 'Earthquake' },
        { value: 1, label: 'Fire' },
        { value: 0, label: 'Strong Wind' },
      ],
      'Mei': [
        { value: 8, label: 'Flood' },
        { value: 4, label: 'Landslide' },
        { value: 2, label: 'Earthquake' },
        { value: 1, label: 'Fire' },
        { value: 0, label: 'Strong Wind' },
      ],
      'Jun': [
        { value: 13, label: 'Flood' },
        { value: 6, label: 'Landslide' },
        { value: 2, label: 'Earthquake' },
        { value: 1, label: 'Fire' },
        { value: 0, label: 'Strong Wind' },
      ],
      'Jul': [
        { value: 15, label: 'Flood' },
        { value: 7, label: 'Landslide' },
        { value: 3, label: 'Earthquake' },
        { value: 1, label: 'Fire' },
        { value: 0, label: 'Strong Wind' },
      ],
      'Agu': [
        { value: 17, label: 'Flood' },
        { value: 8, label: 'Landslide' },
        { value: 3, label: 'Earthquake' },
        { value: 1, label: 'Fire' },
        { value: 1, label: 'Strong Wind' },
      ],
      'Sep': [
        { value: 14, label: 'Flood' },
        { value: 6, label: 'Landslide' },
        { value: 3, label: 'Earthquake' },
        { value: 1, label: 'Fire' },
        { value: 0, label: 'Strong Wind' },
      ],
      'Okt': [
        { value: 10, label: 'Flood' },
        { value: 5, label: 'Landslide' },
        { value: 2, label: 'Earthquake' },
        { value: 1, label: 'Fire' },
        { value: 0, label: 'Strong Wind' },
      ],
      'Nov': [
        { value: 8, label: 'Flood' },
        { value: 4, label: 'Landslide' },
        { value: 1, label: 'Earthquake' },
        { value: 1, label: 'Fire' },
        { value: 0, label: 'Strong Wind' },
      ],
      'Des': [
        { value: 6, label: 'Flood' },
        { value: 2, label: 'Landslide' },
        { value: 1, label: 'Earthquake' },
        { value: 1, label: 'Fire' },
        { value: 0, label: 'Strong Wind' },
      ],
    },
  };

  const monthNames: { [key: string]: string } = {
    'Jan': 'Januari',
    'Feb': 'Februari',
    'Mar': 'Maret',
    'Apr': 'April',
    'Mei': 'Mei',
    'Jun': 'Juni',
    'Jul': 'Juli',
    'Agu': 'Agustus',
    'Sep': 'September',
    'Okt': 'Oktober',
    'Nov': 'November',
    'Des': 'Desember',
  };

  const getCurrentYearData = () => {
    return yearlyData[selectedYear as '2024' | '2023' | '2022'] || yearlyData['2024'];
  };

  const toggleDetail = () => {
    if (!showDetail) {
      setShowDetail(true);
      Animated.parallel([
        Animated.timing(slideAnim, {
          toValue: 1,
          duration: 400,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start(() => {
        setShowDetail(false);
        setSelectedDay('Jan');
      });
    }
  };

  type Day = 'Jan' | 'Feb' | 'Mar' | 'Apr' | 'May' | 'Jun' | 'Jul' | 'Aug' | 'Sep' | 'Oct' | 'Nov' | 'Dec';

  const handleDayChange = (day: Day) => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 150,
      useNativeDriver: true,
    }).start(() => {
      setSelectedDay(day);
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    });
  };

  type Year = '2024' | '2023' | '2022';

  const handleYearChange = (year: Year) => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 150,
      useNativeDriver: true,
    }).start(() => {
      setSelectedYear(year);
      setSelectedDay('Jan'); // Set to first month when changing year
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    });
  };

  const getCurrentChartData = () => {
    return detailData[selectedYear]?.[selectedDay] || detailData[selectedYear]?.['Jan'] || [];
  };

  const getChartColor = () => {
    return '#EF4444';
  };

  const getChartTitle = () => {
    return `${selectedYear} - ${monthNames[selectedDay]}`;
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Fixed Header */}
      <SafeAreaView
        className="absolute top-0 left-0 right-0 z-50 bg-white shadow-md"
        edges={['top']}
      >
      </SafeAreaView>

      {/* Konten scrollable */}
      <ScrollView contentContainerStyle={{ paddingTop: 40, paddingHorizontal: 16 }} className='h-full' scrollEventThrottle={16} decelerationRate="normal">
        {/* Map Card */}
        <View className="rounded-xl overflow-hidden border border-gray-200 mb-6" style={{ height: 300 }}>
          <MapView
            accessibilityLanguage="id"
            style={{ flex: 1 }}
            initialRegion={{
              latitude: -6.2,
              longitude: 106.816666,
              latitudeDelta: 0.05,
              longitudeDelta: 0.05,
            }}
          >
            <Marker
              coordinate={{ latitude: -6.2, longitude: 106.816666 }}
              title="Area Rawan Bencana"
              description="Wilayah dengan tingkat risiko bencana tinggi"
            />
          </MapView>
        </View>

        {/* Line Chart Container */}
        <View className="mb-6 border p-4 rounded-xl overflow-hidden" style={{ backgroundColor: '#F3F4F6' }}>
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-lg font-bold text-gray-800">
              {showDetail ? getChartTitle() : `Statistics: ${selectedYear}`}
            </Text>
            {!showDetail && (
              <View className="bg-red-100 px-3 py-1 rounded-full">
                <Text className="text-red-600 text-sm font-medium">
                  {getCurrentYearData().find(item => item.label === selectedDay)?.value || 0} Accidents
                </Text>
              </View>
            )}
            <View className="flex-row items-center">
              {showDetail && (
                <View className="bg-red-100 px-3 py-1 rounded-full">
                  <Text className="text-red-600 text-sm font-medium">
                    {getCurrentYearData().find(item => item.label === selectedDay)?.value || 0} Accidents
                  </Text>
                </View>
              )}
              <TouchableOpacity
                className={`px-4 py-2 rounded-lg ${showDetail ? 'bg-red-500' : 'bg-blue-500'}`}
                onPress={toggleDetail}
              >
                <Text className="text-white font-medium">
                  {showDetail ? 'Kembali' : 'Detail'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Year Selector - Show in both overview and detail mode */}
          <View className="mb-4">
            <Text className="text-sm font-medium text-gray-600 mb-2">Choose Year:</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: 4 }}
            >
              {availableYears.map((year) => (
                <TouchableOpacity
                  key={year}
                  className={`px-4 py-2 rounded-full mr-2 ${selectedYear === year ? 'bg-green-500' : 'bg-gray-200'
                    }`}
                  onPress={() => handleYearChange(year as Year)}
                >
                  <Text className={`font-medium ${selectedYear === year ? 'text-white' : 'text-gray-700'
                    }`}>
                    {year}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          {/* Filter Buttons - Show only in detail mode */}
          {showDetail && (
            <Animated.View
              style={{
                opacity: fadeAnim,
                transform: [
                  {
                    translateY: slideAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [-20, 0],
                    }),
                  },
                ],
              }}
            >
              <Text className="text-sm font-medium text-gray-600 mb-2">Choose Month:</Text>
              <View className="mb-4">
                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{ paddingHorizontal: 4 }}
                >


                  {/* Tombol Bulan */}
                  {getCurrentYearData().map((item, index) => (
                    <TouchableOpacity
                      key={index}
                      className={`px-4 py-2 rounded-full mr-2 ${selectedDay === item.label ? 'bg-red-500' : 'bg-gray-200'
                        }`}
                      onPress={() => handleDayChange(item.label as Day)}
                    >
                      <Text className={`font-medium ${selectedDay === item.label ? 'text-white' : 'text-gray-700'
                        }`}>
                        {monthNames[item.label]}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>
            </Animated.View>
          )}

          {/* Chart Section - Fixed Container */}
          <View style={{
            height: 300,
            overflow: 'hidden',
            borderRadius: 8,
          }}>
            <Animated.View
              style={{
                opacity: !showDetail ? chartFadeAnim : fadeAnim,
                flex: 1,
                paddingHorizontal: 8,
                paddingVertical: 8,
              }}
            >
              <LineChart
                data={getCurrentChartData()}
                thickness={3}
                color="#EF4444"
                hideDataPoints={false}
                dataPointsColor="#EF4444"
                dataPointsRadius={4}
                startFillColor="#EF4444"
                endFillColor="transparent"
                startOpacity={0.3}
                endOpacity={0.05}
                yAxisColor="#E5E7EB"
                xAxisColor="#E5E7EB"
                xAxisLabelTextStyle={{ color: '#6B7280', fontSize: 12 }}
                areaChart
                curved
                animationDuration={800}
                height={220}
                width={undefined}
                initialSpacing={20}
                spacing={70}
                maxValue={25}
                noOfSections={4}
                hideOrigin={true}
                hideAxesAndRules={false}
                showVerticalLines={false}
                rulesColor="#E5E7EB"
                rulesType="solid"
                isAnimated={true}
                animateOnDataChange={true}
              />
            </Animated.View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}