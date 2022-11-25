import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Emma Myers</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Emma Myers"/>
        <meta name="description" content="Trending News about Emma Myers" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Emma Myers</h1>
            <Image width={800} height={500} src="https://cdn-www.comingsoon.net/assets/uploads/2022/11/wednesday-interview-header.png" alt="Emma Myers"/>
            <h3>Recent News</h3>
            <a href='https://www.comingsoon.net/tv/features/1250452-wednesday-interview-hunter-doohan-emma-myers-percy-hynes-white-joy-sunday'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Interview: Hunter Doohan, Emma Myers, Percy Hynes-White &amp; Joy ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSVVRiguy8Bq97HldCmNCsod_oNnKGVstvIp1gGgb1AIuzyDr89t5uw-npPBvBuEhSOUq3W3Mvv" alt="Interview: Hunter Doohan, Emma Myers, Percy Hynes-White &amp; Joy ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ComingSoon spoke with Wednesday stars Hunter Doohan, Emma Myers, Percy Hynes-White, and Joy Sunday about Netflix&#39;s Addams Family series by Tim Burton.</p></div>
            </div>
        </a>
        </Template></>;
}