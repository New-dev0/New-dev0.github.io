import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Glen Durrant</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Glen Durrant"/>
        <meta name="description" content="Trending News about Glen Durrant" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Glen Durrant</h1>
            <Image width={800} height={500} src="https://i2-prod.dailystar.co.uk/incoming/article28604382.ece/ALTERNATES/s1200/0_202021-PDC-William-Hill-World-Darts-Championship-Day-Eleven.jpg" alt="Glen Durrant"/>
            <h3>Recent News</h3>
            <a href='https://www.dailystar.co.uk/sport/darts/glen-durrant-retirement-darts-championship-28611426'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Glen Durrant makes world championship return - 24 hours after ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ6pW1IK0UUIJDlhv0RMsVCeLDQf6QThdMyZzfNAwv-29R1UDjMIyf17HQs3i2lrThLJmuau2lJ" alt="Glen Durrant makes world championship return - 24 hours after ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&#39;Duzza&#39; has endured some difficult struggles for form in recent years and said he would step away from the sport after losing his PDC Tour card. The 52-year-old&nbsp;...</p></div>
            </div>
        </a><a href='https://dartsnews.com/wsdt/durrant-announces-next-move-after-losing-pdc-tour-card-accepts-invitation-to-2023-world-seniors-darts-championship'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Durrant announces next move after losing PDC Tour Card, accepts ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRlC-amCHMar_l1BWRBQbhjUTU0BNOafqMleZ4DguwhR-DgaTgm6Mq4ku-R8YGQqEpE-RrUghlS" alt="Durrant announces next move after losing PDC Tour Card, accepts ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Glen Durrant stepped away from professional darts on Monday after losing out in the 2022/23 PDC World Darts Championship Tour Card Holder Qualifier and will&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}