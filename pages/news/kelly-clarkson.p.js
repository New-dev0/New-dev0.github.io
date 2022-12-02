import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Kelly Clarkson</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Kelly Clarkson"/>
        <meta name="description" content="Trending News about Kelly Clarkson" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Kelly Clarkson</h1>
            <Image width={800} height={500} src="https://www.nbc.com/sites/nbcblog/files/2022/12/kelly-clarkson-christmas-special2.jpg" alt="Kelly Clarkson"/>
            <h3>Recent News</h3>
            <a href='https://www.nbc.com/nbc-insider/watch-kelly-clarkson-sing-her-hit-underneath-the-tree'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Watch Kelly Clarkson Sing Her Irresistible Holiday Hit, &#39;Underneath ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRbazqriOyN8AFV4y3SQhjBJNFf7xgnaF_c6WFnHThHlX_SCPG6-j6EHRYNbow2Sm6vjq93uRCB" alt="Watch Kelly Clarkson Sing Her Irresistible Holiday Hit, &#39;Underneath ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kelly Clarkson sings her original holiday hit, &quot;Underneath the Tree.&quot; Watch the performance.</p></div>
            </div>
        </a>
        </Template></>;
}