import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Sara Hector</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Sara Hector"/>
        <meta name="description" content="Trending News about Sara Hector" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Sara Hector</h1>
            <Image width={800} height={500} src="https://www.weekend.at/sites/default/files/styles/facebook/public/2022-11/sarahector.jpg" alt="Sara Hector"/>
            <h3>Recent News</h3>
            <a href='https://www.weekend.at/sport/sara-hektor-ihre-mutter-leidet-als'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tragischer Schicksalsschlag für Ski-Olympiasiegerin</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRgk8WNkMGArTfc57U4jylxOHVJWPjEGiKgXVPPSbm8EB6lgDG3WcZ08FhH1YZWgjsXPd6cN3Il" alt="Tragischer Schicksalsschlag für Ski-Olympiasiegerin" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die schwedische Wintersportlerin Sara Hektor bangt um das Leben ihrer Mutter und sprach erstmals öffentlich über deren schwere Erkrankung.</p></div>
            </div>
        </a>
        </Template></>;
}