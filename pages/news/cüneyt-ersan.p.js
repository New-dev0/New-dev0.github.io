import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Cüneyt Ersan</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Cüneyt Ersan"/>
        <meta name="description" content="Trending News about Cüneyt Ersan" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Cüneyt Ersan</h1>
            <Image width={800} height={500} src="https://i.hbrcdn.com/haber/2022/11/23/cuneyt-ersan-kimdir-trt-dunya-kupasi-spikeri-15449157_661_amp.jpg" alt="Cüneyt Ersan"/>
            <h3>Recent News</h3>
            <a href='https://www.haberler.com/haberler/cuneyt-ersan-kimdir-trt-dunya-kupasi-spikeri-15449157-haberi/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cüneyt Ersan kimdir? TRT Dünya Kupası Spikeri Cüneyt Ersan ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSVA6cQG3-iAxeERd2bA0uiaU3a_dIfuav6DpRym849wc6LF57PlHmgGmglGNUZZLhfViVv_aHT" alt="Cüneyt Ersan kimdir? TRT Dünya Kupası Spikeri Cüneyt Ersan ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>FIFA 2022 Dünya Kupası TRT spikerleri kimlerdir merak ediliyor. 2022 Dünya Kupası spikerleri arasında Cüneyt Ersan da bulunuyor. Peki, Cüneyt Ersan kimdir?</p></div>
            </div>
        </a>
        </Template></>;
}