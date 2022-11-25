import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Alisson</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Alisson"/>
        <meta name="description" content="Trending News about Alisson" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Alisson</h1>
            <Image width={800} height={500} src="https://i.cnnturk.com/i/cnnturk/75/1200x675/637fd00517aca917f84131bb" alt="Alisson"/>
            <h3>Recent News</h3>
            <a href='https://www.cnnturk.com/spor/2022-dunya-kupasi/alisson-beckerin-neden-biyik-biraktigi-ortaya-cikti'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Alisson&#39;un neden bıyık bıraktığı ortaya çıktı</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSQurWSEPXDnGlNU6b4-pLdoV0-GmUVT7nGYuMZkMX81Q74uf3wCwrhu8aYE5WOarAqAWkrzbAi" alt="Alisson&#39;un neden bıyık bıraktığı ortaya çıktı" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Brezilya&#39;nın tecrübeli kalecisi Alisson Becker, Katar&#39;daki Dünya Kupası&#39;na yeni tarzıyla çıktı. Alisson&#39;un bıyık bırakmasının nedeni ortaya çıktı.</p></div>
            </div>
        </a>
        </Template></>;
}