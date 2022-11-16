import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Mamelodi Sundowns ladies</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Mamelodi Sundowns ladies"/>
        <meta name="description" content="Trending News about Mamelodi Sundowns ladies" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Mamelodi Sundowns ladies</h1>
            <Image width={800} height={500} src="https://supersport-cms-prod.azureedge.net/media/de5ef0tu/mamelodi-sundowns-ladies-celebrating-2022-09-g-1050.jpg?width=500" alt="Mamelodi Sundowns ladies"/>
            <h3>Recent News</h3>
            <a href='https://supersport.com/football/general/news/05afdfa2-4664-4220-971d-c61f88d41e6a/mamelodi-sundowns-launch-ladies-team-film'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mamelodi Sundowns launch ladies team film | SuperSport</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQn7ivF7ROCL-cEgdiykjxU5BcA2OzbaIxHij5lmUphUpoVcr_jZyh-brYrNbLAJRGaZsjmRpWE" alt="Mamelodi Sundowns launch ladies team film | SuperSport" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mamelodi Sundowns has announced the premier of their inspirational film, Banyana Ba Style: The First Queens of African Football. The story is dedicated to&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}