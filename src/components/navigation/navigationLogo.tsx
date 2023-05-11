import React from "react";
import {Pages} from "@/configs/pages";
import Link from "next/link";
import styles from "@/components/navigation/navigationLogo.module.scss"

function NavigationLogo() {
    return (
        <Link href={Pages.Home} className={styles.logo}>App Title</Link>
    );
}

export default NavigationLogo;