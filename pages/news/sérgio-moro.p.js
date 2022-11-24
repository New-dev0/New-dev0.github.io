import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Sérgio Moro</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Sérgio Moro"/>
        <meta name="description" content="Trending News about Sérgio Moro" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Sérgio Moro</h1>
            <Image width={800} height={500} src="https://s2.glbimg.com/B0yraFYuKUhjHLl5ZskPOlmogFQ=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/w/4/6rsJaRTM67o0bwxu2CTA/agf20220315007.jpg" alt="Sérgio Moro"/>
            <h3>Recent News</h3>
            <a href='https://g1.globo.com/pr/parana/eleicoes/2022/noticia/2022/11/23/sergio-moro-tre-pr-volta-a-apontar-falhas-e-indica-desaprovacao-de-prestacao-de-contas-da-campanha.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sergio Moro: TRE-PR volta a apontar falhas e indica desaprovação ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQnnX_nHgY4HWPDuP5WL2xUdzCRrfZXJIcsdxB77IdY3cuHe0RrHarBgKG3Tg4h8vzPNal8GXE3" alt="Sergio Moro: TRE-PR volta a apontar falhas e indica desaprovação ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Conforme o Tribunal Superior Eleitoral (TSE), a campanha de Moro gastou R$5.103.465,24. A decisão, de terça-feira (22), rejeita a defesa&nbsp;...</p></div>
            </div>
        </a><a href='https://www.poder360.com.br/justica/tre-pr-recomenda-reprovacao-das-contas-eleitorais-de-moro/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>TRE-PR recomenda reprovação das contas eleitorais de Moro</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS87Y1ut8agqGBgDrftUEWn64UcC-MThoRU5qHtScO0W4rtiNXbOby5icg3uYL0IjxRgAcspK-P" alt="TRE-PR recomenda reprovação das contas eleitorais de Moro" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Área técnica diz que 7 tipos de gastos do senador eleito não foram esclarecidos; ex-juiz tem 3 dias para responder. Leia no Poder360.</p></div>
            </div>
        </a><a href='https://jc.ne10.uol.com.br/colunas/jamildo/2022/11/15126421-sergio-moro-pode-nao-ser-diplomado-senador-pelo-parana-entenda.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sergio MORO pode NÃO ser diplomado senador pelo Paraná ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTit8ODw1sBB-04k7jKiH55d3lZvBrTS-OYKdIotu6-jkSuBxGEAGOnwkD2BUzzrDM5aH1hyaWC" alt="Sergio MORO pode NÃO ser diplomado senador pelo Paraná ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Uma investigação mais rigorosa sobre as contas do ex-juiz ainda podem ser realizadas pelo juizado.</p></div>
            </div>
        </a><a href='https://www.conjur.com.br/2022-nov-22/parecer-tecnico-tre-pr-recomenda-reprovacao-contas-moro'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Parecer técnico do TRE-PR recomenda reprovação de contas de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTPO4_f_B5qdjzcQ0UgraGRV2E4gCy0pGMP2FObZzOKnVMTqnCc9DCc8tokmFsEWIPC0R8DIWGM" alt="Parecer técnico do TRE-PR recomenda reprovação de contas de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Um parecer técnico conclusivo elaborado pelo Tribunal Regional Eleitoral do Paraná recomenda que as contas do senador eleito Sergio Moro (União Brasil)&nbsp;...</p></div>
            </div>
        </a><a href='https://www.pragmatismopolitico.com.br/2022/11/parecer-tecnico-do-tre-pr-recomenda-rejeicao-das-contas-de-sergio-moro.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Parecer técnico do TRE-PR recomenda rejeição das contas de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT2PyJwqbkBftHUSc6vXXPaP4iCCft6JN_8ZtefFfRj-BWjI0VuYHLtfYgpOG0ORkbgzLCq5mDl" alt="Parecer técnico do TRE-PR recomenda rejeição das contas de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Técnicos apontam &quot;infração grave&quot; e recomendam reprovação das contas de Sergio Moro. Sete tipos de gastos não foram explicados e ex-juiz pode não ser&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cartacapital.com.br/cartaexpressa/tre-do-parana-volta-a-recomendar-a-desaprovacao-das-contas-de-moro/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Técnicos do TRE do Paraná voltam a recomendar a desaprovação ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSCDrZ-_8wGf7fbXUC6IBK1RMgE4vsA-fqSYj_hWTmoW-O3Tg-YycDqJS1qqPo2vcg07vxqOW_J" alt="Técnicos do TRE do Paraná voltam a recomendar a desaprovação ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O Tribunal Regional Eleitoral do Paraná recomendou, em parecer técnico divulgado nesta terça-feira 22, a desaprovação das contas de campanha do senador&nbsp;...</p></div>
            </div>
        </a><a href='https://ndmais.com.br/politica/sergio-moro-tem-prestacao-de-contas-da-campanha-eleitoral-reprovada-pelo-tre-pr/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sergio Moro tem prestação de contas da campanha eleitoral ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR0gHlhYCNv7OS32190T1gdVmbbC3dDEOrtaJOz6qC5M3TQZWmqfaTIxHIXDWYNdDrotjDBK-lM" alt="Sergio Moro tem prestação de contas da campanha eleitoral ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Área técnica do Tribunal Regional Eleitoral do Paraná já havia apontado ausência de documentos e inconsistência de dados.</p></div>
            </div>
        </a>
        </Template></>;
}