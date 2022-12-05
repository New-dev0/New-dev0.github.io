import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Liz Truss</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Liz Truss"/>
        <meta name="description" content="Trending News about Liz Truss" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Liz Truss</h1>
            <Image width={800} height={500} src="https://iatkv.tmgrup.com.tr/7ebb13/600/314/2/0/616/321?u=https%3a%2f%2fitkv.tmgrup.com.tr%2f2022%2f12%2f04%2f1670179470616.jpg" alt="Liz Truss"/>
            <h3>Recent News</h3>
            <a href='https://www.takvim.com.tr/magazin/2022/12/04/gectigimiz-gunlerde-gorevinden-istifa-eden-birlesik-krallik-basbakani-liz-truss-kac-gunluk-gorev-suresiyle-birlesik-krallikin-en-kisa-sure-gorev-yapan-basbakani-olmustur'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Geçtiğimiz günlerde görevinden istifa eden Birleşik Krallık ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSzrd7quduAhE6Cuv46tYzeXbsQRA9x2Qc9J25p5iGZYHP82-LxI-isAssqacxp5ALq3Y1oJh-Yqg" alt="Geçtiğimiz günlerde görevinden istifa eden Birleşik Krallık ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ATV ekranlarının sevilen yarışması Kim Milyoner Olmak İster&#39;de her hafta birbirinden heyecanlı anlar yaşanıyor. Kim Milyoner Olmak İster&#39;in yeni bölümü&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}