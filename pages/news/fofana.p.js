import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Fofana</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Fofana"/>
        <meta name="description" content="Trending News about Fofana" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Fofana</h1>
            <Image width={800} height={500} src="https://peuple-vert.fr/wp-content/uploads/2022/09/Icon_DSC_5076.jpg" alt="Fofana"/>
            <h3>Recent News</h3>
            <a href='https://peuple-vert.fr/actualite/appel-du-pied-de-wesley-fofana-a-la-cote-divoire/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Appel du pied de Wesley Fofana à la Côte d&#39;Ivoire ?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQycCXDbdXsVZIYhyPtbZIdrwqOBJTFtAmho8hFdF2s9wf6GmNGthQlkkU1NeViZkxkjRFwWOJZ" alt="Appel du pied de Wesley Fofana à la Côte d&#39;Ivoire ?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Site d&#39;actualité sur l&#39;Association Sportive de St-Etienne (ASSE) - Football - Les infos, les exclusivités, le mercato, les résultats, le classement,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}