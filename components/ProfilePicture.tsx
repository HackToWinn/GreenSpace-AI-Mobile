import { View, Image, TouchableOpacity, Modal } from 'react-native'
import CustomButton from './CustomButton'
import { Ionicons } from '@expo/vector-icons'
import { useImagePicker } from '@/hooks/useImagePicker';

const ProfilePicture = () => {
  const { imageUri, pickFromGallery, takePhoto, modalVisible, setModalVisible } = useImagePicker();

  return (
    <>
      <View className='relative'>
        <Image source={imageUri ? { uri: imageUri } : require('@/assets/images/profile/profil_gg.jpg')} className="w-24 h-24 rounded-full mb-4" />
        <TouchableOpacity onPress={() => setModalVisible(true)} className='absolute bottom-4 right-0 bg-primary-500 w-6 h-6 rounded-full items-center justify-center'>
          <Ionicons name="pencil-outline" size={16} color="#fff" />
        </TouchableOpacity>
      </View>
      <Modal
        transparent
        animationType="fade"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View className="flex-1 bg-black/50 items-center justify-center">
          <View className="bg-white rounded-xl p-4 w-3/4">
            <CustomButton title='Take a Photo' onPress={takePhoto} />
            <CustomButton title='Choose from Gallery' onPress={pickFromGallery} />
            <CustomButton title='Cancel' onPress={() => setModalVisible(false)} textVariant='danger' />
          </View>
        </View>
      </Modal>
    </>
  )
}

export default ProfilePicture