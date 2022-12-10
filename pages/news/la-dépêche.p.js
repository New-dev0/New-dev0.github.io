import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>La Dépêche</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,La Dépêche"/>
        <meta name="description" content="Trending News about La Dépêche" /></Head><Template>
            <h1 style={{fontSize: "30"}}>La Dépêche</h1>
            <Image width={800} height={500} src="https://images.ladepeche.fr/api/v1/images/view/63936141d0b949662f332b4f/large/image.jpg?v=1" alt="La Dépêche"/>
            <h3>Recent News</h3>
            <a href='https://www.ladepeche.fr/2022/12/09/y-a-t-il-eu-une-mutilation-ou-des-morsures-animales-sur-une-jument-retrouvee-morte-dans-le-lot-10858134.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Y a-t-il eu une mutilation ou des morsures animales sur une jument ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQNNlIYUGo4MbJsrJ2roii1dF8jDlMRZqMGU3cBZQbfodQ1MpLt7G9ZVclL5cXNLHxmWGKfOoKQ" alt="Y a-t-il eu une mutilation ou des morsures animales sur une jument ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mutilation de la main de l&#39;homme ou morsures animales ? La découverte d&#39;une jument dépourvue de ses organes génitaux et d&#39;une oreille pose question et&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ladepeche.fr/2022/12/09/mon-beau-village-28-communes-recompensees-quatre-sacrees-au-niveau-regional-10856210.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mon beau village : 28 communes récompensées, quatre sacrées au ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRe8SynrQD-cJIGQa8AWpHSaRPaZXDPyV3JqLBiD8jJFFxYybqPCkOhyTOmksbycKD-OkqoKa4i" alt="Mon beau village : 28 communes récompensées, quatre sacrées au ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Les lecteurs de La Depêche du Midi ont choisi de récompenser 28 villages de la région pour la qualité du patrimoine, le dynamisme de la vie locale ou de la&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ladepeche.fr/2022/12/09/agen-louverture-de-la-boutique-adopt-de-doux-parfums-pour-les-fetes-10857474.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Agen : L&#39;ouverture de la boutique Adopt&#39;, de doux parfums pour les ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRSJPPS4pKcmXU9FW_h67qR8pbkq2dOBQ8HfZi4Z2WlIXv9eKz4Bi1rs9VwAmLnTUVMBRuD8gIB5Q" alt="Agen : L&#39;ouverture de la boutique Adopt&#39;, de doux parfums pour les ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Voilà à quoi fait référence le nom de la nouvelle boutique de cosmétiques et de parfums, sur le boulevard Carnot, Adopt&#39;. Cette enseigne de 170 magasins partout&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}