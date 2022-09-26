import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Daughter</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Daughter"/>
        <meta name="description" content="Trending News about Daughter" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Daughter</h1>
            <Image width={800} height={500} src="" alt="Daughter"/>
            <h3>Recent News</h3>
            <a href='https://www.hindustantimes.com/cities/noida-news/probe-initiated-after-woman-claims-her-daughter-was-molested-by-cop-101664132496720.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Probe initiated after woman claims her daughter was molested by &#39;cop&#39;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTftektrY9nNWk2VTKWH_3HnYh2zKJG3-bbCu3YAenD91_ESSrK0X5I-rExWgAJFyXtf1qxofyg" alt="Probe initiated after woman claims her daughter was molested by &#39;cop&#39;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>According to Usnani, the woman alleged that on September 16, police personnel took his daughter with him on a motorcycle while she was not at home.</p></div>
            </div>
        </a>
        </Template></>;
}