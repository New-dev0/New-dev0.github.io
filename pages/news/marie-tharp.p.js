import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Marie Tharp</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Marie Tharp"/>
        <meta name="description" content="Trending News about Marie Tharp" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Marie Tharp</h1>
            <Image width={800} height={500} src="https://images.hindustantimes.com/img/2022/11/21/1600x900/marie_tharp_1668991006523_1668991025426_1668991025426.JPG" alt="Marie Tharp"/>
            <h3>Recent News</h3>
            <a href='https://www.hindustantimes.com/world-news/google-doodle-celebrates-life-of-american-geologist-marie-tharp-101668989118144.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Google Doodle celebrates life of American geologist Marie Tharp</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT484KmzQXbMrXS-YN-Tx47eKMnXjB2hh1dxqRdP78vQBpIRxRhnIR2viHXD34_RT7HpWiij50A" alt="Google Doodle celebrates life of American geologist Marie Tharp" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>On November 21 1998, the Library of Congress named her one of the greatest cartographers of the 20th century. | World News.</p></div>
            </div>
        </a><a href='https://www.indonewyork.com/breaking/google-doodle-marie-tharp-created-the-first-map-of-the-sea-floor-her-h56799.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Google Doodle: Marie Tharp created the first map of the sea floor ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTFoVPAQEUn7e9btTzjYEhJIQcWVuQ9ZGTUM_UfC8AMxLwYEt02JFe4y3UKGszjMtJFt0zntMRM" alt="Google Doodle: Marie Tharp created the first map of the sea floor ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Her early seabed discoveries were dismissed as &quot;girl talk&quot;. Girl talk, not to be taken seriously. Discrimination in its purest form. The geologist and&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}