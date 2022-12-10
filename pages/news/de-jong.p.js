import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>De Jong</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,De Jong"/>
        <meta name="description" content="Trending News about De Jong" /></Head><Template>
            <h1 style={{fontSize: "30"}}>De Jong</h1>
            <Image width={800} height={500} src="https://cdn.sporx.com/img/59/2022/epa-25841397.jpg" alt="De Jong"/>
            <h3>Recent News</h3>
            <a href='https://www.sporx.com/de-jong-onu-tutmak-zor-dunyanin-en-iyisi-messi-SXHBQ998933SXQ'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>De Jong: &#39;Onu tutmak zor, dünyanın en iyisi Messi&#39; - Dünya Kupası ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRvOqVEcD2t5qnMEp_6UW6BdPNmSpO0z7ejQ4fTulGq7DLsr9raB7zQ5lJJ64bvzlImzh3w3uCe" alt="De Jong: &#39;Onu tutmak zor, dünyanın en iyisi Messi&#39; - Dünya Kupası ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Hollanda&#39;nın yıldız orta saha oyuncusu Frenkie De Jong, Arjantin yenilgisinin ardından açıklamalarda bulundu. Frenkie, eski takım arkadaşı Lionel Messi&#39;ye&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}