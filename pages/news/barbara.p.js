import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Barbara</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Barbara"/>
        <meta name="description" content="Trending News about Barbara" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Barbara</h1>
            <Image width={800} height={500} src="https://focus.telerama.fr/2022/11/24/0/0/1280/722/1200/630/60/0/d613e61_1669287721704-11-26-barbara-1965-ma.jpg" alt="Barbara"/>
            <h3>Recent News</h3>
            <a href='https://www.telerama.fr/musique/anna-mouglalis-lit-barbara-sur-scene-elle-transformait-sa-vulnerabilite-en-force-7013134.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Anna Mouglalis lit Barbara sur scène : “Elle transformait sa ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSxoUYhxajKimYglM8O0fYGFYGPOtCaOTJiZFFM2NjS1mjMJqGqRfxbZ0ea_-PIXQD1LmABgw27" alt="Anna Mouglalis lit Barbara sur scène : “Elle transformait sa ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Il y a vingt-cinq ans mourait Barbara, laissant l&#39;une des œuvres les plus fortes et les plus modernes de la chanson. Ce dimanche 27 novembre, la comédienne&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}