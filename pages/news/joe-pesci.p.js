import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Joe Pesci</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Joe Pesci"/>
        <meta name="description" content="Trending News about Joe Pesci" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Joe Pesci</h1>
            <Image width={800} height={500} src="https://www.tvmovie.de/assets/2022/12/01/92134-kevin-allein-in-new-york.jpg" alt="Joe Pesci"/>
            <h3>Recent News</h3>
            <a href='https://www.tvmovie.de/news/kevin-allein-zu-haus-so-schlimm-nahm-dieser-stunt-joe-pesci-mit-129256'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>„Kevin Allein zu Haus“: So schlimm nahm dieser Stunt Joe Pesci mit</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR8Z3PTYmVB3zYvX-fUx5g84-p4Mcnp5ax6--nHF0SMOk8fNexRCUpU1i3O3vRmmNMXXyAXdxHW" alt="„Kevin Allein zu Haus“: So schlimm nahm dieser Stunt Joe Pesci mit" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kevin Allein zu Haus“ und die Fortsetzung „Kevin Allein in New York“ sind Weihnachtsklassiker. Doch bei Letzterem hatte Joe Pesci.</p></div>
            </div>
        </a>
        </Template></>;
}