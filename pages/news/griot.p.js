import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Griot</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Griot"/>
        <meta name="description" content="Trending News about Griot" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Griot</h1>
            <Image width={800} height={500} src="https://www.leisurebyte.com/wp-admin/admin-ajax.php?action=rank_math_overlay_thumb&id=236278&type=leisure-byte&hash=477147a9a99841e87ac0f1c90e91bce5" alt="Griot"/>
            <h3>Recent News</h3>
            <a href='https://www.leisurebyte.com/the-griot-ending-explained-netflix/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The Griot Ending Explained: What was The Fate Of The Storyteller?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSSNqwE1aQqz9yq9eABKXK5zNqAVqr9fT0fQ2g3mT9sz9iwdUEBzKCS4GWKiMnOK0sYeu-ybtd3" alt="The Griot Ending Explained: What was The Fate Of The Storyteller?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The cast of the movie includes Abimbola Adebajo, Lateef Adedimeji, Yewande Adekoya, Funso Adeolu, Kunle Afod, Opeyemi Dada, Imoh Eboh, Rita Edward, Goodness&nbsp;...</p></div>
            </div>
        </a><a href='https://leedaily.com/2022/11/19/the-griot-movie/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The Griot Movie Shows Simple Tale Regarding a Storyteller and ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTs3MvqFj8jq-4L88pCk6uR2nLOjum0_6xaIZ5Yu4uuuqFAIDTyK21mQTKAAwyHKVyiROKapyBY" alt="The Griot Movie Shows Simple Tale Regarding a Storyteller and ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The movie, set in Nigeria, lasts for a total of 110 minutes. Actors Lateef Adedimeji, Yewande Adekoya, Kunle Afod, Opeyemi Dada, Imoh Eboh, Rita Edward,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}