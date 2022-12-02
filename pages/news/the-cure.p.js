import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>The cure</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,The cure"/>
        <meta name="description" content="Trending News about The cure" /></Head><Template>
            <h1 style={{fontSize: "30"}}>The cure</h1>
            <Image width={800} height={500} src="https://www.rotary.org/sites/default/files/styles/w_600/public/rm-dec22-pos-hero.jpg?itok=0Kxnp9Pq" alt="The cure"/>
            <h3>Recent News</h3>
            <a href='https://www.rotary.org/en/community-cure?source=rotaryorg_frontpage_features'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>A community cure</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRzjwgqma_Fu0H_XVgQl_zdIudICkxr6YewYHZjmHKW8NbSXS9q4RPqpQVC4qIpy5rAnLV1mXLr" alt="A community cure" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Backed by Rotary&#39;s Programs of Scale award, Partners for a Malaria-Free Zambia confronts a worldwide malady at the local level.</p></div>
            </div>
        </a><a href='https://www.healthline.com/health-news/myrkl-hangover-cure-does-it-work'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Myrkl Hangover Cure: Does it Work?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR60106rTtWeJxBr8XB2_p51UPfGY-7k7XkY5FEkHAQsaG59BhUzcK9ZWNn1LqSaBNK_CcpltNT" alt="Myrkl Hangover Cure: Does it Work?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The brand says by taking two pills before drinking, users can prevent hangover symptoms like headache, nausea, and fatigue. The supplement contains probiotic&nbsp;...</p></div>
            </div>
        </a><a href='https://www.metroweekly.com/2022/12/a-revolutionary-approach-to-finding-a-cure-for-hiv/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>A Revolutionary Approach to Finding a Cure for HIV</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRa59U3aPM-Sv9z7y_TG1e5LHl6Ia_7bdL8As4k8Q6PiDpJVnMBsdOqUnKxjQDaNA_JP-my83Az" alt="A Revolutionary Approach to Finding a Cure for HIV" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Excision BioTherapeutics is testing a gene editing therapeutic “designed to cure HIV infections after a single intravenous infusion.”</p></div>
            </div>
        </a>
        </Template></>;
}