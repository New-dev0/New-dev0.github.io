import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Foot</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Foot"/>
        <meta name="description" content="Trending News about Foot" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Foot</h1>
            <Image width={800} height={500} src="" alt="Foot"/>
            <h3>Recent News</h3>
            <a href='https://www.capital.fr/economie-politique/coupe-du-monde-au-qatar-les-ballons-de-foot-confectionnes-par-des-brodeuses-payees-41-euros-par-mois-1453095'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Coupe du monde au Qatar : les ballons de foot confectionnés par ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR0UAJsN9uw0DYw7-Ny5ODrm99KnpQth-l3TAEKMbnJ_He1BjmayH5P8HHysb4JvS-89RN9gPGg" alt="Coupe du monde au Qatar : les ballons de foot confectionnés par ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>D&#39;où viennent les ballons de foot utilisés pendant le mondial qatari ? Comme 70% de la production mondiale, ils sont confectionnés par des Pakistanaises qui&nbsp;...</p></div>
            </div>
        </a><a href='https://www.estrepublicain.fr/sport/2022/11/26/le-besancon-foot-force-5-a-quetigny'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Football - National 3. Le Besançon Foot force 5 à Quetigny</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Football - National 3. Le Besançon Foot force 5 à Quetigny" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Les Bisontins n&#39;ont pas traîné pour prendre le large dans une rencontre qu&#39;ils ont maîtrisé de bout en bout.</p></div>
            </div>
        </a><a href='https://www.lasemainedespyrenees.fr/tarbes-du-foot-en-marchant-avec-les-tamalous/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tarbes - Du foot en marchant avec les Tamalous</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRUi6Dx5HOXqnp1dglkeEY-9d9mpwvsULhTPKgVUc8GBZcKCAiRAoCwikKdYLeMA_TLHE748gBl" alt="Tarbes - Du foot en marchant avec les Tamalous" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>L&#39;association « Les Tamalous Foot 65 » propose une discipline méconnue aux seniors amoureux du ballon rond : le foot en marchant.</p></div>
            </div>
        </a><a href='https://www.francelive.fr/teaser/ouest-france/qui-sont-ces-travailleuses-payees-0-70-pour-fabriquer-chaque-ballon-de-foot-du-mondial-7733456/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Qui sont ces travailleuses payées 0,70 € pour fabriquer chaque ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQboRzZGF1Bw4kRP5VXQZAi4TKpljOkl1xhcToZLspv4OrMV7dalO4IFjB2gsFXXp4hhyod_MK6" alt="Qui sont ces travailleuses payées 0,70 € pour fabriquer chaque ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ils sont au centre du jeu pendant la Coupe du monde de football au Qatar, mais connaissez-vous l&#39;origine des ballons utilisés par les joueurs ?</p></div>
            </div>
        </a>
        </Template></>;
}