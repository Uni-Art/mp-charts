import {Chart} from "@antv/g2";

export const createConfirmedCasesChart = (data: GraphData[]) => {
    const chart = new Chart({
        container: 'confirmedCasesChart',
        theme: 'classic',
        height: 300,
    });

    chart
        .interval()
        .data(data)
        .encode('x', 'date')
        .encode('y', 'latestBy')
        .axis('y', { labelFormatter: '10' });

    chart.render();
};

export const createConfirmedRateChart = (data: GraphData[]) => {
    const chart = new Chart({
        container: 'confirmedRateChart',
        theme: 'classic',
        height: 300,
    });

    chart
        .line()
        .data(data)
        .scale('x', { utc: true })
        .scale('y', { nice: true })
        .scale('color', { palette: 'turbo' })
        .encode('x', (d:GraphData) => new Date(d.date))
        .encode('y', 'confirmedRate')
        .encode('shape', 'hvh')
        .encode('color', 'confirmedRate')
        .encode('series', () => undefined)
        .style('gradient', 'y')
        .style('lineWidth', 2)
        .style('lineJoin', 'round')
        .axis('x', { title: 'date' });

    chart.render();
};