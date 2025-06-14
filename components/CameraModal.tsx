import { useBackend } from '@/hooks/useBackend';
import { useCurrentLocation } from '@/hooks/useCurrentLocation';
import { Ionicons } from '@expo/vector-icons';
import { CameraType, CameraView, useCameraPermissions } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import { useRef, useState } from 'react';
import { ActivityIndicator, Alert, Image, Modal, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface CameraModalProps {
  visible: boolean;
  onClose: () => void;
}

export default function CameraModal({ visible, onClose }: CameraModalProps) {
  const [facing, setFacing] = useState<CameraType>('back');
  const [flash, setFlash] = useState<'off' | 'on'>('off');
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [permission, requestPermission] = useCameraPermissions();
  const [mediaPermission, requestMediaPermission] = MediaLibrary.usePermissions();
  const cameraRef = useRef<CameraView>(null);
  const { location } = useCurrentLocation();
  const { createReport } = useBackend();
  const handleClose = () => {
    setCapturedImage(null);
    onClose();
  };

  const toggleCameraFacing = () => {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  };

  const toggleFlash = () => {
    setFlash(current => (current === 'off' ? 'on' : 'off'));
  };

  const takePicture = async () => {
    if (cameraRef.current) {
      try {
        const photo = await cameraRef.current.takePictureAsync({
          quality: 0.8,
          base64: false
        });
        setCapturedImage(photo.uri);
      } catch (error) {
        Alert.alert('Error', 'Failed to take picture');
        console.error('Error taking picture:', error);
      }
    }
  };

  const savePicture = async () => {
    const { status } = await MediaLibrary.requestPermissionsAsync();

    if (status !== 'granted') {
      Alert.alert('Permission required', 'Media library permission is required to save photos.');
      return;
    }

    if (capturedImage) {
      try {
        const asset = await MediaLibrary.createAssetAsync(capturedImage);
        const metadata = await MediaLibrary.getAssetInfoAsync(asset.id);

        const fileUri = metadata.localUri || metadata.uri;

        const extension = fileUri.split('.').pop()?.toLowerCase();
        let mimeType = 'image/jpeg';

        if (extension === 'png') {
          mimeType = 'image/png';
        } else if (extension === 'webp') {
          mimeType = 'image/webp';
        } else if (extension === 'jpg' || extension === 'jpeg') {
          mimeType = 'image/jpeg';
        }

        const formData = new FormData();
        formData.append('image', {
          uri: fileUri,
          name: `photo.${extension}`,
          type: mimeType
        } as any);
        formData.append('location', JSON.stringify(location?.address));
        
        
        const response = await createReport({
          body: formData
        });
        if (!response) {
          Alert.alert('Error', 'Failed to save photo to the server.');
          return;
        }
        Alert.alert('Success', 'Photo saved successfully!');

        setCapturedImage(null);
        onClose();
      } catch (error) {
        console.error('Error saving photo:', error);
      }
    }
  };

  const retakePicture = () => {
    setCapturedImage(null);
  };

  if (!permission) {
    return (
      <SafeAreaView className="flex-1 justify-center items-center bg-black">
        <ActivityIndicator size="large" color="white" />
      </SafeAreaView>
    );
  }

  if (!permission.granted) {
    return (
      <Modal visible={visible} animationType="slide" statusBarTranslucent>
        <SafeAreaView className="flex-1 bg-black">
          <View className="flex-1 justify-center items-center p-5 bg-white">
            <Ionicons name="camera-outline" size={80} color="#666" />
            <Text className="text-2xl font-bold mt-5 mb-2 text-center">Camera Permission Required</Text>
            <Text className="text-lg text-gray-500 text-center mb-5">We need access to your camera to take photos</Text>
            <TouchableOpacity className="bg-blue-500 px-5 py-2 rounded-full mb-2" onPress={requestPermission}>
              <Text className="text-white text-lg font-bold">Grant Permission</Text>
            </TouchableOpacity>
            <TouchableOpacity className="p-2" onPress={handleClose}>
              <Text className="text-gray-500 text-lg">Close</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </Modal>
    );
  }

  return (
    <Modal visible={visible} animationType="slide">
      <SafeAreaView className="flex-1 ">
        {capturedImage ? (
          <View className="flex-1">
            <Image source={{ uri: capturedImage }} className="flex-1 w-full" />
            <View className="flex-row justify-around items-center py-5 bg-black/80">
              <TouchableOpacity className="items-center p-2" onPress={retakePicture}>
                <Ionicons name="refresh-outline" size={24} color="white" />
                <Text className="text-white text-xs mt-1">Retake</Text>
              </TouchableOpacity>
              <TouchableOpacity className="items-center p-2" onPress={savePicture}>
                <Ionicons name="download-outline" size={24} color="white" />
                <Text className="text-white text-xs mt-1">Save</Text>
              </TouchableOpacity>
              <TouchableOpacity className="items-center p-2" onPress={handleClose}>
                <Ionicons name="close-outline" size={24} color="white" />
                <Text className="text-white text-xs mt-1">Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <CameraView ref={cameraRef} className="flex-1" facing={facing} style={{ height: '100%' }} flash={flash}>
            <SafeAreaView className="flex-1 justify-between bg-transparent">
              <View className="flex-row justify-between items-center px-5 py-2 bg-black/50">
                <TouchableOpacity className="w-10 h-10 justify-center items-center" onPress={handleClose}>
                  <Ionicons name="close" size={24} color="white" />
                </TouchableOpacity>
                <Text className="text-white text-lg font-bold">Camera</Text>
                <TouchableOpacity className="w-10 h-10 justify-center items-center" onPress={toggleFlash}>
                  <Ionicons name={flash === 'on' ? 'flash' : 'flash-off'} size={24} color={flash === 'on' ? '#FFD700' : 'white'} />
                </TouchableOpacity>
              </View>

              <View className="self-center w-48 h-48 border-2 border-white rounded-lg" />

              <View className="flex-row justify-between items-center px-5 py-2 bg-black/80">
                <TouchableOpacity className="w-12 h-12 justify-center items-center" onPress={toggleCameraFacing}>
                  <Ionicons name="camera-reverse-outline" size={32} color="white" />
                </TouchableOpacity>
                <TouchableOpacity className="w-16 h-16 rounded-full bg-white/30 justify-center items-center border-4 border-white" onPress={takePicture}>
                  <View className="w-12 h-12 rounded-full bg-white" />
                </TouchableOpacity>
                <View className="w-12 h-12" />
              </View>
            </SafeAreaView>
          </CameraView>
        )}
      </SafeAreaView>
    </Modal>
  );
}
