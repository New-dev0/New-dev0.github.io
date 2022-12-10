import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Flavio Dino</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Flavio Dino"/>
        <meta name="description" content="Trending News about Flavio Dino" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Flavio Dino</h1>
            <Image width={800} height={500} src="https://images.jota.info/wp-content/uploads/2020/05/dino2135053.jpg" alt="Flavio Dino"/>
            <h3>Recent News</h3>
            <a href='https://www.jota.info/eleicoes/quem-e-flavio-dino-indicado-de-lula-para-o-ministerio-da-justica-09122022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Quem é Flávio Dino, indicado de Lula para o Ministério da Justiça?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ03u8dj-62wtAsLps-6BM9Y4hZ2CCYjDLwamxyuRNYQ9_GXyCXo_8u-EE50vrE3_qsF9yLhf8A" alt="Quem é Flávio Dino, indicado de Lula para o Ministério da Justiça?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Em 2006, foi eleito deputado federal pelo PCdoB. No governo Dilma Rousseff, foi presidente da Embratur. Em 2014, foi eleito governador do Maranhão e reeleito em&nbsp;...</p></div>
            </div>
        </a><a href='https://g1.globo.com/politica/noticia/2022/12/09/flavio-dino-sera-o-ministro-da-justica-e-seguranca-publica-a-partir-de-2023-veja-perfil.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Flávio Dino será o ministro da Justiça a partir de janeiro; veja perfil</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRzUSFa83UEs71AqxOX4c-KW9N7Zf7U-l7WbKBfQl3vns7AmcTkr9xefyuiC5oJ14m7_HBYXd99" alt="Flávio Dino será o ministro da Justiça a partir de janeiro; veja perfil" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O presidente eleito, Luiz Inácio Lula da Silva (PT), anunciou nesta sexta-feira (9) que o ex-governador do Maranhão e senador eleito Flávio Dino (PSB) será&nbsp;...</p></div>
            </div>
        </a><a href='https://www.estadao.com.br/politica/flavio-dino-assume-justica-e-seguranca-publica-com-missao-de-desbolsonarizar-pf-e-revogar-decretos/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Flávio Dino assume Justiça e Segurança Pública com meta de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTFRiSIvQ7vCsBxEFHhfyyZjLVszAiloyVfPmiYETERwiSCJRf1gSaLIIRrGVw-f7NvjBM7Lccq" alt="Flávio Dino assume Justiça e Segurança Pública com meta de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ex-governador do Maranhão, senador eleito pelo PSB tem 54 anos, é advogado de formação e já foi juiz federal.</p></div>
            </div>
        </a><a href='https://www.poder360.com.br/governo/lula-anuncia-flavio-dino-para-ministerio-da-justica/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lula anuncia Flávio Dino para Ministério da Justiça</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQjQUNAXt2DAGaHykfDXqDoF0j_ONPfTaUhQiVPLBbN2i0HTWLcddjeIwihkQoJBeHzl548c3Ho" alt="Lula anuncia Flávio Dino para Ministério da Justiça" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Foi governador do Maranhão de 2015 a 2022 e, neste ano, foi eleito senador pelo Estado. Leia no Poder360.</p></div>
            </div>
        </a><a href='https://valor.globo.com/politica/noticia/2022/12/09/quem-e-flavio-dino-ministro-da-justica-e-seguranca-publica-do-governo-lula.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Quem é Flávio Dino, ministro da Justiça e Segurança Pública do ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSt6wBszqXPOtHjkYD2Eg1j6kXcHynAzHXppPuger75f9OYsSPhM3OU8jOVu4LIip2ke6qHBDuU" alt="Quem é Flávio Dino, ministro da Justiça e Segurança Pública do ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nome de confiança do presidente eleito, o ex-governador do Maranhão já presidiu a Associação Nacional de Juízes Federais, foi secretário-geral do CNJ e&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnnbrasil.com.br/politica/saiba-quem-e-ana-paula-lobato-que-substitui-flavio-dino-no-senado/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Substituta de Flávio Dino será senadora mais jovem do Brasil</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQPFqYybFy0DXu1XV3rMzgFgPmulIh-z2B_Kc2QXYw9md6w8G3898XGDWuasW6B2TBvqtDz2FBx" alt="Substituta de Flávio Dino será senadora mais jovem do Brasil" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O presidente eleito Luiz Inácio Lula da Silva (PT) anunciou, nesta sexta-feira (9), Flávio Dino (PSB) como Ministro da Justiça de seu governo.</p></div>
            </div>
        </a>
        </Template></>;
}