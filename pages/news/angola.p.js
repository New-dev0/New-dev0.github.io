import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Angola</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Angola"/>
        <meta name="description" content="Trending News about Angola" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Angola</h1>
            <Image width={800} height={500} src="https://media.zenfs.com/en/csmonitor.com/33b1feede10ae8ae55bfcc5075509658" alt="Angola"/>
            <h3>Recent News</h3>
            <a href='https://news.yahoo.com/lifesaving-changes-demining-angola-calming-135348179.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lifesaving changes: From demining Angola to calming traffic in Japan</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS16esJCLnS4bn-c5ApY7PSXHSAOLvoPqEW4UTysuEqjtVr-1wsx1HLX4GuUFgl6vkdBkO-dKNG" alt="Lifesaving changes: From demining Angola to calming traffic in Japan" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Progress roundup: Big problems can require multipronged solutions. In Japan, better train service and tiny cars helped bring down traffic fatalities.</p></div>
            </div>
        </a><a href='https://www.radioworld.com/global/girassol-fm-launches-station-in-angola-with-elenos'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Girassol FM Launches Station in Angola With Elenos</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTWk_UG-AKfThqIfnp_vjUJharopapJW0oZ4p-zXEbd5lqVbvZ3Rj0NwfNTFWngLhOfgjYsBvCJ" alt="Girassol FM Launches Station in Angola With Elenos" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Media company Rede Girassol is using Elenos Group transmission products at a newly launched FM station in the capital of Angola.</p></div>
            </div>
        </a>
        </Template></>;
}