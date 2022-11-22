import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Vanesa</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Vanesa"/>
        <meta name="description" content="Trending News about Vanesa" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Vanesa</h1>
            <Image width={800} height={500} src="https://photos.tf1info.fr/images/1280/720/capvanesa-1-7298e5-0@1x.jpeg" alt="Vanesa"/>
            <h3>Recent News</h3>
            <a href='https://www.tf1info.fr/justice-faits-divers/video-meurtre-de-vanesa-au-college-de-tonneins-le-chagrin-et-la-colere-2239332.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>VIDÉO - &quot;Toute la classe l&#39;adorait&quot; : le douloureux retour au collège ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTZ_d58OFTRG2FdImsA4_mk24VMKrs6xePnYFSLOkuwqyBCkGP-SPXlHsn3DMY9uoTo3a0z7bsE" alt="VIDÉO - &quot;Toute la classe l&#39;adorait&quot; : le douloureux retour au collège ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>[VIDÉO] ▶️ Après le meurtre de Vanesa, tuée vendredi à l&#39;âge de 14 ans à Tonneins, le retour en classe de ses camarades ce lundi s&#39;est avéré bien&nbsp;...</p></div>
            </div>
        </a><a href='https://www.centrepresseaveyron.fr/2022/11/21/meurtre-de-vanesa-14-ans-a-tonneins-suspect-mobile-retour-sur-laffaire-qui-emeut-et-secoue-la-france-10817360.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Meurtre de Vanesa, 14 ans, à Tonneins : suspect, mobile, retour sur ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR-7iU4I6i8RpAd00UjpSV10nwGC_xF32DrkmUkOgTJ-5vBb8d10d7Dhcnf6m2A7YaxP1POb3Nz" alt="Meurtre de Vanesa, 14 ans, à Tonneins : suspect, mobile, retour sur ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Vendredi 18 novembre, Vanesa, 14 ans, une élève du collège Germillac à Tonneins, dans le Lot-et-Garonne, a été retrouvée morte dans une maison abandonnée à&nbsp;...</p></div>
            </div>
        </a><a href='https://www.midilibre.fr/2022/11/21/adolescente-tuee-a-tonneins-une-marche-blanche-organisee-le-vendredi-25-novembre-a-la-memoire-de-ladolescente-10816996.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Vanesa, 14 ans, tuée à Tonneins : une marche blanche organisée ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS0LzeG6Jmw5e9r1F2PfrwfgfR9wVj-tUViAu41bxgb8SrW6u-8MG36HTo6CGJFrisCeC5Hebw0" alt="Vanesa, 14 ans, tuée à Tonneins : une marche blanche organisée ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Une marche blanche aura lieu ce vendredi en hommage à Vanesa, dans les rues de sa ville, a déclaré le maire de Tonneins, Dante Rinaudo, au micro de BFM TV,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.lefigaro.fr/faits-divers/le-corps-de-vanesa-collegienne-tuee-dans-lot-et-garonne-sera-rapatrie-en-espagne-20221121'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Le corps de Vanesa, collégienne tuée dans Lot-et-Garonne, sera ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ4v9nCgnFrf8FK0BPN_DvwYhNiA_V5dxxD-HKYYWIS0-YP6O_uvOcvdJelBm-tygSCcFsfqefj" alt="Le corps de Vanesa, collégienne tuée dans Lot-et-Garonne, sera ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>L&#39;adolescente a été enlevée près de son collège par un homme de 31 ans, mis en examen et écroué dimanche pour viol et meurtre.</p></div>
            </div>
        </a><a href='https://www.leparisien.fr/faits-divers/meurtre-de-vanesa-je-nai-pas-reussi-a-dormir-confie-une-eleve-de-son-college-21-11-2022-U72GKRW4SREFHGUK6EKAM6IK6E.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Meurtre de Vanesa : «Je n&#39;ai pas réussi à dormir», confie une élève ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTP50XWDd3ssqfK7HJrRJQpDA3XSdcaHIqArXbitgRHIeJxueCd09slMS9usxZYARolgszrt2pJ" alt="Meurtre de Vanesa : «Je n&#39;ai pas réussi à dormir», confie une élève ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Après le terrible meurtre de la jeune collégienne vendredi, les élèves de son collège de Tonneins (Lot-et-Garonne) ont été pris en charge par une cellule&nbsp;...</p></div>
            </div>
        </a><a href='https://www.varmatin.com/faits-divers/ce-que-lon-sait-sur-le-meurtre-de-vanesa-collegienne-de-14-ans-tuee-dans-le-lot-et-garonne-809350'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ce que l&#39;on sait sur le meurtre de Vanesa, collégienne de 14 ans ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTwZEsevg7Cluva0uidOsj7GRyLHVbVsGukb-TRub7ioNGARe_k-qmUp9us_LFpbUI3hoaQovIz" alt="Ce que l&#39;on sait sur le meurtre de Vanesa, collégienne de 14 ans ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Les faits Les faits se sont déroulés vendredi 18 novembre à Tonneins, commune du Lot-et-Garonne. D&#39;après le procureur de la République à Agen,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}