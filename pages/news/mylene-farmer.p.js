import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Mylene Farmer</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Mylene Farmer"/>
        <meta name="description" content="Trending News about Mylene Farmer" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Mylene Farmer</h1>
            <Image width={800} height={500} src="https://img.lemde.fr/2022/11/25/138/0/3000/2000/1440/960/60/0/671cdf4_1669383542849-mylene-farmer-a-marcel-hartmann.jpg" alt="Mylene Farmer"/>
            <h3>Recent News</h3>
            <a href='https://www.lemonde.fr/culture/article/2022/11/25/mylene-farmer-de-retour-avec-l-emprise-toutes-cordes-dehors_6151628_3246.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mylène Farmer de retour avec « L&#39;Emprise », toutes cordes dehors</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQy8vFtViwA1NlQcRJsBmrKKW-e4OblN4tp0I6XbQbETrEIwYWIgMqlrO50FkJGDECM0yYXeHhM" alt="Mylène Farmer de retour avec « L&#39;Emprise », toutes cordes dehors" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le douzième album studio de la chanteuse, dont sept des douze titres ont été composés par Woodkid, précède une tournée des stades prévue à l&#39;été 2023.</p></div>
            </div>
        </a><a href='https://www.rtl.fr/culture/medias-people/mylene-farmer-que-vaut-son-nouvel-album-l-emprise-7900209934'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mylène Farmer : que vaut son nouvel album “L&#39;Emprise” ?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR8JuLm-ArH3VyNDeWKDviEt7emxrf_BsiOA8TIiWSgR8Xbwy42j0yhFBPBJzBiYRpqe0Gtr4ti" alt="Mylène Farmer : que vaut son nouvel album “L&#39;Emprise” ?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Quatre ans après &quot;Désobéissance&quot;, Mylène Farmer publie son douzième album, baptisé &quot;L&#39;Emprise&quot;, où elle se dévoile comme jamais.</p></div>
            </div>
        </a><a href='https://www.midilibre.fr/2022/11/25/tres-attendu-par-ses-fans-lemprise-douzieme-album-tres-attendu-de-mylene-farmer-cree-levenement-10827118.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Très attendu par ses fans, l&#39;Emprise, douzième album de Mylène ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTvY7EgKBtPUcpUMa2pW8H4OkVIjOHEoe0s5s_JAq24RN7L-DlspuvcZRQu5t6dwe3cOkR8byoB" alt="Très attendu par ses fans, l&#39;Emprise, douzième album de Mylène ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ses nombreux fans l&#39;attendaient : trente-six ans après son premier album, &quot;Cendres de lune&quot;, Mylène Farmer revient avec &quot;L&#39;emprise&quot;. L&#39;album sort ce&nbsp;...</p></div>
            </div>
        </a><a href='https://www.lepoint.fr/pop-culture/que-vaut-le-nouveau-mylene-farmer-25-11-2022-2499155_2920.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Que vaut le nouveau Mylène Farmer ?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTFK9bN7An0Dnv51IOixCGSCsT6t6vxfodPLgjDL5KnzG42Vvh0alsk1nR9I_Gr6I522dE0QKhb" alt="Que vaut le nouveau Mylène Farmer ?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sexe, mort et bleus à l&#39;âme. La chanteuse culte de 61 ans devient avec un douzième album sur l&#39;emprise amoureuse, réalisé en partie avec Woodkid. Verdict ?</p></div>
            </div>
        </a><a href='https://www.komitid.fr/2022/11/25/les-artistes-queer-au-rendez-vous-pour-mylene-farmer/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Les artistes queer au rendez-vous pour Mylène Farmer</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSnktk2brhaf1cl4bDXVeZr6pfoU9xwnkS3tGgblA8Kgg7b-HGVxrHE7IQyWthmL-EKnrXA6Ijg" alt="Les artistes queer au rendez-vous pour Mylène Farmer" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Son douzième album studio, « L&#39;Emprise », sort aujourd&#39;hui. L&#39;influence de Mylène Farmer n&#39;a jamais été aussi forte. En 2022, la scène musicale queer lui rend&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnews.fr/people/2022-11-25/mylene-farmer-son-manager-fait-de-rares-confidences-et-revele-que-la-discrete'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mylène Farmer : son manager fait de rares confidences et révèle ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT09FNEMgv5xGcKmdl1PjsMza-zwc6DaTWH-BK09DVkSpgMh5urf5m5Pfu9idr4GSKnk8bj7TJa" alt="Mylène Farmer : son manager fait de rares confidences et révèle ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Thierry Suc, qui travaille avec Mylène Farmer depuis de nombreuses années fait de rares confidences sur la très discrète chanteuse.</p></div>
            </div>
        </a><a href='https://www.ladepeche.fr/2022/11/25/mylene-farmer-est-de-retour-avec-lalbum-lemprise-le-mystere-gagnant-10822390.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mylène Farmer est de retour avec l&#39;album &quot;L&#39;emprise&quot; : le mystère ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTVh3Ho2hE9LWP5Ngp7YM-xKmWKNm4i6gty7kbXlPOsKDhToKPnp45oiWHlnKXWlGIjT6yMtCpT" alt="Mylène Farmer est de retour avec l&#39;album &quot;L&#39;emprise&quot; : le mystère ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Discrète et pourtant si présente : rare dans les médias, absente des réseaux sociaux, Mylène Farmer, qui sort un nouvel album, remplit les stades, est reprise&nbsp;...</p></div>
            </div>
        </a><a href='https://www.liberation.fr/culture/musique/christina-vantzou-mylene-farmer-michel-polnareff-plus-vite-que-la-musique-20221125_NBKGNTY4Y5BDJEDEJ4DPZ4NY6I/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Christina Vantzou, Mylène Farmer, Michel Polnareff… Plus vite que ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQBsdDDwH3XDYdLjClSXksZxsRV9EOqAwIkshB-leoF0Z6HdwSyGaytGOOQSbZ7W3T0IJec5xIb" alt="Christina Vantzou, Mylène Farmer, Michel Polnareff… Plus vite que ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Pop, rock, musiques électroniques… Chaque semaine, «Libé» vous aide à vous y retrouver dans l&#39;actu des sorties musicales.</p></div>
            </div>
        </a><a href='https://www.airzen.fr/vetements-collecte-mylene-farmer-les-cinq-infos-positives-du-jour/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Vêtements, collecte, Mylène Farmer… Les cinq infos positives du jour</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRxsYBwvqIRdMfJe7zPqRJiYWtd3P-gMK_dof9gF6pvT2-YsgoJxxcjrJlDpaMHhwABf0_Yy6aW" alt="Vêtements, collecte, Mylène Farmer… Les cinq infos positives du jour" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Vous en avez assez des mauvaises nouvelles et autres faits divers déprimants ? Pas de panique ! Retrouvez, tous les jours, notre sélection d&#39;informations&nbsp;...</p></div>
            </div>
        </a><a href='https://www.lejdd.fr/Medias/le-jdd-avec-mylene-farmer-revendue-a-pres-de-40-euros-sur-des-sites-de-revente-4150160'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Le JDD avec Mylène Farmer revendu à près de 40 euros sur des ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRugLQv80qH51hrJm0_izmykfKesjDIq3smMaBwLtgT1pi1ZTkKsZhDr6sb6Sv9uBDXTCSuN2n3" alt="Le JDD avec Mylène Farmer revendu à près de 40 euros sur des ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sur Ebay et Vinted, certains internautes proposent le dernier numéro du JDD, avec Mylène Farmer à sa une, 16 fois plus cher que son prix initial.</p></div>
            </div>
        </a>
        </Template></>;
}