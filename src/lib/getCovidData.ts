export const getCovidData = async (date: string, range: number): Promise<GraphData[]> => {
    try {
        const response = await fetch('https://api.coronavirus.data.gov.uk/v1/data');
        const data = await response.json();
        const allCases: GraphData[] = data.data;

        // Filtering data for the range
        const filteredCases = allCases.filter(item => {
            const itemDate = new Date(item.date);
            const currentDate = new Date(date);
            const dateRange = new Date(date);
            dateRange.setDate(currentDate.getDate() - range);
            return itemDate >= dateRange && itemDate <= currentDate;
        });
        console.log('filteredCases', filteredCases);

        return filteredCases;
    } catch (error) {
        console.error('Error occurred during the request getCovidData', error);
    }
}