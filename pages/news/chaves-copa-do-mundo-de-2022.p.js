import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Chaves Copa do Mundo de 2022</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Chaves Copa do Mundo de 2022"/>
        <meta name="description" content="Trending News about Chaves Copa do Mundo de 2022" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Chaves Copa do Mundo de 2022</h1>
            <Image width={800} height={500} src="https://www.lance.com.br/files/og_image/uploads/2022/11/28/6384e6a98c03d.jpeg" alt="Chaves Copa do Mundo de 2022"/>
            <h3>Recent News</h3>
            <a href='https://www.lance.com.br/copa-do-mundo/classificacao-da-copa-do-mundo-2022-veja-a-tabela-completa-de-jogos.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Classificação da Copa do Mundo 2022: veja a tabela completa de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR1jpCLahojRZz7AzPwZTSCXOWlWoSwWs9FOswzdmHKxQ-itWf_3GUDOnX1W8DeU1Can-M6URf8" alt="Classificação da Copa do Mundo 2022: veja a tabela completa de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Fique por dentro da situação de cada grupo e do chaveamento do Mundial do Qatar.</p></div>
            </div>
        </a><a href='https://ge.globo.com/futebol/copa-do-mundo/noticia/2022/11/30/oitavas-de-final-copa-do-mundo-2022-entenda-como-funciona.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Oitavas de final da Copa do Mundo 2022: entenda como funciona</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRtMczVsDKtNEM1Zii5NMsSsKEUcqvveAlWhiXZLWxID9wojrlDFzJVDLfZXC7fbVUwYMO2Wh6n" alt="Oitavas de final da Copa do Mundo 2022: entenda como funciona" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Próxima fase da Copa do Catar começa a ser disputada neste sábado; entenda o regulamento.</p></div>
            </div>
        </a><a href='https://jc.ne10.uol.com.br/blogs/torcedor/2022/12/15132798-oitavas-de-final-da-copa-do-mundo-2022-saiba-dia-horario-e-chaveamento-das-oitavas-na-tabela-da-copa-do-mundo-2022.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>OITAVAS DE FINAL DA COPA DO MUNDO 2022: saiba dia, horário ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRMqOfk1ixlwip0zqu5dxB9zBqPzrfXEi64RigYigDDNGpcJkQPynpatiznbaUJ7R624JS6XbcK" alt="OITAVAS DE FINAL DA COPA DO MUNDO 2022: saiba dia, horário ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A Copa do Mundo dá sequência nesta quinta, 1 de dezembro, aos jogos da última rodada da fase de grupos nas chaves E e F, revelando as seleções classificadas&nbsp;...</p></div>
            </div>
        </a><a href='https://radiojornal.ne10.uol.com.br/esportes/2022/12/15133145-oitavas-de-final-da-copa-do-mundo-veja-o-chaveamento-e-os-confrontos-confirmados-na-copa-do-mundo-2022.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>OITAVAS DE FINAL DA COPA DO MUNDO: Veja o ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTEhujCIGXx1bUkbk6FOgVBKsAoUusmzOFNU6XlshsEM5pDXUNO-JIVLwoywuHYg-7zNVRiR9EQ" alt="OITAVAS DE FINAL DA COPA DO MUNDO: Veja o ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ESTÁ CHEGANDO O MATA-MATA! Nesta semana, teve início a última e decisiva rodada da fase de grupos da Copa do Mundo 2022, no Catar.</p></div>
            </div>
        </a><a href='https://www.goal.com/br/not%C3%ADcias/do-que-o-brasil-precisa-para-terminar-em-primeiro-do-grupo-na-copa-do-mundo-2022/blt2168358ecb44aff0'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Do que o Brasil precisa para terminar em primeiro do grupo na ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQAbhIEa8hnUMHuMppsJfdxw5PInzjg-LkySkyyGvc8EfHOaifRZiabO45QgLas2Q2_NI9NwSsd" alt="Do que o Brasil precisa para terminar em primeiro do grupo na ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A seleção brasileira vai para a última rodada da fase de grupos da Copa do Mundo tranquila. Ao vencer a Suíça, na segunda-feira (28), o Brasil já garantiu&nbsp;...</p></div>
            </div>
        </a><a href='https://www.otempo.com.br/copa-do-mundo/2022/oitavas-de-final-da-copa-tem-6-dos-8-jogos-definidos-saiba-datas-e-horarios-1.2775521'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Oitavas de final da Copa tem 6 dos 8 jogos definidos: saiba datas e ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ8hy_gxMIRcvTSM9B29wvRCgweGWefBy1Idj3RFP_jDfklF8sLazuhc988Xu4z-254rLLwhzYc" alt="Oitavas de final da Copa tem 6 dos 8 jogos definidos: saiba datas e ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Duelos de mata-mata da Copa do Catar começam neste sábado (3) com duas partidas por dia, do próximo sábado até terça-feira (6)</p></div>
            </div>
        </a><a href='https://www.cnnbrasil.com.br/esporte/quatro-confrontos-das-oitavas-de-final-da-copa-do-mundo-sao-definidos-veja-jogos/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Quatro confrontos das oitavas de final da Copa do Mundo são ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTSo77FeVkFzdxVZQg9jc7eXTKhCfzpRQZ7eL5rEgqTIWgrUSjYdyXIiiJ3rIYSPYGzs5Iqw4nB" alt="Quatro confrontos das oitavas de final da Copa do Mundo são ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Outros dois jogos da fase eliminatória haviam sido confirmados na terça-feira (29): Holanda x Estados Unidos e Inglaterra x Senegal. Conheça os estádios da Copa&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}