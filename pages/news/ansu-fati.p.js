import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Ansu Fati</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Ansu Fati"/>
        <meta name="description" content="Trending News about Ansu Fati" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Ansu Fati</h1>
            <Image width={800} height={500} src="https://static.globalnoticias.pt/oj/image.jpg?brand=OJ&type=generate&guid=63948e85-4bd0-4fac-b178-608a11609f9f&w=800&h=420&watermark=true&t=20221121092100" alt="Ansu Fati"/>
            <h3>Recent News</h3>
            <a href='https://www.ojogo.pt/internacional/selecao/noticias/ansu-fati-escolheu-espanha-para-representar-como-vou-jogar-por-portugal-se-nem-sei-falar-portugues-15371970.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ansu Fati escolheu Espanha: &quot;Como vou jogar por Portugal se nem ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR0RttnF8RytsG1zJbnEVdEmOEitL9tj6EqYqc_ML3T57U6NvIeKVyUO98ofANvzsE1EUJa4Uz7" alt="Ansu Fati escolheu Espanha: &quot;Como vou jogar por Portugal se nem ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ansu Fati, grande promessa do Barcelona e da seleção espanhola, teve a oportunidade de representar Portugal. Quem o garante é o próprio pai do atleta,&nbsp;...</p></div>
            </div>
        </a><a href='https://desporto.sapo.pt/futebol/mundial/artigos/ansu-fati-explica-porque-nao-quis-representar-portugal-nem-sei-falar-portugues'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ansu Fati explica porque não quis representar Portugal: &quot;Nem sei ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRxPr4-oMixQQ-jMcSs-VOtlspJwDAMsraS5MTFT8992kbHSz--odASTWZgqE7FYPIRThg8JO94" alt="Ansu Fati explica porque não quis representar Portugal: &quot;Nem sei ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jovem craque do Barcelona integra os convocados de Espanha para o Mundial, mas nasceu na Guiné-Bissau e teve a possibilidade de optar por jogar pela seleção&nbsp;...</p></div>
            </div>
        </a><a href='https://www.zerozero.pt/news.php?id=422717'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ansu Fati recusou a Seleção Nacional: «Como vou jogar por ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRkmqz43w5uSRHFqOX4EY3g17BoEDXkgxcDO9_yBUd-t-PTGZ1YxsIuJ_CeNg1yy_rjNU8qNTDC" alt="Ansu Fati recusou a Seleção Nacional: «Como vou jogar por ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ansu Fati é um dos talentos emergentes do futebol espanhol e mundial. Aos 20 anos, o camisola 10 do Barcelona integra a lista do selecionador espanhol Luis&nbsp;...</p></div>
            </div>
        </a><a href='https://maisfutebol.iol.pt/internacional/espanha/ansu-fati-e-a-recusa-a-selecao-nacional-nem-sei-falar-portugues'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ansu Fati e a recusa à seleção nacional: «Nem sei falar português»</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRzTfE34tuK8S2y7X5wcByaYM93tcCjiBBA1P2g9rsUClTL55wR_CrptoOiiOI89p8-0e0_-rV7" alt="Ansu Fati e a recusa à seleção nacional: «Nem sei falar português»" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O avançado do Barcelona, Ansu Fati, é um dos 26 convocados da seleção espanhola para o Mundial 2022, mas até poderia estar no Qatar com outras cores,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.gazetaesportiva.com/times/espanha/pai-do-atacante-ansu-fati-revela-que-filho-recusou-jogar-por-portugal/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pai do atacante Ansu Fati revela que filho recusou jogar por Portugal</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRMXnskJxES2puuhWZ8Vx9qfUUHqdOTzxoC1vjLbwP8N7IvSB97ATOKepwWaTDluLMnIhsVoJ5L" alt="Pai do atacante Ansu Fati revela que filho recusou jogar por Portugal" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O atacante Ansu Fati, de apenas 20 anos, é um dos destaques da seleção da Espanha nesta Copa do Mundo. Cria das categorias de base do Barcelona, o jovem é.</p></div>
            </div>
        </a><a href='https://esportes.yahoo.com/noticias/joia-da-espanha-ansu-fati-quase-jogou-por-portugal-entenda-163607498.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Joia da Espanha, Ansu Fati quase jogou por Portugal. Entenda!</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRObDl5DE72K8JxIH8jaudjZtuEN8WnOPYRpE6q4EZfIhcsszGc12A1hUADdp178VQHdnlR8o62" alt="Joia da Espanha, Ansu Fati quase jogou por Portugal. Entenda!" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ansu Fati é mais um entre muitos casos de jogadores que optaram pelo processo de naturalização espanhola.</p></div>
            </div>
        </a><a href='https://plataformamedia.com/2022/11/21/ansu-fati-escolheu-espanha-como-vou-jogar-por-portugal-se-nem-sei-falar-portugues/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ansu Fati escolheu Espanha: “Como vou jogar por Portugal se nem ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSMNPBFJXXDAttMZ_ic5vNbsyC5HFs3gnloEzqWbnm1ynxUKoRlZ1z1S9300dCVQZQ3Z6IzfUfL" alt="Ansu Fati escolheu Espanha: “Como vou jogar por Portugal se nem ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ansu Fati, grande promessa do Barcelona e da seleção espanhola, teve a oportunidade de representar Portugal. Quem o garante é o próprio pai do atleta, Bori Ansu&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}