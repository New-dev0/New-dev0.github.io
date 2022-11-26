import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Pays-Bas</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Pays-Bas"/>
        <meta name="description" content="Trending News about Pays-Bas" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Pays-Bas</h1>
            <Image width={800} height={500} src="https://s.rfi.fr/media/display/43134958-69c8-11ed-91a4-005056a90284/w:1280/p:16x9/000_9RK8MR.jpg" alt="Pays-Bas"/>
            <h3>Recent News</h3>
            <a href='https://www.rfi.fr/fr/europe/20221126-les-pays-bas-apurent-leur-pass%C3%A9-esclavagiste-et-colonial'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Les Pays-Bas apurent leur passé esclavagiste et colonial</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQsF3Om1wOlADiA992Vi1OJOnuWYUlXDwCkNC4XwJWUZto1imsutC1AuHN6o28hr97rYNpB_ase" alt="Les Pays-Bas apurent leur passé esclavagiste et colonial" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le Palais royal, de son côté, va examiner ses collections pour identifier les objets volés à l&#39;époque coloniale. Les deux dernières villes qui tenaient au&nbsp;...</p></div>
            </div>
        </a><a href='https://www.diplomatie.gouv.fr/fr/politique-etrangere-de-la-france/securite-desarmement-et-non-proliferation/actualites-et-evenements-lies-a-la-securite-au-desarmement-et-a-la-non/2022/article/declaration-conjointe-de-la-france-et-des-pays-bas-a-l-occasion-du-20e'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Déclaration conjointe de la France et des Pays-Bas à l&#39;occasion du ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Déclaration conjointe de la France et des Pays-Bas à l&#39;occasion du ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>L&#39;année 2022 marque le 20e anniversaire du Code de conduite de la Haye contre la prolifération des missiles balistiques (HCoC). Les deux décennies (…)</p></div>
            </div>
        </a><a href='https://www.tourmag.com/Pays-Bas-autour-de-Vermeer-des-expositions-prestigieuses-pour-booster-le-tourisme_a116365.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pays-Bas : autour de Vermeer, des expositions prestigieuses pour ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRBb_TXfIzeR949dcrZVXzGqeX7V8ZPqNaWQ7ivK3hM-UsNlhYS5ar84igkThpg_gEoAWaEoWhj" alt="Pays-Bas : autour de Vermeer, des expositions prestigieuses pour ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>En 2023, deux expositions consacrées au peintre Vermeer devraient attirer un nombre record de visiteurs aux Pays-Bas. L&#39;exposition &quot;Vermeer&quot; du Rijksmuseum&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}