import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Diogo Dalot</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Diogo Dalot"/>
        <meta name="description" content="Trending News about Diogo Dalot" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Diogo Dalot</h1>
            <Image width={800} height={500} src="https://cdn.record.pt/images/2022-11/img_1200x676$2022_11_16_15_43_16_2062787.jpg" alt="Diogo Dalot"/>
            <h3>Recent News</h3>
            <a href='https://www.record.pt/internacional/competicoes-de-selecoes/mundial/mundial-2022/detalhe/basquetebolista-ivan-almeida-indignado-com-palavras-de-diogo-dalot'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Basquetebolista Ivan Almeida indignado com palavras de Diogo Dalot</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSiXFMnhK2i4R5F8JGSqlrNekUOEAdia1sys39SFAsdQRVQ7mGXAIAKmIXFFpbP-HM8eyEXMaGH" alt="Basquetebolista Ivan Almeida indignado com palavras de Diogo Dalot" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Responde a publicação do internacional português convocado por Fernando Santos para o Mundial&#39;2022.</p></div>
            </div>
        </a><a href='https://www.abola.pt/nnh/2022-11-16/portugal-basquetebolista-do-benfica-critica-publicacao-de-diogo-dalot/964928'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Basquetebolista do Benfica critica publicação de Diogo Dalot</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQoZDnYsHzEgUm49WwHuSGru1R1VsNKcSU1teK-YDhdq3MwptF5aRkkjsEaJravl3pDRThH71F2" alt="Basquetebolista do Benfica critica publicação de Diogo Dalot" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O basquetebolista do Benfica Ivan Almeida reagiu com insatisfação a uma publicação do internacional português Diogo Dalot, relativa ao orgulho que o defesa&nbsp;...</p></div>
            </div>
        </a><a href='https://portocanal.sapo.pt/noticia/315029'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jogador do Benfica acusa Diogo Dalot de &quot;justificar crimes e ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRZju9tqRrgPhOP6XNMSPLxAmJpSpt1w-ofgI-BsWkrBTmwJ7YshRtC6yaVhUqhtAehgjeY1UuE" alt="Jogador do Benfica acusa Diogo Dalot de &quot;justificar crimes e ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O jogador cabo-verdiano Ivan Almeida, da equipa de basquetebol do Benfica, reagiu assim à publicação de Diogo Dalot, antigo jogador do FC Porto, e que veste&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}