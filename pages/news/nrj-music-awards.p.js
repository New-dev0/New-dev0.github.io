import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>NRJ Music Awards</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,NRJ Music Awards"/>
        <meta name="description" content="Trending News about NRJ Music Awards" /></Head><Template>
            <h1 style={{fontSize: "30"}}>NRJ Music Awards</h1>
            <Image width={800} height={500} src="https://photos.tf1info.fr/images/1280/720/orelsan-nrj-music-awards-1-b78e18-0@1x.jpeg" alt="NRJ Music Awards"/>
            <h3>Recent News</h3>
            <a href='https://www.tf1info.fr/culture/direct-nrj-music-awards-2022-nma-sur-tf1-lizzo-matt-pokora-rosalia-suivez-les-nma2022-en-live-2238986.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>NRJ Music Awards 2022 : Orelsan grand gagnant, découvrez le ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTmF7KMTp9dttJYZjDC7ZWp8a3qqxSUuwUIngB0JtfUuu8SmkhrGxNR7cKwALZwfe4JqowekOB1" alt="NRJ Music Awards 2022 : Orelsan grand gagnant, découvrez le ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>[VIDÉO] ▶️ La 24e édition des NRJ Music Awards était diffusée sur TF1 ce vendredi 18 novembre depuis le Palais des Festivals à Cannes.</p></div>
            </div>
        </a><a href='https://www.ladepeche.fr/2022/11/18/nrj-music-awards-big-flo-et-oli-angele-soolking-voici-la-liste-des-artistes-recompenses-10812538.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>NRJ Music Awards : Big Flo et Oli, Angèle, Soolking... Voici la liste ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTJkovJz1wvOLzMuFHLQhyABc5nXNn5Ckjc1J-7XnUYO17XwWaZjGjDcRXVKTiFi-mWWKUO3QHs" alt="NRJ Music Awards : Big Flo et Oli, Angèle, Soolking... Voici la liste ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>La 24 édition des NRJ Music Awards a récompensé de nombreux artistes francophones ce vendredi 18 novembre, parmi lesquels Angèle, Soolking, OrelSan,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.francelive.fr/article/france-live/nrj-music-awards-pourquoi-nikos-aliagas-a-t-il-ete-remplace-par-camille-combal-7717955/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>NRJ Music Awards. Pourquoi Nikos Aliagas a-t-il été remplacé par ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQX1RBByJWwp185zWUqpSA4dvqW1rOw5lKdfr9zxZrFLyA_U9S90-Xq_Y1N9aQMpTck2BgolBmr" alt="NRJ Music Awards. Pourquoi Nikos Aliagas a-t-il été remplacé par ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Les NRJ Music Awards reviennent ce vendredi 18 novembre 2022, au Palais des Festivals de Cannes (Alpes-Maritimes). Mais cette année, petite particularité&nbsp;...</p></div>
            </div>
        </a><a href='https://www.leparisien.fr/culture-loisirs/musique/nrj-music-awards-angele-soolking-ed-sheeran-decouvrez-le-palmares-des-artistes-recompenses-18-11-2022-MQV4BTBHR5HHVB2YS57VL3BNTM.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>NRJ Music Awards : Lady Gaga, Angèle, Matt Pokora, Big Flo et Oli ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQNlytYGRQhBKqxXNp_GY3Mql2oothjgf5m9zJZqd-yRdf3aZrSolS2SU3uSmMdaNto-BhQJ9Sv" alt="NRJ Music Awards : Lady Gaga, Angèle, Matt Pokora, Big Flo et Oli ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nikos est blessé, il va bien, on l&#39;embrasse fort », a rassuré d&#39;entrée Camille Combal en lançant ce vendredi la 24e cérémonie des NRJ Music Awards.</p></div>
            </div>
        </a><a href='https://www.huffingtonpost.fr/culture/article/nrj-music-awards-2022-tous-les-gagnants-de-la-ceremonie_210385.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>NRJ Music Awards 2022 : tous les gagnants de la cérémonie</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTwKVvte4xQkw6BMkvyS58eHp1O5IOjTkmOSngSKv-t88WzNwxhTZuqpLnlmZ27-bDLsNtBiPUp" alt="NRJ Music Awards 2022 : tous les gagnants de la cérémonie" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>La 24e édition des NMA, présentée pour la première fois par Camille Combal depuis le Palais des Festivals de Cannes et sur TF1, a dévoilé son palmarès.</p></div>
            </div>
        </a><a href='https://www.bfmtv.com/people/musique/nrj-music-awards-angele-et-orelsan-artistes-francophones-de-l-annee-decouvrez-le-palmares-complet_AN-202211180827.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>NRJ Music Awards: Angèle et Orelsan artistes francophones de l ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTWudsU-JzcJZlmiGv8SLOpa2XzXUenX0fzPoH_9RaaLv_UnAx_HK1_RYcIsMU8JLnI4ddgOZLO" alt="NRJ Music Awards: Angèle et Orelsan artistes francophones de l ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Angèle et Orelsan ont été sacrés artistes francophones de l&#39;année aux 24e NRJ Music Awards qui se sont tenus ce vendredi 18 novembre à Cannes.</p></div>
            </div>
        </a><a href='https://www.gala.fr/l_actu/news_de_stars/nrj-music-awards-ce-message-deva-longoria-qui-fait-jaser_506814'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>NRJ Music Awards : ce message d&#39;Eva Longoria qui fait jaser</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQBiHGpY2O96FdyAG6QciG0FWjmy73Bt0vRXL7pU-tluMrwwKH9l3OwMMH0XCY9FMnD-EngL2UfTQ" alt="NRJ Music Awards : ce message d&#39;Eva Longoria qui fait jaser" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ce vendredi 18 novembre, Eva Longoria a annoncé le vainqueur de la catégorie du Meilleur/groupe duo francophone, lors de la 24ème cérémonie des NRJ...</p></div>
            </div>
        </a>
        </Template></>;
}