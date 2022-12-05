import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Humanoid</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Humanoid"/>
        <meta name="description" content="Trending News about Humanoid" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Humanoid</h1>
            <Image width={800} height={500} src="https://radionigeriaibadan.gov.ng/wp-content/uploads/2022/12/Humanoid-omeife.jpg" alt="Humanoid"/>
            <h3>Recent News</h3>
            <a href='https://radionigeriaibadan.gov.ng/2022/12/03/osinbajo-inaugurates-omeife-africas-first-humanoid-robot/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Osinbajo Inaugurates &#39;Omeife&#39;, Africa&#39;s First Humanoid Robot</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSdZ5EjAdZj567k84Bpcg6HTmwqmz4hWpA62GltE8e1ObPKLZ78rSZ90kSKPnZm0FwYK520OpkK" alt="Osinbajo Inaugurates &#39;Omeife&#39;, Africa&#39;s First Humanoid Robot" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Vice-President, Yemi Osinbajo has inaugurated Omeife, Africa&#39;s first humanoid to boost Artificial Intelligence (AI) and technological development in Nigeria&nbsp;...</p></div>
            </div>
        </a><a href='https://www.theheritagetimes.com/nigeria-vice-president-osinbajo-inaugurates-omeife-africas-first-humanoid/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nigeria: Vice President Osinbajo Inaugurates Omeife, Africa&#39;s First ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSP4EFmknwi8Z8wSRJct0qyyERmNox3hoDSnFlRH0dCf62-eFnizRx728UVrqflUldAtWNFs8Ti7A" alt="Nigeria: Vice President Osinbajo Inaugurates Omeife, Africa&#39;s First ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>By John Ikani Vice-President Yemi Osinbajo, on Friday in Abuja inaugurated Omeife, Africa&#39;s first humanoid to boost Artificial Intelligence (AI) and&nbsp;...</p></div>
            </div>
        </a><a href='https://techeconomy.ng/osinbajo-inaugurates-omeife-africas-first-humanoid/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Osinbajo Inaugurates &#39;Omeife&#39;, Africa&#39;s First Humanoid - TechEconomy</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQJ2R1--qgKix9if6sts2JlPxCKcrMvJnZiFT_KjWvyOzCEmFNo6kafVcEo-Edom0Mb2WXn2vf4" alt="Osinbajo Inaugurates &#39;Omeife&#39;, Africa&#39;s First Humanoid - TechEconomy" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Omeife is with near-human resemblance, language competency, movement, navigation, and behavioural intelligence using AI and computer vision.</p></div>
            </div>
        </a><a href='https://www.ripplesnigeria.com/nigerian-government-launches-africas-first-humanoid-omeife/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nigerian government launches Africa&#39;s first humanoid, &#39;Omeife&#39;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTT99FHi7tbs_mqfpzuEWIiztJY_q2fkkWxANymO4gngq_J-oona2KUyG9PEIIVMySuqBu44WN8" alt="Nigerian government launches Africa&#39;s first humanoid, &#39;Omeife&#39;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Nigerian Government has launched Africa&#39;s first humanoid &#39;Omeife&#39; to boost Artificial Intelligence (AI) and technological development in Nigeria and |</p></div>
            </div>
        </a>
        </Template></>;
}