import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Christine and the Queens</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Christine and the Queens"/>
        <meta name="description" content="Trending News about Christine and the Queens" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Christine and the Queens</h1>
            <Image width={800} height={500} src="https://london.frenchmorning.com/wp-content/uploads/sites/10/2022/11/christine-and-the-queens-londres.jpg" alt="Christine and the Queens"/>
            <h3>Recent News</h3>
            <a href='https://london.frenchmorning.com/christine-and-the-queens-en-charge-de-la-programmation-du-meltdown-festival-2023-de-londres/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Christine and the Queens en charge de la programmation du ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQzLc7755vMNFcqP2YQ7EXt-JkBifYaVh-nAOI7JE9f7D93glqOZHnHa0qSAM40_xhXwLc_IIOZ" alt="Christine and the Queens en charge de la programmation du ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Christine and the Queens a été choisie par l&#39;équipe du Southbank Centre de Londres pour être curatrice de ce plus grand festival de musique organisé par des&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}