import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Toni Kroos</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Toni Kroos"/>
        <meta name="description" content="Trending News about Toni Kroos" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Toni Kroos</h1>
            <Image width={800} height={500} src="https://imagens.ne10.uol.com.br/veiculos/_midias/jpg/2022/09/12/615x300/1_kroos-21699741.jpg" alt="Toni Kroos"/>
            <h3>Recent News</h3>
            <a href='https://jc.ne10.uol.com.br/blogs/torcedor/2022/11/15129764-toni-kroos-fora-da-copa-do-mundo-entenda-motivo-que-tirou-o-craque-da-alemanha-e-outros-jogadores-do-catar.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>TONI KROOS FORA DA COPA DO MUNDO: Entenda motivo que ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSB46J0cIJ7_UziPql1p7vH0nmFHW5pyGhXu1E8hbf6GLDZumXA7Q6XgvgMfqpox0Ov_7QY7Kql" alt="TONI KROOS FORA DA COPA DO MUNDO: Entenda motivo que ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A Alemanha encara a Espanha pela Copa do Mundo 2022 e muitos torcedores estão se perguntando porque o craque Toni Kroos não está no Mundial do Catar.</p></div>
            </div>
        </a><a href='https://interior.ne10.uol.com.br/esportes/2022/11/15129579-por-que-kroos-nao-esta-jogando-a-copa-do-mundo-veja-motivo-da-ausencia-do-meia-da-alemanha.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Por que KROOS não está jogando a COPA DO MUNDO? Veja ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTLM1_2w6SXwX1wAmfHB0zU0pdwAzxN5E40FFfNhzik1BqTGscAmM6XrhXGufaxTiWdJBaHDET7" alt="Por que KROOS não está jogando a COPA DO MUNDO? Veja ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mesmo com tantos craques em campo, quem está acompanhando o jogaço entre Espanha e Alemanha neste domingo (27), está sentindo a falta de uma das grandes&nbsp;...</p></div>
            </div>
        </a><a href='https://somosfanaticos.fans/br/transferencias/Em-fim-de-contrato-com-o-Real-Madrid-Toni-Kroos-entra-na-mira-de-um-dos-maiores-clubes-da-Europa-20221127-0008.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Em fim de contrato com o Real Madrid, Toni Kroos entra na mira de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT5e5R6_zb5vDqxNH0SUJy3qFxhgXDRFWO8stQt4HSJqPy3KI19bnQChoik_P4dP2rDH3vtoqiE" alt="Em fim de contrato com o Real Madrid, Toni Kroos entra na mira de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ao lado de Casemiro e Luka Modric, Kroos também formou um dos maiores meio-campos da história do futebol. Os três, enquanto atuaram juntos, sempre foram&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}