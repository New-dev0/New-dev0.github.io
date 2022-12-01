import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Christophe Willem</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Christophe Willem"/>
        <meta name="description" content="Trending News about Christophe Willem" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Christophe Willem</h1>
            <Image width={800} height={500} src="https://resize-public.ladmedia.fr/img/var/public/storage/images/news/sophie-marceau-reapparait-au-cote-de-christophe-willem-leur-combat-en-duo-contre-la-maladie-1752606/47197258-1-fre-FR/Sophie-Marceau-reapparait-au-cote-de-Christophe-Willem-leur-combat-en-duo-contre-la-maladie.jpg" alt="Christophe Willem"/>
            <h3>Recent News</h3>
            <a href='https://www.public.fr/News/Sophie-Marceau-reapparait-au-cote-de-Christophe-Willem-leur-combat-en-duo-contre-la-maladie-1752606'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sophie Marceau réapparaît au côté de Christophe Willem : leur ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRiCXvEVQpqgfu02LKy9jdhsVI_D_mtz9m0d0LlKqkXcYLYLGgPbWj4ZRNBqcsL2LAnmIyQGR7g" alt="Sophie Marceau réapparaît au côté de Christophe Willem : leur ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ce mardi 29 novembre, Christophe Willem partageait une photo de lui en compagnie de Sophie Marceau et la présidente de l&#39;association Arc-en-ciel.</p></div>
            </div>
        </a><a href='https://www.nextplz.fr/people/293623-sophie-marceau-radieuse-au-cote-de-christophe-willem-les-internautes-sont-sous-le-charme'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sophie Marceau radieuse au côté de Christophe Willem, les ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQNkYEUwm_1uwptsneFj0UabBmVngB4qQPV3EfYDZLqGhzccLn_jtxM9PiSG53zNeo72oPCyMwL" alt="Sophie Marceau radieuse au côté de Christophe Willem, les ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Du haut de ses 56 ans, Sophie Marceau est une actrice engagée dans les causes humanitaires comme on peut le voir dans cette photo.</p></div>
            </div>
        </a>
        </Template></>;
}