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
            <Image width={800} height={500} src="https://www.abola.pt/img/fotos/abola2015/SELECAO/2022/diogodalot1.jpg" alt="Diogo Dalot"/>
            <h3>Recent News</h3>
            <a href='https://www.abola.pt/nnh/2022-11-16/portugal-basquetebolista-do-benfica-critica-publicacao-de-diogo-dalot/964928'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Basquetebolista do Benfica critica publicação de Diogo Dalot</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQoZDnYsHzEgUm49WwHuSGru1R1VsNKcSU1teK-YDhdq3MwptF5aRkkjsEaJravl3pDRThH71F2" alt="Basquetebolista do Benfica critica publicação de Diogo Dalot" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O basquetebolista do Benfica Ivan Almeida reagiu com insatisfação a uma publicação do internacional português Diogo Dalot, relativa ao orgulho que o defesa&nbsp;...</p></div>
            </div>
        </a><a href='https://ominho.pt/jogador-do-benfica-indigna-se-com-diogo-dalot-por-querer-justificar-crimes-e-atrocidades/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jogador do Benfica indigna-se com Diogo Dalot por querer justificar ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR8jMUyiypJw9u9hn89f8apNkpSi6Bi3Tuf5UnT77prlpVJnlzSNpWNnSB7Nk5oU1a5aw4Kgafs" alt="Jogador do Benfica indigna-se com Diogo Dalot por querer justificar ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Um jogador da equipa de basquetebol do SL Benfica indignou-se, esta quarta-feira, com uma publicação de Diogo Dalot no Twitter. O jogador natural de Braga,&nbsp;...</p></div>
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