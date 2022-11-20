import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Taca das Favelas</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Taca das Favelas"/>
        <meta name="description" content="Trending News about Taca das Favelas" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Taca das Favelas</h1>
            <Image width={800} height={500} src="https://www.lance.com.br/files/og_image/uploads/2022/11/19/63793c1d607e1.jpeg" alt="Taca das Favelas"/>
            <h3>Recent News</h3>
            <a href='https://www.lance.com.br/futebol-nacional/taca-das-favelas-selecao-do-rio-de-janeiro-e-campeao-no-feminino-e-sao-paulo-no-masculino.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Taça das Favelas: Seleção do Rio de Janeiro é campeão no ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQT8EgiLIsWwy1Tu5v57zUDiKEkVVJqjLEbFTFRVRyBxKj48xF9MXy1BniEN7G8sL0rLtJ63ADR" alt="Taça das Favelas: Seleção do Rio de Janeiro é campeão no ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Na tarde deste sábado, na Arena Barueri, em São Paulo, foi disputada as finais do feminino e masculino do Favelão 2022. As mulheres do Rio de Janeiro&nbsp;...</p></div>
            </div>
        </a><a href='https://www.terra.com.br/comunidade/visao-do-corre/tamo-junto-no-corre/sp-sofre-faz-100-dos-penaltis-e-fica-com-taca-das-favelas,96f608036233e40b6afa580a5e74e53brdkmdbya.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>SP sofre, faz 100% dos pênaltis, e fica com Taça das Favelas</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQU0MvYImf7IrGdvSuLs2A3QYHjM6dHwxlnmgoI5g-aqTu2rfLnh08JJ2bkqq-KchUnlXPI10Ea" alt="SP sofre, faz 100% dos pênaltis, e fica com Taça das Favelas" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Equipe masculina venceu Goiás, por 5 a 4 nos pênaltis, depois de 0 a 0 e domínio dos goianos no tempo normal.</p></div>
            </div>
        </a><a href='https://www.cidademarketing.com.br/marketing/2022/11/19/gol-e-patrocinadora-da-taca-das-favelas-2022/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>GOL é patrocinadora da Taça das Favelas 2022 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ-xRw2-G5nh6idP21EJDypfXR2Rb8xCun068VaHqOJ2qZkKqio93mudSjnb6FBks4CfWX9D3D9" alt="GOL é patrocinadora da Taça das Favelas 2022 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Final dos jogos das ligas masculina e feminina aconteceram neste sábado, na Arena Barueri, com transmissão ao vivo pela TV Globo, a partir das 14 horas.</p></div>
            </div>
        </a><a href='https://www.agenciamural.org.br/taca-das-favelas-nacional-feminino-rj-x-sp/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Taça das Favelas: Rio de Janeiro segura SP, vence por 1 a 0 e ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRZehw27GtiR95nd97HWMiig6_h_SipLTda-cb3MtWRUxK9a_Lj1vrAtH3TuQvtnXgwkV806hvD" alt="Taça das Favelas: Rio de Janeiro segura SP, vence por 1 a 0 e ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Com um gol da atacante Tuane, no segundo tempo, a seleção do Rio de Janeiro venceu São Paulo por 1 a 0 e se sagrou a primeira campeã do torneio feminino da Taça&nbsp;...</p></div>
            </div>
        </a><a href='https://jc.ne10.uol.com.br/blogs/torcedor/futebol-na-tv/2022/11/15124001-transmissao-ao-vivo-da-final-da-taca-das-favelas-hoje-19-11-onde-vai-passar-vai-passar-na-tv-confira-horario-e-onde-assistir-ao-vivo.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>TRANSMISSÃO AO VIVO DA FINAL DA TAÇA DAS FAVELAS HOJE ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS03ZXmkb9Q9PCPLaMhz5WC1qP1VKaVblv2Mk33keX1_Gt5buI3ZxThFUqIWIClww243HZRrEDP" alt="TRANSMISSÃO AO VIVO DA FINAL DA TAÇA DAS FAVELAS HOJE ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A final da Taça das Favelas ocorre neste sábado (20). O palco da decisão é a Arena Barueri, no interior de São Paulo. São duas finais: a feminina e a&nbsp;...</p></div>
            </div>
        </a><a href='https://sagresonline.com.br/nos-penaltis-selecao-de-goias-perde-decisao-nacional-da-taca-das-favelas-2022/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nos pênaltis, seleção de Goiás perde decisão nacional da Taça das ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTR_gInRMC0YJkanQSEKEiZ4JvW_HbxRG8AX7NcYHL4ujwvwVm4z-gtQ3bfzwy7bKElQSfKsbzf" alt="Nos pênaltis, seleção de Goiás perde decisão nacional da Taça das ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A partida foi realizada na tarde deste domingo (19), na Arena Barueri, em São Paulo, com transmissão da Rede Globo para todo o Brasil.</p></div>
            </div>
        </a><a href='https://diariodegoias.com.br/selecao-goiana-perde-nos-penaltis-a-decisao-da-taca-das-favelas-nacional/262255/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Seleção Goiana perde nos pênaltis a decisão da Taça das Favelas ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRznw-Mxwbg2TQT82Uxo1DGgq1SA62uyQ_-MYlLd0d0TBpCdfMyish7jZFXyaoappo5jhFSTng4" alt="Seleção Goiana perde nos pênaltis a decisão da Taça das Favelas ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A Seleção Goiana foi derrotada pela Seleção Paulista na tarde deste sábado (19), na decisão do Favelão 2022 – Taça das Favelas Nacional, que foi disputa na&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}