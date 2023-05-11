"use client";
import "antd/dist/reset.css";
import "@/global.scss";

import React from "react";
import {Metadata} from "next";
import Container from "@/components/container/container";
import NavigationLogo from "@/components/navigation/navigationLogo";
import {ConfigProvider, Layout} from "antd";

const {Header, Content} = Layout;

export const metadata: Metadata = {
    title: 'Martin Porjanda - Test task ',
    description: 'Test task - single web application for rendering data in charts',
}

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body>
        <ConfigProvider theme={{
            token: {
                colorPrimary: '#243853',
            },
        }}>
            <Layout>
                <Header className="appHeader">
                    <NavigationLogo/>
                </Header>
                <Content className="container">
                    <Container>{children}</Container>
                </Content>
            </Layout>
        </ConfigProvider>
        </body>
        </html>
    )
}
