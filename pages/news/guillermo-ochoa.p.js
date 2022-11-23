import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Guillermo Ochoa</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Guillermo Ochoa"/>
        <meta name="description" content="Trending News about Guillermo Ochoa" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Guillermo Ochoa</h1>
            <Image width={800} height={500} src="https://www.abola.pt//img/fotos/ABOLA2015/NNH/2022/RaulJimenezMexico.jpg" alt="Guillermo Ochoa"/>
            <h3>Recent News</h3>
            <a href='https://www.abola.pt/nnh/2022-11-22/mexico-guillermo-ochoa-sai-em-defesa-de-raul-jimenez/965661'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Guillermo Ochoa sai em defesa de Raúl Jiménez</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRgoO7G38_VAyjzbhGUluFHYChtWfrBaqAY6rIhMrurYpun9pl9PvM7Rc22lFvlfD3JvKN_lCZ_" alt="Guillermo Ochoa sai em defesa de Raúl Jiménez" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O guarda-redes Guillermo Ochoa saiu em defesa do avançado Raúl Jiménez, alvo de muitas críticas por ter ido ao Catar tendo apenas quatro jogos pelo&nbsp;...</p></div>
            </div>
        </a><a href='https://www.record.pt/internacional/competicoes-de-selecoes/mundial/mundial-2022/detalhe/de-4-em-4-anos-e-ele-o-rei-do-mexico-guillermo-ochoa-ja-comecou-a-brilhar'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>De 4 em 4 anos é ele o &#39;Rei do México&#39;: Guillermo Ochoa já ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQo4zXB0DSwgMdvix4lkzT8Uy04blaa2uCkWbCk3adeqdEU2vALBOojbjkAThLrrpydWl_kUS4g" alt="De 4 em 4 anos é ele o &#39;Rei do México&#39;: Guillermo Ochoa já ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Veterano tem hábito de mostrar serviço no Mundial e defendeu penálti de Lewandowski.</p></div>
            </div>
        </a>
        </Template></>;
}