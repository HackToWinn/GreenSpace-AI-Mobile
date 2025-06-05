import React from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import { BarChart, LineChart, PieChart } from 'react-native-gifted-charts';
import MapView, { Marker } from 'react-native-maps';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window');
const HEADER_HEIGHT = 60;

export default function ExploreTab() {
  // Sample data untuk charts
  const lineData = [
    { value: 50, dataPointText: '50' },
    { value: 80, dataPointText: '80' },
    { value: 90, dataPointText: '90' },
    { value: 70, dataPointText: '70' },
    { value: 60, dataPointText: '60' },
    { value: 85, dataPointText: '85' },
  ];

  const barData = [
    { value: 250, label: 'Jan', frontColor: '#177AD5' },
    { value: 500, label: 'Feb', frontColor: '#177AD5' },
    { value: 745, label: 'Mar', frontColor: '#177AD5' },
    { value: 320, label: 'Apr', frontColor: '#177AD5' },
    { value: 600, label: 'May', frontColor: '#177AD5' },
    { value: 256, label: 'Jun', frontColor: '#177AD5' },
  ];

  const pieData = [
    { value: 47, color: '#009FFF', gradientCenterColor: '#006DFF', focused: true },
    { value: 40, color: '#93FCF8', gradientCenterColor: '#3BE9DE' },
    { value: 16, color: '#BDB2FA', gradientCenterColor: '#8F80F3' },
    { value: 3, color: '#FFA5BA', gradientCenterColor: '#FF7F97' },
  ];

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <View style={styles.container}>
        {/* Fixed Header */}
        <View style={styles.header}>
          <Text style={styles.headerText}>Explore</Text>
        </View>

        {/* Scrollable Content */}
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.mapContainer}>
            <MapView
              style={styles.map}
              initialRegion={{
                latitude: -6.200000, // Jakarta
                longitude: 106.816666,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            >
              <Marker
                coordinate={{ latitude: -6.200000, longitude: 106.816666 }}
                title="Jakarta"
                description="Ini ibu kota Indonesia"
              />
            </MapView>
          </View>

          {/* Charts Section */}
          <View style={styles.chartsContainer}>
            {/* Line Chart */}
            <View style={styles.chartItem}>
              <Text style={styles.chartTitle}>Trend Kunjungan Bulanan</Text>
              <View style={styles.chartWrapper}>
                <LineChart
                  data={lineData}
                  width={width - 64}
                  height={200}
                  spacing={50}
                  thickness={3}
                  color="#177AD5"
                  dataPointsColor="#177AD5"
                  dataPointsRadius={5}
                  textShiftY={-10}
                  textShiftX={-5}
                  textFontSize={12}
                  hideRules
                  yAxisColor="lightgray"
                  xAxisColor="lightgray"
                  showVerticalLines
                  verticalLinesColor="rgba(14,164,164,0.5)"
                  xAxisLabelTextStyle={{ color: 'gray', fontSize: 10 }}
                  yAxisTextStyle={{ color: 'gray', fontSize: 10 }}
                />
              </View>
            </View>

            {/* Bar Chart */}
            <View style={styles.chartItem}>
              <Text style={styles.chartTitle}>Statistik Pengunjung per Bulan</Text>
              <View style={styles.chartWrapper}>
                <BarChart
                  data={barData}
                  width={width - 64}
                  height={200}
                  barWidth={30}
                  spacing={20}
                  roundedTop
                  roundedBottom
                  hideRules
                  xAxisThickness={1}
                  yAxisThickness={1}
                  yAxisColor="lightgray"
                  xAxisColor="lightgray"
                  noOfSections={3}
                  maxValue={800}
                  yAxisLabelTexts={['0', '200', '400', '600', '800']}
                  labelWidth={40}
                  xAxisLabelTextStyle={{ color: 'gray', fontSize: 10 }}
                  yAxisTextStyle={{ color: 'gray', fontSize: 10 }}
                />
              </View>
            </View>

            {/* Pie Chart */}
            <View style={styles.chartItem}>
              <Text style={styles.chartTitle}>Distribusi Kategori Wisata</Text>
              <View style={styles.pieChartWrapper}>
                <PieChart
                  data={pieData}
                  donut
                  showGradient
                  sectionAutoFocus
                  radius={90}
                  innerRadius={60}
                  innerCircleColor={'#232B5D'}
                  centerLabelComponent={() => {
                    return (
                      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 22, color: 'white', fontWeight: 'bold' }}>
                          47%
                        </Text>
                        <Text style={{ fontSize: 14, color: 'white' }}>Excellent</Text>
                      </View>
                    );
                  }}
                />
                
                {/* Legend */}
                <View style={styles.legend}>
                  <View style={styles.legendItem}>
                    <View style={[styles.legendColor, { backgroundColor: '#009FFF' }]} />
                    <Text style={styles.legendText}>Pantai (47%)</Text>
                  </View>
                  <View style={styles.legendItem}>
                    <View style={[styles.legendColor, { backgroundColor: '#93FCF8' }]} />
                    <Text style={styles.legendText}>Gunung (40%)</Text>
                  </View>
                  <View style={styles.legendItem}>
                    <View style={[styles.legendColor, { backgroundColor: '#BDB2FA' }]} />
                    <Text style={styles.legendText}>Museum (16%)</Text>
                  </View>
                  <View style={styles.legendItem}>
                    <View style={[styles.legendColor, { backgroundColor: '#FFA5BA' }]} />
                    <Text style={styles.legendText}>Lainnya (3%)</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    paddingTop: HEADER_HEIGHT,
  },
  header: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: HEADER_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 50,
  },
  mapContainer: {
    width: width - 32,
    height: height * 0.4,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  chartsContainer: {
    flex: 1,
  },
  chartItem: {
    marginBottom: 30,
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  chartTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
    textAlign: 'center',
  },
  chartWrapper: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
  },
  pieChartWrapper: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
  },
  legend: {
    marginTop: 20,
    alignItems: 'flex-start',
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  legendColor: {
    width: 16,
    height: 16,
    borderRadius: 8,
    marginRight: 8,
  },
  legendText: {
    fontSize: 12,
    color: '#333',
  },
});