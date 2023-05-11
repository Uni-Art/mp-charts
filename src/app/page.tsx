"use client"
import {useEffect, useState} from "react";

import {Avatar, Space, Row, Col} from "antd";
import {getCovidData} from "@/lib/getCovidData";
import {createConfirmedCasesChart, createConfirmedRateChart} from "@/utils/charts";
import NavigationMenu from "@/components/navigation/navigationMenu";
import CardGraphBox from "@/components/cardBox/cardGraphBox";
import BtnAddComment from "@/components/buttons/btnAddComment";

export default function Home() {
    const [graphData, setGraphData] = useState<GraphData[] | undefined>([]);

    useEffect(() => {
        let isCanceled = false;

        getCovidData('2022-05-20', 7)
            .then((data: GraphData[] | undefined) => {
                if(!isCanceled) {
                    setGraphData(data);
                }
            })
            .catch((error: Error) => {
                console.error('Error fetching COVID data:', error);
            });

        return () => {
            isCanceled = true;
        }
    }, []);

    useEffect(() => {
        if (graphData) {
            createConfirmedCasesChart(graphData);
            createConfirmedRateChart(graphData);
        }
    }, [graphData]);

    return (
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
            <NavigationMenu />
            <Row gutter={[16, 16]}>
                <Col xs={{span:24}} md={{span:12}}>
                    <CardGraphBox
                        title="New confirmed cases"
                        buttons={[
                            <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" key="avtrConfirmedCasesChart"/>,
                            <BtnAddComment key="commentConfirmedCasesChart"/>
                        ]}
                        graphIdContainer="confirmedCasesChart"
                    />
                </Col>
                <Col xs={{span:24}} md={{span:12}}>
                    <CardGraphBox
                        title="Confirm rate"
                        buttons={[
                            <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" key="avtrConfirmedRateChart"/>,
                            <BtnAddComment key="commentConfirmedRateChart"/>
                        ]}
                        graphIdContainer="confirmedRateChart"
                    />
                </Col>
            </Row>
        </Space>
    )
}