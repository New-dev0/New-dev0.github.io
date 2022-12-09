import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Lerato Moloi</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Lerato Moloi"/>
        <meta name="description" content="Trending News about Lerato Moloi" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Lerato Moloi</h1>
            <Image width={800} height={500} src="https://netstorage-briefly.akamaized.net/images/a080552321452c98.jpg" alt="Lerato Moloi"/>
            <h3>Recent News</h3>
            <a href='https://briefly.co.za/entertainment/celebrities/148324-mzansi-tweeps-call-lerato-moloi-jailed-toll-azz-mos-explosive-interview/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lerato Moloi: Mzansi Calls for Model To Be Jailed After Tol Azz Mo&#39;s ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTyFSEtelmpUv_Vne-3Kec1oLqHoQJOIp3TZezlO_ZGeGqGJRamPqmwb1JSeIwa3_D9Cd992gSG" alt="Lerato Moloi: Mzansi Calls for Model To Be Jailed After Tol Azz Mo&#39;s ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Lerato Moloi is under fire for the allegations she made against Toll Azz Mo more than two years ago; The comedian went to Podcast and Chill with MacG and&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}