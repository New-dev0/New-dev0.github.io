import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Avva</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Avva"/>
        <meta name="description" content="Trending News about Avva" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Avva</h1>
            <Image width={800} height={500} src="https://image.puls24.at/images/facebook/3231779/i-colhgpsbgtkh.jpg" alt="Avva"/>
            <h3>Recent News</h3>
            <a href='https://www.puls24.at/news/politik/porno-ballerina-avva-onlyfans-models-werden-oft-ausgenutzt/282095'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Porno-Ballerina Avva: &quot;OnlyFans-Models werden oft ausgenutzt&quot;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTfd1XhRUDTqtT22RYyUTqdMUBdqf8cvXi33OuDvyWNPH6fv0l4Db3j-fxcqNUi_MdIaGYmn4bo" alt="Porno-Ballerina Avva: &quot;OnlyFans-Models werden oft ausgenutzt&quot;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>OnlyFans-Model und Porno-Ballerina Avva erzählt bei PULS 4 Exakt, wie das moderne Pornobusiness läuft. Die 19-Jährige ist ihre eigene Chefin,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}