import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Usman Khawaja</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Usman Khawaja"/>
        <meta name="description" content="Trending News about Usman Khawaja" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Usman Khawaja</h1>
            <Image width={800} height={500} src="https://content.api.news/v3/images/bin/2e8975c75caf18505aecceb68a10058f" alt="Usman Khawaja"/>
            <h3>Recent News</h3>
            <a href='https://www.foxsports.com.au/cricket/australia/cricket-2022-usman-khawaja-micd-up-batting-video-highlights-australia-v-west-indies-second-test-adelaide-oval/news-story/1565dce047504ead09298ee86ba65636'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Oh mama!&#39; Priceless Khawaja Test moments caught on hot mic</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQBFXp2E6xImFRcRiaT42G0EZwZiy-F79nP2_1if0Ga9JxaOMT1H3Ha41o2i_yYBAr5LQjAoMH-" alt="&#39;Oh mama!&#39; Priceless Khawaja Test moments caught on hot mic" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&#39;Oh mama!&#39; Priceless Khawaja Test moments caught on hot mic.</p></div>
            </div>
        </a><a href='https://www.codesports.com.au/cricket/usman-khawaja-micd-up-against-the-west-indies/video/d588d043190a67793355d39249fde953'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Usman Khawaja mic&#39;d up against the West Indies</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTewYSyu3yhipxdNJpWKNOmTUvciDIMuX5k0gseTAhuvbYm0sL7uiEu5UQ7fgQQg24vPrQ6ICgY" alt="Usman Khawaja mic&#39;d up against the West Indies" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cricket: Listen in as Australian opener Usman Khawaja is mic&#39;d up against the West Indies in Adelaide.</p></div>
            </div>
        </a>
        </Template></>;
}