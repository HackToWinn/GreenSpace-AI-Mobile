import { DelegationChain, DelegationIdentity, Ed25519KeyIdentity } from '@dfinity/identity';
import AsyncStorage from '@react-native-async-storage/async-storage';

let cachedIdentity = null;

export default async function loadIdentity()  {
    const identityJSON = await AsyncStorage.getItem('identity-key');
    const delegationJSON = await AsyncStorage.getItem('delegation');
    if (!identityJSON || !delegationJSON) throw new Error('Not authenticated');

    const baseIdentity =  Ed25519KeyIdentity.fromJSON(identityJSON);
    const chain = DelegationChain.fromJSON(JSON.parse(delegationJSON));
    
    cachedIdentity = await DelegationIdentity.fromDelegation(baseIdentity, chain);
    return cachedIdentity;
  };