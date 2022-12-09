import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Nota parana</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Nota parana"/>
        <meta name="description" content="Trending News about Nota parana" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Nota parana</h1>
            <Image width={800} height={500} src="https://www.aen.pr.gov.br/sites/default/arquivos_restritos/files/styles/share/public/imagem/2022-12/curitiba2019_010.jpg?itok=mR3H8Fsw" alt="Nota parana"/>
            <h3>Recent News</h3>
            <a href='https://www.aen.pr.gov.br/Noticia/Moradores-de-Curitiba-sao-contemplados-com-os-maiores-premios-do-Nota-Parana'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Moradores de Curitiba são contemplados com os maiores prêmios ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTbLVncqiP2UpN_6hAWBBuamPcBr0aIQ07CV6IirDay7kNIcUkMi5i4g61i3P290EKT5dXTBj5M" alt="Moradores de Curitiba são contemplados com os maiores prêmios ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Curitiba foi premiada com os maiores prêmios do Programa Nota Paraná. A premiação máxima deste mês, de R$ 1 milhão, saiu para um consumidor do bairro&nbsp;...</p></div>
            </div>
        </a><a href='https://paranavai.portaldacidade.com/noticias/economia/nota-parana-veja-de-onde-sao-os-ganhadores-dos-premios-principais-2533-2343'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nota Paraná: veja de onde são os ganhadores dos prêmios principais</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQa8zBL7y_0h9wea8RM-xmnvSCl1hJ2dAuIbbChxOxxRQjMvwP6eMIVPMfIIURDJUEaZihkZ_cv" alt="Nota Paraná: veja de onde são os ganhadores dos prêmios principais" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O Nota Paraná, do Governo do Estado, realizou nesta quinta-feira (8) o sorteio de R$ 5 milhões entre consumidores cadastrados no programa. Ao todo,&nbsp;...</p></div>
            </div>
        </a><a href='https://ricmais.com.br/economia/moradores-de-curitiba-ganham-os-maiores-premios-do-nota-parana/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Moradores de Curitiba ganham os maiores prêmios do Nota Paraná</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTHqsUATPIAXwNtTZcM8kMtzw_q-d0Ae0zH1VNPS9MFPaDH9MFkmsaE-Oh9Upyo1ZrCK4AXISlb" alt="Moradores de Curitiba ganham os maiores prêmios do Nota Paraná" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Um morador do Bacacheri ficou com o prêmio máximo de R$ 1 milhão e o segundo prêmio, de R$ 200 mil, foi para uma mulher do bairro Mossunguê.</p></div>
            </div>
        </a><a href='https://gmconline.com.br/noticias/cidade/nota-parana-moradores-de-maringa-sarandi-e-marialva-ganham-r-10-mil-veja-os-bairros-dos-sortudos/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nota Paraná: Moradores de Maringá, Sarandi e Marialva ganham R ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQiojbRcna3F4xUQ5cRXnDu9Um0F82j5JfNV4XXBGzjiWHmu0I9JY1IcqhLMtfV_FiS1928CA4R" alt="Nota Paraná: Moradores de Maringá, Sarandi e Marialva ganham R ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A cada R$ 200 em notas fiscais geradas nos postos de combustíveis e distribuidoras de gás, o contribuinte terá direito a dois bilhetes. Nos demais&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}