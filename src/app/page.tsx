"use client"
import {Menu, Avatar, Card, Space, Row, Col} from "antd";

import {CommentOutlined, DownloadOutlined, AlignLeftOutlined, FilterOutlined} from "@ant-design/icons";


export default function Home() {
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
                        style={{width: 300}}
                        actions={[
                            <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel"/>,
                            <CommentOutlined key="comment-c"/>
                        ]}
                        bordered={false}

                    >
                        <div>here graph component</div>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card
                        title="New Cases"
                        style={{width: 300}}
                        actions={[
                            <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel"/>,
                            <CommentOutlined key="comment-d"/>
                        ]}
                        bordered={false}

                    >
                        <div>here graph component</div>
                    </Card>
                </Col>
            </Row>
        </Space>
    )
}
