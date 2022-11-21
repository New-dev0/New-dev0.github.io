import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Jungkook</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Jungkook"/>
        <meta name="description" content="Trending News about Jungkook" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Jungkook</h1>
            <Image width={800} height={500} src="https://img-s1.onedio.com/id-637a57a103e840271b9ed91a/rev-0/raw/s-5b964a7a8b3b8e25ec5c0ff137181368974457b1.jpg" alt="Jungkook"/>
            <h3>Recent News</h3>
            <a href='https://onedio.com/haber/bts-uyesi-jeon-jungkook-2022-fifa-dunya-kupasi-torenine-adini-altin-harflerle-kazidi-1108475'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>BTS Üyesi Jeon Jungkook 2022 FIFA Dünya Kupası Törenine Adını ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS__FfNBLnxaDtOjumz6FWcZj649chQV_0N5PbdK35bM4fZJeDzTUaHazCXWcqx9OkBXaD7zdiv" alt="BTS Üyesi Jeon Jungkook 2022 FIFA Dünya Kupası Törenine Adını ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>2022 FIFA Dünya Kupası bugün yapılan açılış töreniyle resmen başlamış oldu. Bu yıl 22.&#39;si düzenlenen turnuvaya Katar ev sahipliği yapıyor.</p></div>
            </div>
        </a>
        </Template></>;
}