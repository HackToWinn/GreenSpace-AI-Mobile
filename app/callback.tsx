import { useLocalSearchParams } from 'expo-router'
import { Text, View } from 'react-native'

export default function Callback
() {
  const params = useLocalSearchParams();
  return (
    <View>
        <Text>Hello World</Text>
    </View>
  )
}
