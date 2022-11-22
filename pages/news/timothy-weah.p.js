import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Timothy Weah</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Timothy Weah"/>
        <meta name="description" content="Trending News about Timothy Weah" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Timothy Weah</h1>
            <Image width={800} height={500} src="https://i.cnnturk.com/i/cnnturk/75/1200x675/637bda4c70380e137c1848fe" alt="Timothy Weah"/>
            <h3>Recent News</h3>
            <a href='https://www.cnnturk.com/spor/2022-dunya-kupasi/george-weahin-oglu-timothy-weah-dunya-kupasinda-gol-atti'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>George Weah&#39;ın oğlu Timothy Weah Dünya Kupası&#39;nda gol attı</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSlDxxQQq5iCD-F6E5q5iXEAimaUbB5I0oqvon2SLIY4np30IVvlgQ_tdbXKd7lL_dX5ZS9KwSx" alt="George Weah&#39;ın oğlu Timothy Weah Dünya Kupası&#39;nda gol attı" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Milan forması altında gösterdiği performansla Ballon d&#39;Or kazanan Liberyalı efsane George Weah, Dünya Kupası&#39;nda hiç oynayamasa da oğlu Timothy Weah gol&nbsp;...</p></div>
            </div>
        </a><a href='https://www.mynet.com/dunya-kupasi-nda-timothy-weah-in-golu-futbolseverleri-eskiye-goturdu-ronaldo-ve-george-weah-efsanesi-353621-myspor'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dünya Kupası&#39;nda Timothy Weah&#39;ın golü futbolseverleri eskiye ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRHpMXQ-y_73JTm-mCgLy9DTxv7otPSvfcuL8_2iNia-h3NSmfkcL6Te4f6vd5jgQzRpsqgZXBX" alt="Dünya Kupası&#39;nda Timothy Weah&#39;ın golü futbolseverleri eskiye ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dünya Kupası gruplarında Amerika Birleşik Devletleri ile Galler karşı karşıya geldi. Mücadelede ABD&#39;yi 1-0 öne geçiren Timothy Weah futbolseverleri&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}