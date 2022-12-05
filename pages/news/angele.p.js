import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Angele</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Angele"/>
        <meta name="description" content="Trending News about Angele" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Angele</h1>
            <Image width={800} height={500} src="https://images.bfmtv.com/GVTQ5qXsJHt-VTiRZ_J9RWSucnU=/0x106:2048x1258/2048x0/images/Angele-394533.jpg" alt="Angele"/>
            <h3>Recent News</h3>
            <a href='https://www.bfmtv.com/people/musique/damso-invite-surprise-du-concert-d-angele-pour-leur-duo-demons_AN-202212030276.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Damso invité surprise du concert d&#39;Angèle pour leur duo &quot;Démons&quot;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTWudsU-JzcJZlmiGv8SLOpa2XzXUenX0fzPoH_9RaaLv_UnAx_HK1_RYcIsMU8JLnI4ddgOZLO" alt="Damso invité surprise du concert d&#39;Angèle pour leur duo &quot;Démons&quot;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>La chanteuse a convié le rappeur sur la scène de son concert à la Paris-La-Défense-Arena, vendredi soir, pour interpréter leur single de diamant.</p></div>
            </div>
        </a><a href='https://www.voici.fr/news-people/angele-a-27-ans-cet-incident-survenu-juste-avant-son-anniversaire-744351'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Angèle a 27 ans : cet incident survenu juste avant son anniversaire</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSJ7vQAIXyhRP_fLacBSuwHPIYopNlM7dTQKBlo-r5_rQ7Y84R1dvjxmya2osZGNnLuKeoiXTC0" alt="Angèle a 27 ans : cet incident survenu juste avant son anniversaire" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ce samedi 3 décembre 2022, Angèle fête ses 27 ans. La fête promet d&#39;être belle ce soir, lors de son concert dans la salle Paris La Défense Arena. À...</p></div>
            </div>
        </a><a href='https://www.defense-92.fr/musique/angele-soffre-un-anniversaire-avec-deux-mega-concerts-a-la-paris-la-defense-arena-74652'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Angèle s&#39;offre un anniversaire avec deux méga-concerts à la Paris ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRKyyEcgrcFH-D2JDpEtqMaxINGxo-ExbanDb8piVLhwtULUDOfb4nfIP47ueOROM3-EjERTZd6" alt="Angèle s&#39;offre un anniversaire avec deux méga-concerts à la Paris ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>La chanteuse belge donne deux concerts ce week-end à la Paris La Défense Arena. Avec 70 000 spectateurs, les deux dates affichent complet.</p></div>
            </div>
        </a><a href='https://mcetv.ouest-france.fr/mon-mag-culture/mon-mag-musique/angele-soffre-un-anniversaire-grandiose-avec-deux-concerts-a-paris-03122022/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Angèle s&#39;offre un anniversaire grandiose avec deux concerts à Paris !</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQORXkdoS_tXnhx6ob06iI_zb5mBUzSAv68eZ0O8frQU2Qbb8oDtC7_QyEOKRfQB2BbR10WdpD4" alt="Angèle s&#39;offre un anniversaire grandiose avec deux concerts à Paris !" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Pour son anniversaire, Angèle a décidé de faire un évènement grandiose à Paris ! La chanteuse belge a donné deux concerts ce week-end à La Défense Arena ! MCE&nbsp;...</p></div>
            </div>
        </a><a href='https://www.lesoir.be/480950/article/2022-12-03/angele-invite-damso-sur-scene-pour-son-concert-paris-videos'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Angèle invite Damso sur scène pour son concert à Paris (vidéos)</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTfZvCj5l28KVTZdFcrICWUeT1at7aBrA78aZ7Cqr0VaBoq4VKl0UOyVgCi2f1ipyQRY5UasI7i" alt="Angèle invite Damso sur scène pour son concert à Paris (vidéos)" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Angèle donne un second concert à Paris ce samedi soir, dans le cadre de sa tournée : 70.000 spectateurs ont fait le déplacement pour la voir lors de ces deux&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}