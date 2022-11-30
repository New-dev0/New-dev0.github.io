import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>World Cup top scorers 2022</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,World Cup top scorers 2022"/>
        <meta name="description" content="Trending News about World Cup top scorers 2022" /></Head><Template>
            <h1 style={{fontSize: "30"}}>World Cup top scorers 2022</h1>
            <Image width={800} height={500} src="https://www.barrons.com/asset/external-media/afp/AFP1004178891743125404789595433626449465304-fbl-wc-2022-qat-scorers-1.jpg" alt="World Cup top scorers 2022"/>
            <h3>Recent News</h3>
            <a href='https://www.barrons.com/articles/world-cup-2022-top-scorers-01669710008'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>World Cup 2022: Top Scorers</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTGSFV5PFSIuWjwIX-oGASAP9Xy4LNxAarnIl0af614kCOy5WFylLCWRA5WVvLDX1Fq_xjKIoUV" alt="World Cup 2022: Top Scorers" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>World Cup 2022: top scorers. VINCENT LEFAI. Text size. Updates. 1 goal. 51 players. -. 2. ESP. Torres. IRN. Taremi. ENG. Saka. BRA. Richarlison. ARG. Messi.</p></div>
            </div>
        </a>
        </Template></>;
}