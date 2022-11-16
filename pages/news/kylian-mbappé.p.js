import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Kylian mbappé</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Kylian mbappé"/>
        <meta name="description" content="Trending News about Kylian mbappé" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Kylian mbappé</h1>
            <Image width={800} height={500} src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt1d1e256296a321a4/637239bc20836c111495116e/goal---web-two-way-split--8520f6cd-edb7-463a-89c0-8fdbf10958a4.jpeg" alt="Kylian mbappé"/>
            <h3>Recent News</h3>
            <a href='https://www.goal.com/tr/haber/kylian-mbappe-cristiano-ronaldo-gibi-olmak-istiyor-petit-fransa-yi-psg-yildizinin-egosunu-dizginlemeye-cagirdi/blt9884f5a0e0f86eda'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Kylian Mbappe, Cristiano Ronaldo gibi olmak istiyor&quot; - Petit, Fransa ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSVUTEVTE4Jb1e14j1HrhOQp6ZaU0JAgjA8htBYgPv6N3WY45esk7TqbfOKRUpnl-mgp6UceD5-" alt="&quot;Kylian Mbappe, Cristiano Ronaldo gibi olmak istiyor&quot; - Petit, Fransa ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Paris Saint-Germain&#39;in yıldızı, 2018&#39;de Fransa ile Dünya Kupası zaferini tattı ancak EURO 2020 istedikleri gibi geçmedi. Kylian Mbappe, Didider Deschamps&#39;ın&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}