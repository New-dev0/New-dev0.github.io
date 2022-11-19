import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Amazon Black Friday</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Amazon Black Friday"/>
        <meta name="description" content="Trending News about Amazon Black Friday" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Amazon Black Friday</h1>
            <Image width={800} height={500} src="https://img.phonandroid.com/2022/11/black-friday-amazon.jpg" alt="Amazon Black Friday"/>
            <h3>Recent News</h3>
            <a href='https://www.phonandroid.com/black-friday-amazon-les-meilleures-offres-high-tech-sont-ici.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Black Friday : Amazon explose les prix, voici les offres incontournables</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRNJ0ntcxmpJ6_KIvjeM1dFGreNBYE30h27BkY5nlUZExDVxiZb8GAE3u6DP9u0O6q0Kl7oLp0j" alt="Black Friday : Amazon explose les prix, voici les offres incontournables" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le Black Friday 2022 sur Amazon a démarré ce vendredi 18 novembre. Pendant plus d&#39;une semaine, l&#39;enseigne proposera de nombreuses promotions sur toutes.</p></div>
            </div>
        </a><a href='https://www.cnetfrance.fr/news/black-friday-amazon-smartphones-audio-gaming-pc-les-promos-les-plus-folles-du-week-end-39949912.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Black Friday Amazon : smartphones, audio, gaming, PC, les promos ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRXfhyulNIfDlyNdyZ1gLzIdRbpeXeyptuPbiweGR0LsouJMc_qH6PHb7UxgcDE2KUPq3vIBJU0" alt="Black Friday Amazon : smartphones, audio, gaming, PC, les promos ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>(MAJ le 18/11/2022) Amazon est un acteur incontournable du Black Friday et pour cette édition 2022, le géant du e-commerce dégaine des promos très&nbsp;...</p></div>
            </div>
        </a><a href='https://www.frandroid.com/marques/amazon/1542232_pourquoi-cette-condition-damazon-rend-la-black-friday-week-vraiment-interessante'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pourquoi cette condition d&#39;Amazon rend la Black Friday Week ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSEBX9JxZ2ba0efuLn0-Yl6qtHu2p-dk8Oymh-R0S2mxGj27myZhyBHzK2sJ9N09etCRVxLZIsr" alt="Pourquoi cette condition d&#39;Amazon rend la Black Friday Week ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Amazon a trouvé un moyen de ne pas frustrer ses clients avec cette nouvelle condition de vente spéciale Black Friday.</p></div>
            </div>
        </a><a href='https://www.jeuxvideo.com/news/1670182/pour-le-black-friday-amazon-a-la-solution-a-vos-problemes-de-dos-avec-le-bureau-electrique-assis-debout.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pour le Black Friday, Amazon a la solution à vos problèmes de dos ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT9RTDPRY-EVONHs1PArmQam6BRFNaaxryEc8tSLTkeVCymKA9JmUshy6rgEIBzmpZkt7NdOi_O" alt="Pour le Black Friday, Amazon a la solution à vos problèmes de dos ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>C&#39;est là qu&#39;interviennent les bureaux assis-debout comme le Flexispot, qui vous permette facilement de passer de la position assise à debout grâce aux moteurs&nbsp;...</p></div>
            </div>
        </a><a href='https://www.maison-travaux.fr/maison-travaux/actualites/black-friday-amazon-cest-maintenant-ou-jamais-pour-profiter-des-meilleures-offres-electromenager-425518.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Black Friday Amazon 2022 : les meilleures offres électroménager</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTpIYybSRvTnb1qf52pN_lZxe95n7mVM9Mhx-DOLuyajk786PSlA5fqTm1du3mO9V84sXFr-IqltQ" alt="Black Friday Amazon 2022 : les meilleures offres électroménager" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tineco Aspirateur Eau et Poussière sans Fil Floor One S5 à 399,99€ &middot; Roborock S7 Pro Ultra Aspirateur Robot Laveur 5100 Pa à 899€ &middot; Krups Essential Machine à Café&nbsp;...</p></div>
            </div>
        </a><a href='https://www.59hardware.net/black-friday-2022-les-meilleures-offres-amazon-a-ne-pas-rater-dans-le-high-tech-hardware-pc-portable-gaming/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Black Friday 2022 : Les meilleures offres Amazon à ne pas rater ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQY6FMLGWiGdpbz0PcJ3vlaf9tg7cdt1vBInqJ--kK1J6gRY0qPb90DX7gfR7YyQAnoKAQ_Q8Tx" alt="Black Friday 2022 : Les meilleures offres Amazon à ne pas rater ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Les offres black friday sur les écran pc chez Cdiscount &middot; écran pc gaming Huawei MateView GT 34″ à 369,99 € au lieu de 449,99 € (34″ WQHD incurvé – VA – 165 Hz –&nbsp;...</p></div>
            </div>
        </a><a href='https://www.actugaming.net/black-friday-poco-m4-et-x4-pro-bon-plan-533770/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Black Friday : Les smartphones POCO M4 et X4 Pro sont à bas prix ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQqZC18Trlafs36xm51xbQEvvE7Hj2VCc5YaofbVNR9OsUeCxLhxT3W94V5omxHd3AgRnug3xfl" alt="Black Friday : Les smartphones POCO M4 et X4 Pro sont à bas prix ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Avec 8 Go de RAM, 259 Go de stockage, un écran 120 Hz et un Snapdragon 695 en guise de processeur, ce smartphone affiche des performances remarquables. Il est&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bfmtv.com/tech/bons-plans/black-week-2022-en-direct-profitez-de-notre-live-pour-decouvrir-les-offres-18-novembre_LB-202211180029.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Black Friday 2022 en direct - les offres sont déjà disponibles ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTYVCc8H6_-1B_twl26D-RDwqyqXEbmf7psjJ68n3zqoqcDSO1TIEgtEPT71aVfdiAXgYABdzSs" alt="Black Friday 2022 en direct - les offres sont déjà disponibles ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A l&#39;occasion du démarrage de la Black Week ce 18 novembre 2022, de nombreuses offres sont déjà disponibles. Smartphone, PC portable, TV, bricolage,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}