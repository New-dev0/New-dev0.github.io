import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Dallas Mavericks</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Dallas Mavericks"/>
        <meta name="description" content="Trending News about Dallas Mavericks" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Dallas Mavericks</h1>
            <Image width={800} height={500} src="https://www.si.com/.image/ar_1.91%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_xy_center%2Cq_auto:good%2Cw_620%2Cx_225%2Cy_100/MTkzODYzNDU2MDM2NzU4OTc5/gettyimages-1244161793-594x594.jpg" alt="Dallas Mavericks"/>
            <h3>Recent News</h3>
            <a href='https://www.si.com/nba/mavericks/news/dallas-mavs-rookie-jaden-hardy-texas-legends-jason-kidd'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>It&#39;s Time For Coach Jason Kidd to Give Mavs Rookie Jaden Hardy a ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS2ws3unekvSUjdGJk_qJPncMHM-p8FCSshi2TNi4MbYRJAkg_B4-y3a8u4wbhVqwgiEMxWgZYv" alt="It&#39;s Time For Coach Jason Kidd to Give Mavs Rookie Jaden Hardy a ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jaden Hardy has been putting up big numbers for the Texas Legends. Given the Dallas Mavericks&#39; roster needs, it wouldn&#39;t hurt for Hardy to get some minutes&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}