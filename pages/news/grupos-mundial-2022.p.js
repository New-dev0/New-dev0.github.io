import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Grupos mundial 2022</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Grupos mundial 2022"/>
        <meta name="description" content="Trending News about Grupos mundial 2022" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Grupos mundial 2022</h1>
            <Image width={800} height={500} src="https://static.globalnoticias.pt/oj/image.jpg?brand=OJ&type=generate&guid=98a9422f-2a0d-44d7-ab05-719df59b65f4&w=800&h=420&watermark=true&t=20221120180400" alt="Grupos mundial 2022"/>
            <h3>Recent News</h3>
            <a href='https://www.ojogo.pt/internacional/mundial-2022/noticias/protestos-agitam-paris-no-mesmo-dia-em-que-arranca-o-mundial-do-catar-15370882.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Protestos agitam Paris no mesmo dia em que arranca o Mundial do ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSXBxl0wS9bRavrGipzxWuITz3crN8kdBM_gP831a9vulnmh-MyyXwRfKySfRCZRZPUYdgRt_lV" alt="Protestos agitam Paris no mesmo dia em que arranca o Mundial do ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Uma série de protestos contra o Campeonato do Mundo de 2022 agitaram este domingo Paris, onde os manifestantes criticaram a FIFA por ter escolhido o Catar para&nbsp;...</p></div>
            </div>
        </a><a href='https://www.record.pt/internacional/competicoes-de-selecoes/mundial/mundial-2022/franca/detalhe/varios-protestos-em-paris-contra-o-mundial2022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Vários protestos em Paris contra o Mundial&#39;2022</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR77dfpqTS2_r1lJcqLMxQb4CS-k0JIxLJfML4mjM3YN84V8cjetP8AdimKqy0eLp1Ij1llSTxq" alt="Vários protestos em Paris contra o Mundial&#39;2022" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Uma série de protestos contra o Campeonato do Mundo de 2022 de futebol agitaram este domingo Paris, onde os manifestantes criticaram a FIFA por ter&nbsp;...</p></div>
            </div>
        </a><a href='https://www.torcedores.com/noticias/2022/11/copa-do-mundo-ativistas-protestam-contra-o-mundial-fifa-mata'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Copa do Mundo: ativistas protestam contra o Mundial: “Fifa mata!”</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT5g_Cti-y8wxAoC3UkwUrWKVMelKCaFyk66MvDVUs8Mya6tAF4zFzYCx0gYbX-Is1Ru6AuFjik" alt="Copa do Mundo: ativistas protestam contra o Mundial: “Fifa mata!”" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Neste domingo (20), um grupo de ativistas protestou contra a realização da Copa do Mundo 2022, que acontece no Catar. A manifestação aconteceu na Pont des&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}