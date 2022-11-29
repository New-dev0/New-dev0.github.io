import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Japan</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Japan"/>
        <meta name="description" content="Trending News about Japan" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Japan</h1>
            <Image width={800} height={500} src="https://www.state.gov/wp-content/uploads/2021/02/Press_release_gold_edited.png" alt="Japan"/>
            <h3>Recent News</h3>
            <a href='https://www.state.gov/assistant-secretary-pyatts-travel-to-japan/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Assistant Secretary Pyatt&#39;s Travel to Japan - United States ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSQSLssEcfHW-Iey6DkECl1YQ6HRjmWql8k7V_RL2fTeaIPMnEjnUVn2xPO4CjRQUiRi_NxlCCe" alt="Assistant Secretary Pyatt&#39;s Travel to Japan - United States ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Assistant Secretary will launch the Japan-U.S. Energy Security Dialogue with representatives of the Japanese Ministry of Foreign Affairs and Ministry of&nbsp;...</p></div>
            </div>
        </a><a href='https://www.freshplaza.com/asia/article/9481765/18-grapes-sold-at-eur30-in-japan/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>18 grapes sold at €30 in Japan</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR1yFaefu_2EWnZ9tCREvsWyvLvg1ut4HrUp9I6L7ZkZ9P0YRxRLNYIrfiooQb_hS7U1smFh7Av" alt="18 grapes sold at €30 in Japan" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sembikiya can be defined as the most expensive fruit shop in the world. It is located in Tokyo, Japan and Tommaso Rossi, who lives and works in the capital,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}