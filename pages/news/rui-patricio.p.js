import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Rui patricio</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Rui patricio"/>
        <meta name="description" content="Trending News about Rui patricio" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Rui patricio</h1>
            <Image width={800} height={500} src="https://static.globalnoticias.pt/oj/image.jpg?brand=OJ&type=generate&guid=92619903-2db7-454f-b365-8e257b08e4ad&w=800&h=420&watermark=true&t=20221117225100" alt="Rui patricio"/>
            <h3>Recent News</h3>
            <a href='https://www.ojogo.pt/internacional/selecao/noticias/fernando-santos-rui-patricio-nunca-tive-falta-de-confianca-nem-ele-em-mim-15363356.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fernando Santos: &quot;Rui Patrício? Nunca tive falta de confiança, nem ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRm7aO38A2Ql9Sx5K3SnYpU1pFKhdDAx_1iYwyH0F-UT5nfNRsZ8fQlBmvPz0m-ldrUeOtQu8Y-" alt="Fernando Santos: &quot;Rui Patrício? Nunca tive falta de confiança, nem ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Declarações de Fernando Santos, selecionador nacional, em conferência de imprensa após a goleada de Portugal na receção à Nigéria, por 4-0, no último jogo&nbsp;...</p></div>
            </div>
        </a><a href='https://www.noticiasaominuto.com/fama/2115479/rui-patricio-diz-que-portugal-esta-preparado-para-mundial-juntos'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rui Patrício diz que Portugal está &quot;preparado&quot; para Mundial. &quot;Juntos&quot;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcROmKcHbc5eVssc-v8TC3g6FMClmZZRfc8SSPFXst_QTxhwSnJLg02BJ6kw4qNbPREU8KwwOb6Q" alt="Rui Patrício diz que Portugal está &quot;preparado&quot; para Mundial. &quot;Juntos&quot;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O guarda-redes da seleção nacional publicou uma mensagem no Instagram após o jogo contra a Nigéria.</p></div>
            </div>
        </a>
        </Template></>;
}