import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Benzema</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Benzema"/>
        <meta name="description" content="Trending News about Benzema" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Benzema</h1>
            <Image width={800} height={500} src="https://s2.glbimg.com/b-uKmIwF_881IdzBalG07Wa0hk4=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/G/p/h1kFjOShipM1Ivt0SvDQ/000-32vz9tb.jpg" alt="Benzema"/>
            <h3>Recent News</h3>
            <a href='https://ge.globo.com/futebol/selecoes/franca/noticia/2022/11/29/deschamps-descarta-volta-de-benzema-a-copa-do-mundo-voces-estao-procurando-coisas.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Deschamps descarta volta de Benzema à Copa do Mundo: &quot;Vocês ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR7H5sJ30CQbTDp13Cm8cI8xDnY3gD-G6F0j6-qxDKUovASgJlKPFA3cQj47Gcygr7QOmRLBuAg" alt="Deschamps descarta volta de Benzema à Copa do Mundo: &quot;Vocês ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Técnico da França demonstra impaciência com tema, que surgiu diante da possibilidade de atacante voltar a treinar nesta semana.</p></div>
            </div>
        </a><a href='https://www1.folha.uol.com.br/esporte/2022/11/cotado-para-voltar-a-copa-benzema-viaja-para-ilha-e-tecnico-desconversa.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cotado para voltar à Copa, Benzema viaja para ilha, e técnico ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ2MCPpoepXJoJjQBSzJNT0lkTmygQSJQzN5g7lUtiC4HX2vX8OkWJ5sz7ti5bMq2_wf6gDCu8H" alt="Cotado para voltar à Copa, Benzema viaja para ilha, e técnico ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jogador teve um possível retorno aos treinos do Real Madrid especulado e continua na lista da França nesta Copa.</p></div>
            </div>
        </a><a href='https://www.espn.com.br/futebol/copa-do-mundo/artigo/_/id/11297780/benzema-recuperado-forma-milagrosa-pronto-voltar-copa-mundo-tecnico-franca-direto-sobre-possibilidade'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Benzema recuperado de forma &#39;milagrosa&#39; e pronto para voltar à ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSOXv8UoISvjQwf7ynnEdlPZVHzSg7o5fZe8oylPJXmbumT2Qv3d1O74vDH9ASLB6R-eD9bFI7m" alt="Benzema recuperado de forma &#39;milagrosa&#39; e pronto para voltar à ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Após a rádio espanhola Onda Cero afirmar, na última segunda-feira (29), que o atacante Karim Benzema estaria &quot;praticamente recuperado&quot; da lesão na coxa que&nbsp;...</p></div>
            </div>
        </a><a href='https://www.mg.superesportes.com.br/app/noticias/futebol/copa-do-mundo/catar/2022/11/29/catar-2022,3981707/tecnico-da-franca-rechaca-volta-de-benzema-e-atacante-dispara-indireta.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Técnico da França rechaça volta de Benzema, e atacante dispara ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRi0IkFxK4uUOg71SbsP13cBWN0NXVa5CIMyeUnJUY1nVqYAg9E6xpRiV8CrgVBL84j1jBl0Q02" alt="Técnico da França rechaça volta de Benzema, e atacante dispara ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Atacante do Real Madrid foi cortado da Seleção Francesa três dias antes do início da Copa do Mundo devido a uma lesão muscular na perna esquerda.</p></div>
            </div>
        </a><a href='https://www.terra.com.br/esportes/futebol/deschamps-descarta-a-possibilidade-de-reintegrar-benzema-a-selecao-francesa-para-a-copa,eed233638aa75d628cd668c59afc2ae5jiatk9jy.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Deschamps descarta a possibilidade de reintegrar Benzema à ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRpB1QlawBjkjRu8cKit_i9QgOTHYse5vxpT0LA5I2t8GrmQFQMuZtg9ZwTNbAuniTQg2CiWt9D" alt="Deschamps descarta a possibilidade de reintegrar Benzema à ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Didier Deschamps, técnico da seleção francesa, descartou a possibilidade de reintegrar o atacante Benzema à delegação presente no Catar para a disputa da&nbsp;...</p></div>
            </div>
        </a><a href='https://gauchazh.clicrbs.com.br/esportes/copa-do-mundo/noticia/2022/11/deschamps-descarta-reintegrar-benzema-e-se-incomoda-com-pergunta-nao-sei-o-que-voce-quer-insinuar-clb230g3500110170i1g5p8nv.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Deschamps descarta reintegrar Benzema e se incomoda com ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTAbm7ivfQMj2pMNnR8F0d6tYbvJTu1JbXF2BtyDnSDTnP8PYba-EYQDbS1gNbMOoj48Mjgo2YV" alt="Deschamps descarta reintegrar Benzema e se incomoda com ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Treinador da França garante que atacante foi cortado por não ter condições físicas e disse que seu foco está nos 24 jogadores que seguem no plantel no&nbsp;...</p></div>
            </div>
        </a><a href='https://autopapo.uol.com.br/curta/carros-benzema-melhor-jogador-mundo/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Carros do melhor jogador do mundo: Benzema é amante das quatro ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRWUQn_21zhOQPvEDkzncEeZxPYPqkNS91R89AsqTc4CH_ksV144wy2ROtFVaxCrMnEcvXN6R9J" alt="Carros do melhor jogador do mundo: Benzema é amante das quatro ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Karim Benzema é o atual ganhador da Bola de Ouro e principal jogador da França. Fora da copa do mundo por uma lesão na coxa esquerda, o jogador que,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}