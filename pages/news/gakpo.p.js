import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Gakpo</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Gakpo"/>
        <meta name="description" content="Trending News about Gakpo" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Gakpo</h1>
            <Image width={800} height={500} src="https://wesportfr.com/wp-content/uploads/2022/11/cody-gakpo-1000x600.jpg" alt="Gakpo"/>
            <h3>Recent News</h3>
            <a href='https://wesportfr.com/coupe-du-monde-2022-cody-gakpo-la-nouvelle-star-neerlandaise-cdm22/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Coupe du Monde 2022 : Cody Gakpo, la nouvelle star néerlandaise</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTzbICxJQ2CMylIuBURmSXW1jbdmX1qRop0MM2_J7fm5sKrAumTBa-L-CnarL5u0N-YR2XvKh0o" alt="Coupe du Monde 2022 : Cody Gakpo, la nouvelle star néerlandaise" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Les supporters du PSV ne savaient pas si le triplé de Cody Gakpo lors de la victoire 7-1 sur Volendam le 31 août était un adieu.</p></div>
            </div>
        </a><a href='https://lefootenbref.com/2022/11/21/qui-est-cody-gakpo-lailier-neerlandais-plus-efficace-que-haaland-en-europe/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Qui est Cody Gakpo - l&#39;ailier néerlandais plus efficace que Haaland ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSTMaXyUiOIILQTBvSlQmM8nY-nfV_L27w940OhZMwf9Jam-C8He6bZe10gRBzufN7FC6iurqI6" alt="Qui est Cody Gakpo - l&#39;ailier néerlandais plus efficace que Haaland ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cody Gakpo, joueur du PSV Eindhoven a plus d&#39;implications dans les buts (29) cette saison que Haaland (26). L&#39;attaquant de Manchester City, Erling Haaland,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}