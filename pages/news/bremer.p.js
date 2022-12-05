import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Bremer</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Bremer"/>
        <meta name="description" content="Trending News about Bremer" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Bremer</h1>
            <Image width={800} height={500} src="https://s2.glbimg.com/URInFzvF8kEonnHhsV7fwbzDApw=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/J/p/LX1sUxQ8WB4vpOjELAqw/308791714-491807909532964-2125837414305267501-n.jpg" alt="Bremer"/>
            <h3>Recent News</h3>
            <a href='https://g1.globo.com/ba/bahia/noticia/2022/12/02/pai-de-bremer-mostra-ansiedade-com-expectativa-de-estreia-do-filho-da-copa-do-mundo-vai-fazer-gol-de-cabeca-e-marcar-posicao.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pai de Bremer mostra ansiedade com expectativa de estreia do filho ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTY1r4HnvmI19Myb_RLy8jbCeoCtx3JmK1_IlE7Ovh8P-aIAv5svN62LVwf8f1NpBeTB_SA7iMo" alt="Pai de Bremer mostra ansiedade com expectativa de estreia do filho ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Zagueiro convocado pelo técnico Tite nasceu em Itapitanga, no sul da Bahia, e joga na Juventus.</p></div>
            </div>
        </a><a href='https://www.espn.com.br/artigo/_/id/11317489/bremer-minimiza-derrota-do-brasil-perdemos-quando-podiamos-perder'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bremer minimiza derrota do Brasil: &quot;Perdemos quando podíamos ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSssVOZ69zuxqbMsVuSms2in-YKvt7iZum4oaoT1VR9WTynXH5XIrs9pKjjPq-IQ0xyGV63MoiT" alt="Bremer minimiza derrota do Brasil: &quot;Perdemos quando podíamos ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bremer formou a dupla titular da Seleção Brasileira nesta sexta-feira, contra Camarões, ao lado de Militão. O defensor da Juventus, da Itália, não foi muito&nbsp;...</p></div>
            </div>
        </a><a href='https://f5.folha.uol.com.br/voceviu/2022/12/copa-do-mundo-bremer-entra-contra-camaroes-com-a-camisa-24-e-vira-noticia-no-exterior.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Copa do Mundo: Bremer entra contra Camarões com a camisa 24 e ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQToBoOfIvDDmWRx7g9afuIyDQtqGl_3eBiJedMZuX0A9seFPocU_S7sE7qWDxqN4pwK0ga5NOX" alt="Copa do Mundo: Bremer entra contra Camarões com a camisa 24 e ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Torcedores também aprovaram na web a quebra de tabu do zagueiro da seleção brasileira.</p></div>
            </div>
        </a><a href='https://exame.com/esporte/onde-joga-o-zagueiro-bremer-conheca-o-jogador-titular-da-selecao-contra-camaroes/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Onde joga o zagueiro Bremer? Conheça o jogador titular da ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRhSq5-MZG6Pb5wl2lY9YhR-pqjYZd7og_CxzY7xa6lp0_yDIk0JrQkTDTcW3O64ituJgusJo6c" alt="Onde joga o zagueiro Bremer? Conheça o jogador titular da ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Escalado para o jogo do Brasil contra Camarões, o jogador Bremer chamou a atenção dos torcedores pelo desempenho. Bremer estava no banco de reserva nos dois&nbsp;...</p></div>
            </div>
        </a><a href='https://www.uol.com.br/esporte/futebol/ultimas-noticias/lancepress/2022/12/02/levantar-a-cabeca-e-pensar-nas-oitavas-diz-bremer-apos-derrota-do-brasil.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Levantar a cabeça e pensar nas oitavas&#39;, diz Bremer após derrota ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQlE-zeaR1FmXG6P2KYa3esEZtegNm0ohP3wEEzVHDY7qWnAcHkVsk2zpzQUISoCqdaOijak5VQ" alt="&#39;Levantar a cabeça e pensar nas oitavas&#39;, diz Bremer após derrota ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O zagueiro Bremer analisou a derrota da Seleção Brasileira para Camarões nesta sexta-feir.</p></div>
            </div>
        </a><a href='https://jc.ne10.uol.com.br/blogs/torcedor/2022/12/15133988-quem-e-bremer-zagueiro-da-selecao-brasileira-conheca-o-defensor-do-brasil-que-esta-no-mundial-do-catar.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>QUEM É BREMER ZAGUEIRO DA SELEÇÃO BRASILEIRA ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQUT2hdzUyu7qEMwxAeneyxqEVbW7PtmIWWyfms83NZfUBWPW60Ia_TQ3Fo01FrVzsxfXbQF0qp" alt="QUEM É BREMER ZAGUEIRO DA SELEÇÃO BRASILEIRA ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>QUEM É BREMER ZAGUEIRO DA SELEÇÃO BRASILEIRA? Conheça o defensor do Brasil que está no Mundial do Catar. Jogador estará em campo nesta sexta (02), contra&nbsp;...</p></div>
            </div>
        </a><a href='https://www.correio24horas.com.br/noticia/nid/baiano-bremer-lamenta-derrota-do-brasil-levantar-a-cabeca/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Baiano Bremer lamenta derrota do Brasil: &#39;Levantar a cabeça&#39;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQcje8keAo90AKQ8nf_Dab1Vy8UuWSiecx0S2Z5d1H3VI6Ck3lFH5jCkrV--fMzrz6Qjpdk7Thv" alt="Baiano Bremer lamenta derrota do Brasil: &#39;Levantar a cabeça&#39;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A estreia de Bremer na Copa do Mundo não saiu bem como ele esperava. Baiano de Itapitanga, o zagueiro foi titular na derrota brasileira para Camarões,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}