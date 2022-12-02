import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Japan</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Japan"/>
        <meta name="description" content="Trending News about Japan" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Japan</h1>
            <Image width={800} height={500} src="https://f.i.uol.com.br/fotografia/2018/09/13/15368783155b9ae6eb38cf9_1536878315_3x2_rt.jpg" alt="Japan"/>
            <h3>Recent News</h3>
            <a href='https://www1.folha.uol.com.br/colunas/monicabergamo/2022/12/japan-house-sao-paulo-inaugura-exposicao-no-mexico.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Japan House São Paulo inaugura exposição no México</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTj_Po1uIFIe61VFyUJizIJxeY4P-yg1g9Soy0TD4C8xsBijtQrWWwXGUqOV_F8bsZaPz8y9nio" alt="Japan House São Paulo inaugura exposição no México" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&#39;Dô: a caminho da virtude&#39; integra parceria com a embaixada japonesa no país.</p></div>
            </div>
        </a>
        </Template></>;
}