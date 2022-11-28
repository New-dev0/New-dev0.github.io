import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Dune</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Dune"/>
        <meta name="description" content="Trending News about Dune" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Dune</h1>
            <Image width={800} height={500} src="https://www.yankodesign.com/images/design_news/2022/11/this-gorgeous-dune-inspired-table-creates-an-atmosphere-of-serenity-in-your-room/dune-table-1.jpg" alt="Dune"/>
            <h3>Recent News</h3>
            <a href='https://www.yankodesign.com/2022/11/27/this-gorgeous-dune-inspired-table-creates-an-atmosphere-of-serenity-in-your-room/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>This gorgeous dune-inspired table creates an atmosphere of ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSGR1FB410WQF_Utd3tI07C9ISdDpAp9NJzWWf8p4o-hGA4aD75vmWtZ-NSudf3CaFQaxJO0mG9" alt="This gorgeous dune-inspired table creates an atmosphere of ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The soft forms of shifting sand dunes form a sort of juxtaposition to the harsh desert winds that create them, painting an almost romantic picture that invokes&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}