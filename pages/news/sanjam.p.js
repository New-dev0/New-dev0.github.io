import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Sanjam</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Sanjam"/>
        <meta name="description" content="Trending News about Sanjam" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Sanjam</h1>
            <Image width={800} height={500} src="https://cdn.sabado.pt/images/2022-11/img_1200x676$2022_11_18_19_27_02_683718_im_638044073945287140.png" alt="Sanjam"/>
            <h3>Recent News</h3>
            <a href='https://www.sabado.pt/portugal/detalhe/investigacao-sabado-imperio-sanjam-em-guerra'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Investigação SÁBADO. Império Sanjam em guerra</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ1Q09wR4fBXKkUK7MPdo60L5QGWUlmtSfIicyCNj_iJ9eKV1wQLszgb_J7S09hV9AQVv_CoABY" alt="Investigação SÁBADO. Império Sanjam em guerra" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Fundador dos cabeleireiros Sanjam acusa filha de roubo. Joana Santos, é a filha do meio de três irmãos, que segundo a família, apoderou-se ilegitimamente da&nbsp;...</p></div>
            </div>
        </a><a href='https://zap.aeiou.pt/dono-sanjam-acusa-filha-roubo-traicao-508521'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>“Cortou-me o pescoço”. Dono dos cabeleireiros Sanjam acusa “ex ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRirgu75zqyJOQQGZEz8ZSikUOE6dJNSDYx5LP8iuGAxb99WEmWSxo1yLDqRcxqZpwZdipJcLUi" alt="“Cortou-me o pescoço”. Dono dos cabeleireiros Sanjam acusa “ex ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O fundador do grupo de cabeleireiros Sanjam acusa a sua filha Joana Santos de desviar dinheiro da empresa e de um golpe palaciano.</p></div>
            </div>
        </a>
        </Template></>;
}