import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Dia da Bandeira</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Dia da Bandeira"/>
        <meta name="description" content="Trending News about Dia da Bandeira" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Dia da Bandeira</h1>
            <Image width={800} height={500} src="" alt="Dia da Bandeira"/>
            <h3>Recent News</h3>
            <a href='https://www.limeira.sp.gov.br/sitenovo/news.php?p=16380'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dia da Bandeira é lembrado em premiação de programa de leitura</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Dia da Bandeira é lembrado em premiação de programa de leitura" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A Secretaria de Educação de Limeira realizou nesta sexta-feira (18), no Teatro Nair Bello, o último dia de premiação dos alunos que se destacaram no Clube&nbsp;...</p></div>
            </div>
        </a><a href='http://www.folhadoabc.com.br/index.php/luiz-jose-m-salata/item/24580-dia-da-bandeira-nacional-19-de-novembro'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dia da Bandeira Nacional 19 de novembro</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Dia da Bandeira Nacional 19 de novembro" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O “Dia da Bandeira Nacional”, motivo de muito orgulho e os brasileiros envaidecidos com a nossa Bandeira Brasileira, um dos Símbolos Nacionais, comemo...</p></div>
            </div>
        </a><a href='https://www.eb.mil.br/web/noticias/noticiario-do-exercito/-/asset_publisher/znUQcGfQ6N3x/content/id/16418156'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Armas</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSPFAjj9WMXc2DsvpNfyBHlUnGHgxH66jp5Yr7vNaXUIfXKdsnNvU-og9mOFf4Z1AXTvUuQxRaz" alt="Armas" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Essa organização de auxílio mútuo foi evoluindo, e seus integrantes passaram a pintar seus corpos com cores específicas e a usar vestimentas semelhantes,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.curtamais.com.br/goiania/entenda-o-significado-do-dia-da-bandeira'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Entenda%20o%20significado%20do%20Dia%20da%20Bandeira ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRh3Qhuci1-VX7HmzzU2S3PePXKjZSvSa2T80n3xUzv0ud7mCgIgKxmn_M5t1MBdJW-r_vfgpNp" alt="Entenda%20o%20significado%20do%20Dia%20da%20Bandeira ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>No dia 19 de novembro de 1889, o recém-instalado governo republicano do Brasil trocou a antiga bandeira imperial, que vigorou durante 67 anos, pela bandeira da&nbsp;...</p></div>
            </div>
        </a><a href='https://diregional.com.br/diario-do-iguacu/cotidiano/2022-11-18-dia-da-bandeira-'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dia da Bandeira</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSTpPu4IyeG_4Y7gJWuBOqftIF4LKVlfQuZq-9Vt0abuS0KwRaFg9mvHj769FQ9S3QBN9ivKfnz" alt="Dia da Bandeira" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dia 19 de novembro é comemorado o dia da Bandeira. Brasileira, um dentre os (quatro) símbolos nacionais, os demais são: o Hino Nacional, as Armas Nacionais&nbsp;...</p></div>
            </div>
        </a><a href='https://www.diariodosertao.com.br/coluna/flamula-verde-e-amarelo'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Flâmula verde e amarelo - Diário do Sertão</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSMc0o8rwF7t8JzWtS7u0diz5W8hC5vqu3j7zKD8vcUSFICHH2rEUNQQJUwb5BXGp1J-wFFf6WN" alt="Flâmula verde e amarelo - Diário do Sertão" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O projeto da Bandeira Brasileira foi criação dos positivistas Raimundo Teixeira Mendes com a colaboração de Miguel Lemos, Manoel Pereira e Décio Vilares. A&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}