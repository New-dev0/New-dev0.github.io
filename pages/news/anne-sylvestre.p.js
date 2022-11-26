import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Anne Sylvestre</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Anne Sylvestre"/>
        <meta name="description" content="Trending News about Anne Sylvestre" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Anne Sylvestre</h1>
            <Image width={800} height={500} src="https://focus.nouvelobs.com/2022/11/16/705/0/5792/2896/1200/630/60/0/84b3727_1668625632960-anne-sylvestre-arts-forains-27-05-2019-david-desreumaux-5433.jpg" alt="Anne Sylvestre"/>
            <h3>Recent News</h3>
            <a href='https://www.nouvelobs.com/musique/20221125.OBS66399/anne-sylvestre-jesse-tabish-black-eyed-peas-les-disques-a-ecouter-ou-pas-ce-week-end.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Anne Sylvestre, Jesse Tabish, Black Eyed Peas… Les disques à ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTEDI6ZZhf8Iyc0PQ7tTTmKzJSObFNldWoTZi2zuOekw2eFoBI7Zh_pUmmdjD97C4KiA1Ou65nc" alt="Anne Sylvestre, Jesse Tabish, Black Eyed Peas… Les disques à ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Au menu de la bande-son de « l&#39;Obs » : les ultimes intentions artistiques d&#39;Anne Sylvestre réunies dans un album posthume émouvant, mais aussi le premier&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}