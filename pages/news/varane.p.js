import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Varane</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Varane"/>
        <meta name="description" content="Trending News about Varane" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Varane</h1>
            <Image width={800} height={500} src="https://www.mariefrance.fr/wp-content/uploads/sites/5/2022/11/shutterstock_editorial_13634771hy-e1669821935504.jpg" alt="Varane"/>
            <h3>Recent News</h3>
            <a href='https://www.mariefrance.fr/actualite/raphael-varane-la-soeur-du-joueur-des-bleus-annabelle-varane-a-participe-a-miss-france-691164.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Raphaël Varane : la sœur du joueur des Bleus, Annabelle Varane, a ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTb9l-la0PkODdRqeITj20djBd2t7U-uVGkx38W0Q3u6AZwe6qrRjo4IHpYUnw0UsMDno1R9M3x" alt="Raphaël Varane : la sœur du joueur des Bleus, Annabelle Varane, a ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Si Raphaël Varane est devenu en quelques années seulement une star du ballon rond, sa sœur, Annabelle Varane, est loin d&#39;être une inconnue.</p></div>
            </div>
        </a><a href='https://www.gala.fr/l_actu/news_de_stars/le-saviez-vous-raphael-varane-sa-soeur-a-ete-candidate-a-miss-france_507603'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Le saviez-vous ? Raphaël Varane : sa soeur a été candidate à Miss ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRO75Y1wWJKP5_-Ha8WR3FquJ4ur0IYWv0J3HtuudKORLT1_BeZ-ti_MC_J5WAkwCseCqHgGUFm" alt="Le saviez-vous ? Raphaël Varane : sa soeur a été candidate à Miss ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Alors que Raphaël Varane et l&#39;équipe de France disputent ce mercredi 30 novembre leur troisième match de poule de la Coupe du monde de football au...</p></div>
            </div>
        </a>
        </Template></>;
}