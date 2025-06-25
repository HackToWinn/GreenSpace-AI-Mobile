const BASE_URL = __DEV__
  ? process.env.EXPO_PUBLIC_API_URL_DEV
  : process.env.EXPO_PUBLIC_API_URL_PROD;

const fetchJSON = async (url: string, options?: RequestInit) => {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`Error: ${response.status} ${response.statusText}`);
  }
  return response.json();
};

// Create Report
export const createReport = async ({ body }: { body: FormData }) => {
  try {
    return await fetchJSON(`${BASE_URL}/report/create`, {
      method: 'POST',
      body,
    });
  } catch (error) {
    console.error('Failed to create report:', error);
    // Return null so caller can check for error
    return null;
  }
};

// Get All Reports
export const getReports = async () => {
  try {
    return await fetchJSON(`${BASE_URL}/report`);
  } catch (error) {
    console.error('Failed to fetch reports:', error);
    return [];
  }
};

// Get Reports This Week
export const getWeekReports = async () => {
  try {
    return await fetchJSON(`${BASE_URL}/report/week`);
  } catch (error) {
    console.error('Failed to fetch total reports:', error);
    return [];
  }
};

// Get Most Reported Categories
export const getMostReportedCategories = async () => {
  try {
    return await fetchJSON(`${BASE_URL}/report/most/category`);
  } catch (error) {
    console.error('Failed to fetch most reported categories:', error);
    return null;
  }
};

// Register User
export const registerUser = async ({ body }: { body: FormData }) => {
  try {
    return await fetchJSON(`${BASE_URL}/user/create`, {
      method: 'POST',
      body,
    });
  } catch (error) {
    console.error('Failed to register user:', error);
    throw new Error('Registration failed');
  }
};

// Get Latest Reports
export const getLatestReports = async () => {
  try {
    return await fetchJSON(`${BASE_URL}/report/latest`);
  } catch (error) {
    console.error('Failed to fetch latest reports:', error);
    return [];
  }
};

// Get My Reports
export const getMyReports = async ({ body }: { body: FormData }) => {
  const userId = body.get("userId");
  if (!userId) {
    console.warn("getMyReports cancelled: user id not found");
    return [];
  }

  try {
    return await fetchJSON(`${BASE_URL}/report/my-report`, {
      method: 'POST',
      body,
    });
  } catch (error) {
    console.error('Failed to fetch user reports:', error);
    return [];
  }
};

// Get User Info
export const getUserInfo = async ({ body }: { body: FormData }) => {
  try {
    return await fetchJSON(`${BASE_URL}/user/get`, {
      method: 'POST',
      body,
    });
  } catch (error) {
    console.error('Failed to fetch user info:', error);
    return null;
  }
};
