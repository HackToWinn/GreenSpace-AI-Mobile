import { Redirect } from 'expo-router';
import '../shim.js'

export default function Index() {
  return <Redirect href={'/(auth)/onboarding'} />;
}
