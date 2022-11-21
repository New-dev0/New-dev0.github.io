import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Louis Star Academy</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Louis Star Academy"/>
        <meta name="description" content="Trending News about Louis Star Academy" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Louis Star Academy</h1>
            <Image width={800} height={500} src="https://images.ladepeche.fr/api/v1/images/view/637a1cc382438e3d3659295a/large/image.jpg?v=1" alt="Louis Star Academy"/>
            <h3>Recent News</h3>
            <a href='https://www.ladepeche.fr/2022/11/20/star-academy-patrick-bruel-impressionne-par-le-charisme-et-le-professionnalisme-du-lot-et-garonnais-louis-10815435.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Star Academy : Patrick Bruel impressionné par &quot;le charisme et le ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTO9Mx_zQHYRMaRoCKz0pRQj38qOWtoLP-Piu3l5JBtMvTpyXYB4calCXQZ7e0B_TOACgsmxpjc" alt="Star Academy : Patrick Bruel impressionné par &quot;le charisme et le ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Déjà assuré de sa place en finale samedi prochain, le Lot-et-Garonnais Louis a abordé, sans pression, ce prime où il a pu montrer, une fois,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}