import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Marche de noel</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Marche de noel"/>
        <meta name="description" content="Trending News about Marche de noel" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Marche de noel</h1>
            <Image width={800} height={500} src="https://www.lyoncapitale.fr/wp-content/uploads/2022/11/marche-de-noel-de-lyon-scaled-e1669483728342.jpg" alt="Marche de noel"/>
            <h3>Recent News</h3>
            <a href='https://www.lyoncapitale.fr/actualite/lyon-c-est-parti-pour-le-marche-de-noel-de-la-place-carnot-video'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lyon : c&#39;est parti pour le marché de Noël de la place Carnot (vidéo)</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR3Q3SBDW4zQGEerXq4KVL2nnbFKta5MuRz4MpMGv7bbah5xVLOcPiDZEs2egHl4NpHvul1ydqg" alt="Lyon : c&#39;est parti pour le marché de Noël de la place Carnot (vidéo)" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bien achalandés par les producteurs de l&#39;Ardèche, le stand des marrons chauds de Lyon est en bonne place pour satisfaire les visiteurs. Rencontre avec Sarah, l&#39;&nbsp;...</p></div>
            </div>
        </a><a href='https://jhm.fr/un-renouveau-eblouissant-pour-le-marche-de-noel/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>jhm | Un renouveau éblouissant pour le marché de Noël</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTvTJ2FHcUlZUlYnd12wVq3A68wzjloy5BaLqHh5UKoUg55cbs2X4VCQUcyBOkrctangIvJNTSv" alt="jhm | Un renouveau éblouissant pour le marché de Noël" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Après deux ans d&#39;absence, le marché de Noël de Wassy a fait son grand retour. Pour cette vingtième édition, samedi 26 novembre, plus de 80 exposants ont&nbsp;...</p></div>
            </div>
        </a><a href='https://www.vosgesmatin.fr/culture-loisirs/2022/11/26/plombieres-les-bains-le-marche-de-noel-en-tenue-de-soirees-d-autrefois'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Photos. Plombières-les-Bains : le marché de Noël en tenue de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ8BLuoi_OLsX4BNC8rKNCEpRQkGX5Rl5peP2Lfar7GhPRehV2DthfKxZnE74xp6RbpqD9jvdU6" alt="Photos. Plombières-les-Bains : le marché de Noël en tenue de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Depuis ce samedi, des dizaines de chalets d&#39;artisans ont pris place dans la ville thermale. Pour rappel, ce marché est l&#39;un des plus attendus des Vosges et du&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ouest-france.fr/normandie/caen-14000/le-marche-de-noel-a-ouvert-ses-chalets-a-caen-c7cc7f9e-6d9b-11ed-a158-c55305e444bb'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Le marché de Noël a ouvert ses chalets à Caen</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSox8PE_pZVsT8S9mrKdNIlUHUcI5I0QHtlJxpMXSyYYDEAwfMwDzi8VAnhTLwzEz8NJnODmC1W" alt="Le marché de Noël a ouvert ses chalets à Caen" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le marché de Noël de Caen (Calvados) a été inauguré samedi 26 novembre 2022. Cinquante-huit chalets bleus, jaunes, roses… ont été installés place de la&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ledauphine.com/economie/2022/11/26/isere-marche-de-noel-de-grenoble-le-sprint-vers-les-festivites'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Isère. Marché de Noël de Grenoble, le sprint vers les festivités</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQBhdq2nKVyM3Z9w4rW70_6jpPTm1PRMCB4OSn-wl-uFzEqc25YXMpAR6rAaNWfm_WitpXuI3oQ" alt="Isère. Marché de Noël de Grenoble, le sprint vers les festivités" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le marché de Noël, ouvert depuis jeudi, a été inauguré ce samedi à Grenoble. Un rendez-vous qui lance le sprint final vers les fêtes de fin d&#39;année.</p></div>
            </div>
        </a><a href='https://www.lebonbon.fr/lyon/good-news/marche-de-noel-lyon-place-carnot-ouvert/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lyon : le traditionnel marché de Noël de la Place Carnot ouvre enfin ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS5XhjD0sasjDs8oUZdb8VmES8xd4uX3_m8kHnekD-8NfDYdqog3LkxEBERmsvCZx2pXCbgb3nY" alt="Lyon : le traditionnel marché de Noël de la Place Carnot ouvre enfin ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Vous sentez cette douce odeur de sapin, de cannelle, de chalets en bois et de vin chaud ? Lyon entame la dernière ligne droite avant Noël avec l&#39;ouverture du&nbsp;...</p></div>
            </div>
        </a><a href='https://www.leprogres.fr/societe/2022/11/26/marche-de-noel-place-carnot-la-magie-opere-toujours'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lyon. Marché de Noël place Carnot : la magie opère toujours</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTHlct4xPWHiJPfN_tVp2p3Pgt_zsQJKlbUACZKLPVMXJPuXH_H9_ytjyoWliwTyut4j8Aa9M0F" alt="Lyon. Marché de Noël place Carnot : la magie opère toujours" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Des Lyonnais, des grands Lyonnais, et même des Normands, surpris un verre de vin chaud à la main sur la nouvelle terrasse du Bar la Taverne, côté centre d&#39;&nbsp;...</p></div>
            </div>
        </a><a href='https://www.francebleu.fr/infos/societe/la-magie-de-noel-gagne-deja-le-centre-ville-de-caen-1669462970'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>La magie de Noël gagne (déjà) le centre-ville de Caen !</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQE7hSmUXPwQDnFmXkzmqdfHFOKxb1ntKkpFhjCnE37ZYUJoMtaZ9TjnvJzuOFp8IVh9F02J9wZ" alt="La magie de Noël gagne (déjà) le centre-ville de Caen !" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>À moins d&#39;un mois de Noël, le traditionnel marché a pris place dans le centre-ville de Caen. De ce samedi 26 novembre au samedi 31 décembre, deux marchés de&nbsp;...</p></div>
            </div>
        </a><a href='https://www.lyondemain.fr/village-equitable-durable-noel-lyon/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Un Village équitable et durable avant Noël à Lyon - Lyon Demain</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTnKE2J7_YezrogdazzDDqyS0dldDM1ybFhbtJdXKnluTpvTNbrsJAfCbU39zmeQvdbTywCLrLK" alt="Un Village équitable et durable avant Noël à Lyon - Lyon Demain" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>le Village de Noël « Lyon Ville Equitable et Durable » rassemble des stands d&#39;idées cadeaux, des espaces de sensibilisation et des animations.</p></div>
            </div>
        </a>
        </Template></>;
}