import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>LGBT</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,LGBT"/>
        <meta name="description" content="Trending News about LGBT" /></Head><Template>
            <h1 style={{fontSize: "30"}}>LGBT</h1>
            <Image width={800} height={500} src="https://images.ladepeche.fr/api/v1/images/view/63766463b03787095475c2b7/large/image.jpg?v=1" alt="LGBT"/>
            <h3>Recent News</h3>
            <a href='https://www.ladepeche.fr/2022/11/17/madame-je-suis-un-garcon-ou-une-fille-les-enseignants-du-lot-formes-a-laccueil-des-eleves-lgbt-10809544.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Madame, je suis un garçon ou une fille ?&quot; : Les enseignants du Lot ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS3MjzOf0orhvfWAxwA7Xr3TA19ZXxs9yPCGxcYidDXmOpI6r36oacoPqKr_oJMoGchHF_1cwnb_g" alt="&quot;Madame, je suis un garçon ou une fille ?&quot; : Les enseignants du Lot ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>La formation était consacrée à la nécessaire compréhension de la situation des jeunes LGBT (Lesdbiennes, gays, bisexuels et transgenres) en France et&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}