import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Rte Guide</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Rte Guide"/>
        <meta name="description" content="Trending News about Rte Guide" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Rte Guide</h1>
            <Image width={800} height={500} src="https://i2-prod.irishmirror.ie/showbiz/irish-showbiz/article22301650.ece/ALTERNATES/s1200/1_I200703_154144_818056oTextTRMRMMGLPICT000019741314o.jpg" alt="Rte Guide"/>
            <h3>Recent News</h3>
            <a href='https://www.irishmirror.ie/showbiz/irish-showbiz/rte-star-sinead-kennedy-reveals-28584611'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>RTE star Sinead Kennedy reveals hopes for husband&#39;s return from ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQUEHbnZ0NEy5dF4iI3XTmJBim3Swlw8mgYRAA8QhD3riMUBsQzRp1lEN9xm4p-pu-PN5X_orCu" alt="RTE star Sinead Kennedy reveals hopes for husband&#39;s return from ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Exclusive: The Today Show host is married to 39-year-old naval officer Conor Kirwan.</p></div>
            </div>
        </a>
        </Template></>;
}