import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Monica Bellucci</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Monica Bellucci"/>
        <meta name="description" content="Trending News about Monica Bellucci" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Monica Bellucci</h1>
            <Image width={800} height={500} src="https://www.grazia.fr/wp-content/uploads/grazia/2022/11/monica-bellucci-dans-cleopatre-1024x576.png" alt="Monica Bellucci"/>
            <h3>Recent News</h3>
            <a href='https://www.grazia.fr/people/cest-lune-de-mes-plus-belles-experiences-de-cinema-monica-bellucci-revient-avec-emotion-sur-son-role-de-cleopatre-695518.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>« C&#39;est l&#39;une de mes plus belles expériences de cinéma » : Monica ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSjwcGq4nvDEM8MSRs6c50vIw59u5q-f-MXb5_Xi4J1mky7A8ijfeYSOoeqkX1Y5IKfwer85kgc" alt="« C&#39;est l&#39;une de mes plus belles expériences de cinéma » : Monica ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>1/3 Monica Bellucci dans le film Astérix et Obélix : Mission Cléopâtre. L&#39;actrice et mannequin italienne s&#39;est confiée lors d&#39;une interview accordée à Konbini&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}