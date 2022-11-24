import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Dušan vlahović</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Dušan vlahović"/>
        <meta name="description" content="Trending News about Dušan vlahović" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Dušan vlahović</h1>
            <Image width={800} height={500} src="https://s2.glbimg.com/3ewwQF5pPpvs9fMO2qzrt1fwGq4=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/l/f/DTAMweQHC615vk7DKlhQ/vlahovic-fiorentina.jpg" alt="Dušan vlahović"/>
            <h3>Recent News</h3>
            <a href='https://ge.globo.com/rs/copa-do-mundo/noticia/2022/11/23/47-minutos-juntos-como-as-historias-de-vlahovic-e-pedro-se-cruzaram-na-europa.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>47 minutos juntos: como as histórias de Vlahovic e Pedro se ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQnnkU7Hc6fZb-sZU6QyFKGBS3MXwUT_InXJkOZSyizudrx-8nph6Ns61ACMpRG0HMtv3klTKIy" alt="47 minutos juntos: como as histórias de Vlahovic e Pedro se ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Eles jogaram juntos na Fiorentina antes de Pedro rumar para o Flamengo e de Vlahovic encontrar a consagração na Juventus. Era o início da temporada 2019/2020. O&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}