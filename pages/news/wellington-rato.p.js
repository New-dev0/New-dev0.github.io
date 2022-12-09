import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Wellington Rato</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Wellington Rato"/>
        <meta name="description" content="Trending News about Wellington Rato" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Wellington Rato</h1>
            <Image width={800} height={500} src="https://s2.glbimg.com/eQy8Irq7vDJ9XxTd-O3zjfi8MKg=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/s/9/7h4ZcmSom98nYGvTq5dw/rato.jpg" alt="Wellington Rato"/>
            <h3>Recent News</h3>
            <a href='https://ge.globo.com/futebol/times/sao-paulo/noticia/2022/12/08/sao-paulo-se-aproxima-de-acerto-com-wellington-rato-do-atletico-go.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>São Paulo encaminha acerto com Wellington Rato, do Atlético-GO</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTG9dFWs7dQifNL873Eq3YLHZsJQ8obCuUbHr7pGKwebgxaxULIxFhP7O6nypUyvPqee1SNJ7Pa" alt="São Paulo encaminha acerto com Wellington Rato, do Atlético-GO" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Meia deve assinar contrato de três anos com o Tricolor; veja detalhes.</p></div>
            </div>
        </a><a href='https://www.uol.com.br/esporte/futebol/ultimas-noticias/2022/12/08/empresario-confirma-acerto-de-wellington-rato-pelo-sao-paulo.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Empresário confirma acerto de Wellington Rato com o São Paulo</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTzTRJ0p0ues4kDF2S1kYTcrV_srLthyt6QNT0lwrID_6-jPakvXhRzXzp3RvPT6i9sSNGEI0CY" alt="Empresário confirma acerto de Wellington Rato com o São Paulo" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A vontade de Rato em jogar no São Paulo pode fazer a diferença para que o negócio saia com o clube paulista. O time ofereceu R$ 4,5 milhões para ter o jogador,&nbsp;...</p></div>
            </div>
        </a><a href='https://tntsports.com.br/futebolbrasileiro/Empresario-confirma-escolha-de-Wellington-Rato-pelo-Sao-Paulo-20221208-0025.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Empresário confirma escolha de Wellington Rato pelo São Paulo</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRQlNWbYIkhyxb8dku66KZvBVII9CxRz_e_XHUL14NOFlmaydMaXqXPtj2Vs3tj0dAswhX-hI6r" alt="Empresário confirma escolha de Wellington Rato pelo São Paulo" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Meia-atacante, que se destacou no último Campeonato Brasileiro, será o terceiro reforço do Tricolor Paulista para 2023.</p></div>
            </div>
        </a><a href='https://br.bolavip.com/saopaulo/Pesou-decisivamente-na-escolha-Wellington-Rato-manda-a-real-e-entrega-sobre-decisao-de-atuar-no-Sao-Paulo-20221208-0198.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>“Pesou decisivamente na escolha”; Wellington Rato manda a real e ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQQIG4Cs6nowMUp6KTGUziQ4eR-xlX2lr0JgQ5HoCW7ql4f5f5VPw0r3FsR45ldFMYKtnI-sSQ0" alt="“Pesou decisivamente na escolha”; Wellington Rato manda a real e ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Durante entrevista, o meia-atacante revelou que pesou para decidir atuar no são Paulo em 2023.</p></div>
            </div>
        </a><a href='https://esportes.r7.com/futebol/campeonato-paulista/sao-paulo-encaminha-contratacao-do-meia-wellington-rato-08122022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>São Paulo encaminha contratação do meia Wellington Rato</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRqcKYCMsrsr2aJMytp516r5JlcU4vqy9P4iDQSMOe321F-VOFvjbTiRvaZfXU6xQDFSBRqFslT" alt="São Paulo encaminha contratação do meia Wellington Rato" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Fortaleza e Vasco também estavam na disputa, mas a vontade do jogador em vestir a camisa do Tricolor prevaleceu.</p></div>
            </div>
        </a><a href='https://esportegoiano.com.br/com-transacao-milionaria-atletico-acerta-venda-wellington-rato-sao-paulo/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Por quantia milionária, Atlético-GO acerta a venda de Wellington ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRf8Dhsh1dAI9GhBaDCVzuFe8JIeR-1jbklAGT0Gj_39_H589ywH8iDv2zrZ_JwpvalNSHfrzB2" alt="Por quantia milionária, Atlético-GO acerta a venda de Wellington ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Fim da novela! O Atlético Goianiense acertou a venda do atacante Wellington Rato, de 30 anos, para o São Paulo, após o jogador ser cobiçado também por&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}