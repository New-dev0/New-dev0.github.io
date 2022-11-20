import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Sergio-malheiros</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Sergio-malheiros"/>
        <meta name="description" content="Trending News about Sergio-malheiros" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Sergio-malheiros</h1>
            <Image width={800} height={500} src="https://www.ofuxico.com.br/wp-content/uploads/2022/11/tais-araujo-sergio-malheiros-sophia-abrahao.jpg" alt="Sergio-malheiros"/>
            <h3>Recent News</h3>
            <a href='https://www.ofuxico.com.br/redes-sociais/tais-araujo-posa-com-sergio-malheiros-e-brinca-meu-filho/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Taís Araujo posa com Sérgio Malheiros e relembra &#39;Da Cor do ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTym84H9csm6jtevm_jdQg7qbEXJnzkm-fJEa6wCpO1x4spkRBrAkCeOGCaoa3ePzx_LqS4DXFG" alt="Taís Araujo posa com Sérgio Malheiros e relembra &#39;Da Cor do ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Taís Araujo encontra Sérgio Malheiros e Sophia Abrahão, e relembra a época de &#39;Da Cor do Pecado&#39;, novela da Rede Globo.</p></div>
            </div>
        </a><a href='https://rd1.com.br/tais-araujo-posa-com-sergio-malheiros-e-sophia-abrahao-e-dispara-filho-e-nora/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Taís Araújo resgata novela feita há 18 anos ao posar com Sérgio ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQA-AqUmpp9fYPgaVGzZeiVS2Xuwbx2V2kFOQhLEg2E29kSXdPYuD6E3sER3QI3iFp8b_UfCOnm" alt="Taís Araújo resgata novela feita há 18 anos ao posar com Sérgio ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Para os apaixonados por novelas, Taís Araújo causou nostalgia entre os seus seguidores. No ar em Cara e Coragem, a atriz encontrou Sérgio Malheiros,&nbsp;...</p></div>
            </div>
        </a><a href='https://fusne.com/web-stories/sergio-malheiros-e-tais-araujo-aparecem-em-foto-no-instagram'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sérgio Malheiros e Taís Araujo aparecem em foto no Instagram ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRs9NVpB22_dk9xRnvFIEXDjMvwrPUc94sumBd5H2ihtIwbMeSm4smkH452R-kqmzSv_cN51oDd" alt="Sérgio Malheiros e Taís Araujo aparecem em foto no Instagram ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Na última sexta-feira, 18 de novembro, a atriz encontrou Sérgio Malheiros e a namorada dele Sophia Abrahão.</p></div>
            </div>
        </a><a href='https://www.msn.com/pt-br/entretenimento/famosos/ta%C3%ADs-araujo-encontra-s%C3%A9rgio-malheiros-e-relembra-papel-ic%C3%B4nico-na-novela-da-cor-do-pecado/ar-AA14jwKn'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Taís Araujo encontra Sérgio Malheiros e relembra papel icônico na ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSiEZBWjS1cqSmwCLDx03HiT8Qqmz8tLwpcNIiz6NVQaxeLobewj8lyUB7T703IDEgqQ3gphvFC" alt="Taís Araujo encontra Sérgio Malheiros e relembra papel icônico na ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Taís relembrou a novela Da Cor do Pecado, exibida pela TV Globo em 2004, onde a atriz interpretava Preta, que era mãe de Raí, personagem de Sérgio. Para&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}