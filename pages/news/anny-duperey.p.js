import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Anny Duperey</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Anny Duperey"/>
        <meta name="description" content="Trending News about Anny Duperey" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Anny Duperey</h1>
            <Image width={800} height={500} src="" alt="Anny Duperey"/>
            <h3>Recent News</h3>
            <a href='https://www.gala.fr/l_actu/news_de_stars/quest-ce-quon-attend-anny-duperey-en-colere-elle-sen-prend-au-gouvernement_506638'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>“Qu&#39;est-ce qu&#39;on attend ?” : Anny Duperey “en colère”, elle s&#39;en ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSk5_0IqhgfuNugrH2p4HV_ZdvBe-iTUP6NgKdWIc1lMSbCYZk7EukGaGWBGOkUQW5j3j5kVOzM" alt="“Qu&#39;est-ce qu&#39;on attend ?” : Anny Duperey “en colère”, elle s&#39;en ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Anny Duperey est-elle antivax ? Cette demande de réintégrer les soignants qui refusent de se faire vacciner contre le Covid-19 (et donc, pour rappel, de&nbsp;...</p></div>
            </div>
        </a><a href='https://www.jeanmarcmorandini.com/article-518220-l-enorme-coup-de-gueule-d-anny-duperey-contre-le-gouvernement-a-propos-des-soignants-non-vaccines-et-non-reintegres-qu-est-ce-qu-on-attend-pour-les-reintegrer-ce-sont-15000-soignants-prets-a-travailler-video.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>L&#39;énorme coup de gueule d&#39;Anny Duperey contre le gouvernement à ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT7B38bxxrpOyQhq0jIJB53iVJ3RfpebVCxlbzgwStcMaRdPHvKg2j_obxHAjLazf6gmSZToMmE2A" alt="L&#39;énorme coup de gueule d&#39;Anny Duperey contre le gouvernement à ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ce matin, Anny Duperey était l&#39;invitée de Jordan de Luxe dans &quot;Chez Jordan&quot; sur C8.</p></div>
            </div>
        </a><a href='https://www.lactucitoyenne.fr/actualites/sante/dans-une-colere-noire-anny-duperey-s-adresse-au-ministre-de-la-sante-on-les-a-applaudis-et-foutus-dehors-'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dans une colère noire, Anny Duperey s&#39;adresse au ministre de la ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQWdX0yHICOCorvOo8OD8FLbEP6jPg7x54UHaxnDUK6t1yliVpP0wEZllE3ZNW8ArTyamomIr1C" alt="Dans une colère noire, Anny Duperey s&#39;adresse au ministre de la ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>L&#39;actrice Anny Duperey était l&#39;invitée de l&#39;émission « Chez Jordan » diffusée ce mercredi 16 novembre 2022 ...</p></div>
            </div>
        </a>
        </Template></>;
}