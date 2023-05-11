import React from "react";
import {Button, Col, Row, Space} from "antd";
import {AlignLeftOutlined, DownloadOutlined, FilterOutlined} from "@ant-design/icons";
import {Pages} from "@/configs/pages";
import styles from "@/components/navigation/navigationMenu.module.scss";
import Link from "next/link";

function NavigationMenu() {
    return (
        <Row gutter={[16, 16]}>
            <Col xs={{span:8}} md={{span:12}}>
                <Link href={Pages.Home} className={styles.title}>Page Title</Link>
            </Col>
            <Col xs={{span:16}} md={{span:12}}>
                <Space wrap align="end" className={styles.menu}>
                    <Button key="pdf" size="small" onClick={() => console.log('click')}>
                        Export to PDF
                        <DownloadOutlined className={styles.icon} size={16}/>
                    </Button>
                    <Button key="notes" size="small" onClick={() => console.log('click')}>
                        Notes
                        <span className={styles.textLabel}>(3)</span>
                        <AlignLeftOutlined className={styles.icon}/>
                    </Button>
                    <Button key="filter" size="small" onClick={() => console.log('click')}>
                        Filter
                        <span className={styles.circleLabel}>9+</span>
                        <FilterOutlined className={styles.icon}/>
                    </Button>
                </Space>
            </Col>
        </Row>
    );
}

export default NavigationMenu;