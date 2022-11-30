import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Bad Moms</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Bad Moms"/>
        <meta name="description" content="Trending News about Bad Moms" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Bad Moms</h1>
            <Image width={800} height={500} src="https://fr.web.img2.acsta.net/img/72/6a/726a2b9161b2ce57bb27bbb4ad8ac6ec.jpg" alt="Bad Moms"/>
            <h3>Recent News</h3>
            <a href='https://www.allocine.fr/article/fichearticle_gen_carticle=1000003800.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bad Moms 3 : Mila Kunis et Kristen Bell dans une nouvelle comédie ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcReDIvk00JHH0acOJEABIn3tRItM-DWLtgsJjBWrvDs005wE1UULk89cKCQ4olZ2bMGqDJpjRSF" alt="Bad Moms 3 : Mila Kunis et Kristen Bell dans une nouvelle comédie ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&quot;Bad Moms&quot; est diffusé ce soir sur TFX. Mila Kunis, Kristen Bell et Kathryn Hahn reprendront-elles leur rôle pour un troisième opus ?</p></div>
            </div>
        </a><a href='https://www.cineserie.com/news/cinema/bad-moms-ce-ras-le-bol-qui-a-convaincu-mila-kunis-de-faire-le-film-5510462/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bad Moms : ce ras-le-bol qui a convaincu Mila Kunis de faire le film</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTMea4jbDCg0AgUH7wc8GwBbz6qg1SRbPkgbmo9R9dii4QDA1dlpsQPlolEVhYbhSzEaIgxnm8Z" alt="Bad Moms : ce ras-le-bol qui a convaincu Mila Kunis de faire le film" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Si Mila Kunis a accepté de jouer dans &quot;Bad Moms&quot;, c&#39;est parce qu&#39;elle beaucoup identifiée à son personnage et qu&#39;elle a connu son ras-le-bol.</p></div>
            </div>
        </a>
        </Template></>;
}