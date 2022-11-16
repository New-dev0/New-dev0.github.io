import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Pedro</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Pedro"/>
        <meta name="description" content="Trending News about Pedro" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Pedro</h1>
            <Image width={800} height={500} src="https://conteudo.imguol.com.br/c/esporte/37/2022/11/15/daniel-alves-divide-a-bola-com-pedro-em-treino-da-selecao-brasileira-1668552983436_v2_615x300.jpg" alt="Pedro"/>
            <h3>Recent News</h3>
            <a href='https://www.uol.com.br/esporte/futebol/ultimas-noticias/2022/11/15/daniel-alves-poderia-ter-tirado-pedro-da-copa-do-mundo-critica-rmp.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Daniel Alves poderia ter tirado Pedro da Copa do Mundo, critica RMP</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTQ7V_bpuLxOGW6I0D9Ctw09v1V6oXUXpHImZdH6GDPaBcn5O9qbXIz_t0qZ7lLm-vAT7B7O0wu" alt="Daniel Alves poderia ter tirado Pedro da Copa do Mundo, critica RMP" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>No Esquenta da Copa, o jornalista Renato Maurício Prado detonou a entrada de Daniel Alves em Pedro no treino da seleção brasileira.</p></div>
            </div>
        </a><a href='https://www.lance.com.br/selecao-brasileira/video-daniel-alves-da-dura-entrada-em-pedro-no-treino-da-selecao-brasileira-assista.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>VÍDEO: Daniel Alves dá dura entrada em Pedro no treino da ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR2KjiK6u0GBjvHp1B-BOOqnGML_nZspxJ_rZycCNs9dMeM5XPqf-GGVZ0gbExt7mlru2qSM16T" alt="VÍDEO: Daniel Alves dá dura entrada em Pedro no treino da ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Lateral-direito vai com força excessiva em carrinho no atacante do Pedro durante atividade preparatória para a Copa do Mundo.</p></div>
            </div>
        </a><a href='https://ge.globo.com/futebol/selecao-brasileira/noticia/2022/11/15/entrada-de-daniel-alves-em-pedro-no-treino-da-selecao-gera-memes-veja-video.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Entrada de Daniel Alves em Pedro no treino da Seleção gera ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTx4Jenh9bxk9apNWpEJgU8PzBHGZ9eGpfxuhvIGA8hnTiICMT1XxKotmEhLk5rEFOANpNW3pCD" alt="Entrada de Daniel Alves em Pedro no treino da Seleção gera ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Lance chamou a atenção mais pela imagem do que pela intensidade da jogada e não gerou preocupação.</p></div>
            </div>
        </a><a href='https://www.gazetaesportiva.com/times/brasil/neto-critica-entrada-de-daniel-alves-em-pedro-total-falta-de-responsabilidade/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Neto critica entrada de Daniel Alves em Pedro: &quot;Total falta de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSXWD_CSQDe8HNAE7EKXVfVt6_3WS2CukMHRORVuLSNqjyhGvdc1ouZc9y5nksr_AIZnMRMbxps" alt="Neto critica entrada de Daniel Alves em Pedro: &quot;Total falta de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O treino da Seleção Brasileira desta terça-feira, preparatório para a Copa do Mundo, foi marcado por dois lances envolvendo o veterano lateral direito.</p></div>
            </div>
        </a><a href='https://extra.globo.com/esporte/carrinho-por-tras-de-daniel-alves-em-pedro-viraliza-mas-atacante-nao-se-machucou-25609331.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Carrinho por trás de Daniel Alves em Pedro viraliza, mas atacante ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRbl0QtsFPZAUZpM3uOPLz9jgxK-WQiHt0OKuu-Ti94L5XZIVEk-TxT9PG2nC55yDJ235IRc7hM" alt="Carrinho por trás de Daniel Alves em Pedro viraliza, mas atacante ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Turim, Itália — Uma imagem do treino desta terça-feira da seleção brasileira, que se prepara para a Copa do Mundo Catar em Turim, chamou a atenção e&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}