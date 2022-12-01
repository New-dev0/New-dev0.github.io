import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Maradona</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Maradona"/>
        <meta name="description" content="Trending News about Maradona" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Maradona</h1>
            <Image width={800} height={500} src="https://i.f1g.fr/media/cms/1200x630_crop/2022/12/01/ab7a79268309766d00f1f1ee64d23c4391c1d98e6a167d31cb8291934c8288a9.jpg" alt="Maradona"/>
            <h3>Recent News</h3>
            <a href='https://www.lefigaro.fr/sports/football/coupe-du-monde/diego-serait-super-heureux-pour-moi-messi-rend-hommage-a-maradona-apres-la-qualification-de-l-argentine-20221201'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Diego serait super heureux pour moi»: Messi rend hommage à ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRasELRAUrT20iCMG7-QPl5Jixob3m3sA6VOaKXgvah8gJ-2qekZ9go020HKJeMpLleUa-pdHrK" alt="«Diego serait super heureux pour moi»: Messi rend hommage à ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>La légende argentine, qui a «dépassé» le maitre en nombre d&#39;apparitions en Coupe du monde, a tenu à lui rendre hommage.</p></div>
            </div>
        </a>
        </Template></>;
}