import { View, FlatList } from 'react-native'
import { ReportsCardComponent } from '@/components/ReportCardComponent'
import { reports } from '@/constants'

const LatestReports = () => {
  return (
    <View className='flex-1 px-8 pt-4 bg-[#FBFDFC]'>
      <View className='flex flex-col gap-y-4'>
        <FlatList 
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ gap: 16 }}
          data={reports}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ReportsCardComponent {...item} />}
        />
      </View>
    </View>
  )
}

export default LatestReports