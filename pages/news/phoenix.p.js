import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Phoenix</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Phoenix"/>
        <meta name="description" content="Trending News about Phoenix" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Phoenix</h1>
            <Image width={800} height={500} src="https://www.nova.fr/wp-content/uploads/sites/2/2022/11/Capture-decran-2022-11-25-a-20.45.06.png?fit=782%2C578&quality=75" alt="Phoenix"/>
            <h3>Recent News</h3>
            <a href='https://www.nova.fr/news/dans-les-oreilles-de-phoenix-207661-25-11-2022/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dans les Oreilles de … Phoenix</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSaggEnfsZ6VHdLofMxUKINkaPBRb0zPIjLstXifSF4D0uI_CCRkvvLnjuScOwBjpmTqNZSGPZ8" alt="Dans les Oreilles de … Phoenix" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>C&#39;est donc la fratrie du quatuor versaillais, Christian Mazzalai et Laurent Brancowitz, qui nous offre cette virée dans les oreilles de Phoenix, le groupe&nbsp;...</p></div>
            </div>
        </a><a href='https://www.lesinrocks.com/musique/phoenix-escale-imminente-a-lolympia-517901-25-11-2022/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Phoenix : escale imminente à l&#39;Olympia - Les Inrocks</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Phoenix : escale imminente à l&#39;Olympia - Les Inrocks" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Phoenix se produira lundi 28 et mardi 29 novembre à l&#39;Olympia. Une bonne nouvelle pour les fans qui attendent d&#39;entendre leur dernier album “Alpha Zulu” en&nbsp;...</p></div>
            </div>
        </a><a href='https://www.tf1.fr/tmc/quotidien-avec-yann-barthes/videos/phoenix-after-midnight-en-live-pour-quotidien-36655284.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Phoenix : « After Midnight » en live pour Quotidien</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTTxQZaJsuHWrs_HkUN7FV6uIVhW2TsQqJksDABdRJM5UqI4cgT9Dnn7N7hqmazmLy15sl8D1eJ" alt="Phoenix : « After Midnight » en live pour Quotidien" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bonus ▶️ 3m22s - Le groupe français Phoenix interprète ce soir « After Midnight », extrait de son nouvel album « Alpha Zulu », sur le plateau de&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}