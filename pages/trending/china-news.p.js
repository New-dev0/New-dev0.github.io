import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>China news</title></Head><Template>
            <h1 style={{fontSize: "30"}}>China news</h1>
            <Image width={800} height={500} src="https://tamil.goodreturns.in/img/2022/09/xijinping1-1664010654.jpg" alt="China news"/>
            <h3>Recent News</h3>
            <a href='https://tamil.goodreturns.in/news/how-china-will-affect-if-xi-jinping-arrested-and-army-took-control-after-military-coup-031428.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>சீன அதிபர் ஜி ஜீன்பிங் கைது, சீனா-வில் நடப்பது என்ன ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRukTNT2jhg35XoLvPM0TVSvzMzNgOKU1BlzyClCOjHx1yozQqSjiy6RtlQ5c-mAmn1knTyRg3P" alt="சீன அதிபர் ஜி ஜீன்பிங் கைது, சீனா-வில் நடப்பது என்ன ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>உலகின் மிகப்பெரிய உற்பத்தி நாடாக விளங்கும் சீன நாட்டின் அதிபர் ஜி ஜின்பிங் கைது&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}