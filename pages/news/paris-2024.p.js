import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Paris 2024</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Paris 2024"/>
        <meta name="description" content="Trending News about Paris 2024" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Paris 2024</h1>
            <Image width={800} height={500} src="https://medias.lequipe.fr/img-photo-jpg/vue-sur-la-prairie-du-triangle-constitue-par-la-grande-halle-la-geode-et-la-cite-des-sciences-et-de-/1500000001718820/0:0,1196:797-640-427-75/b4015.jpg" alt="Paris 2024"/>
            <h3>Recent News</h3>
            <a href='https://www.lequipe.fr/Tous-sports/Actualites/Le-club-france-des-jeux-de-paris-2024-se-dessine/1367916'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Le Club France des Jeux de Paris 2024 se dessine</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQClRZ1HFVojrbu5GLHXML7bdUTZmt8_pHCwl7hbbPx_1LnqpRiUb7F2znK8OBMX-io8vewHyTa" alt="Le Club France des Jeux de Paris 2024 se dessine" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>L&#39;un des principaux chantiers du CNOSF, avec le CPSF, est de préparer l&#39;installation du Club France pendant les Jeux Olympiques et Paralympiques à la&nbsp;...</p></div>
            </div>
        </a><a href='https://www.francetvinfo.fr/les-jeux-olympiques/paris-2024/paris-2024-les-inscriptions-sont-desormais-ouvertes-pour-acheter-des-places-pour-les-jeux-olympiques_5505855.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Paris 2024 : les inscriptions sont désormais ouvertes pour acheter ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT-_GsfleopdReAGPvGJT0-kskrWRhejXXp1yzmGfK3XOkVUOZ3TsVi5cyADdxKoCznkYEPayel" alt="Paris 2024 : les inscriptions sont désormais ouvertes pour acheter ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>La première phase d&#39;inscription à la billetterie des Jeux de Paris s&#39;ouvre jeudi pour une période de deux mois. Une fois inscrit, vous devrez être tirés au&nbsp;...</p></div>
            </div>
        </a><a href='https://www.fftt.com/site/actualites/2022-12-01/paris-2024-ouverture-inscriptions-pour-obtenir-vos-billets'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Paris 2024 : ouverture des inscriptions pour obtenir vos billets !</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRlNTpxR9OfhKsFFaI-6gkL-1r4qaq1DKxfuBqSRfYRjs8TsHaZfXz_Q6RZfCaLm7kiQdxAlUrL" alt="Paris 2024 : ouverture des inscriptions pour obtenir vos billets !" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>À vos agendas : la première occasion de décrocher un billet pour les Jeux Olympiques c&#39;est maintenant ! En ce 1er décembre 2022, Paris 2024 lance&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ouest-france.fr/jeux-olympiques/jo-paris-2024-la-premiere-phase-d-inscription-a-la-billetterie-est-ouverte-76998f08-717a-11ed-8d7c-fc31769d4d38'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>JO Paris 2024. La première phase d&#39;inscription à la billetterie est ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRrVqFVy7WStVvA5bv-qcX1qH923EGCA5iYKWP7SZ7e_1lNoVFCFo5LMENXbLNDIkkNx5hjK6D7" alt="JO Paris 2024. La première phase d&#39;inscription à la billetterie est ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>La première phase de la billetterie des Jeux olympiques de Paris 2024 s&#39;est ouverte, ce jeudi 1er décembre 2022. Vous pouvez désormais vous inscrire pour&nbsp;...</p></div>
            </div>
        </a><a href='https://www.lepoint.fr/sport/jo-2024-comment-obtenir-un-billet-01-12-2022-2500119_26.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>JO 2024 : comment obtenir un billet</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSwqvOFFUh_KrESn4Bv3ASYyDIwzPWYpdnGIQPrgJnenr37uyVgIkPCj0NKVJ8Y8LgpFHyMqEUI" alt="JO 2024 : comment obtenir un billet" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>L&#39;inscription au tirage au sort pour accéder à la billetterie des Jeux olympiques de Paris 2024 est ouverte depuis ce jeudi. Voici le mode d&#39;emploi.</p></div>
            </div>
        </a><a href='https://www.lequipe.fr/Tous-sports/Actualites/Paris-2024-vincent-roger-nomme-delegue-ministeriel/1367827'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Paris 2024 : Vincent Roger nommé délégué ministériel</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT5PCvyvEAMzJ2TRK_sWm_Sh6vUwYC1yxYfynEeWTCaWKgCqPrxgqNMOFA31rmWpXbUraMXNRnf" alt="Paris 2024 : Vincent Roger nommé délégué ministériel" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Vincent Roger, ex-responsable des Jeux Olympiques et Paralympiques de la région Ile-de-France, est nommé délégué ministériel en charge de la grande cause&nbsp;...</p></div>
            </div>
        </a><a href='https://www.leparisien.fr/guide-shopping/en-ce-moment/decouvrez-comment-obtenir-vos-billets-pour-les-jo-de-paris-2024-en-avant-premiere-des-ce-1er-decembre-01-12-2022-ZY4YV7DFQJENHBBKGCTCUO4BKY.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Découvrez comment obtenir vos billets pour les JO de Paris 2024 en ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRdRHdBRWxM9cuNz4j6fsR0HcNbU58yJ7LIUajYd5ewM69OPtfnAf5z8a5-fmlLuEHYxXIZ8j-_" alt="Découvrez comment obtenir vos billets pour les JO de Paris 2024 en ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Du 26 juillet au 11 août 2024, la France accueille les Jeux Olympiques et Paralympiques. Les plus grandes compétitions vont se dérouler partout en métropole&nbsp;...</p></div>
            </div>
        </a><a href='https://www.leperon.fr/Sport/Championnats/Paris-2024-La-billetterie-est-ouverte'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Paris 2024 : La billetterie est ouverte / Championnats / Sport ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSJWVqhLP0jreYnRZGDUfQhALspEfbQaWmLnAvEe1YT9zH_LEDrYUhjnkw0AbG624yxYxWG_0Rb" alt="Paris 2024 : La billetterie est ouverte / Championnats / Sport ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Les Jeux Olympiques dans son propre pays, c&#39;est généralement un évènement qu&#39;on ne vit qu&#39;une fois. Depuis ce jeudi 1er décembre, il est possible de&nbsp;...</p></div>
            </div>
        </a><a href='https://www.clubic.com/events/actualite-448614-paris-2024-la-billeterie-en-ligne-des-jeux-olympiques-va-ouvrir-voila-comment-ca-marche.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Paris 2024 : la billeterie en ligne des Jeux Olympiques va ouvrir ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT83zVyUsXENHZ3s9O662u9CloPBj7Rt4micPYctrPzUt22gPtNTOrufDd5PRcj1935WYE10iBk" alt="Paris 2024 : la billeterie en ligne des Jeux Olympiques va ouvrir ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le comité d&#39;organisation indique que 10 millions de billets seront mis en vente pour les seuls JO 2024, et 3,5 millions de tickets supplémentaires pour les Jeux&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}