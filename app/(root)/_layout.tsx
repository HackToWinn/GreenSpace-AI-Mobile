import { Stack } from 'expo-router'

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name='home' options={{ headerShown: false }} />
    </Stack>
  )
}

export default Layout