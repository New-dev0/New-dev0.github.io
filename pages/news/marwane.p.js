import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Marwane</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Marwane"/>
        <meta name="description" content="Trending News about Marwane" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Marwane</h1>
            <Image width={800} height={500} src="https://www.leparisien.fr/resizer/GALCXbQkGe1FEtUOxjdgV-aYtu4=/1200x675/cloudfront-eu-central-1.images.arcpublishing.com/leparisien/33NN664S6FFLDAZJKYGJ4RKKOQ.jpg" alt="Marwane"/>
            <h3>Recent News</h3>
            <a href='https://www.leparisien.fr/oise-60/mort-de-marwane-un-periple-macabre-de-deux-mois-avec-un-corps-encombrant-27-11-2022-RMJJ7URZVFC6NEQ5RBUTROZIEU.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mort de Marwane : un périple macabre de deux mois avec un corps ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSUMabWR6O7REiieiWAO57LxkSKHyFvesyimFZm_tcZztLIm5BGavsCHC9_CVE0qvjvmwRAkwSc" alt="Mort de Marwane : un périple macabre de deux mois avec un corps ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Disparu le 21 septembre, Marwane Souidi a été retrouvé le 24 novembre. Mais sa mort remonte à deux mois, soit cinq jours après sa disparition,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ladepeche.fr/2022/11/27/meurtre-de-marwane-retrouve-dans-une-malle-en-plastique-ce-que-lon-sait-des-deux-suspects-10830756.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Meurtre de Marwane, retrouvé dans une malle en plastique : ce que ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT3kC0KT7CJeDhSyGtEbnMvq9OIysxe1vIRyCZ6l69-RAL45djUUisfDoz5VR7IZXKEcwbvzLcP" alt="Meurtre de Marwane, retrouvé dans une malle en plastique : ce que ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le corps de Marwane Souidi, un jeune homme disparu en septembre dernier, a été retrouvé dans une malle en plastique à Rouen. Deux suspects ont été écroués.</p></div>
            </div>
        </a><a href='https://www.bfmtv.com/replay-emissions/bfmtvsd/marwane-25-ans-victime-d-acte-de-barbarie-27-11_VN-202211270380.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Marwane, 25 ans, victime d&#39;acte de barbarie - 27/11</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR_vd78ntsPzqVoQxfnGYt1J4VZCGtQrkLGmldLs3pl3NhwJXiKLwT2LbCyOzMpvlEbugc7Cubc" alt="Marwane, 25 ans, victime d&#39;acte de barbarie - 27/11" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Un homme suspecté de meurtre avec acte de barbarie est arrêté, écroué avec sa colocataire. Ils sont soupçonnés d&#39;avoir assassiné Marwane, un jeune homme de&nbsp;...</p></div>
            </div>
        </a><a href='https://www.lindependant.fr/2022/11/27/meurtre-de-marwane-25-ans-retrouve-dans-une-malle-en-plastique-ce-que-lon-sait-des-deux-suspects-10830696.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Meurtre de Marwane, 25 ans, retrouvé dans une malle en plastique ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSFN4dyafpjOPMJF_Lus8wf7Qpq6mij829ykwxYOds5QTlf0UdE13pM7Pw55VMP-74qQk-nSiu8" alt="Meurtre de Marwane, 25 ans, retrouvé dans une malle en plastique ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Deux mois que Marwane Souidi était porté disparu. Une terrible découverte.</p></div>
            </div>
        </a><a href='https://france3-regions.francetvinfo.fr/hauts-de-france/oise/le-corps-de-marwane-souidi-originaire-de-lagny-le-sec-dans-l-oise-a-ete-retrouve-dans-une-malle-en-plastique-deux-suspects-mis-en-examen-2663660.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Le corps de Marwane Souidi, originaire de Lagny-le-Sec dans l&#39;Oise ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSU6txC-snNioOh8MrxaXo1gZQ8dKWxaGNpYGc7I5D4wuHXfgk7YTmEvtWvSO2iDM2BNzKdmoeI" alt="Le corps de Marwane Souidi, originaire de Lagny-le-Sec dans l&#39;Oise ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Originaire de Lagny-le-Sec dans l&#39;Oise, Marwane Souidi ne donnait plus de signes de vie depuis deux mois après une soirée passée à Arpajon (Essonne).</p></div>
            </div>
        </a><a href='https://actu.fr/faits-divers/marwane-victime-de-torture-et-de-barbarie-sa-famille-demande-justice_55499440.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Marwane victime de torture et de barbarie, sa famille demande justice</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTLOT4P78ROg--cmOJAxZ8BQ4wZvB6LE2RE4X77VaD8o7yKyRn8MWSSxPApCfqO3pQE6LN76lXO" alt="Marwane victime de torture et de barbarie, sa famille demande justice" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Il se confirme que Marwane, disparu de son domicile dans l&#39;Oise depuis le 21 septembre a été torturé avant d&#39;être tué. Sa famille lance un hashtag&nbsp;...</p></div>
            </div>
        </a><a href='https://www.paris-normandie.fr/id364688/article/2022-11-27/deux-personnes-mises-en-examen-pour-le-meurtre-de-marwane-ce-jeune-retrouve-mort'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Deux personnes mises en examen pour le meurtre de Marwane, ce ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSTTiKNy98Vak5SZF8Fcn5Zues6MvSMpJ5C2dK5gL76PKgev3xJpXeH5aqSU6_iQi-VPLikcBoN" alt="Deux personnes mises en examen pour le meurtre de Marwane, ce ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tout ce qu&#39;il faut savoir sur Tué 5 jours après que sa disparition a été signalée : Marwane, un jeune homme de l&#39;Oise dont le corps a été retrouvé près de&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}