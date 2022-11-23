import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Nuno Mendes</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Nuno Mendes"/>
        <meta name="description" content="Trending News about Nuno Mendes" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Nuno Mendes</h1>
            <Image width={800} height={500} src="" alt="Nuno Mendes"/>
            <h3>Recent News</h3>
            <a href='https://www.acorianooriental.pt/noticia/nuno-mendes-falha-treino-de-portugal-a-dois-dias-da-estreia-344847'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nuno Mendes falha treino de Portugal a dois dias da estreia</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR5Wqx1CmkvHiNKAQdHqKc2STO2LlR_-79hhvjEg5-ZxbM9CgzqOjLn7lqQriASzP4x-XujTezy" alt="Nuno Mendes falha treino de Portugal a dois dias da estreia" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O lateral esquerdo dos franceses do Paris Saint-Germain, não subiu ao relvado do centro de treinos do Al-Shahaniya SC, nos arredores de Doha, devido a dores&nbsp;...</p></div>
            </div>
        </a><a href='https://www.jn.pt/desporto/nuno-mendes-com-mialgia-15375352.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nuno Mendes com mialgia</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSiJ5xEEVV8czWGKe2D9_t0KrXiZt0QspIyBmsZZwKbVjyhC-w2HQ9hYtbHIYcFTM9KKbcv5EAp" alt="Nuno Mendes com mialgia" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O jogador do Paris Saint-Germain falha a sessão a dois dias da estreia da seleção portuguesa no Mundial - na quinta-feira, a equipa das quinas defronta o Gana -&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rtp.pt/noticias/selecao-nacional/dores-musculares-afastam-nuno-mendes-do-treino-mas-selecao-afirma-estar-pronta-para-o-gana_a1448707'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dores musculares afastam Nuno Mendes do treino, mas seleção ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ8UbhUQe_JDKLwXOPpzREPbsdNVlWTYVOpXOEVvAVNDboXvot7qES8usfdsk8Rsk5P1RO-MF2q" alt="Dores musculares afastam Nuno Mendes do treino, mas seleção ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A seleção portuguesa treinou esta manhã na preparação do jogo frente ao Gana, na quinta-feira. A novidade foi a ausência de Nuno Mendes no habitual treino&nbsp;...</p></div>
            </div>
        </a><a href='https://ge.globo.com/futebol/selecoes/portugal/noticia/2022/11/22/nuno-mendes-desfalca-treino-de-portugal-e-e-duvida-para-estreia-da-copa.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nuno Mendes desfalca treino de Portugal e é dúvida para estreia da ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQuME4udaMi3C7zULSrJE5tdY3PHHsXFWMUHU_QfUcDgtJlGzRN_4nWNORys8goa849kISPJQ72" alt="Nuno Mendes desfalca treino de Portugal e é dúvida para estreia da ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Lateral apresentou dores musculares e não participou da última atividade com a equipe.</p></div>
            </div>
        </a><a href='https://www.publico.pt/2022/11/22/desporto/noticia/mundial2022-nuno-mendes-falha-treino-portugal-dois-dias-estreia-2028655'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mundial2022: Nuno Mendes falha treino de Portugal a dois dias da ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQGnhTedgB010Po0l-GNkUSgIDzirkzWxckHReiY29lwHxu1n30AD-FCWlQrlL6kV4yx0b5kRY3" alt="Mundial2022: Nuno Mendes falha treino de Portugal a dois dias da ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O defesa Nuno Mendes falhou esta terça-feira o treino da selecção portuguesa de futebol, que prossegue a preparação para a estreia no Grupo H do Mundial2022&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}