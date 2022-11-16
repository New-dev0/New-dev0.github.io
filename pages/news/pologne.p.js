import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Pologne</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Pologne"/>
        <meta name="description" content="Trending News about Pologne" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Pologne</h1>
            <Image width={800} height={500} src="http://www.revolutionpermanente.fr/IMG/arton29486.jpg" alt="Pologne"/>
            <h3>Recent News</h3>
            <a href='https://www.revolutionpermanente.fr/Pologne-L-OTAN-se-reunira-ce-mercredi-suite-aux-explosions-a-la-frontiere-avec-l-Ukraine'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pologne. L&#39;OTAN se réunira ce mercredi suite aux explosions à la ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ-zefTyDBhOu4JsPCvIQnvihN5-8YMMraxrHtH3sHdBP8Caa0rjMGEwRZAsdOfSTIqXl2gkozk" alt="Pologne. L&#39;OTAN se réunira ce mercredi suite aux explosions à la ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Deux personnes sont décédées à la suite d&#39;une explosion près de la frontière ukrainienne. Si la Russie nie toute implication, les ambassadeurs de l&#39;OTAN se&nbsp;...</p></div>
            </div>
        </a><a href='https://www.lepoint.fr/monde/enquete-du-pentagone-sur-des-possibles-missiles-russes-tombes-en-pologne-15-11-2022-2497944_24.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pologne : un projectile « de fabrication russe » à l&#39;origine de l ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTWqEgMfGjlP6Jn8Ejm_krU4xn_X7iSzDUgVApbTqJNdiIuH5WEIxMPO-Q0fwQb64nh89L3DzMlIw" alt="Pologne : un projectile « de fabrication russe » à l&#39;origine de l ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Un missile, présumément russe, est tombé en Pologne et a provoqué une explosion. Les autorités ont confirmé que deux personnes avaient été tuées.</p></div>
            </div>
        </a><a href='https://www.france24.com/fr/europe/20221115-en-direct-la-pologne-confirme-qu-un-projectile-de-fabrication-russe-a-atteint-son-territoire'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>En direct : la France appelle à la &quot;plus grande prudence&quot; sur l ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSJAhdLc_Sq0aZeJKbUWsG5z_UoQfFxFsjD0B95JSUWc_uqpnfM-C_GX8ktNzRxTE5b-Q_LnJiN" alt="En direct : la France appelle à la &quot;plus grande prudence&quot; sur l ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>La Pologne, membre de l&#39;Otan, a confirmé dans la nuit de mardi à mercredi qu&#39;un projectile &quot;très probablement de fabrication russe&quot; avait atteint son&nbsp;...</p></div>
            </div>
        </a><a href='https://www.huffingtonpost.fr/international/article/deux-missiles-russes-possiblement-tombes-en-pologne-le-pentagone-enquete-sur-ces-informations_210301.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>La Pologne confirme une frappe de missile « de fabrication russe ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRu6MeX8_isX4IGbQfeMHXVRep67LQdtt-QgO4KWlXusHsPJpK6--QAlVCOGX_1wUXXEJ5Uz1lz" alt="La Pologne confirme une frappe de missile « de fabrication russe ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Une explosion en Pologne sème une agitation chez les dirigeants du monde entier depuis mardi soir.</p></div>
            </div>
        </a><a href='https://www.rfi.fr/fr/europe/20221115-moscou-se-d%C3%A9fend-d-avoir-men%C3%A9-une-frappe-susceptible-d-avoir-atteint-la-pologne'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Varsovie affirme que l&#39;explosion dans l&#39;est de la Pologne est due à ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRRqJklcGQYmFmdXZUMpL1OkLYo656BOFSGHCYkdFmJc7JhTqGSjKNHXvtughdKdWyh-wyuujZP" alt="Varsovie affirme que l&#39;explosion dans l&#39;est de la Pologne est due à ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Deux explosions ont été entendues dans l&#39;après-midi du 15 novembre en Pologne près de la frontière ukrainienne. Le ministère polonais des Affaires&nbsp;...</p></div>
            </div>
        </a><a href='https://www.leparisien.fr/international/guerre-en-ukraine-deux-missiles-auraient-touche-la-pologne-le-pentagone-enquete-15-11-2022-YZOXGMQ2QNB4LKT3WMMNNRYKRE.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pologne : accusations de Zelensky, démenti russe, enquête de l ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTcCy5yt4WoB8oHpBEsApZWey5NXX3o1b_0hsfGuGidHVKXWNbgguXnorKdxb1QeRvxPqLu3fb4" alt="Pologne : accusations de Zelensky, démenti russe, enquête de l ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le Pentagone et l&#39;Otan mènent l&#39;enquête, alors que deux projectiles « de fabrication russe » sont tombés sur Przewodów, une ville polonaise proche de la&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}