import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Jogo do Brasil</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Jogo do Brasil"/>
        <meta name="description" content="Trending News about Jogo do Brasil" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Jogo do Brasil</h1>
            <Image width={800} height={500} src="https://monitormercantil.com.br/wp-content/uploads/2022/11/Copa_torcedores_Hexa_Foto_ABr_arquivo.jpg" alt="Jogo do Brasil"/>
            <h3>Recent News</h3>
            <a href='https://monitormercantil.com.br/relacoes-de-trabalho-em-dia-de-jogo-do-brasil-na-copa/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Relações de trabalho em dia de jogo do Brasil na Copa</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR-P2eXEsqGcbBBIGPT63YyGwaTVkAWO0zXEesBiuDlGp3AbuQcEt0F3dIYbIOszrC0GH8sGp2I" alt="Relações de trabalho em dia de jogo do Brasil na Copa" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Com a proximidade da Copa do Mundo, o país do futebol volta suas atenções ao maior evento futebolístico do planeta. As partidas acontecerão em horário&nbsp;...</p></div>
            </div>
        </a><a href='https://www.terra.com.br/esportes/futebol/copa-2022/o-que-acontece-com-bancos-escolas-e-empresas-durante-os-jogos-do-brasil,7ba6d8786aa5770c88f1428e19ced8ee3wk8mxzx.html'>
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
        </a><a href='https://jc.ne10.uol.com.br/blogs/torcedor/2022/11/15124340-quando-e-o-jogo-do-brasil-na-copa-do-mundo-vai-ser-feriado-veja-dia-horario-e-onde-assistir-brasil-x-servia-ao-vivo.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Quando é o jogo do Brasil na Copa do Mundo? Vai ser feriado ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTDwNq8UHHAB4cOt4Eeqo7RoYxzrTcERgB_6dql3s_FhG-rThbWwZca6DktCtRpf3SY9WFl8o8S" alt="Quando é o jogo do Brasil na Copa do Mundo? Vai ser feriado ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A Seleção Brasileira será a última nesta Copa. O adversário será a Sérvia, pela primeira rodada do Grupo G, que ainda conta com Suíça e Camarões.</p></div>
            </div>
        </a><a href='https://diariocampineiro.com.br/bancos-terao-horarios-especiais-em-dias-de-jogo-do-brasil/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bancos terão horários especiais em dias de jogo do Brasil ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSpzYX2cbZJtvPP2jZ6-GoXD3kEY1UCU-ic62HNGCXNJTcoNJDvzaSwqgTpHmmsQKcGq8aR2xA7" alt="Bancos terão horários especiais em dias de jogo do Brasil ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A Federação Brasileira de Bancos (Febraban) informa que os bancos terão horário especial de atendimento ao público nas agências nos dias de jogos da&nbsp;...</p></div>
            </div>
        </a><a href='https://g1.globo.com/sp/vale-do-paraiba-regiao/noticia/2022/11/20/prefeitura-de-taubate-reduz-jornada-dos-servidores-nos-jogos-do-brasil-na-copa-do-mundo.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Prefeitura de Taubaté reduz jornada dos servidores nos jogos do ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTLJBKl39u3CndhnlU1WYS_1Tt7rEAPhplS1wIXgXIb6cn1X3h3iFoLZbhZlBlT03keGk9NEhqx" alt="Prefeitura de Taubaté reduz jornada dos servidores nos jogos do ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A seleção vai entrar em campo três vezes pela fase de grupos do campeonato, sendo duas vezes às 16h e uma às 13h.</p></div>
            </div>
        </a><a href='https://agenciabrasil.ebc.com.br/esportes/noticia/2022-11/advogado-trabalhista-explica-direito-a-folga-em-dias-de-jogos-da-copa'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Advogado trabalhista explica direito a folgas em dias de jogos da ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSW0qaa4ofDCc0sImcP-4d5X9G7AVNhKMbfsPLD5lzv8OU_jh5n017YWx0lFjeDwopamXEOzrhc" alt="Advogado trabalhista explica direito a folgas em dias de jogos da ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Segundo José Eduardo Pastore, assessor jurídico da FecomercioSP, dia de jogo da seleção não é feriado, mas empregador pode considerar importância cultural&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}