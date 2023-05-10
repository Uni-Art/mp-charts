"use client"
import {Menu, Avatar, Card, Space, Row, Col} from "antd";

import {CommentOutlined, DownloadOutlined, AlignLeftOutlined, FilterOutlined} from "@ant-design/icons";
import {useEffect, useState} from "react";
import { Chart } from '@antv/g2';
import {getCovidData} from "@/lib/getCovidData";


export default function Home() {
    const [graphData, setGraphData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data: GraphData[] = await getCovidData("2022-05-20", 7);
            setGraphData(data);
        };

        fetchData();
    }, []);

    useEffect(() => {
        const createConfirmedCasesChart = () => {
            const chart = new Chart({
                container: 'casesChart',
                theme: 'classic',
                autoFit: true,
            });

            chart
                .interval()
                .data(graphData)
                .encode('x', 'date')
                .encode('y', 'confirmed')
                .axis('y', { labelFormatter: '.0%' });

            chart.render();
        };

        const createConfirmedRateChart = () => {
            const chart = new Chart({
                container: 'confirmedRateChart',
                theme: 'classic',
                autoFit: true,
            });

            chart
                .line()
                .data(graphData)
                .scale('x', { utc: true })
                .scale('y', { nice: true })
                .scale('color', { palette: 'turbo' })
                .encode('x', (d) => new Date(d.date))
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
        createConfirmedCasesChart();
        createConfirmedRateChart();
    }, [graphData]);

    return (
        <Space direction="vertical">
            <Row gutter={[16, 16]}>
                <Col span={6}>Page Title</Col>
                <Col span={18}>
                    <Menu mode="horizontal">
                        <Menu.Item key="pdf">
                            <span>Export to PDF</span>
                            <DownloadOutlined/>
                        </Menu.Item>
                        <Menu.Item key="notes">
                            <span>notes</span>
                            <span>(3)</span>
                            <AlignLeftOutlined/>
                        </Menu.Item>
                        <Menu.Item key="filter">
                            <span>Filter</span>
                            <span>9+</span>
                            <FilterOutlined/>
                        </Menu.Item>
                    </Menu>
                </Col>
            </Row>

            <Row gutter={[16, 16]}>
                <Col span={12}>
                    <Card
                        title="New Cases"
                        style={{width: 300, height:500}}
                        actions={[
                            <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel"/>,
                            <CommentOutlined key="comment-c"/>
                        ]}
                        bordered={false}

                    >
                        <div id="casesChart"></div>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card
                        title="New Cases"
                        style={{width: 300, height:500}}
                        actions={[
                            <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel"/>,
                            <CommentOutlined key="comment-d"/>
                        ]}
                    >
                        <div id="confirmedRateChart"></div>
                    </Card>
                </Col>
            </Row>
        </Space>
    )
}
