import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Argentina</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Argentina"/>
        <meta name="description" content="Trending News about Argentina" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Argentina</h1>
            <Image width={800} height={500} src="https://images.trustinnews.pt/uploads/sites/5/2022/11/39846542_wm.jpg" alt="Argentina"/>
            <h3>Recent News</h3>
            <a href='https://visao.sapo.pt/atualidade/mundo/2022-11-16-mundial2022-argentina-goleia-emirados-no-ultimo-teste-e-soma-jogo-36-sem-perder/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mundial2022: Argentina goleia Emirados no último teste e soma ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ-636VKVos7XV_8nbmh3cFaJTERCpd3grjIkmaArLv9I-1mkMH2nNpd30Gt7pIPpM5zzIn_apC" alt="Mundial2022: Argentina goleia Emirados no último teste e soma ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A Argentina, com a ajuda de dois benfiquistas, goleou hoje os Emirados Árabes Unidos por 5-0, em Abu Dhabi, no ultimo encontro de preparação para o Mundial&nbsp;...</p></div>
            </div>
        </a><a href='https://sapobrasil.com.br/atualidade/artigos/scaloni-considera-fazer-mudancas-na-lista-de-convocados-da-argentina-para-a-copa'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Scaloni considera fazer mudanças na lista de convocados da ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Scaloni considera fazer mudanças na lista de convocados da ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Em entrevista ao canal TyC Sports após a goleada da Argentina por 5 a 0 sobre os Emirados Árabes Unidos, o treinador disse que &quot;alguns jogadores não estão cem&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ojogo.pt/internacional/mundial-2022/noticias/argentina-goleia-no-ultimo-teste-antes-do-mundial-e-soma-36-jogo-sem-perder-15359160.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Argentina goleia no último teste antes do Mundial e soma 36.º jogo ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQKC5dGO0nz6NG01z5A-QJBEYYTpNePTuCD72ZFhtt1jftyDHw0MrXJmnf_j-W68SX5QJpK5Q57" alt="Argentina goleia no último teste antes do Mundial e soma 36.º jogo ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Apesar de os Emirados Árabes Unidos, que falharam o Mundial&#39;2022 num play-off com a Austrália, terem perdido por 5-0, o público presente fez do jogo uma&nbsp;...</p></div>
            </div>
        </a><a href='https://pt.mancity.com/news/mens/manchester-city-julian-alvarez-anota-con-argentina-frente-a-emiratos-arabes-63804235'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Julián Álvarez marca pela Argentina contra os Emirados Árabes</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSXxOZX8BDfxNvtYMdP3YjwbbsPUrF1ZmggcSeqzRIFfGMbTGuO_WnutVDASEhdrCGm2WVQXYy8" alt="Julián Álvarez marca pela Argentina contra os Emirados Árabes" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nosso atacante foi titular no último jogo de seu país antes da Copa do Mundo de 2022 ao lado de Lionel Messi e Ángel Di María. E foi o capitão da Argentina&nbsp;...</p></div>
            </div>
        </a><a href='https://www.abola.pt/nnh/2022-11-16/argentina-estamos-a-jogar-muito-bem/964951'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Estamos a jogar muito bem»</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSyyEKVE9mJGijiT0_hYysHMv5bspIQ2JdWynXUCFldg8YxaJ36b0XAvM4MtFVmiyopSCjB3I30" alt="«Estamos a jogar muito bem»" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Lionel Messi realçou que a Argentina está a jogar muito bem e que conta com um excelente grupo. O goleador argentino revela confiança na capacidade da&nbsp;...</p></div>
            </div>
        </a><a href='https://maisfutebol.iol.pt/internacional/nicolas-otamendi/otamendi-titular-e-enzo-salta-do-banco-na-goleada-da-argentina'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Otamendi titular e Enzo salta do banco na goleada da Argentina</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTAj7Beg2BGeQjSCRX6QD1AO1h4xl3kYjimaLElCsrypC9FcP9ST-w8S5ZEP8pDmWsTGWzCPCPF" alt="Otamendi titular e Enzo salta do banco na goleada da Argentina" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Triunfo por 5-0 ante os Emirados Árabes Unidos, na preparação para o Mundial 2022.</p></div>
            </div>
        </a><a href='https://www.coimbra.pt/2022/11/embaixador-da-argentina-recebido-na-cm-de-coimbra/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Embaixador da Argentina recebido na CM de Coimbra — coimbra.pt</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTM0b_NOtnMcypRZVHYbUR0m3P5jdw9cseJPvoxfNgqacZWNuDGB8Qo2k-zxAS_zzvOjr_cSMQE" alt="Embaixador da Argentina recebido na CM de Coimbra — coimbra.pt" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O embaixador Rodolfo Gil, que se deslocou a Coimbra com o ministro da Embaixada, Martín Soto, e o conselheiro, Mariano Guida, esteve ontem, dia 15 de&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}