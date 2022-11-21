import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Jean Gabin</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Jean Gabin"/>
        <meta name="description" content="Trending News about Jean Gabin" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Jean Gabin</h1>
            <Image width={800} height={500} src="" alt="Jean Gabin"/>
            <h3>Recent News</h3>
            <a href='https://www.voici.fr/news-people/jean-gabin-le-jour-ou-son-fils-mathias-la-vu-pleurer-zaptv-743321'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jean Gabin : le jour où son fils Mathias l&#39;a vu pleurer (ZAPTV)</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQjCnJ57zEqTgEHUHIJc0SJCcE_jn1Dd138I8V_03mOowP00Q6rdnPyLErOS233u9a0fPCl0JIS" alt="Jean Gabin : le jour où son fils Mathias l&#39;a vu pleurer (ZAPTV)" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dimanche 20 novembre, Michel Drucker recevait Florence et Mathias, les enfants de Jean Gabin, dans Vivement dimanche, sur France 3, pour rendre hom...</p></div>
            </div>
        </a><a href='https://www.programme-tv.net/news/tv/314263-ca-a-ete-terrible-mathias-le-fils-de-jean-gabin-pris-dune-grande-emotion-en-se-rememorant-un-souvenir-de-son-pere-video/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Ça a été terrible&quot; : Mathias, le fils de Jean Gabin, pris d&#39;une grande ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="&quot;Ça a été terrible&quot; : Mathias, le fils de Jean Gabin, pris d&#39;une grande ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ce dimanche 20 novembre, dans Vivement Dimanche sur France 3, Michel Drucker a rendu hommage à Jean Gabin. Il a reçu deux de ses enfants,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}