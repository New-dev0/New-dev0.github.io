import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Jogos do Brasil</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Jogos do Brasil"/>
        <meta name="description" content="Trending News about Jogos do Brasil" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Jogos do Brasil</h1>
            <Image width={800} height={500} src="https://p2.trrsf.com/image/fget/cf/1200/630/middle/images.terra.com/2022/11/17/copa-1if0if6dsehra.jpeg" alt="Jogos do Brasil"/>
            <h3>Recent News</h3>
            <a href='https://www.terra.com.br/esportes/futebol/copa-2022/o-que-acontece-com-bancos-escolas-e-empresas-durante-os-jogos-do-brasil,7ba6d8786aa5770c88f1428e19ced8ee3wk8mxzx.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>O que acontece com bancos, escolas e empresas durante os jogos ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQE6Y6sEGpnsYbJBGrktxWpaTyohaz_W-9GIWns98eQEfXiG8UfP6SMR6hVDFs5ZA4rMbuiMT9I" alt="O que acontece com bancos, escolas e empresas durante os jogos ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Copa do Mundo 2022 começa no próximo dia 20 e, na primeira fase, os jogos do Brasil caem em dias úteis. Veja como ficam os horários.</p></div>
            </div>
        </a><a href='https://www.lance.com.br/copa-do-mundo/jogos-do-brasil-na-copa-do-mundo-veja-datas-horarios-e-onde-assistir.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jogos do Brasil na Copa do Mundo: veja datas, horários e onde ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQP9XRp4CiLFy-ipyjbns2i9a90crHem5blV6Dz-8lW4SWLWlJTRQCemS-m1MwGKWF6A_EnoHNx" alt="Jogos do Brasil na Copa do Mundo: veja datas, horários e onde ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Seleção estreia contra a Sérvia, no dia 24 de novembro, pelo Grupo G do Mundial.</p></div>
            </div>
        </a><a href='https://g1.globo.com/sp/vale-do-paraiba-regiao/noticia/2022/11/20/prefeitura-de-taubate-reduz-jornada-dos-servidores-nos-jogos-do-brasil-na-copa-do-mundo.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Prefeitura de Taubaté reduz jornada dos servidores nos jogos do ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTLJBKl39u3CndhnlU1WYS_1Tt7rEAPhplS1wIXgXIb6cn1X3h3iFoLZbhZlBlT03keGk9NEhqx" alt="Prefeitura de Taubaté reduz jornada dos servidores nos jogos do ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A seleção vai entrar em campo três vezes pela fase de grupos do campeonato, sendo duas vezes às 16h e uma às 13h.</p></div>
            </div>
        </a><a href='https://monitormercantil.com.br/relacoes-de-trabalho-em-dia-de-jogo-do-brasil-na-copa/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Relações de trabalho em dia de jogo do Brasil na Copa</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR-P2eXEsqGcbBBIGPT63YyGwaTVkAWO0zXEesBiuDlGp3AbuQcEt0F3dIYbIOszrC0GH8sGp2I" alt="Relações de trabalho em dia de jogo do Brasil na Copa" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Com a proximidade da Copa do Mundo, o país do futebol volta suas atenções ao maior evento futebolístico do planeta. As partidas acontecerão em horário&nbsp;...</p></div>
            </div>
        </a><a href='https://www.jornaldocomercio.com/colunas/minuto-varejo/2022/11/873267-dia-de-jogos-do-brasil-na-copa-o-que-fecha-e-o-que-abre.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dia de jogos do Brasil na Copa: o que fecha e o que abre</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ9ehG8ZGwvNzqGokKbMb5UFIlAdFomGqlyhhvVZHpiI7FftMo0MpnoaMGXMxvzDGDbLUddjpJe" alt="Dia de jogos do Brasil na Copa: o que fecha e o que abre" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>As regras divulgadas até agora apontam que serviços públicos nas três esferas de governo e bancos vão fechar em parte do dia das partidas. Já o comércio vai&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ifac.edu.br/noticias/2022/novembro/confira-como-sera-o-expediente-do-ifac-nos-jogos-do-brasil-na-copa-do-mundo'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Confira o expediente do Ifac nos jogos do Brasil na Copa do Mundo ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTNe76tQwPP9gUe8WjCey_AvlUQvCRVA_dQ9jBvQfcCtnMp16LmbMoLtpmQk0-bucqjiXkif2YK" alt="Confira o expediente do Ifac nos jogos do Brasil na Copa do Mundo ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A Reitoria do Instituto Federal do Acre (Ifac), divulgou, na sexta-feira (18/11), a Portaria Ifac nº 1.457, de 18 de novembro de 2022, que estabelece o&nbsp;...</p></div>
            </div>
        </a><a href='https://www.diariodolitoral.com.br/brasil/saiba-como-funciona-o-direito-a-folga-em-jogos-do-brasil-na-copa/162220/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Saiba como funciona o direito a folga em jogos do Brasil na Copa</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRbckKUfQ62j4iM2znSKw_AGEg6Dt11SYYhu-PnpS0HH5qakuHACFuyjUKDsbV3eSL8dXVf4PNe" alt="Saiba como funciona o direito a folga em jogos do Brasil na Copa" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A Copa do Mundo 2022 começa neste domingo (20), no Catar, e a expectativa dos torcedores brasileiros só aumenta com a possibilidade de conquista do&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}