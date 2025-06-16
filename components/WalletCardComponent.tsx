import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Alert, Modal, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from './CustomButton';
import LoginButton from './LoginButton';

const WalletCardComponent = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  const [icpBalance, setIcpBalance] = useState(0);
  const [savedWalletAddress, setSavedWalletAddress] = useState('');
  const [loading, setLoading] = useState(false);

  // Regex validator for ICP Principal ID
  const validatePrincipalID = (principalID: string) => {
    const principalRegex = /^[a-z0-9]{32}$/;

    if (!principalRegex.test(principalID)) {
      return false;
    }

    const hasLetter = /[a-zA-Z]/.test(principalID);
    const hasNumber = /[0-9]/.test(principalID);

    return hasLetter && hasNumber;
  };

  const handleSaveWallet = async () => {
    if (!walletAddress.trim()) {
      Alert.alert('Error', 'Please enter a wallet address.');
      return;
    }

    if (!validatePrincipalID(walletAddress.trim())) {
      Alert.alert('Invalid Address', 'Please enter a valid ICP Account ID (64 hexadecimal characters)');
      return;
    }

    setLoading(true);

    try {
      // TODO: Implement a function to store the data into canister
      // await saveWalletToCanister(walletAddress.trim());

      await new Promise(resolve => setTimeout(resolve, 1000));

      setSavedWalletAddress(walletAddress.trim());
      setModalVisible(false);
      setWalletAddress('');
      Alert.alert('Success', 'Wallet saved successfully.');
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      Alert.alert('Error', 'Failed to save wallet. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const fetchICPBalance = async (principalId: any) => {
    // TODO: Implement fetch balance from canister
    // const balance = await getBalanceFromCanister(principalId);
    // setIcpBalance(balance);
  };

  return (
    <>
      <View className="w-full bg-white p-6 rounded-xl shadow-md shadow-neutral-400 mb-6">
        <View className="flex-row justify-between items-center mb-6">
          <Text className="text-lg font-SemiBold text-gray-700">ICP Balance</Text>
          <Text className="text-xs font-Regular text-gray-500 bg-gray-200 px-2 py-1 rounded-full">Authentication Status: {savedWalletAddress ? 'Connected' : 'Invalid'}</Text>
        </View>

        {savedWalletAddress ? (
          <View>
            <Text className="text-4xl font-Bold text-gray-900 mb-6">{icpBalance} ICP</Text>
            <CustomButton title={'Change Wallet Address'} bgVariant={'outline'} textVariant={'primary'} onPress={() => setModalVisible(true)} IconLeft={() => <Ionicons name="wallet-outline" size={22} color={'#4CAF50'} className="mr-2" />} className="mb-4" />
            <CustomButton title={'Disconnect Wallet'} bgVariant={'danger'} textVariant={'secondary'} onPress={() => {}} IconLeft={() => <Ionicons name="log-out-outline" size={22} color={'#FFFFFF'} className="mr-2" />} />
          </View>
        ) : (
          <View>
            <Text className="text-2xl text-center font-Bold text-gray-900 mb-6">Sign In To Continue</Text>
            <LoginButton />
          </View>
        )}
      </View>

      <Modal animationType="fade" transparent={true} visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
        <SafeAreaView className="flex-1 h-full justify-center items-center bg-primary-50/50 backdrop-blur-sm">
          <View className="bg-white m-4 rounded-xl p-6 shadow-lg w-11/12 max-w-md">
            {/* Header */}
            <View className="flex-row justify-between items-center mb-6">
              <Text className="text-xl font-Bold text-gray-800">Add Wallet Address</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)} className="p-2">
                <Ionicons name="close" size={24} color="#6B7280" />
              </TouchableOpacity>
            </View>

            {/* Info */}
            <View className="bg-emerald-50 border border-emerald-200 rounded-lg p-3 mb-4">
              <Text className="text-sm font-Regular text-emerald-800 mb-2">How to get your ICP Principal ID:</Text>
              <Text className="text-sm font-Regular text-emerald-800">
                1. Open the Plug extension or mobile app{'\n'}
                2. Click on deposit{'\n'}
                3. Copy your ICP Principal ID{'\n'}
                4. Paste it here
              </Text>
            </View>

            {/* Input */}
            <View className="mb-6">
              <Text className="text-sm font-SemiBold text-gray-700 mb-2">Principal ID</Text>
              <TextInput className="border border-gray-300 rounded-lg px-3 py-3 text-base font-Regular" placeholder="abcde-fghij-klmno-pqrst-uvw" value={walletAddress} onChangeText={setWalletAddress} autoCapitalize="none" autoCorrect={false} multiline={true} textAlignVertical="top" style={{ minHeight: 80 }} />
              {walletAddress && !validatePrincipalID(walletAddress) && <Text className="text-red-500 text-xs mt-1">Invalid Principal ID format</Text>}
            </View>

            {/* Buttons */}
            <View className="flex flex-row gap-x-3">
              <TouchableOpacity onPress={() => setModalVisible(false)} className="flex-1 bg-gray-200 py-3 rounded-lg" disabled={loading}>
                <Text className="text-center font-SemiBold text-gray-700">Cancel</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={handleSaveWallet} className={`flex-1 py-3 rounded-lg ${loading || !walletAddress || !validatePrincipalID(walletAddress) ? 'bg-primary-500' : 'bg-primary-700'}`} disabled={loading || !walletAddress || !validatePrincipalID(walletAddress)}>
                <Text className="text-center font-SemiBold text-white">{loading ? 'Saving...' : 'Save'}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </Modal>
    </>
  );
};

export default WalletCardComponent;
