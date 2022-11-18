import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>F1. Mick Schumacher</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,F1. Mick Schumacher"/>
        <meta name="description" content="Trending News about F1. Mick Schumacher" /></Head><Template>
            <h1 style={{fontSize: "30"}}>F1. Mick Schumacher</h1>
            <Image width={800} height={500} src="https://media2.ledevoir.com/images_galerie/nwd_1426305_1095759/image.jpg?ts=1668732014" alt="F1. Mick Schumacher"/>
            <h3>Recent News</h3>
            <a href='https://www.ledevoir.com/sports/771178/mick-schumacher-hors-course-apres-deux-petites-saisons-en-f1'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mick Schumacher hors course après deux petites saisons en F1</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQaAez8UGFcxuqtma4L43akMj06Cyp93Hd1WjM4uwxP6mmHWQ2vKiuR5CuEq0XFUku-l7qUZ5V7" alt="Mick Schumacher hors course après deux petites saisons en F1" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Après deux saisons seulement en F1, « Schumi junior » quittera sauf rebondissement l&#39;élite du sport automobile dimanche après la dernière manche de l&#39;année à&nbsp;...</p></div>
            </div>
        </a><a href='https://www.lequipe.fr/Formule-1/Article/Ce-qu-on-retiendra-des-deux-saisons-de-mick-schumacher-chez-haas/1365279'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ce qu&#39;on retiendra des deux saisons de Mick Schumacher chez Haas</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTsS0_YYJIInFFSqRfA3cyZ8ObD8zhENKzSv5SgwYKoaGWSITrxRT1cQLetZTgXVWmvnGgTODqe" alt="Ce qu&#39;on retiendra des deux saisons de Mick Schumacher chez Haas" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mick Schumacher, dont le remplacement par Nico Hülkenberg a été officialisé ce jeudi, ne sera plus un pilote Haas en 2023. Quelle trace laissera-t-il au&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sudouest.fr/sport/sports-mecaniques/formule1/f1-nico-huelkenberg-remplacera-officiellement-mick-schumacher-chez-haas-en-2023-13007131.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>F1 : Nico Hülkenberg remplacera officiellement Mick Schumacher ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS6ypQGooWi3r2znTNINFbry73Pawx7MPlcuzxLIKcEDLf3HF1h6csxnoN1kh4qpAqix7YGDN_R" alt="F1 : Nico Hülkenberg remplacera officiellement Mick Schumacher ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>L&#39;Allemand Nico Hülkenberg remplacera son compatriote Mick Schumacher chez Haas en 2023 au côté du Danois Kevin Magnussen, a annoncé jeudi l&#39;écurie&nbsp;...</p></div>
            </div>
        </a><a href='https://fr.motorsport.com/f1/news/steiner-haas-pas-temps-attendre-schumacher/10401037/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Steiner : Haas n&#39;avait &quot;pas le temps&quot; d&#39;attendre Mick Schumacher</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSvC6kdCDhwWsfb9Zib5-YVNOOOZUfRXRDjO5xCMA1RTfgWwRpMsuv1G9FKXS2sP-eqWDGJjyKK" alt="Steiner : Haas n&#39;avait &quot;pas le temps&quot; d&#39;attendre Mick Schumacher" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Non conservé par Haas pour la saison prochaine, le pilote allemand se retrouve sans volant pour 2023. Une situation qui fait suite à deux années qui n&#39;ont pas&nbsp;...</p></div>
            </div>
        </a><a href='https://www.autohebdo.fr/actualites/f1/mick-schumacher-ne-cache-pas-sa-deception-apres-sa-non-reconduction-chez-haas.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mick Schumacher ne cache pas sa déception après sa non ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSzbeBEz2HUmLwnBwpCjYRijzPT2ZNCZw9XdfRxOKraltX_SySx7i6Ijh_3JP7FK5Qrh03oHbwa" alt="Mick Schumacher ne cache pas sa déception après sa non ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mick Schumacher n&#39;a pas tardé à réagir après la confirmation que son contrat avec Haas ne serait pas prolongé.</p></div>
            </div>
        </a><a href='https://www.motorsinside.com/f1/actualite/29009-mick-schumacher-estime-avoir-progresse-et-meriter-une-place-en-f1.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mick Schumacher estime avoir progressé et mériter une place en F1</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRvYNfiktWas9MeHRtk_fJ29ymwyje8V6sK6WtZI8iZDvHmnxNs4GUusXptRwW-7DFQ6UNBSLY8" alt="Mick Schumacher estime avoir progressé et mériter une place en F1" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le pilote allemand n&#39;a inscrit que deux points lors de la saison 2022. S&#39;ajoute à cela deux crashs à haute vitesse : le premier lors des qualifications du Grand&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}