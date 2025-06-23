// loadIdentity.js
import AsyncStorage from '@react-native-async-storage/async-storage';

export default async function loadIdentity() {
  const identityJson = await AsyncStorage.getItem('identity-key');
  const delegationJson = await AsyncStorage.getItem('delegation');

  if (!identityJson || !delegationJson) {
    return { pubKey: null, delegation: null };
  }

  const identityObj = JSON.parse(identityJson);
  const delegationObj = JSON.parse(delegationJson);

  return {
    pubKey: identityObj, 
    delegation: delegationObj,
  };
}
