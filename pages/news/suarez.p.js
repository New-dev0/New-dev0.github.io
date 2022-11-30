import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Suarez</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Suarez"/>
        <meta name="description" content="Trending News about Suarez" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Suarez</h1>
            <Image width={800} height={500} src="https://img3.aksam.com.tr/imgsdisk/2022/11/28/nihayet-luis-suarez-trans-515_7.jpg" alt="Suarez"/>
            <h3>Recent News</h3>
            <a href='https://www.aksam.com.tr/sporplus/nihayet-luis-suarez-transferinde-mutlu-son-herkes-ters-kose-oldu/haber-1322856'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nihayet! Luis Suarez transferinde mutlu son: Herkes ters köşe oldu...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSdmH0oXJfuE_ZyfGksYfgERTN6_cwfz119P3dqJx04xythRTm2k7YqHwIaM0tFlHWv3TY2lL2n" alt="Nihayet! Luis Suarez transferinde mutlu son: Herkes ters köşe oldu..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Luis Suarez Nacional ile ilişiğini kesmesinin ardından Adana Demirspor devreye girmişti. Deneyimli forvetin transferi için bir dizi resmi temaslarda bulunan&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}