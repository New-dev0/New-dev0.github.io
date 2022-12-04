import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Fortnite</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Fortnite"/>
        <meta name="description" content="Trending News about Fortnite" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Fortnite</h1>
            <Image width={800} height={500} src="https://static.actugaming.net/media/2022/12/fortnite-conclusion-chapitre-3-fracture.jpg" alt="Fortnite"/>
            <h3>Recent News</h3>
            <a href='https://www.actugaming.net/fortnite-evenement-fracture-chapitre-3-535835/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fortnite : (Re)Vivez l&#39;événement &quot;Fracture&quot; concluant le Chapitre 3 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSkdArr_mICR5azphnJeS7YCyRxYaTqBU97JBYusOxNM0nF0bDiRoL4pQtduyr5BOceYEzObbdk" alt="Fortnite : (Re)Vivez l&#39;événement &quot;Fracture&quot; concluant le Chapitre 3 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Annoncé il y a seulement 15 jours, l&#39;événement &quot;Fracture&quot; concluant le Chapitre 3 de Fortnite vient de se terminer et avec lui, un grand spectacle&nbsp;...</p></div>
            </div>
        </a><a href='https://gamewave.fr/fortnite/fortnite-quand-et-a-quelle-heure-commence-la-saison-1-du-chapitre-4/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fortnite : Quand et à quelle heure commence la saison 1 du chapitre 4</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTCofnaJc8XgGXHkGeuV5cLRKoK_VOn4ILYMO9bBrEC3VPfsmjt2VZSZQ9_iT9HM1Y0EzAZE9JL" alt="Fortnite : Quand et à quelle heure commence la saison 1 du chapitre 4" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Comme vous devez le savoir, Epic Games aime faire monter la pression en ne divulguant pas ou peu d&#39;informations concernant la nouvelle saison et sa sortie. Pour&nbsp;...</p></div>
            </div>
        </a><a href='https://www.francelive.fr/article/france-live/fortnite-la-mise-a-jour-du-chapitre-4-aura-lieu-ce-dimanche-4-decembre-ce-qu-il-faut-savoir-7745830/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fortnite : la mise à jour du Chapitre 4 aura lieu ce dimanche 4 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTvaJSHD2FIfIcaPlV-pJJH19Sd8TKOo7ldJFQsDcqomK2LIumUamsY7R83_bdJeXOLHLXQ_9Kg" alt="Fortnite : la mise à jour du Chapitre 4 aura lieu ce dimanche 4 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Une nouvelle mise à jour conséquente aura lieu sur Fortnite au cours de ce week-end des 3 et 4 décembre 2022. Comme à son habitude, Epic Games reste discret&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sortiraparis.com/loisirs/gaming/articles/286213-fortnite-chapitre-4-map-skins-nouveautes-que-nous-reserve-la-saison-1'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fortnite Chapitre 4 : map, skins, nouveautés... que nous réserve la ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRJIa9Ie_vLtPBMXAojScdY_8G_wPhsffPI_8lSK1UrBmxdXCmAJyi7aDYfUDbocxgEa-XX_7hl" alt="Fortnite Chapitre 4 : map, skins, nouveautés... que nous réserve la ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Alors que l&#39;événement Fortnite Fracture, concluant le chapitre 3 du jeu signé Epic Games, vient de se terminer ce samedi 3 décembre 2022, voilà qu&#39;une&nbsp;...</p></div>
            </div>
        </a><a href='https://www.millenium.org/news/397895.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fortnite chapitre 4 : quand peut-on rejouer ? Heure de début de la ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTAii4NUoYBZyf5syaDtv6Rvi2Iyta7R33AMhLEuhVVEXYRRd_rVZtDD5PJxBb_4yG7qzoQhAST" alt="Fortnite chapitre 4 : quand peut-on rejouer ? Heure de début de la ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tout ça c&#39;est bien beau, sauf qu&#39;à l&#39;heure où nous écrivons ces lignes, il est impossible de jouer à Fortnite. Epic Games nous refait le coup de l&#39;écran de&nbsp;...</p></div>
            </div>
        </a><a href='https://www.millenium.org/news/397896.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fortnite Chapitre 4 : Mr Beast, Doom, Hulk, The Witcher... Grosses ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRwh8rtSeKH8rMs0FGPiFbp3MuRLCpFuV9h1pJ-34TX5b3ob5VpheKVuPrlpzcaNAl74onEcf1F" alt="Fortnite Chapitre 4 : Mr Beast, Doom, Hulk, The Witcher... Grosses ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nous sommes à présent dans l&#39;entre-deux, à mi-chemin entre les Chapitre 3 et 4. Et Epic Games tease fortement la saison toute proche, avec des aperçus des&nbsp;...</p></div>
            </div>
        </a><a href='https://www.crumpe.com/2022/12/heure-de-debut-du-chapitre-4-de-fortnite-quand-les-serveurs-fortnite-seront-ils-sauvegardes/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Heure de début du chapitre 4 de Fortnite : quand les serveurs ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQqCmGV2dl7yHxskjEPsm80w_HbYlOlIouHKk_Hf7Ift838iVLo0emJ2ZGsc3_EVR6rbmeFPg2_" alt="Heure de début du chapitre 4 de Fortnite : quand les serveurs ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mais rien de tout cela n&#39;a d&#39;importance tant que les serveurs Fortnite ne permettent pas aux joueurs de revenir dans le jeu. Epic aime garder cela une surprise,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.netcost-security.fr/jeux-video/132555/fortnite-doom-slayer-geralt-de-rivia-hulk-et-la-nouvelle-carte-ont-fuite/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fortnite : DOOM Slayer, Geralt de Rivia, Hulk et la nouvelle carte ont ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTknX65qXu05uLhdbQUr3ArPMsF4Qy4Egeal_1mh3DZZjLIuzvaXh5lMcXZPNGvEXZpH6uDc3Br" alt="Fortnite : DOOM Slayer, Geralt de Rivia, Hulk et la nouvelle carte ont ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Quelques heures à peine avant le dernier événement Fortnite Fracture, plusieurs mineurs de données ont mis au point des données de jeu intéressantes qui,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.netcost-security.fr/jeux-video/132551/fortnite-spoilers-et-fuites-devenements-de-fracture-tous-les-details/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fortnite: Spoilers et fuites d&#39;événements de fracture; Tous les détails</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTvZEAN4gFt4P6RfMT5uJqK6xlqqLmdR9tqHVlRXikoedL3bRcvIJRywEKpYDdV6uWyMQZ4n-h8" alt="Fortnite: Spoilers et fuites d&#39;événements de fracture; Tous les détails" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Environ six heures avant le dernier événement Fracture de la saison 4 de Fortnite, Epic Games en a décrypté un grand nombre de fichiers, ce qui a entraîné&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}