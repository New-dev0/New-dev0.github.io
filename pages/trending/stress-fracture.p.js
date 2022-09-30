import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Stress fracture</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Stress fracture"/>
        <meta name="description" content="Trending News about Stress fracture" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Stress fracture</h1>
            <Image width={800} height={500} src="https://lagatar24.com/wp-content/uploads/2022/09/Jasprit_Bumrah_1662299289645_1662299295031_1662299295031-e1664445400133.jpg" alt="Stress fracture"/>
            <h3>Recent News</h3>
            <a href='https://lagatar24.com/bumrah-ruled-out-of-t20-wc-due-to-stress-fracture-report/123727/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bumrah ruled out of T20 WC due to stress fracture: Report - Lagatar ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSb7ekHWQBsbdDI77yE_LYwhAK9wPAkj74sMbVQoh1XNJDhy26HydUc5e1U_hBvvtMjMa484UXU" alt="Bumrah ruled out of T20 WC due to stress fracture: Report - Lagatar ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Lagatar24 Desk. New Delhi, Sept 29: Premier paceman Jasprit Bumrah is expected to miss the T20 World Cup due to a back stress fracture, according to BCCI&nbsp;...</p></div>
            </div>
        </a><a href='https://economictimes.indiatimes.com/news/sports/bumrah-ruled-out-of-t20-world-cup-due-to-back-stress-fracture/articleshow/94537643.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bumrah ruled out of T20 World Cup due to back stress fracture</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQR8UaM_LSZxJ8hSZdoOxvUwZ4q8_Gxv369U18JuxgtxCOO2Y-4c_rGKJiibwBywq0dDAnLDg4P" alt="Bumrah ruled out of T20 World Cup due to back stress fracture" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A BCCI official told PTI that Bumrah will be forced out of action for six months due to the back injury.</p></div>
            </div>
        </a><a href='https://www.thehindu.com/sport/cricket/icc-twenty20-world-cup-jasprit-bumrah-ruled-out-with-stress-fracture/article65950077.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ICC T20 World Cup 2022 | Jasprit Bumrah ruled out with stress fracture</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSqJTWaSDi9pQWXf1dnEdHohdk7H41vHbPbIxuCo3peRsTobKYSTGkNz4NjrrKn4LVQBVUGwfyZ" alt="ICC T20 World Cup 2022 | Jasprit Bumrah ruled out with stress fracture" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bumrah is the second senior star player to be ruled out after Ravindra Jadeja, who is recovering from a knee surgery.</p></div>
            </div>
        </a><a href='https://www.timesnownews.com/sports/cricket/jasprit-bumrah-out-of-t20-world-cup-2022-due-to-back-stress-fracture-report-article-94531099'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jasprit Bumrah out of T20 World Cup 2022 due to back stress ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ5HzY8CUMJdoo8ljctRVK2N18aJYtjVF0-ktXX4795encIK8MiJJrssAUn5blVH0Lgsj1ECZM0" alt="Jasprit Bumrah out of T20 World Cup 2022 due to back stress ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jasprit Bumrah has reportedly been ruled out of T20 World Cup 2022 due to back injury, as per a report in PTI. Bumrah had missed the Asia Cup 2022 as well&nbsp;...</p></div>
            </div>
        </a><a href='https://newsroomodisha.com/jasprit-bumrah-to-be-ruled-out-of-t20-world-cup-with-back-stress-fracture-report/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jasprit Bumrah to be ruled out of T20 World Cup with back stress ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQkhjNXdrpYYegO1uasCa2ZgPx-ITaP-UwSVsGijleQDUUJwJSCDRf7xZ4pl14koJ1KVRrVrv9b" alt="Jasprit Bumrah to be ruled out of T20 World Cup with back stress ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Earlier, before the first T20I between India and South Africa at Thiruvananthapuram, the Board of Control for Cricket in India (BCCI) had said that Bumrah was&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}