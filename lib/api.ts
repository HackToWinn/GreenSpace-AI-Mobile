import axios from 'axios';
import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';

const API_BASE_URL = 'http://localhost:3001/api/v1';

export const storePictureToIPFS = async (imageUri: string, location: any) => {
  try {
    const asset = await MediaLibrary.createAssetAsync(imageUri);
    const metadata = await MediaLibrary.getAssetInfoAsync(asset.id);
    console.log({ ...metadata, location });

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
      type: mimeType,
    } as any);

    const response = await axios.post(
      `${API_BASE_URL}/report/image-upload`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error('Error uploading image to IPFS:', error);
    throw new Error('Failed to upload image to IPFS.');
  }
}

// TODO: Implement a function to fetch total reports
// export const getTotalReports = async (): Promise<number> => {
//   try {
//     const response = await axios.get(`${API_BASE_URL}/report/total`);
//     return parseInt(response.data.total, 10);
//   } catch (error) {
//     console.error('Failed to fetch total reports:', error);
//     return 0;
//   }
// }

export const getTotalReportsThisWeek = async (): Promise<number | null> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/report/total-this-week`);
    return parseInt(response.data.total, 10);
  } catch (error) {
    console.error('Failed to fetch total reports this week:', error);
    return null;
  }
};