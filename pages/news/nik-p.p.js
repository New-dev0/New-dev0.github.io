import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Nik P</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Nik P"/>
        <meta name="description" content="Trending News about Nik P" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Nik P</h1>
            <Image width={800} height={500} src="https://media04.meinbezirk.at/article/2022/11/24/3/31836493_XXL.jpg" alt="Nik P"/>
            <h3>Recent News</h3>
            <a href='https://www.meinbezirk.at/weiz/c-leute/nik-p-startete-seine-weihnachtstour-im-kunsthaus-weiz_a5723365'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>X-Mas Tour: Nik P. startete seine Weihnachtstour im Kunsthaus ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSetbpQrp4GnHHfLRS3rsTFU4szK6nJ63BcJ1EtYFSRS2PDRekT09g6q3jFZdnTTp4Sg6o_POXy" alt="X-Mas Tour: Nik P. startete seine Weihnachtstour im Kunsthaus ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Er hat den Jahrhunderthit &quot;Einen Stern, der deinen Namen trägt&quot; geschrieben, Nik P. Nun kam er aber mit reduzierten Klängen in die Steiermark.</p></div>
            </div>
        </a>
        </Template></>;
}