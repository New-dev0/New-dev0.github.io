import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>France-Angleterre</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,France-Angleterre"/>
        <meta name="description" content="Trending News about France-Angleterre" /></Head><Template>
            <h1 style={{fontSize: "30"}}>France-Angleterre</h1>
            <Image width={800} height={500} src="https://i.f1g.fr/media/eidos/1200x630_crop/2022/12/09/XVMc1a8321e-77e8-11ed-aeac-dc0992249db7.jpg" alt="France-Angleterre"/>
            <h3>Recent News</h3>
            <a href='https://www.lefigaro.fr/sports/football/equipe-de-france/angleterre-france-un-sommet-pour-rever-encore-plus-grand-20221209'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Angleterre-France: un sommet pour rêver (encore) plus grand</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQHD_V0FKpacOlIRV28le5dkJXu3TD1FiXtVfYKXV7pVGbXzui-1b3n0UptN_zkaALXyBhz8PCH" alt="Angleterre-France: un sommet pour rêver (encore) plus grand" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Les tenants du titre disputent ce samedi un choc brûlant face au rival anglais, plus dangereux que jamais. En jeu, une place en demi-finale de la Coupe du&nbsp;...</p></div>
            </div>
        </a><a href='https://www.lepoint.fr/sport/football/coupe-du-monde-2022-france-angleterre-les-meilleures-ennemies-09-12-2022-2501147_1858.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Coupe du monde 2022 : France-Angleterre, les meilleures ennemies</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTmRSjXySET9QN9PBd1hjq4DJOpi39ib48jlOWPo8HHNqlT8K5QmNr5PuC4L6cpqzqHqFPMoF5Z" alt="Coupe du monde 2022 : France-Angleterre, les meilleures ennemies" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Les hommes de Didier Deschamps défient les Three Lions ce samedi. Les précédentes oppositions avec les Anglais ont été souvent mouvementées.</p></div>
            </div>
        </a><a href='https://www.tf1info.fr/sport/coupe-du-monde-2022-angleterre-france-les-publicites-gonflees-du-quotidien-anglais-the-sun-dans-les-rues-de-paris-2241401.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Angleterre-France : les publicités gonflées du quotidien anglais The ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ7vkmeElDjuHhO_tA8rvFKrxFrmC_A7EjisJ_MuBRrU3ICrJmP-WMNuz-S6NXDp5k3kVprbY9U" alt="Angleterre-France : les publicités gonflées du quotidien anglais The ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>[VIDÉO] ▶️ Le tabloïd, The Sun, a publié plusieurs visuels de joueurs britanniques dans les rues de Paris. Une campagne de publicité osée à 24h du quart&nbsp;...</p></div>
            </div>
        </a><a href='https://www.huffingtonpost.fr/sport/article/angleterre-france-the-sun-se-moque-des-bleus-avant-les-quarts_211350.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Angleterre-France : « The Sun » se moque des Bleus avant les quarts</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSaUs5PghBe1fIHHwD-dExPfrYlCXtPpo5kZWIEuiArZhvKNpBhqABgdIDOA_CVIq1GscdNBGi8" alt="Angleterre-France : « The Sun » se moque des Bleus avant les quarts" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Avant le match de quart de finale de la Coupe du monde entre la France et l&#39;Angleterre, le tabloïd britannique « The Sun » a affiché des visuels&nbsp;...</p></div>
            </div>
        </a><a href='https://www.liberation.fr/sports/football/avant-le-match-contre-la-france-les-supporteurs-anglais-entre-espoir-et-crainte-20221210_4HN64R77YFDNLMZNWYGRGBMRRA/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Angleterre-France : les supporteurs anglais entre espoir et crainte</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTHabIl0lTb7AlXmbq0UqtzWD0FXdzE4ehO92EtU2AywlgaNDiKKgZPQnNLggWzPyfK1zUHJfWP" alt="Angleterre-France : les supporteurs anglais entre espoir et crainte" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Avant le coup d&#39;envoi, l&#39;excitation gonfle dans les deux camps et chacun y va de son pronostic, entre analyse footballistique et chauvinisme.</p></div>
            </div>
        </a><a href='https://www.ouest-france.fr/sport/coupe-du-monde/france-angleterre-la-meme-composition-que-contre-la-pologne-voici-le-onze-probable-des-bleus-7b6622c2-77e6-11ed-8b33-be46011093e6'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>France - Angleterre. La même composition que contre la Pologne ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQF3qYgG6vjm0KShHLu179tOh9OsfS9rl9a12XUj_D9BcZOrX9q63_6NoFZL-efwzQKeIu_d33M" alt="France - Angleterre. La même composition que contre la Pologne ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sans surprise, pour le quart de finale de la Coupe du monde entre la France et l&#39;Angleterre, samedi 10 décembre (20 h), Didier Deschamps devrait faire&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}