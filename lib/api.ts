import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001/api/v1';

export const storePictureToIPFS = async () => {
  // TODO: Cut and paste storePictureToIPFS function from CameraModal
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