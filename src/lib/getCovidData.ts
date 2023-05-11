export const getCovidData = async (date: string, range: number): Promise<GraphData[] | undefined> => {
    try {
        const response = await fetch('https://api.coronavirus.data.gov.uk/v1/data');

        if (!response.ok) {
            throw new Error('Failed to fetch COVID data');
        }

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

        return filteredCases;
    } catch (error) {
        console.error('Error fetching COVID data:', error);
        return undefined;
    }
}