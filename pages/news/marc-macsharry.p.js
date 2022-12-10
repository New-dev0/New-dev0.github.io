import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Marc MacSharry</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Marc MacSharry"/>
        <meta name="description" content="Trending News about Marc MacSharry" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Marc MacSharry</h1>
            <Image width={800} height={500} src="https://highlandradio.com/wp-content/uploads/2021/06/macsharry-dail-1-e1623303867780.jpg" alt="Marc MacSharry"/>
            <h3>Recent News</h3>
            <a href='https://highlandradio.com/2022/12/08/marc-macsharry-faces-dail-suspension/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Marc MacSharry faces Dail suspension - Highland Radio - Latest ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSeyoi40Hkscvqc9JJdC2KyrpwybQRPvpoq3YKB0SHNWKTEoNeVXq4Xh6XWsXzD-w0HQU8kRVxF" alt="Marc MacSharry faces Dail suspension - Highland Radio - Latest ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>According to the Independent, a complaint was lodged by Donegal Deputy Thomas Pringle after Deputy MacSharry accused the Leas-Cheann Comhairle of discriminating&nbsp;...</p></div>
            </div>
        </a><a href='https://www.leitrimobserver.ie/news/home/983004/mac-sharry-could-be-suspended-from-dail.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mac Sharry could be suspended from Dáil</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ5CnVx821IBvmsUCmpi2xohHNnSCygPDLdgd-1nCx2qAL5xNeyfj5NUbsdxKEMEKo2eMK2Y9fz" alt="Mac Sharry could be suspended from Dáil" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sligo Leitrim TD Marc MacSharry could be facing a two day suspension from the Dáil after a ruling was made against him by a standards committee for polit...</p></div>
            </div>
        </a>
        </Template></>;
}