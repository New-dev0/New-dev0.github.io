import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Maladie de charcot</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Maladie de charcot"/>
        <meta name="description" content="Trending News about Maladie de charcot" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Maladie de charcot</h1>
            <Image width={800} height={500} src="https://s.yimg.com/ny/api/res/1.2/B81G7VVfyJgeyEwzX61bGw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD03NjI-/https://s.yimg.com/os/creatr-uploaded-images/2022-11/15b29c70-6bd0-11ed-affb-63d699856664" alt="Maladie de charcot"/>
            <h3>Recent News</h3>
            <a href='https://fr.news.yahoo.com/olivier-goy-maladie-charcot-mort-pronostic-symptomes-110253026.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Olivier Goy, atteint de la maladie de Charcot : &quot;On te dit : &quot;Voilà, il n&#39;y ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQVRLwcZ8rBOqbcaEaS9lLGbet9fXJUfb-QGCFVMuD0Luc546Qzmbtn0RWwPCLUbdGULzRhT4F8" alt="Olivier Goy, atteint de la maladie de Charcot : &quot;On te dit : &quot;Voilà, il n&#39;y ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Diagnostiqué d&#39;une sclérose latérale amyotrophique (SLA), aussi connue sous le nom de maladie de Charcot, Olivier Goy profite du temps qu&#39;il lui reste pour&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}