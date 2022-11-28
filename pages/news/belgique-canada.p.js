import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Belgique Canada</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Belgique Canada"/>
        <meta name="description" content="Trending News about Belgique Canada" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Belgique Canada</h1>
            <Image width={800} height={500} src="https://static.fflose.com/2022/11/cb09935f-icon_69985447-1024x702.jpg" alt="Belgique Canada"/>
            <h3>Recent News</h3>
            <a href='https://fflose.com/le-recap-ffl-belgique-et-canada-la-francophonie-en-folie/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Le récap FFL | Belgique et Canada, la Francophonie en folie</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRYW3ww8CFgXZAH1s5k78-RyH6fCo_676UfvemdfunVbnoK4thRygXRbHMVd97DphA45BdARQbc" alt="Le récap FFL | Belgique et Canada, la Francophonie en folie" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Quoi de plus beau que de devoir annuler un brunch avec les potes de ta moitié que tu ne peux pas saquer pour cause de Japon - Costa Rica? Pas grand-chose,</p></div>
            </div>
        </a>
        </Template></>;
}