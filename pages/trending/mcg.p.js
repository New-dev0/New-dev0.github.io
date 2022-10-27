import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>MCG</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,MCG"/>
        <meta name="description" content="Trending News about MCG" /></Head><Template>
            <h1 style={{fontSize: "30"}}>MCG</h1>
            <Image width={800} height={500} src="https://www.cricket.com.au/~/-/media/News/2022/10/27Ireland-cele.ashx?w=1600" alt="MCG"/>
            <h3>Recent News</h3>
            <a href='https://www.cricket.com.au/news/ireland-reaction-beat-england-mcg-t20-world-cup-super-12-stage-roger-delany-1956-olympics/2022-10-27'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Irish etch their place in history with famous MCG victory</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRyiXjXBHtLl07c_PppmudUCbihxuLxfa3JWCvFEPOsrizIPdfbtiavpDy3jaFmU9kEOaUszAGb" alt="Irish etch their place in history with famous MCG victory" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>An MCG museum tour to remind themselves of an Irish hero from the 1956 Olympics helped inspire the nation&#39;s cricketers to a famous win over England.</p></div>
            </div>
        </a><a href='https://www.singletonargus.com.au/story/7958243/irish-emulate-ron-delany-at-the-mcg/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Irish emulate Ron Delany at the MCG</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSfKiIgmR-kYYu1xon408Yte8_7EmM0Mo81LOwtS5ZmEOkCI1XapIaUcHPhuXg_hJlXNCiDpKhm" alt="Irish emulate Ron Delany at the MCG" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ron Delany is revered in Ireland as the man who beat a star-studded field to win the 1500m...</p></div>
            </div>
        </a>
        </Template></>;
}