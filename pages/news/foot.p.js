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
            <Image width={800} height={500} src="https://images.ladepeche.fr/api/v1/images/view/637a800a4e5a2f2bf02a6888/large/image.jpg?v=1" alt="Foot"/>
            <h3>Recent News</h3>
            <a href='https://www.ladepeche.fr/2022/11/20/rodez-aveyron-foot-didier-santini-nouvel-entraineur-10815975.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rodez Aveyron Foot : Didier Santini nouvel entraîneur</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQRFpN9wZUO3fszglruEd3scCPHwDIOnokzsG2xc30QxQKN-75OIx25vp2M3Uu3tjsZ3JXRbWJG" alt="Rodez Aveyron Foot : Didier Santini nouvel entraîneur" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Après s&#39;être séparé de son entraîneur emblématique Laurent Peyrelade, le RAF va faire signer Didier Santini comme nouveau coach de son équipe fanion.</p></div>
            </div>
        </a>
        </Template></>;
}