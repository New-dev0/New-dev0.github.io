import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Elton John</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Elton John"/>
        <meta name="description" content="Trending News about Elton John" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Elton John</h1>
            <Image width={800} height={500} src="" alt="Elton John"/>
            <h3>Recent News</h3>
            <a href='https://www.voici.fr/news-people/elton-john-banni-ce-pays-ou-il-na-pas-le-droit-de-mettre-les-pieds-743451'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Elton John « banni » : ce pays où il n&#39;a pas le droit de mettre les pieds</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTtFmdpcIktsLsfLfH9i-fEo5NnB_3YM8eet7_nDgE4xkhkySHcZJnuGgTHkcSen1pf86dJvPMf" alt="Elton John « banni » : ce pays où il n&#39;a pas le droit de mettre les pieds" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Après une tournée d&#39;adieux mondiale qui l&#39;aura vu monter pas moins de 400 fois sur scène, Elton John va bientôt prendre sa retraite. Le légendaire...</p></div>
            </div>
        </a>
        </Template></>;
}