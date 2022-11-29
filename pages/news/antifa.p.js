import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Antifa</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Antifa"/>
        <meta name="description" content="Trending News about Antifa" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Antifa</h1>
            <Image width={800} height={500} src="https://media.sudouest.fr/13158351/1200x-1/1524568311957-000-par8190234-jpeg-1200674.jpg" alt="Antifa"/>
            <h3>Recent News</h3>
            <a href='https://www.sudouest.fr/economie/conso-distribution/polemique-autour-du-jeu-antifa-la-fnac-retire-sa-commercialisation-sous-pression-de-l-extreme-droite-13158351.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Polémique autour du jeu « Antifa » : la Fnac retire sa ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQj8Di3Uw4UH0-EcDp97P1aRpvFxqXGY7KBYrITwFQUeNu6scSoiHAotpcKnQJF9ElfvgJE7xRL" alt="Polémique autour du jeu « Antifa » : la Fnac retire sa ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Interpellée sur les réseaux, notamment par des élus Rassemblement national, la Fnac a fini par s&#39;excuser et a retiré de la vente un jeu de société baptisé&nbsp;...</p></div>
            </div>
        </a><a href='https://www.20minutes.fr/societe/4012131-20221128-boycottfnac-pression-extreme-droite-retour-retrait-jeu-antifa'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>#BoycottFnac, pression de l&#39;extrême droite… Retour sur le retrait du ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQcin_n57aLKdEIDWwvxRuu1KRTxd7nM_6XifNdczg8qOGMsOCgwpd4sRr7uBK6JmdYcz9J2Lie" alt="#BoycottFnac, pression de l&#39;extrême droite… Retour sur le retrait du ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sous la pression de députés RN et d&#39;un syndicat de police, la Fnac a cédé et décidé de retirer de la vente un jeu de société antifasciste.</p></div>
            </div>
        </a><a href='https://www.nouvelobs.com/societe/20221128.OBS66485/sous-la-pression-de-l-extreme-droite-la-fnac-retire-de-la-vente-un-jeu-de-societe-antifasciste.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>« Antifa » : le jeu de société retiré par la Fnac sous la pression de l ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQReKPUKyd4kbVHOl5AAOixOi70AjvymBp9fmN17nwckCaQXn1vrCSXbFc80oVye-2pa_cHic0B" alt="« Antifa » : le jeu de société retiré par la Fnac sous la pression de l ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le jeu de société « Antifa » est un jeu de simulation visant à faire vivre un groupe antifasciste local. Son retrait a entraîné de vives critiques des&nbsp;...</p></div>
            </div>
        </a><a href='https://www.humanite.fr/politique/fnac/le-jeu-antifa-retire-des-ventes-la-fnac-cede-l-extreme-droite-772645'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Le jeu « Antifa » retiré des ventes, la Fnac cède à l&#39;extrême droite</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSeDCj8gVHyt2wJdGSuidnZWFrMenqWLRbM0a9Yr-_yGOaOSmADKRbH3nAtZO7HLV_EyHLAo7B_" alt="Le jeu « Antifa » retiré des ventes, la Fnac cède à l&#39;extrême droite" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sous pression d&#39;élus RN sur Twitter dimanche 27 novembre, l&#39;enseigne a retiré de son catalogue en ligne un jeu nommé « Antifa ».</p></div>
            </div>
        </a><a href='https://www.madmoizelle.com/le-jeu-antifa-affole-lextreme-droite-la-fnac-le-retire-de-la-vente-1466551'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Le jeu Antifa affole l&#39;extrême droite, la Fnac le retire de la vente</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQXDusKrvaGA0Ny5fb0iVRAppRlEsOVbevb8iPo8kHWT-85BEq1hv9pY07yLABzFYxiwwhlR8vn" alt="Le jeu Antifa affole l&#39;extrême droite, la Fnac le retire de la vente" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sous la pression du Syndicat de Commissaires de la Police nationale et de plusieurs élus du Rassemblent national, la Fnac a retiré de la vente ce jeu de&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ladepeche.fr/2022/11/28/jeu-antifa-vendu-a-la-fnac-victime-de-son-succes-lediteur-annonce-que-le-jeu-est-epuise-10833000.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jeu &quot;antifa&quot; vendu à la Fnac : victime de son succès, l&#39;éditeur ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQK4nmckj8jWtLM4n925P2dKqjntOA3XsZE8gm02nJV4hwcVw_c_rrvcPvM4fcSweRpSr3fAhx6" alt="Jeu &quot;antifa&quot; vendu à la Fnac : victime de son succès, l&#39;éditeur ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>l&#39;essentiel Alors qu&#39;un jeu &quot;antifa&quot; a été retiré de la vente par la Fnac après les attaques d&#39;un syndicat policier, les Editions Libertalia ont annoncé que&nbsp;...</p></div>
            </div>
        </a><a href='https://www.challenges.fr/entreprise/antifa-le-jeu-la-fnac-efface-son-histoire-militante-en-se-soumettant-a-un-syndicat-de-police_837065'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Antifa, le jeu : &quot;la Fnac efface son histoire militante en se soumettant ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSyHy-nRcz68j2Ec3e7Je5YXvnjx2guPJ4AeUo1X-wbWflKkS9OgEh1VPZvU02Vb7Lna36VX5cl" alt="Antifa, le jeu : &quot;la Fnac efface son histoire militante en se soumettant ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>En retirant de ses rayons &quot;Antifa, le jeu&quot; à la demande d&#39;un syndicat policier, la Fnac s&#39;est attirée des critiques. Pour le sociologue Vincent Chabault,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}