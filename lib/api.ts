const BASE_URL = process.env.EXPO_PUBLIC_API_URL_PROD;

/**
 * Fetches JSON data from a URL and returns the response as a JSON object.
 * Throws an error if the response status is not 200.
 *
 * @param {string} url - The URL to fetch
 * @param {RequestInit} [options] - Additional options to pass to the fetch function
 * @returns {Promise<any>} - The JSON object returned by the server
 */
const fetchJSON = async (url: string, options?: RequestInit) => {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`Error: ${response.status} ${response.statusText}`);
  }
  return response.json();
};

/**
 * Creates a new report by sending a POST request with the provided form data.
 *
 * @param {Object} params - The parameters for creating a report.
 * @param {FormData} params.body - The form data containing report details to be sent in the request body.
 * @returns {Promise<any | null>} - The JSON response from the server if successful, or null if an error occurs.
 * @throws {Error} - Throws an error if the response status is not OK.
 */
export const createReport = async ({ body }: { body: FormData }) => {
  try {
    return await fetchJSON(`${BASE_URL}/report/create`, {
      method: "POST",
      body,
    });
  } catch (error) {
    console.error("Failed to create report:", error);
    // Return null so caller can check for error
    return null;
  }
};

/**
 * Fetches the list of all reports from the server.
 *
 * @returns {Promise<any[]>} - The list of reports as a JSON array.
 * @throws {Error} - Throws an error if the response status is not OK.
 */
export const getReports = async () => {
  try {
    return await fetchJSON(`${BASE_URL}/report`);
  } catch (error) {
    console.error("Failed to fetch reports:", error);
    // Return an empty array so caller can handle it gracefully
    return [];
  }
};

/**
 * Fetches a report by its unique identifier.
 *
 * @param {string} id - The unique identifier of the report to fetch.
 * @returns {Promise<any | null>} - The JSON object of the report if successful, or null if an error occurs.
 * @throws {Error} - Throws an error if the response status is not OK.
 */
export const getReportById = async (id: string) => {
  try {
    const response = await fetch(`${BASE_URL}/report/${id}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch report with id ${id}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Failed to fetch report by ID:", error);
    return null;
  }
};

/**
 * Fetches the total number of reports for the current week from the server.
 *
 * @returns {Promise<number[]>} - The total number of reports for the current week as a JSON array.
 * @throws {Error} - Throws an error if the response status is not OK.
 */
export const getWeekReports = async () => {
  try {
    return await fetchJSON(`${BASE_URL}/report/week`);
  } catch (error) {
    console.error("Failed to fetch total reports:", error);
    return [];
  }
};

/**
 * Fetches the most reported categories from the server.
 *
 * @returns {Promise<any | null>} - A JSON object containing the most reported categories if successful, or null if an error occurs.
 * @throws {Error} - Throws an error if the response status is not OK.
 */
export const getMostReportedCategories = async () => {
  try {
    return await fetchJSON(`${BASE_URL}/report/most/category`);
  } catch (error) {
    console.error("Failed to fetch most reported categories:", error);
    return null;
  }
};

/**
 * Registers a new user by sending a POST request with the provided form data.
 *
 * @param {{ body: FormData }} params - The parameters for registering a user.
 * @param {FormData} params.body - The form data containing user details to be sent in the request body.
 * @returns {Promise<any | null>} - The JSON response from the server if successful, or null if an error occurs.
 * @throws {Error} - Throws an error if the response status is not OK.
 */
export const registerUser = async ({ body }: { body: FormData }) => {
  try {
    return await fetchJSON(`${BASE_URL}/user/create`, {
      method: "POST",
      body,
    });
  } catch (error) {
    console.error("Failed to register user:", error);
    throw new Error("Registration failed");
  }
};

/**
 * Fetches the latest reports from the server.
 *
 * @returns {Promise<any[]>} - The list of latest reports as a JSON array.
 * @throws {Error} - Throws an error if the response status is not OK.
 */
export const getLatestReports = async () => {
  try {
    return await fetchJSON(`${BASE_URL}/report/latest`);
  } catch (error) {
    console.error("Failed to fetch latest reports:", error);
    return [];
  }
};

/**
 * Fetches all reports submitted by a user from the server.
 *
 * @param {{ body: FormData }} params - The parameters for fetching user reports.
 * @param {FormData} params.body - The form data containing the user id to be sent in the request body.
 * @returns {Promise<any[]>} - The list of user reports as a JSON array.
 * @throws {Error} - Throws an error if the response status is not OK.
 */
export const getMyReports = async ({ body }: { body: FormData }) => {
  const userId = body.get("userId");
  if (!userId) {
    console.warn("getMyReports cancelled: user id not found");
    return [];
  }

  try {
    return await fetchJSON(`${BASE_URL}/report/my-report`, {
      method: "POST",
      body,
    });
  } catch (error) {
    console.error("Failed to fetch user reports:", error);
    return [];
  }
};

/**
 * Fetches a user's profile information from the server.
 *
 * @param {{ body: FormData }} params - The parameters for fetching user profile info.
 * @param {FormData} params.body - The form data containing the user id to be sent in the request body.
 * @returns {Promise<any | null>} - The user profile info as a JSON object if successful, or null if an error occurs.
 * @throws {Error} - Throws an error if the response status is not OK.
 */
export const getUserInfo = async ({ body }: { body: FormData }) => {
  try {
    return await fetchJSON(`${BASE_URL}/user/get`, {
      method: "POST",
      body,
    });
  } catch (error) {
    console.error("Failed to fetch user info:", error);
    return null;
  }
};
