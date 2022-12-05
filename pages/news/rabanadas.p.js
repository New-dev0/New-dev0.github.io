import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Rabanadas</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Rabanadas"/>
        <meta name="description" content="Trending News about Rabanadas" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Rabanadas</h1>
            <Image width={800} height={500} src="https://media-manager.noticiasaominuto.com/1280/naom_638a9601f0a7d.jpg" alt="Rabanadas"/>
            <h3>Recent News</h3>
            <a href='https://www.noticiasaominuto.com/lifestyle/2125738/xxx'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Descobrimos as rabanadas mais &#39;fit&#39; de sempre. Aqui tem a receita</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSGOuJZd7c1K3B540MEqJZiq1y36FwGaPk8RTMOFE71KQXyEkI0Ys3mAzmwMByUqNzNPagPpmVv" alt="Descobrimos as rabanadas mais &#39;fit&#39; de sempre. Aqui tem a receita" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Depois, reserve. 3- Bata os ovos e as claras numa tigela. 4- Pincele um tabuleiro de ir ao forno com óleo de coco. 5- Passe as fatias de pão pela bebida de coco&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}