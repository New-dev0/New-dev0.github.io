import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Rosa Bursztein</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Rosa Bursztein"/>
        <meta name="description" content="Trending News about Rosa Bursztein" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Rosa Bursztein</h1>
            <Image width={800} height={500} src="https://photos.tf1.fr/1200/720/invitee-rosa-bursztein-nouvelle-etoile-montante-du-stand-up-a326c1-197ca0-0@1x.jpg" alt="Rosa Bursztein"/>
            <h3>Recent News</h3>
            <a href='https://www.tf1.fr/tmc/quotidien-avec-yann-barthes/videos/invitee-rosa-bursztein-nouvelle-etoile-montante-du-stand-up-58918535.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rosa Bursztein, nouvelle étoile montante du stand-up</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ34FABxpgZhkyWn3jpiicVIkUd7mVGy3VIBR9yQzEV2WiNTbcGqP_gNUYvgZ1uMgLxs1IcSUOo" alt="Rosa Bursztein, nouvelle étoile montante du stand-up" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Extrait ▶️ 5m51s - Si vous ne connaissiez pas encore Rosa Bursztein, retenez bien son nom : elle est l&#39;étoile montante du stand-up en France.</p></div>
            </div>
        </a>
        </Template></>;
}