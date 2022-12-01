import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Greve SNCF</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Greve SNCF"/>
        <meta name="description" content="Trending News about Greve SNCF" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Greve SNCF</h1>
            <Image width={800} height={500} src="https://www.francebleu.fr/s3/cruiser-production/2022/11/e925ff5b-a690-4fce-8fc8-e81a408e7fb7/1200x680_20220212-105038.jpg" alt="Greve SNCF"/>
            <h3>Recent News</h3>
            <a href='https://www.francebleu.fr/infos/transports/greve-sncf-un-tgv-sur-trois-dans-le-sud-est-mais-trafic-ter-peu-perturbe-7618580'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Grève SNCF : un TGV sur trois dans le sud-est mais trafic TER peu ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTpEHtHhdUfIInU4qkCt0ZLTVvEShvLBQMZJ14IP6Lf-uhl7Gblcm46Lt4Z8hZq0sCQtJ3a4E3P" alt="Grève SNCF : un TGV sur trois dans le sud-est mais trafic TER peu ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>En conséquence d&#39;un mouvement de grève des contrôleurs, un seul TGV sur trois circulera dans la zone sud-est de vendredi à dimanche, annonce ce 30 novembre&nbsp;...</p></div>
            </div>
        </a><a href='https://www.leparisien.fr/societe/greve-sncf-le-trafic-sera-perturbe-de-vendredi-a-dimanche-avec-4-trains-sur-10-30-11-2022-G5B6WL7FG5DLJILDFHKT4LGVCQ.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Grève SNCF : le trafic sera très perturbé de vendredi à dimanche ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRHWvR_c2zPLmCUDXjdH9YxYFvOKrpwtYAUnq-bnS7CZMCp1IIHUDT74Gzq919iUwZ2eoCRUDrU" alt="Grève SNCF : le trafic sera très perturbé de vendredi à dimanche ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le trafic sera perturbé du vendredi au dimanche prochains sur les lignes TGV et Intercités, en raison d&#39;un mouvement social. Un appel à la grève a également&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bfmtv.com/economie/entreprises/transports/sncf-une-greve-menace-les-trains-des-vacances-de-noel_AV-202211300453.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>SNCF: une grève menace les trains des vacances de Noël</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQmkHntgLcUQxsowgMpzlZl0p5cTE3p43pf8w73bvkitR2_MAmxbsIWbEuNvw2T4uNO6GYP1Fz4" alt="SNCF: une grève menace les trains des vacances de Noël" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>-du vendredi 30 décembre au lundi 2 janvier 2023, 8h. Interrogé par BFM Business, Didier Mathis, secrétaire général de l&#39;UNSA-Ferroviaire nous explique que l&#39;&nbsp;...</p></div>
            </div>
        </a><a href='https://www.francetvinfo.fr/economie/transports/sncf/greve-a-la-sncf/transports-menace-d-une-greve-sncf-durant-la-periode-des-fetes_5513775.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Transports : menace d&#39;une grève SNCF durant la période des fêtes</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQborj4sADbIWw7_4o8L1bEj_LTgdcHdnToKgn6Wv-Z6Dh0cOmeXErBxaLbXTnS02l0JnjqXZsj" alt="Transports : menace d&#39;une grève SNCF durant la période des fêtes" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dès vendredi 2 décembre, et jusqu&#39;au dimanche 4 décembre, 60 % des TGV et des Intercités seront annulés. Les contrôleurs lancent un mouvement pour réclamer&nbsp;...</p></div>
            </div>
        </a><a href='https://www.tf1info.fr/transports/greve-sncf-2-3-et-4-decembre-2022-les-previsions-de-trafic-tgv-ouigo-intercites-2240323.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Grève des contrôleurs SNCF : trafic perturbé ce week-end, voici les ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTC593EqjCoAoxoiTPq9Z6kp5tYXsQof1TkcPE-S7GdkkokC1d2RT3J7BNB04pXyP3El90inSLe" alt="Grève des contrôleurs SNCF : trafic perturbé ce week-end, voici les ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>[VIDÉO] ▶️ Les contrôleurs de la SNCF se mettent en grève, contraignant la SNCF à supprimer certains trains ce weekend. 60% des TGV et des Intercités&nbsp;...</p></div>
            </div>
        </a><a href='https://www.lefigaro.fr/social/sncf-greve-des-controleurs-des-tgv-et-intercites-ce-week-end-seulement-4-trains-sur-10-circuleront-20221130'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Grève à la SNCF : seulement 4 trains sur 10 ce week-end, les fêtes ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRaxJuBGCYzjvvTsuRMF1wBtz7AIBwIV3fhSSeITgRtInS-JEhYIaB0N0XQdZZE5lu0GOHQpAQS" alt="Grève à la SNCF : seulement 4 trains sur 10 ce week-end, les fêtes ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>«Une épée de Damoclès», selon Didier Mathis, secrétaire général de l&#39;UNSA-Ferroviaire. La direction de SNCF Voyageurs regrette dans un communiqué un mouvement&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}