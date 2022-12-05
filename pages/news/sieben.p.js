import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Sieben</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Sieben"/>
        <meta name="description" content="Trending News about Sieben" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Sieben</h1>
            <Image width={800} height={500} src="https://www.noen.at/image/1920x1080-c-jpg/4275619/440_0008_8535641_erl48bezirk_goldenesehrenbuch_ortsgrupp.jpg" alt="Sieben"/>
            <h3>Recent News</h3>
            <a href='https://www.noen.at/erlauftal/auszeichnung-sieben-scheibbser-bauernfamilien-im-goldenen-ehrenbuch-bezirk-scheibbs-auszeichnung-noe-bauernbund-print-345234277'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sieben Scheibbser Bauernfamilien im Goldenen Ehrenbuch</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQBzzd8hygnsoEfP4mhKrX-vUhY7-HA5V0a2HuYGwxQpmbNQ5qZDmFJcYLzehFjHi0PzUq3egID" alt="Sieben Scheibbser Bauernfamilien im Goldenen Ehrenbuch" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Das Goldene Ehrenbuch des NÖ Bauernbundes wurde 1929 vom ehemaligen Bauernbundobmann und dem NÖ Landeshauptmann Josef Reither ins Leben gerufen. Es vermerkt&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}