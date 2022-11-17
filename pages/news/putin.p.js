import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Putin</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Putin"/>
        <meta name="description" content="Trending News about Putin" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Putin</h1>
            <Image width={800} height={500} src="" alt="Putin"/>
            <h3>Recent News</h3>
            <a href='https://www.washingtonpost.com/dc-md-va/2022/11/16/russia-putin-banker-dc-death/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>D.C. police close probe into death of Putin critic, but questions remain</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR6RSUQ_hKhzbeGmqifDYmxQ2pyTFMTnvCv79vDjJbN_hTLgo0WLq0YhUCbYLvikdDkbB3ZLIC_" alt="D.C. police close probe into death of Putin critic, but questions remain" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The medical examiner said Dan K. Rapoport died of trauma due to a fall but listed the manner of death as &quot;undetermined.&quot;</p></div>
            </div>
        </a>
        </Template></>;
}