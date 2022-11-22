import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Foot Coupe du Monde 2022</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Foot Coupe du Monde 2022"/>
        <meta name="description" content="Trending News about Foot Coupe du Monde 2022" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Foot Coupe du Monde 2022</h1>
            <Image width={800} height={500} src="https://i.f1g.fr/media/cms/1200x630_crop/2022/11/21/e69ad39e1d84cde30dff4b4ef0b58420ad2e7e8cd236f46ce8911d23c69404fe.jpg" alt="Foot Coupe du Monde 2022"/>
            <h3>Recent News</h3>
            <a href='https://www.lefigaro.fr/vox/societe/coupe-du-monde-2022-le-football-illustre-l-abandon-des-classes-populaires-par-les-elites-globalisees-20221121'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Coupe du monde 2022 : «Le football illustre l&#39;abandon des classes ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRrDvhpP3dqZaX16LI0NC9CaARVSR-5TWciIy5vE19R4kbJFYUDIjnAFIEGJtTINNKDv0iW2DP-" alt="Coupe du monde 2022 : «Le football illustre l&#39;abandon des classes ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ENTRETIEN - Auteur du livre «Au cœur du grand déclassement, la fierté perdue de Peugeot-Sochaux», le journaliste Jean-Baptiste Forray voit dans les&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}