import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Grainne Gallanagh</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Grainne Gallanagh"/>
        <meta name="description" content="Trending News about Grainne Gallanagh" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Grainne Gallanagh</h1>
            <Image width={800} height={500} src="https://www.donegaldaily.com/wp-content/uploads/2022/11/Grainne-and-Gemma-Gallanagh.png" alt="Grainne Gallanagh"/>
            <h3>Recent News</h3>
            <a href='https://www.donegaldaily.com/2022/11/19/grainne-gallanagh-relief-after-sisters-shocking-pregnancy-illness/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Grainne Gallanagh shares relief after sister&#39;s shocking pregnancy...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRcFw_a-mQAwGgb_F76BHLaOBrl2K8HDNJ6JPWh8ZXwHXumhOB7YzYm4DCxNLTj_3BNDlRCo7qd" alt="Grainne Gallanagh shares relief after sister&#39;s shocking pregnancy..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Donegal model and nurse Grainne Gallanagh has expressed her relief that her sister Gemma is making a recovery from extreme pregnancy sickness.</p></div>
            </div>
        </a><a href='https://extra.ie/2022/11/19/entertainment/grainne-gallanagh-pregnant-sister'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Model Grainne Gallanagh Reveals Pregnant Sister Suffered From ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTq1HrIkazBqX2zg4aZN2K538QIv7fdGRL3n0G16L30JqIcKAyvFjNwmhY-je9X_W9PuXqN-_mV" alt="Model Grainne Gallanagh Reveals Pregnant Sister Suffered From ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Model Grainne Gallanagh has revealed the difficult pregnancy her sister has had and how relieved she is that she&#39;s coming out the other side.</p></div>
            </div>
        </a>
        </Template></>;
}