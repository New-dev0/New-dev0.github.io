import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Soprano</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Soprano"/>
        <meta name="description" content="Trending News about Soprano" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Soprano</h1>
            <Image width={800} height={500} src="https://resize-public.ladmedia.fr/img/var/public/storage/images/news/quand-t-es-voisin-avec-kendji-soprano-balance-sur-kendji-girac-et-ces-bruits-qu-il-entend-dans-sa-chambre-1751069/47168765-1-fre-FR/Quand-t-es-voisin-avec-Kendji-Soprano-balance-sur-Kendji-Girac-et-ces-bruits-qu-il-entend-dans-sa-chambre.jpg" alt="Soprano"/>
            <h3>Recent News</h3>
            <a href='https://www.public.fr/News/Quand-t-es-voisin-avec-Kendji-Soprano-balance-sur-Kendji-Girac-et-ces-bruits-qu-il-entend-dans-sa-chambre-1751069'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>“Quand t&#39;es voisin avec Kendji…” : Soprano balance sur Kendji ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS2ElJ8t0XDO2wsJlKaK9EULwPIe9-HtgGPvyNx3xJPowFIvecsGsaTXZSseaxBrViph6Kfxu_a" alt="“Quand t&#39;es voisin avec Kendji…” : Soprano balance sur Kendji ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Interrogé par NRJ Belgique avant la cérémonie des NRJ Music Awards, Soprano a fait quelques révélations sur Kendji Girac et ce qu&#39;il entendait dans la&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}