import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Aliou Cissé</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Aliou Cissé"/>
        <meta name="description" content="Trending News about Aliou Cissé" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Aliou Cissé</h1>
            <Image width={800} height={500} src="https://www.allezpaillade.com/wp-content/uploads/2022/11/Icon_BAP_291122_93_153-scaled.jpg" alt="Aliou Cissé"/>
            <h3>Recent News</h3>
            <a href='https://www.allezpaillade.com/anciens/le-senegal-daliou-cisse-file-en-8e-du-mondial-et-affrontera-langleterre/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>[Anciens] Le Sénégal d&#39;Aliou Cissé file en 8e du Mondial et ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ72k7vVGk1d6PwqOPKbjec-DMqXCoYpf3UbeaN95rkkB2mtL2_CgNh8tfvD-fR5l1-Pa7jt4HU" alt="[Anciens] Le Sénégal d&#39;Aliou Cissé file en 8e du Mondial et ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>L&#39;affaire était loin d&#39;être entendue quand, après un départ frustrant, les Sénégalais devait obligatoirement remporter ses deux autres matchs.</p></div>
            </div>
        </a>
        </Template></>;
}