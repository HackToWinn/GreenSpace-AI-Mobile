import { Ed25519KeyIdentity } from '@dfinity/identity';
import { Ionicons } from '@expo/vector-icons';
import { Linking } from 'react-native';
import CustomButton from './CustomButton';
export default function LoginButton() {
  const onPress = () => {
    const sessionKey = Ed25519KeyIdentity;
    Linking.openURL('https://login.hacktowin.systems');
  };

  return <CustomButton onPress={onPress} title={'Sign in with Internet Identity'} bgVariant={'primary'} textVariant={'secondary'} IconLeft={() => <Ionicons name="log-in" size={22} color={'white'} className="mr-2" />} className="mb-4" />;
}
