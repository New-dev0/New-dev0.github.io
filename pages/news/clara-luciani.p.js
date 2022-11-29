import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Clara Luciani</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Clara Luciani"/>
        <meta name="description" content="Trending News about Clara Luciani" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Clara Luciani</h1>
            <Image width={800} height={500} src="https://media.ouest-france.fr/v1/pictures/MjAyMjExNDNkODRhMjg4MWZiZDRiMjY5NTc4NGE3MDBhZmQ0Njc?width=1260&height=708&focuspoint=50%2C25&cropresize=1&client_id=bpeditorial&sign=78f9c9e0b482c9c46919c294927d90ee39a26309e036acbc0005680c9892d95b" alt="Clara Luciani"/>
            <h3>Recent News</h3>
            <a href='https://www.ouest-france.fr/bretagne/brest-29200/gagnez-vos-places-pour-le-spectacle-de-clara-luciani-a-brest-bdb7ea50-6bea-11ed-a71f-f4b3de284f96'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gagnez vos places pour le spectacle de Clara Luciani à Brest !</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRsvlsqbg87Ams29nEcUw5s1lLO-C7X97iVh1JWWjHiMm-jsgQvia16UJHP7ClGNU72uOcpKXIT" alt="Gagnez vos places pour le spectacle de Clara Luciani à Brest !" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Deux places pour le concert de Clara Luciani, le jeudi 26 janvier à l&#39;Arena de Brest, vous seront offertes en partenariat avec Diogène productions.</p></div>
            </div>
        </a>
        </Template></>;
}