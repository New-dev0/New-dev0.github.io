import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Meilleur patissier</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Meilleur patissier"/>
        <meta name="description" content="Trending News about Meilleur patissier" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Meilleur patissier</h1>
            <Image width={800} height={500} src="" alt="Meilleur patissier"/>
            <h3>Recent News</h3>
            <a href='https://www.voici.fr/food/le-meilleur-patissier-manon-gagnante-de-la-finale-partage-son-incroyable-recette-dentremet-fraise-citron-744713'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Le Meilleur Pâtissier : Manon, gagnante de la finale, partage son ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTLY9Wrk5b8EhvihCR-ALZNLA2zqbWOMEV4UX0vddcfCVjMj1LR6CdOj3YbRORpSJenDyUos0f5" alt="Le Meilleur Pâtissier : Manon, gagnante de la finale, partage son ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dessert : la recette simplifiée de Manon, gagnante du Meilleur Pâtissier &middot; Pour la ganache, hydratez au préalable la gélatine. &middot; Pour l&#39;insert fraise et citron&nbsp;...</p></div>
            </div>
        </a><a href='https://actu.fr/occitanie/montpellier_34172/montpellier-m6-manon-remporte-le-meilleur-patissier_55803518.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Montpellier. M6 : Manon remporte Le Meilleur Pâtissier</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQrumakg1mk2TV1gARdxCr8W8to1hfM9R1FaOWSuiRI_C2FkmezXId8YdEHaFxV9OjysiOCUdSl" alt="Montpellier. M6 : Manon remporte Le Meilleur Pâtissier" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Après avoir remporté &quot;En route vers le meilleur pâtissier&quot;, Manon, montpelliéraine de 20 ans, est la grande gagnante de la saison 11 de l&#39;émission Le&nbsp;...</p></div>
            </div>
        </a><a href='https://www.20minutes.fr/television/4013911-20221208-meilleur-patissier-voir-comment-proches-stressent-drole-confie-manon-gagnante'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>« Le Meilleur pâtissier » : « Voir comment les proches stressent, c ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTf7x2EM0o5V9QDbMXAftK2kVDolS2l5orWslh0krsUeXEs9XB60GEN0uEtm0z_c5uifLcSPcJF" alt="« Le Meilleur pâtissier » : « Voir comment les proches stressent, c ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Manon, Montpelliéraine et benjamine du concours de M6, a soulevé le trophée, mercredi soir.</p></div>
            </div>
        </a><a href='https://www.ladepeche.fr/2022/12/08/le-meilleur-patissier-5-choses-a-savoir-sur-manon-la-gagnante-de-la-finale-10854625.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Le meilleur pâtissier : 5 choses à savoir sur Manon, la gagnante de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSclWh23pXnyh-GqUpVlZTTop7vKTFiA9_LWJgLKq4xvjT9Av8CZA4G1yluRMYCGnp_dg0Cs9FI" alt="Le meilleur pâtissier : 5 choses à savoir sur Manon, la gagnante de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Pour cette finale de la 11e saison, les candidats ont été confrontés à des épreuves particulièrement relevées : un glaçage miroir imposé par Cyril Lignac, un&nbsp;...</p></div>
            </div>
        </a><a href='https://www.letelegramme.fr/soir/je-ne-suis-pas-decu-d-avoir-perdu-confie-nils-finaliste-du-meilleur-patissier-08-12-2022-13237309.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>« Je ne suis pas déçu d&#39;avoir perdu », confie Nils, finaliste du ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSGS9QNoMbF_Q2MpVM_8vUGXd5POU-uY6LoQ-jk4AMDeen2JJwcEIduFojoHDlZkCb2V7RF-bYJ" alt="« Je ne suis pas déçu d&#39;avoir perdu », confie Nils, finaliste du ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nils Habert, qui revendique ses racines bretonnes, a finalement échoué en finale du Meilleur Pâtissier, mercredi soir, sur M6. Sur les 16 candidats en lice&nbsp;...</p></div>
            </div>
        </a><a href='https://www.linternaute.com/television/le-meilleur-patissier-qui-est-le-gagnant-de-la-saison-11-p3124475/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Le Meilleur Pâtissier : qui est le gagnant de la saison 11 ?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRheCqCi-T6002oYFDdYf3Qpi1wvqtrMvXRe0zsqHPqPJxCxTK5WuWllolD_8Wufc1APzEkULsa" alt="Le Meilleur Pâtissier : qui est le gagnant de la saison 11 ?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Au cours de ce concours de pâtisserie, des candidats amateurs doivent relever les défis culinaires lancés par Cyril Lignac et Mercotte, les deux jurés, jusqu&#39;à&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ozap.com/actu/audiences-quel-bilan-pour-le-meilleur-patissier-saison-11-sur-m6/624902'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Audiences : Quel bilan pour &quot;Le meilleur pâtissier&quot; saison 11 sur M6 ?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQai0sKFN9w3gELDb6Rc6Lph3yA6X7E6XTWovxcAgbURHJnciVBgfOd8Nwo1uln6xTYwScbs6XZ" alt="Audiences : Quel bilan pour &quot;Le meilleur pâtissier&quot; saison 11 sur M6 ?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Manon succède à Maud. Après trois mois de compétition, Marie Portolano, Cyril Lignac et Mercotte ont révélé, mercredi soir à l&#39;issue d&#39;une finale royale,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}