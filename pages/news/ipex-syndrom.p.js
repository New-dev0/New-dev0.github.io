import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>IPEX-Syndrom</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,IPEX-Syndrom"/>
        <meta name="description" content="Trending News about IPEX-Syndrom" /></Head><Template>
            <h1 style={{fontSize: "30"}}>IPEX-Syndrom</h1>
            <Image width={800} height={500} src="https://ais-akamai.rtl.de/masters/1959091/1686x0/baby-rio-ist-tot.jpg" alt="IPEX-Syndrom"/>
            <h3>Recent News</h3>
            <a href='https://www.rtl.de/cms/autoimmunkrankheit-fitnessoskar-in-trauer-baby-rio-stirbt-mit-nur-viereinhalb-monaten-5020359.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Autoimmunkrankheit: FitnessOskar in Trauer - Baby Rio stirbt mit nur ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQcHcXrExlSfndjEA8wM3fSGwalSEsI3pXu4lMi79WM-HFyKd8FFLigU4ZFgqRUt2-ZepZ2SdC-" alt="Autoimmunkrankheit: FitnessOskar in Trauer - Baby Rio stirbt mit nur ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Oskar Ogorkiewicz, der im Netz unter dem Namen FitnessOskar bekannt ist, und seine Partnerin Mandy müssen einen schweren Schicksalsschlag verkraften.</p></div>
            </div>
        </a>
        </Template></>;
}