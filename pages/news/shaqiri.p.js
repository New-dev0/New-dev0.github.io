import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Shaqiri</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Shaqiri"/>
        <meta name="description" content="Trending News about Shaqiri" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Shaqiri</h1>
            <Image width={800} height={500} src="https://i.f1g.fr/media/cms/1200x630_crop/2022/12/02/d0eb30d5198dd0fcd1aabe41abd6799a5b487943f0baf279125d5e41b624d513.jpg" alt="Shaqiri"/>
            <h3>Recent News</h3>
            <a href='https://www.lefigaro.fr/sports/football/coupe-du-monde/coupe-du-monde-shaqiri-decisif-face-defense-serbe-absente-20221202'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Coupe du monde : Shaqiri décisif face défense serbe absente</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQAGk4s_LXtDrfUjc6yjzva_NU4iP2l4AyR4-KW0fcB6AfPbEAMVm9GlIdUlw8mLxZXf8Ehp3N_" alt="Coupe du monde : Shaqiri décisif face défense serbe absente" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Un Shaqiri précieux, Tadic rayonnant malgré l&#39;élimination des siens et une défense serbe inexistante... Découvrez les tops et flops des deux derniers matchs&nbsp;...</p></div>
            </div>
        </a><a href='https://www.onzemondial.com/coupe-du-monde-2022/serbie-suisse-shaqiri-egale-un-exploit-de-messi-et-cristiano-ronaldo-808914'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Serbie - Suisse : Shaqiri égale un exploit de Messi et Cristiano ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTKlqUfk6MCviZnb7QenuoMHwKGQsIuF_DsqQL-SzRrZwqPcCMXGIQSyLQk4txT1imG1_kzY4DP" alt="Serbie - Suisse : Shaqiri égale un exploit de Messi et Cristiano ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Très rapidement lors de la rencontre entre la Serbie et la Suisse, Xherdan Shaqiri a débloqué le compteur pour les siens.</p></div>
            </div>
        </a><a href='https://www.footmercato.net/a2218657469524952671-video-shaqiri-maltraite-la-serbie-et-retourne-twitter'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Vidéo : Shaqiri maltraite la Serbie et retourne Twitter</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT-lj7Pkt7_QWVs-BtIHwaOJ_OWaOClBHgbZOxR75qSOSSP6snpxJOfxP_5bu5ZbNvoOougnz6v" alt="Vidéo : Shaqiri maltraite la Serbie et retourne Twitter" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>C&#39;est finalement la Suisse qui verra les huitièmes de finale du Mondial après sa victoire contre la Serbie (3-2). Une victoire due en grande part (.</p></div>
            </div>
        </a><a href='https://www.sports.fr/football/coupe-du-monde-2022/shaqiri-meme-cour-messi-ronaldo-671488.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Shaqiri dans la même cour que Messi et Ronaldo</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRhBeWaUKZAXN_GNvKmKlf4dWxmyA4EQbTYH2XnuGxIjqkUbzEFux8aKKUYdmiGMZzQR39SXAhS" alt="Shaqiri dans la même cour que Messi et Ronaldo" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Xherdan Shaqiri est rentré dans un cercle assez fermé. L&#39;ancien joueur de Lyon, buteur ce vendredi contre la Serbie, est devenu le troisième joueur à&nbsp;...</p></div>
            </div>
        </a><a href='https://www.lequipe.fr/Football/Actualites/Les-tops-flops-de-serbie-suisse-shaqiri-et-tadic-premiers-roles/1368136'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Les tops-flops de Serbie-Suisse : Shaqiri et Tadic, premiers rôles</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTMheGpHchyv8J3ecp2UrSGPL_4qfuywmU_vOrlbDJQNnSllywEXFhv-BtFASH5PUi2fQyxLIi0" alt="Les tops-flops de Serbie-Suisse : Shaqiri et Tadic, premiers rôles" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Percutant, le Suisse Xherdan Shaqiri a été déterminant dans la victoire des Helvètes face à la Serbie vendredi soir (3-2). En face, Tadic a porté son équipe&nbsp;...</p></div>
            </div>
        </a><a href='https://www.afriquesports.net/coupe-du-monde/buteur-face-a-la-serbie-shaqiri-egale-cr7-et-messi-en-coupe-du-monde'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Buteur face à la Serbie, Shaqiri égale CR7 et Messi en Coupe du ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSbGe0F-MEeEwVz5yRTUFV0RxbdggMZf3hmMq1vK1jbuXiwThmlKkjrK2jBM-9B3vzV2Y8bRk6T" alt="Buteur face à la Serbie, Shaqiri égale CR7 et Messi en Coupe du ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Xherdan Shaqiri entre aussi dans l&#39;histoire de la Coupe du Monde. L&#39;attaquant Suisse réalise un exploit que seuls Cristiano Ronaldo.</p></div>
            </div>
        </a>
        </Template></>;
}