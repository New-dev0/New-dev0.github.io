import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>TRT Spor</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,TRT Spor"/>
        <meta name="description" content="Trending News about TRT Spor" /></Head><Template>
            <h1 style={{fontSize: "30"}}>TRT Spor</h1>
            <Image width={800} height={500} src="https://www.trtspor.com.tr/resimler/480000/481936.jpg" alt="TRT Spor"/>
            <h3>Recent News</h3>
            <a href='https://www.trtspor.com.tr/haber/2022-dunya-kupasi/2022-dunya-kupasi-detay/cok-guzel-bir-sampiyona-olacak-265596.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Çok güzel bir şampiyona olacak&quot;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSv-bov2wWyScNN23517BDtzcVvFHfeKzgLpLaJehIJIX83B4k1y649ZnuyU7BYWmIBjjNAxwlj" alt="&quot;Çok güzel bir şampiyona olacak&quot;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bir dönem Portekiz Milli Takımı&#39;nda forma giyen Nuno Gomes, Dünya Kupası&#39;na özel TRT Spor&#39;a açıklamalarda bulundu. Gomes, &quot;Bana göre çok güzel bir dünya&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}