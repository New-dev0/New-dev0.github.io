import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Nico Williams</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Nico Williams"/>
        <meta name="description" content="Trending News about Nico Williams" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Nico Williams</h1>
            <Image width={800} height={500} src="https://images.tribalfootball.com/default/0001/12/thumb_11176_default_large.jpeg" alt="Nico Williams"/>
            <h3>Recent News</h3>
            <a href='https://www.tribalfootball.com/articles/agent-urges-calm-for-athletic-bilbao-fans-as-nico-williams-deal-runs-down-4437698'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Agent urges calm for Athletic Bilbao fans as Nico Williams deal runs ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQGt_aC6-xHMSi0vcci86dPms0n7NZdRE98BLbJb4goQuxCekhP9o5fiKTvGyamClRsSNXyBeUh" alt="Agent urges calm for Athletic Bilbao fans as Nico Williams deal runs ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The agent of Nico Williams insists Athletic Bilbao fans can be calm.The striker has just over 18 months of his current deal to run, which carries a €50m&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}