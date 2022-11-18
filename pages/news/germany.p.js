import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Germany</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Germany"/>
        <meta name="description" content="Trending News about Germany" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Germany</h1>
            <Image width={800} height={500} src="" alt="Germany"/>
            <h3>Recent News</h3>
            <a href='https://www.ft.com/content/c9716512-268e-4346-8d6d-a811f8ce3b75'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>France and Germany to fire up stalled fighter jet project</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQmYqAYeSvYf794-qx7PUe2UdK42BanYhQgwfK0BcNPSq4Sz0eZ7NfzzVzPoEp2m8Bqv1IwHsJs" alt="France and Germany to fire up stalled fighter jet project" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The two countries and two of the main companies involved, Airbus and Dassault Aviation, are close to formally advancing to a crucial stage of the Future Combat&nbsp;...</p></div>
            </div>
        </a><a href='https://cen.acs.org/business/finance/Another-bad-quarter-Germanys-chemical/100/i41'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Another bad quarter for Germany&#39;s chemical sector</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTuHhGvyJuk5f19hN6Gb6U4UiambewUqnWciicag-jkRmWWMogvOiQ9vNQ9Jmq3Q0s5zJiOJDAG" alt="Another bad quarter for Germany&#39;s chemical sector" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Evonik&#39;s heaquarters building. Credit: Evonik Industries. Evonik Industries is one of several large German chemical firms that is growing despite tough market&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}