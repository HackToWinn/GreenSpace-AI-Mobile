

    export const createReport = async ({ body}: {  body: FormData}) => {
        try {
            const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/report/create`, {
                method : 'POST',
                body: body,
            });
            if (!response.ok) {
                throw new Error(`Error creating report: ${response.status} ${response.statusText}`);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Failed to create report:', error);           
        }
    }    
export const getReports = async () => {
  try {
    const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/report`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch total reports:', error);
    return 0;
  }
}

export const getWeekReports = async () => {
  try {
    const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/report/week`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch total reports:', error);
    return 0;
  }
}
export const getMostReportedCategories = async () => {
  try {
    const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/report/most/categories`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch most reported categories:', error);
    return [];
  }
}
