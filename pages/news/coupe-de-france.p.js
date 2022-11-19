import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Coupe de France</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Coupe de France"/>
        <meta name="description" content="Trending News about Coupe de France" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Coupe de France</h1>
            <Image width={800} height={500} src="https://www.francebleu.fr/s3/cruiser-production/2022/11/ce11137d-927b-4267-af14-bbb0158b34db/1200x680_1668806360571.jpg" alt="Coupe de France"/>
            <h3>Recent News</h3>
            <a href='https://www.francebleu.fr/sports/football/direct-coupe-de-france-suivez-le-match-bergerac-niort-1668767984'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Coupe de France de football : Bergerac éliminé par Niort au bout du ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRCsMbbosrXAP0TZov6_9SoFTGi6OIM7ABVa0NSJMGHzWQnE5ksHFZJwHZSgJ8QlMJeyb2uTYCa" alt="Coupe de France de football : Bergerac éliminé par Niort au bout du ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le Bergerac Périgord FC (N2) affrontait un gros morceau ce soir avec les Chamois Niortais, 19è de Ligue 2, au stade de Campréal, à Bergerac. Les Périgourdins s&#39;&nbsp;...</p></div>
            </div>
        </a><a href='https://www.foot-national.com/coupe-de-france/coupe-de-france--le-1er-qualifie-pour-les-32e-de-finale-est-connu--801709'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Coupe de France : le 1er qualifié pour les 32e de finale est connu !</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTFTJquzMULshHcczP27tt8K0ih6SQsKfpZW2qkCkYsGYntjLZG1pktDOO4XAdbTMQO0D3I4Ajx" alt="Coupe de France : le 1er qualifié pour les 32e de finale est connu !" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>En effet, les joueurs de Laurent Guyot se sont imposés, non sans mal, sur le score de trois buts à deux sur la pelouse du club de National 2. Moise Sahi Dion a&nbsp;...</p></div>
            </div>
        </a><a href='https://maligue2.fr/2022/11/18/direct-suivez-les-matchs-dannecy-et-de-niort-en-coupe-de-france/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Coupe de France - Niort et Annecy se qualifient en 32e de finale ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQpN3NZ8tCtFITQaviLR1O6kmbCgI8q65KoYAiancgUbQ-rzVJTJ1zo5JbKL3gFSViGwyeohFk8" alt="Coupe de France - Niort et Annecy se qualifient en 32e de finale ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tenez-vous au courant des scores des deux premiers matchs du 8e tour de la Coupe de France 2023, qui impliquent deux clubs de Ligue 2.</p></div>
            </div>
        </a><a href='https://www.foot-national.com/coupes/coupe-de-france-vire-caen-finalement-reporte-801649'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Coupe de France : Vire-Caen finalement reporté !</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRnNj7eyqxeSyMDBa15d1ciSIcfV5ZitCvCRQUgN6JpfneOPzVNelkM9s8og2E9nIJXneYPlJwm" alt="Coupe de France : Vire-Caen finalement reporté !" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>La Fédération a finalement décidé de reporter la rencontre de Coupe de France entre Vire (National 3) et Caen (Ligue 2), prévue initialement ce samedi.</p></div>
            </div>
        </a><a href='https://www.foot-national.com/coupe-de-france/coupe-de-france--niort-ecarte-bergerac-aux-tab-801714'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Coupe de France : Niort écarte Bergerac aux TAB</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS8XyFGUmsQevR09XFhWuF68gxKstjIlOASJRYVukxnlQtrM7qz1-0-kMUAvV3G4UAW4IcNk3gY" alt="Coupe de France : Niort écarte Bergerac aux TAB" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bergerac-Périgord et les Chamois Niortais ont dû se départager lors de la séance de tirs au but.</p></div>
            </div>
        </a><a href='https://www.ouest-france.fr/sport/football/coupe-de-france/football-coupe-de-france-vire-sm-caen-reporte-au-17-decembre-par-la-federation-francaise-e212a89c-672e-11ed-8d02-f374de6baa45'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Football. Coupe de France : le match Vire – SM Caen reporté au 17 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcThtH0nYaApUrNclB9S6uWE5_6FI5YSbWxkhwo2nlWszytdDOucU1V9YFgAAp4HU9dQuUnck505" alt="Football. Coupe de France : le match Vire – SM Caen reporté au 17 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Réunie en urgence vendredi matin, la Fédération française de football a décidé de reporter le match du 8e tour de Coupe de France entre l&#39;AF Virois et le SM&nbsp;...</p></div>
            </div>
        </a><a href='https://www.francebleu.fr/sports/football/coupe-de-france-a-epinal-les-supporters-du-fc-metz-interdits-de-centre-ville-d-alcool-et-de-1668781820'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Coupe de France : à Epinal, les supporters du FC Metz interdits de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQQLvd_eoxy_3jD6D8H6Hod4hgPcF1nrPZ0KVKyD9-eeuG0uq3eQHv9LN46qBzh1rLe_4hyKUAR" alt="Coupe de France : à Epinal, les supporters du FC Metz interdits de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>La préfecture des Vosges a pris, ce jeudi 17 novembre, deux arrêtés visant les fans du club à la croix de Lorraine qui se rendront ce samedi à Epinal,&nbsp;...</p></div>
            </div>
        </a><a href='https://france3-regions.francetvinfo.fr/grand-est/vosges/epinal/coupe-de-france-de-football-thaon-et-epinal-en-quete-d-exploit-face-aux-professionnels-de-sochaux-et-de-metz-2657920.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Coupe de France de football : Thaon et Epinal en quête d&#39;exploit ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQtXE8l2pWk-3InDMXaGLoQ6r7-g434LaD3W0cH1ohvzZ0qbfIjcTn4_-c-3nG9uoRG2ksfdg1m" alt="Coupe de France de football : Thaon et Epinal en quête d&#39;exploit ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Les amateurs de Thaon et d&#39;Epinal dans les Vosges sont des habitués de la Coupe de France de football. Opposés au FC Sochaux et au FC Metz, deux grosses&nbsp;...</p></div>
            </div>
        </a><a href='https://www.lanouvellerepublique.fr/indre/commune/chassignolles/coupe-de-france-feminine-l-entente-3b-en-lice-pour-un-exploit-contre-toulouse'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Coupe de France féminine : l&#39;Entente 3B en lice pour un exploit ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTo_jFSnxD-4fjqXlUaU9T9JvgYqacOhgn3t6IxLLVzgyxoxx2Wg354xWBV9RQP9rSS7CRd_ziW" alt="Coupe de France féminine : l&#39;Entente 3B en lice pour un exploit ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jour de fête, ce dimanche 20 novembre, à Neuvy-Saint-Sépulchre, où les footballeuses de l&#39;Entente 3B (R2) joueront un 5e tour de Coupe de France de gala en&nbsp;...</p></div>
            </div>
        </a><a href='https://actu.fr/normandie/caen_14118/coupe-de-france-olivier-pickeu-jai-surtout-une-pensee-pour-le-club-de-vire_55310814.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Coupe de France. Olivier Pickeu : &quot;J&#39;ai surtout une pensée pour le ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTLcMLBFRcHe14ViyfjE0Dl1Rd1lKXoCR9_Zq8STGFN6SH2I7ZzQ9nkM8ZCBGwuRA7rcgKKvRrZ" alt="Coupe de France. Olivier Pickeu : &quot;J&#39;ai surtout une pensée pour le ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Olivier Pickeu n&#39;a &quot;pas accueilli de la meilleure des manières&quot; l&#39;annonce du report du match de Coupe de France entre Caen et Vire mais le président&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}