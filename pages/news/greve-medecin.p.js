import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Greve medecin</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Greve medecin"/>
        <meta name="description" content="Trending News about Greve medecin" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Greve medecin</h1>
            <Image width={800} height={500} src="https://www.lyoncapitale.fr/wp-content/uploads/2022/12/IMG_0327-1-scaled-e1669913385293.jpg" alt="Greve medecin"/>
            <h3>Recent News</h3>
            <a href='https://www.lyoncapitale.fr/actualite/greve-des-medecins-a-lyon-nous-ne-sommes-pas-des-secretaires'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Grève des médecins à Lyon: &quot;Nous ne sommes pas des secrétaires&quot;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR1e95enbd8r1gvGg7BOCoqAUGJL4RVNouREQATf6vIcjkQuQf-RMz1P-RytTPtKswwzZuQ7hEE" alt="Grève des médecins à Lyon: &quot;Nous ne sommes pas des secrétaires&quot;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Plus de 350 médecins de la région Auvergne-Rhône-Alpes, se sont retrouvés à Lyon pour exprimer leur mécontentement &quot;sur les dérives de la profession&quot;.</p></div>
            </div>
        </a><a href='https://www.ouest-france.fr/sante/greve-des-medecins-generalistes-en-normandie-une-centaine-de-personnes-mobilisees-ce-jeudi-a-caen-2bee6864-7163-11ed-b366-ca397b0bd9c1'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Grève des médecins généralistes en Normandie : une centaine de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRWdjQb6korSsYYy8X9SVM8mwqt_-SRrxGfZaRZamZt7De1A2sEMxaxkMsJbDAS_QL65K6sS5WW" alt="Grève des médecins généralistes en Normandie : une centaine de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Une centaine de médecins libéraux sont mobilisés ce jeudi 1er décembre 2022, à Caen (Calvados). En plein débat sur le projet de loi de financement de la&nbsp;...</p></div>
            </div>
        </a><a href='https://www.lemonde.fr/societe/article/2022/12/01/greve-des-medecins-liberaux-les-raisons-d-un-front-commun-historique_6152456_3224.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Grève des médecins libéraux : les raisons d&#39;un « front commun ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRYpv-bu6v00wlT_--WvszoWvko8ahVW_-jIICuEVuOLe26dboNsul4LNABHubM2_detvZ6qPvo" alt="Grève des médecins libéraux : les raisons d&#39;un « front commun ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Engagés dans des négociations avec l&#39;Assurance-maladie, tous les syndicats de médecins libéraux appellent à la fermeture des cabinets les 1er et 2 décembre.</p></div>
            </div>
        </a><a href='https://www.midilibre.fr/2022/12/01/greve-des-medecins-generalistes-laboratoires-fermes-que-faire-si-vous-avez-besoin-dun-professionnel-de-sante-10839230.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Grève des médecins généralistes, laboratoires fermés : que faire si ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQMG-A5CFiHoITaIgdM5FVTq-t6x7gA6mxALdKzK842Amoqh63XgjPbMXgt4euvq-5FiQzXwJ-n" alt="Grève des médecins généralistes, laboratoires fermés : que faire si ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ce jeudi 1er décembre, se rendre chez son médecin généraliste ou effectuer des analyses en laboratoire pourrait s&#39;avérer compliqué en raison d&#39;une grève de&nbsp;...</p></div>
            </div>
        </a><a href='https://france3-regions.francetvinfo.fr/provence-alpes-cote-d-azur/alpes-maritimes/greve-des-medecins-un-mouvement-fortement-suivi-en-paca-2666644.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Grève des médecins : un mouvement fortement suivi en PACA</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTpqFilYm6Uiy552Yw6KzJZeYk6BmkoZTYwxbUWxLaHwJGPKebRm2f7v03CqkdUXq4i94BJBd61" alt="Grève des médecins : un mouvement fortement suivi en PACA" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>C&#39;est assez rare pour être souligné, les médecins libéraux sont en grève ce jeudi. Les revendications sont multiples mais la rémunération reste au cœur des&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ladepeche.fr/2022/12/01/greves-des-medecins-ce-jeudi-et-vendredi-5-facons-davoir-un-avis-medical-malgre-tout-10839268.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Grèves des médecins ce jeudi et vendredi : 5 façons d&#39;avoir un avis ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcShEVj52hiKNndfXF6D1a_a0y_DZGE47SukfkggfkXI1Z3ScB6T-e5G4RfIvv7caagNtrJCre-g" alt="Grèves des médecins ce jeudi et vendredi : 5 façons d&#39;avoir un avis ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sauf urgence vitale, il est déconseillé de se rendre directement aux urgences encombrées par la bronchiolite, la grippe et la hausse des cas de Covid-19.</p></div>
            </div>
        </a>
        </Template></>;
}