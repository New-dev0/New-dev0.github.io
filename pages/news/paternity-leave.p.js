import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Paternity leave</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Paternity leave"/>
        <meta name="description" content="Trending News about Paternity leave" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Paternity leave</h1>
            <Image width={800} height={500} src="" alt="Paternity leave"/>
            <h3>Recent News</h3>
            <a href='https://www.vanguardngr.com/2022/11/fg-approves-14-day-paternity-leave-for-male-civil-servants/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FG approves 14-day paternity leave for male civil servants</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQfXXk-JNqx0ywK7Tk_GjLhJWuzjarOYwYdKGex9yRruvpNsObUj0ae7rQ4jNtuJocTKh5EpNSD" alt="FG approves 14-day paternity leave for male civil servants" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>By Ezra Ukanwa. The Federal Government has approved the commencement of 14-working-day paternity leave for federal civil servants.</p></div>
            </div>
        </a><a href='https://www.channelstv.com/2022/11/29/fg-approves-14-day-paternity-leave-for-civil-servants/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FG Approves 14-Day Paternity Leave For Civil Servants</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRv_6Ffb-_TBjN0CsVp3rlr5IPYAH3bSkPTcUawu9nY4ZE_PA8qv5TeXosfIbGacD7pbVueqXy2" alt="FG Approves 14-Day Paternity Leave For Civil Servants" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Federal Government has approved 14-day paternity leave for serving male officers whose spouse delivers a baby. Head of Civil Service of the Federation,&nbsp;...</p></div>
            </div>
        </a><a href='https://guardian.ng/news/fg-announces-commencement-of-14-day-paternity-leave/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FG announces commencement of 14-day paternity leave</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRCI1jaMLBIwuaov9NzTr5Xd7D7vY2ED17cmTZRGMIzyDe4HAVPyJGrIyntJrxkJiRGS2ou9VEJ" alt="FG announces commencement of 14-day paternity leave" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Federal Government announced the commencement of a 14-working-day paternity leave for civil servants. The Head of the Civil Service of the Federation,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.thecable.ng/fg-begins-14-day-paternity-leave-for-civil-servants'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FG begins 14-day paternity leave for civil servants</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTqswt2wLfyQdKw2M8Pa3FSNwPw316zFhUl2XJvm_EvgldhK3f5fc9GE7OnyJmcweEN0eTWuwtq" alt="FG begins 14-day paternity leave for civil servants" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>This was disclosed in a circular issued by Folasade Yemi-Esan, head of the civil service of the federation (HoCSF). In September 2021, the federal executive&nbsp;...</p></div>
            </div>
        </a><a href='https://www.thisdaylive.com/index.php/2022/11/29/fg-ratifies-14-day-paternity-leave-for-public-servants/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FG Ratifies 14-day Paternity Leave for Public Servants</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR0OczEYv-18czcPs71JCQZfgZwaWLPa1HpPTlLpm8AFjNL_BUMf1hd6BhZA44Dh_WB44sSkeqX" alt="FG Ratifies 14-day Paternity Leave for Public Servants" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Olawale Ajimotokan in Abuja. The federal government has approved the commencement of a 14-working-day paternity leave for federal civil servants.</p></div>
            </div>
        </a><a href='https://dailypost.ng/2022/11/29/fg-begins-paternity-leave-for-civil-servants/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FG begins paternity leave for civil servants</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT4dPIpk6OFLS1umCl0nP_4o_1tUjFeSUt9Ovy_vH-eUeqZVWrX6Ja3rhUOEnShVVDSuUp2tkA-" alt="FG begins paternity leave for civil servants" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Federal Government has approved the commencement of a 14-day paternity leave for federal civil servants. The paternity leave, which is for serving.</p></div>
            </div>
        </a>
        </Template></>;
}