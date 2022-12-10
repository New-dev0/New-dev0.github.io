import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>African national Congress</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,African national Congress"/>
        <meta name="description" content="Trending News about African national Congress" /></Head><Template>
            <h1 style={{fontSize: "30"}}>African national Congress</h1>
            <Image width={800} height={500} src="https://mg.co.za/wp-content/uploads/2022/12/mkmva_9455.jpg" alt="African national Congress"/>
            <h3>Recent News</h3>
            <a href='https://mg.co.za/politics/2022-12-09-military-veterans-plan-r10-billion-class-action/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Military veterans plan R10 billion class action</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRixopd7Z7r52kJ0Ro5U9aJOGq61hs2DmsyrZmT927WsvTx_hUBYyKXKbxmAqTEnmr5l_sE60SY" alt="Military veterans plan R10 billion class action" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In addition to the R10.6 billion in reparations, the former members of Umkhonto we Sizwe (MK), the ANC&#39;s military wing, and the Azanian People&#39;s Liberation Army&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}