import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Lara Fabian</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Lara Fabian"/>
        <meta name="description" content="Trending News about Lara Fabian" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Lara Fabian</h1>
            <Image width={800} height={500} src="" alt="Lara Fabian"/>
            <h3>Recent News</h3>
            <a href='https://www.gala.fr/l_actu/news_de_stars/video-lara-fabian-nee-prematurement-confidences-sur-le-drame-qui-entoure-sa-naissance_507075'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>VIDÉO – Lara Fabian née prématurément : confidences sur le ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcScVxCeQlgKYvHGpV8si_3H_JbTNCc77wvrhlVPXfd4bAD89Oj1CTYgxh7jlt86dQGwAAn_HpfY" alt="VIDÉO – Lara Fabian née prématurément : confidences sur le ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ce mardi 22 novembre, Lara Fabian était l&#39;invitée de l&#39;émission C à Vous sur France 5 pour parler de son dernier livre intitulé Tout (éditions Libr...</p></div>
            </div>
        </a><a href='https://www.programme-tv.net/news/tv/314421-je-me-suis-sentie-totalement-libre-lara-fabian-se-confie-sur-son-premier-role-tres-surprenant-au-cinema-video/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Je me suis sentie totalement libre&quot; : Lara Fabian se confie sur son ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="&quot;Je me suis sentie totalement libre&quot; : Lara Fabian se confie sur son ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ce mardi 22 novembre, dans C à Vous sur France 5, Lara Fabian était l&#39;invitée d&#39;Anne-Elisabeth Lemoine. En plus d&#39;avoir présenté son autobiographie&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}