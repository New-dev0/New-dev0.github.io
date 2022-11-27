import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Emiliano Martínez</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Emiliano Martínez"/>
        <meta name="description" content="Trending News about Emiliano Martínez" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Emiliano Martínez</h1>
            <Image width={800} height={500} src="https://veja.abril.com.br/wp-content/uploads/2022/11/GettyImages-1442807029-1.jpg?quality=70&strip=info" alt="Emiliano Martínez"/>
            <h3>Recent News</h3>
            <a href='https://veja.abril.com.br/esporte/dibu-martinez-goleiro-argentino-venceu-fama-de-desajeitado-e-ostracismo/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dibu Martínez: goleiro argentino venceu fama de desajeitado e ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSeL-ZVo1XVtMNs11i19ZsB3_C4inrrJEWKj67POPFJ15wHsyU3k9aZZWNjht7w4JqDqfoDr32L" alt="Dibu Martínez: goleiro argentino venceu fama de desajeitado e ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jogador esperou por mais de uma década por protagonismo, superou desconfianças e até lesão crônica para estar no Catar; ainda dá para duvidar dele?</p></div>
            </div>
        </a>
        </Template></>;
}