import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Cyber Monday</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Cyber Monday"/>
        <meta name="description" content="Trending News about Cyber Monday" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Cyber Monday</h1>
            <Image width={800} height={500} src="https://images.bfmtv.com/H_EFlFJRPPRCUiOXw-xtzb1crAI=/6x69:1254x771/1248x0/images/Cyber-Monday-profitez-des-nombreux-bons-plans-meme-apres-le-Black-Friday-1177154.jpg" alt="Cyber Monday"/>
            <h3>Recent News</h3>
            <a href='https://www.bfmtv.com/tech/bons-plans/cyber-monday-profitez-des-nombreux-bons-plans-meme-apres-le-black-friday_AB-202211270001.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cyber Monday : profitez des nombreux bons plans, même après le ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTsWnWTurmDx61MCJE6GuAmxqfIX6WWTUmysWvF9QvugTdfHHpilfyW8EfqxKp5ULAZIs2PMgg5" alt="Cyber Monday : profitez des nombreux bons plans, même après le ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le Black Friday, c&#39;est terminé. Après un vendredi intense où les clients se sont bousculés pour faire de bonnes affaires, c&#39;est le retour à la normale.</p></div>
            </div>
        </a><a href='https://www.ouest-france.fr/shopping/cyber-monday-les-meilleures-offres-valables-seulement-24-heures-8b30a5fe-6e6a-11ed-8a4c-ae62722f8615'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cyber Monday : les meilleures offres valables seulement 24 heures</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSZGjC46atxQQ5RkCpgr_gzbuUAbX-sy4h_jHhQBwbHzg85HJcN7JZWz7S6WiK_j8uOlf7E8Gsk" alt="Cyber Monday : les meilleures offres valables seulement 24 heures" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le Cyber Monday est une opération flash qui ne dure que 24 heures. Pendant toute une journée, les enseignes marchandes mettent en avant de multiples bons&nbsp;...</p></div>
            </div>
        </a><a href='https://www.edcom.fr/smartphones/41967-dernieres-heures-du-black-friday-et-premieres-heures-du-cyber-monday-quelle-sont-les-promos-disponibles.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dernières heures du Black Friday et premières heures du Cyber ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ0hw3AHnoheO1BzecmdkSMi-KvPxPtFVrsOAXyoLNxl3S1j_GEjgr7X4iY5aFjzSaTle-F8jz6" alt="Dernières heures du Black Friday et premières heures du Cyber ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Les smartphones de la gamme Samsung Galaxy ou les différents iPhone sont encore en promo, tout comme les téléphones Xiaomi et d&#39;autres smartphones 5G. Si vous&nbsp;...</p></div>
            </div>
        </a><a href='https://www.jeuxvideo.com/news/1676987/black-friday-juste-avant-le-cyber-monday-cette-barre-de-son-lg-s90qy-est-a-41.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Black Friday : juste avant le Cyber Monday, cette barre de son LG ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS81UcXQdK-zGtPkHYAaX-pNN9u4_HVK5WCifuWjMy4GtM5fN5uT8rxg4AXYq835hoGSrLxQ5kK" alt="Black Friday : juste avant le Cyber Monday, cette barre de son LG ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le Black Friday, et le Cyber Monday qui arrive, touchent toutes les catégories de produits. Et c&#39;est d&#39;autant plus intéressant quand les revendeurs nous&nbsp;...</p></div>
            </div>
        </a><a href='https://www.jeuxvideo.com/news/1676871/les-25-meilleures-promotions-amazon-a-saisir-avant-le-lundi-28-novembre-2022-a-23h59-pour-le-cyber-monday.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Les 25 meilleures promotions Amazon à saisir avant le lundi 28 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRTSi3I-4hRjYBQbzWnAPcJxd7Rrjd75nIVpAFso0KmvCb34zWtRyd4J7lDEzgPajAcpO-tKjBn" alt="Les 25 meilleures promotions Amazon à saisir avant le lundi 28 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le Black Friday (et son petit frère Cyber Monday le 28 novembre 2022) est assurément l&#39;une des périodes commerciales les plus plebiscitées de l&#39;année : il faut&nbsp;...</p></div>
            </div>
        </a><a href='https://www.crumpe.com/2022/11/meilleures-offres-cyber-monday-ps5-economisez-gros-sur-un-tas-de-jeux-exclusifs/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Meilleures offres Cyber ​​​​Monday PS5 – Économisez gros sur ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTKiGKfTxLdXikwMprjsLrXY4g6kiPf1w8aXYwmqKUa002kU9gQrZjuJqXOqq49jvj57jEMZzg5" alt="Meilleures offres Cyber ​​​​Monday PS5 – Économisez gros sur ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Along with huge discounts on popular PlayStation games, you can save on controllers, headsets, and more accessories.</p></div>
            </div>
        </a><a href='https://www.gentside.com/style/manteau-pull-baskets-5-indispensables-pour-lautomne-a-prix-casse-pendant-le-cyber-monday_art102939.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Manteau, pull, baskets : 5 indispensables pour l&#39;automne à prix ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSXgjYlC-ZupmzXcZxE5IgWNICXZEO-9Wx6H7jI-Xe_ujCy4QVJKCBmTid7poFVGGiMHLMrEoeT" alt="Manteau, pull, baskets : 5 indispensables pour l&#39;automne à prix ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le Cyber Monday est le moment de faire de bonnes affaires et de renouveler votre garde-robe. Voici les meilleurs deals à shopper sur H&amp;M.…</p></div>
            </div>
        </a>
        </Template></>;
}