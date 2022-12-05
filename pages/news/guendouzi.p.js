import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Guendouzi</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Guendouzi"/>
        <meta name="description" content="Trending News about Guendouzi" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Guendouzi</h1>
            <Image width={800} height={500} src="https://www.leparisien.fr/resizer/0XRCaawXD3V3-12yMRy625YL3hE=/1200x675/cloudfront-eu-central-1.images.arcpublishing.com/leparisien/IRUDLWAGAVFVTIR6E32FS76CYU.jpg" alt="Guendouzi"/>
            <h3>Recent News</h3>
            <a href='https://www.leparisien.fr/sports/football/coupe-du-monde/coupe-du-monde-2022-tes-ou-kimpembe-chambre-guendouzi-absent-de-la-photo-des-bleus-03-12-2022-MXLJAMLBXVGRBM2IUNNSM5POSM.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Coupe du monde 2022 : «T&#39;es où ?», Kimpembe chambre ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQCN8Q0zFAB-8beI2_TieKH_N8Fj0fGJPaD_e6EWvcRI8_bIWCOWnLSzCaJ5WA9y3pwrVzeoRMl" alt="Coupe du monde 2022 : «T&#39;es où ?», Kimpembe chambre ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le joueur de l&#39;OM, formé au PSG, n&#39;a pas posé avec ses coéquipiers qui ont tous rendu hommage à leur premier club.</p></div>
            </div>
        </a><a href='https://www.foot-national.com/equipe-de-france/equipe-de-france--kimpembe-chambre-guendouzi--absent-de-la-fameuse-photo-803424'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Équipe de France : Kimpembe chambre Guendouzi, absent de la ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSmRq8_oMcO7AguWsASUVEIaOBwe1RLTWKtRhn9Ro-4Wkwk79adu7dLQFIpBtIE4tTozComYczA" alt="Équipe de France : Kimpembe chambre Guendouzi, absent de la ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le vice-capitaine du Paris-Saint-Germain n&#39;a pas manqué l&#39;absence de Mattéo Guendouzi de la photo de groupe des Bleus portant leur premier maillot.</p></div>
            </div>
        </a><a href='https://le10sport.com/football/equipe-de-france/equipe-de-france-guendouzi-snobe-le-psg-kimpembe-linterpelle-624180'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Équipe de France : Guendouzi snobe le PSG, Kimpembe l&#39;interpelle</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQGtGI1MNODAsxPX2CzJdVO1mfJPgqRwESEkMoG372lkGP8Y1KxC13WR9ibB4n9r2p3wHrAWldU" alt="Équipe de France : Guendouzi snobe le PSG, Kimpembe l&#39;interpelle" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Plus habile clavier en main que ballon au pied, il décide de couvrir principalement un sport adulé, critiqué et détesté à la fois (le football) et un sport qui&nbsp;...</p></div>
            </div>
        </a><a href='https://www.foot01.com/equipe-de-france/guendouzi-refuse-la-provocation-pas-de-photo-avec-le-maillot-du-psg-416646'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>EdF : Guendouzi refuse la provocation, pas de photo avec le maillot ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS2Lmh-amr53AbJWrGVxT-qr1CPJrc_4SI9U1X-4X2gUNY11xrYY1t7Zx3u8yfgbrCHInrAp40o" alt="EdF : Guendouzi refuse la provocation, pas de photo avec le maillot ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ce dimanche, l&#39;équipe de France affronte la Pologne en huitièmes de finale de la Coupe du monde 2022 au Qatar. Un rendez-vous très attendu par les fans de&nbsp;...</p></div>
            </div>
        </a><a href='https://www.lephoceen.fr/infos-om/autour-de-l-om/mondial-2022-kimpembe-relance-guendouzi-203789'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mondial 2022 : Kimpembe relance Guendouzi</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRhsp1j2PIDaCSXOU580O0ZKIrz4tu6NTPSnpPvdbSqI6ttZGKtscRVOIMuuvfsPEi_eACMessL" alt="Mondial 2022 : Kimpembe relance Guendouzi" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le défenseur du PSG cherche le joueur de l&#39;OM à la suite d&#39;un cliché des Bleus.</p></div>
            </div>
        </a><a href='https://rmcsport.bfmtv.com/football/equipe-de-france/equipe-de-france-kimpembe-chambre-guendouzi-absent-de-la-photo-avec-les-maillots-des-clubs-formateurs_AV-202212030299.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Equipe de France: Kimpembe chambre Guendouzi, absent de la ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRyJD7peMsMOomhfLz66aOECuL2UYxYIBqoejx5M6W7cH8xQvfX4rS_zo99PYjGcfWNhHwvPAda" alt="Equipe de France: Kimpembe chambre Guendouzi, absent de la ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Vendredi, les joueurs de l&#39;équipe de France présents au Mondial ont tous posé, le temps d&#39;une photo, avec le maillot de leur club formateur chez les&nbsp;...</p></div>
            </div>
        </a><a href='https://www.onzemondial.com/coupe-du-monde-2022/equipe-de-france-guendouzi-chambre-par-un-bleu-pour-son-absence-sur-la-photo-avec-les-maillots-des-clubs-formateurs-809006'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Équipe de France : Guendouzi chambré par un Bleu pour son ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQdvxP3VIy5wMsU-hzeEJqDTL8kC8utDqJc3atcY94pihb-Nj9c5GjaRMPodugyJl8c1vvZycvo" alt="Équipe de France : Guendouzi chambré par un Bleu pour son ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Un Français absent du Mondial n&#39;a pas manqué de chambrer Mattéo Guendouzi ! Zapping Onze Mondial CDM 2022 : Allemagne, retour vers les sommets ?</p></div>
            </div>
        </a>
        </Template></>;
}