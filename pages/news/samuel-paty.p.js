import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Samuel Paty</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Samuel Paty"/>
        <meta name="description" content="Trending News about Samuel Paty" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Samuel Paty</h1>
            <Image width={800} height={500} src="https://www.francetvinfo.fr/pictures/8x8g1uDIU35BkVRbhu7w0FlZwbY/1500x843/2022/11/21/637be2b1dba8e_samuel-paty.jpg" alt="Samuel Paty"/>
            <h3>Recent News</h3>
            <a href='https://www.francetvinfo.fr/replay-jt/france-2/20-heures/assassinat-de-samuel-paty-les-derniers-jours-d-effroi-du-professeur_5491668.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Assassinat de Samuel Paty : les derniers jours d&#39;effroi du professeur</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTUzpdGaLPxMhJ9Ov3bgXPcfXx5rPnhSrfw8I2BnKlzJdMuQDHGjqF8v1uV_gX4gMmaweTcbgRq" alt="Assassinat de Samuel Paty : les derniers jours d&#39;effroi du professeur" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Deux ans après l&#39;assassinat de Samuel Paty devant un collège de Conflans-Sainte-Honorine, l&#39;enquête révèle que le professeur se sentait menacé.</p></div>
            </div>
        </a><a href='https://www.ladepeche.fr/2022/11/21/assassinat-de-samuel-paty-historique-internet-marteau-dans-le-sac-solitude-le-rapport-denquete-fait-etat-dun-homme-terrorise-10817066.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Solitude, historique internet, marteau dans le sac... avant son ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRWPZR3vC9wxAAWNNJkBYoZvPYTVHduatauvifcoo66tELFcL5nvAHVxW0GbjbelA8hidXS_v6M" alt="Solitude, historique internet, marteau dans le sac... avant son ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nos confrères du Parisien ont dévoilé des éléments concernant les investigations sur l&#39;assassinat du professeur Samuel Paty, en 2020.</p></div>
            </div>
        </a><a href='https://www.lejdd.fr/Societe/se-sentant-traque-samuel-paty-aurait-vecu-ses-derniers-jours-dans-langoisse-4149208'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Se sentant traqué, Samuel Paty aurait vécu ses derniers jours dans l ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRLn8gcMuuI022gGJI1y_oVPvZ87U2ZMXMfo1uj3U0RDKjUlymDue9rHDmsLhgmrblF8nYdVkE9" alt="Se sentant traqué, Samuel Paty aurait vécu ses derniers jours dans l ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Plus de deux ans après l&#39;assassinat du professeur à Conflans-Sainte-Honorine, le rapport définitif des policiers de la sous-direction antiterroriste éclaire&nbsp;...</p></div>
            </div>
        </a><a href='https://www.lepoint.fr/justice/samuel-paty-la-peur-de-l-enseignant-quelques-jours-avant-son-assassinat-21-11-2022-2498536_2386.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mort de Samuel Paty : « Je sentais le collège menacé », confie sa ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQZNB2sirvn-lBswf3f8Vfpzn94ckgKj0PSbkKyaEm38nJwGt7xkIy8BitzVUeYHGPWjTV-dgs1" alt="Mort de Samuel Paty : « Je sentais le collège menacé », confie sa ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>La cheffe d&#39;établissement regrette que ses nombreuses alertes auprès des autorités n&#39;aient pas protégé son enseignant, indique « Le Parisien ».</p></div>
            </div>
        </a><a href='https://www.20minutes.fr/societe/4011100-20221121-assassinat-samuel-paty-rapport-enquete-decrit-vive-inquietude-avant-faits'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Assassinat de Samuel Paty : Un rapport d&#39;enquête décrit sa « vive ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSQ81j0uIkR1xj2ZYrBtdJUmV94XiVBsmVxW4wdCp1vDYzqEDklUHYHn8-oU1LYTqKzauRSPv8S" alt="Assassinat de Samuel Paty : Un rapport d&#39;enquête décrit sa « vive ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le professeur a notamment demandé à des collègues de le ramener chez lui en voiture.</p></div>
            </div>
        </a><a href='https://www.radioclassique.fr/societe/samuel-paty-la-presse-revient-sur-les-derniers-jours-du-professeur-marques-par-la-peur/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Samuel Paty : La presse revient sur les derniers jours du professeur ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQSDlymf1ymO_9-0crC-4FwPztwmpltgm5sR9KbPr3gZuiPdFTku2oTjFpBtR8CI5jR1qjx4nad" alt="Samuel Paty : La presse revient sur les derniers jours du professeur ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le quotidien décrit un homme esseulé, apeuré, au abois. L&#39;enfer commence le 6 octobre après la projection d&#39;une caricature de Mahomet. Le collège ne tarde pas à&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sudouest.fr/politique/education/talence-une-allee-samuel-paty-pour-ne-pas-oublier-13037078.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Talence : une allée Samuel-Paty pour ne pas oublier</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRzqJzVrjoFSpwW6g5UoqVQ-NX2G52GG72TbfUnQK4Vcodl5F1OsJCQXoNwgE607zFKUMjXGdPL" alt="Talence : une allée Samuel-Paty pour ne pas oublier" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Emmanuel Sallaberry et Alain Cazabonne, sénateur de la Gironde et ancien maire ont également remercié le corps enseignant pour leur courage.</p></div>
            </div>
        </a>
        </Template></>;
}