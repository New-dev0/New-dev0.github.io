import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>FC Barcelona</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,FC Barcelona"/>
        <meta name="description" content="Trending News about FC Barcelona" /></Head><Template>
            <h1 style={{fontSize: "30"}}>FC Barcelona</h1>
            <Image width={800} height={500} src="https://www.fcbarcelona.com/fcbarcelona/photo/2022/10/27/4fd46b45-a0db-4c54-938c-f007f2417499/_GP23957.jpg" alt="FC Barcelona"/>
            <h3>Recent News</h3>
            <a href='https://www.fcbarcelona.com/en/football/first-team/news/2877083/thursday-recovery-session'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Thursday recovery session</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT_55X1d-PmBOM-nbQe1H6LHNTrpr9IU4I8rzTtKpzId38oxK_9fc_DNnpg8Vz4xos4Tz9NnGKP" alt="Thursday recovery session" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Following Champions League defeat, the squad get back to work to concentrate on their next Liga fixture.</p></div>
            </div>
        </a><a href='https://www.fcbarcelona.com/en/club/news/2875659/fc-barcelona-press-release'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FC Barcelona press release</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS6keldQQDT24N_h7TGW0CTchBXPl4yPGxojzEK5TuIUzn0vh__4IlWd2gsJZzKlKfml_JzpQUw" alt="FC Barcelona press release" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>FC Barcelona, satisfied after the Culture and Sport Commission rejected the amendment of article 89 of the Sports Law Project, promoted by LaLiga and&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}