
import { useState } from 'react';

export function useAPI(){
    const [isLoading, setIsLoading] = useState<boolean>(false);
    
    const createReport = async ({ body}: {  body: FormData}) => {
        setIsLoading(true);
        try {
            const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}report/image-upload`, {
                method : 'POST',
                body: body,
            });
            if (!response.ok) {
                throw new Error(`Error creating report: ${response.status} ${response.statusText}`);
            }
            const data = await response.json();
            setIsLoading(false);
            return data;
        } catch (error) {
            setIsLoading(false);
            console.error('Failed to create report:', error);           
        }
    }    
    const getReports = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/report`);
            if (!response.ok) {
                throw new Error(`Error fetching reports: ${response.status} ${response.statusText}`);
            }
            return response.json();
        } catch (error) {
            setIsLoading(false);
            console.error('Failed to fetch reports:', error);
        }
    }

    
    return {
        isLoading,
        createReport,
        getReports
        // getReportThisWeek,
        // getReports,
        // getTotalReportThisWeek,
    }
}