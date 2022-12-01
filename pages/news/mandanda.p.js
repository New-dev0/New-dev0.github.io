import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Mandanda</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Mandanda"/>
        <meta name="description" content="Trending News about Mandanda" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Mandanda</h1>
            <Image width={800} height={500} src="https://img-4.linternaute.com/cnIcMsHXkcMHZG_ozPPiMdMcDw8=/1500x/smart/ccea575cae544aa7b7a0c0c055d3ec46/ccmcms-linternaute/39834579.jpg" alt="Mandanda"/>
            <h3>Recent News</h3>
            <a href='https://www.linternaute.com/sport/biographie/1777252-steve-mandanda-pourquoi-il-est-considere-comme-le-grand-frere-des-bleus/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Steve Mandanda : pourquoi il est considéré comme le grand frère ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQEGIyDCMDxYqgQE57EOnreaiAN61chg27lUI5LKHlY1S_lGZzgsDU3vxxp72QqtVYIQ2y9p7uz" alt="Steve Mandanda : pourquoi il est considéré comme le grand frère ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sa parole compte. Dans le vestiaire des Bleus, il y a Didier Deschamps, mais également Steve Mandanda. Titulaire face à la Tunisie, l&#39;ancien gardien de l&#39;&nbsp;...</p></div>
            </div>
        </a><a href='https://www.onzemondial.com/coupe-du-monde-2022/tunisie-france-mandanda-va-signer-un-record-mythique-dans-l-histoire-des-bleus-808552'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tunisie - France : Mandanda va signer un record mythique dans l ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRGJzDoAwCUCYLEHN-U2yCajFm5x84rf8PrrL8qXuPwPtv7TiJ4aquoTBCbzNUueUf0EX_Y4p38" alt="Tunisie - France : Mandanda va signer un record mythique dans l ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A l&#39;occasion de la rencontre entre la Tunisie et la France, Steve Mandanda, titularisé dans la cage des Bleus, va battre un record !</p></div>
            </div>
        </a><a href='https://rmcsport.bfmtv.com/football/equipe-de-france/france-tunisie-mandanda-est-devenu-le-joueur-le-plus-age-de-l-histoire-des-bleus_AV-202211300609.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>France-Tunisie: Mandanda est devenu le joueur le plus âgé de l ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQRWDA0KTieIicq38RAYYPYWjTPU0aKR_xQC1qYbUnDCaaI82neBQIdopiYYxfcQZU0GaLDYfyh" alt="France-Tunisie: Mandanda est devenu le joueur le plus âgé de l ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>À bientôt 38 ans, Steve Mandanda, titularisé contre la Tunisie pour la Coupe du monde 2022 au Qatar, est devenu le joueur le plus âgé de l&#39;histoire de&nbsp;...</p></div>
            </div>
        </a><a href='https://www.beinsports.com/france/fifa-coupe-du-monde-2022/news/coupe-du-monde-steve-mandanda-entre-dans-lhis/1996762'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Coupe du monde : Steve Mandanda entre dans l&#39;histoire des Bleus ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSET2irvTKbgLkl4UsdcwOJ4BH8VasfBXCWhTRU3f5RT_mmxkBmXgqQ1NvDdFpDb0c-g02T0MgH" alt="Coupe du monde : Steve Mandanda entre dans l&#39;histoire des Bleus ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Steve Mandanda va jouer contre la Tunisie ce mercredi après-midi et le portier de l&#39;équipe de France est entré dans la légende.</p></div>
            </div>
        </a><a href='https://www.lequipe.fr/Football/Actualites/Steve-mandanda-plus-vieux-joueur-de-l-histoire-des-bleus/1367737'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Steve Mandanda plus vieux joueur de l&#39;histoire des Bleus</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRqjkWpqQ2ztA2aPxA73wTAMLOt2pRJ982q0kynAwino5TvR98iyGNBbqqaxE8_a1F5x2m6967D" alt="Steve Mandanda plus vieux joueur de l&#39;histoire des Bleus" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Titulaire ce mercredi lors de la défaite des Bleus face à la Tunisie (0-1), Steve Mandanda est devenu le joueur le plus âgé de l&#39;histoire à porter le&nbsp;...</p></div>
            </div>
        </a><a href='https://www.goal.com/fr/news/equipe-de-france-un-record-pour-mandanda/blt22028bbdd6c0118d'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Équipe de France : Un record pour Mandanda !</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR8p9D3fKFMLQB6dyaSRB2TTnjvQkWX3VCZkpBFaM5uhZXq3Ch9n62oCdTnZp5LoaCT44AvNAiv" alt="Équipe de France : Un record pour Mandanda !" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Didier Deschamps a tranché ! Pour le dernier match de poule de l&#39;équipe de France dans cette Coupe du Monde 2022, le sélectionneur des Bleus a largement&nbsp;...</p></div>
            </div>
        </a><a href='https://www.butfootballclub.fr/om/actualite/om-stade-rennais-pourquoi-mandanda-impose-encore-le-respect-798028'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>OM, Stade Rennais : pourquoi Mandanda impose encore le respect</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQPEza2xNrdXs-e7kWDZI3F6pT2_va2bWQnFi29DsoEIwE-FtFfJAWGbaJo1LsphcXra81oS01e" alt="OM, Stade Rennais : pourquoi Mandanda impose encore le respect" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Après des années à l&#39;OM, le gardien Steve Mandanda a décidé l&#39;été dernier de quitter Marseille pour aller tenter sa chance au Stade Rennais.</p></div>
            </div>
        </a>
        </Template></>;
}