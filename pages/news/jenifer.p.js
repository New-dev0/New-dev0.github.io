import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Jenifer</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Jenifer"/>
        <meta name="description" content="Trending News about Jenifer" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Jenifer</h1>
            <Image width={800} height={500} src="https://resize-public.ladmedia.fr/img/var/public/storage/images/news/en-garde-a-vue-1750440/47156279-2-fre-FR/Jenifer-En-garde-a-vue.jpg" alt="Jenifer"/>
            <h3>Recent News</h3>
            <a href='https://www.public.fr/News/en-garde-a-vue-1750440'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jenifer : En garde à vue</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ9Y9kVZYb8n_6wkvBC705UzM4AKL-drKEcbPuScLnDDBvK7IvcinXgbS1PhyWX1L0pGXGth0vA" alt="Jenifer : En garde à vue" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>La chanteuse a été arrêtée par la police alors qu&#39;elle se trouvait chez elle en train de dormir…</p></div>
            </div>
        </a>
        </Template></>;
}