import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Madagascar</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Madagascar"/>
        <meta name="description" content="Trending News about Madagascar" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Madagascar</h1>
            <Image width={800} height={500} src="https://s.rfi.fr/media/display/19942646-6e1a-11ed-acbc-005056bfb2b6/w:1280/p:16x9/IMG_5263.JPG" alt="Madagascar"/>
            <h3>Recent News</h3>
            <a href='https://www.rfi.fr/fr/afrique/20221127-madagascar-les-photojournalistes-s-exposent-pour-mieux-faire-conna%C3%AEtre-leur-m%C3%A9tier'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Madagascar: les photojournalistes s&#39;exposent pour mieux faire ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR_uwhArKG1XWL1jeoaOdkz-JhXJgizZx1cIiI3kOCmGXbssJj0qZFN44jANQTGTQxtmcoVG81Q" alt="Madagascar: les photojournalistes s&#39;exposent pour mieux faire ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>À Madagascar, les photojournalistes exposent leurs clichés dans la capitale Antananarivo. Jusqu&#39;au 15 décembre, le travail des photographes rassemblés au&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}