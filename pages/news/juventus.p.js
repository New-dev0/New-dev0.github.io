import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Juventus</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Juventus"/>
        <meta name="description" content="Trending News about Juventus" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Juventus</h1>
            <Image width={800} height={500} src="https://s2.glbimg.com/WJCIuqRnT8q_Gv0Q3rcu-93J9Ls=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_f035dd6fd91c438fa04ab718d608bbaa/internal_photos/bs/2022/z/O/DIrHmETDqUTk1tduiJJQ/nedved-e-presidente-agnelli-1.jpg-554688468.jpg" alt="Juventus"/>
            <h3>Recent News</h3>
            <a href='https://valorinveste.globo.com/mercados/internacional-e-commodities/noticia/2022/11/29/conselho-da-juventus-renuncia-apos-investigacao-sobre-fraude-contabil.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Conselho da Juventus renuncia após investigação sobre fraude ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRUL0vjcI2pG563-ecNE_-gC5WrxyQ3kUTDXwq3qY1nRnJVq_9gvR3KblflbgcmwcXCXCWjOLAt" alt="Conselho da Juventus renuncia após investigação sobre fraude ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O presidente da Juventus, Andrea Agnelli, e todos os membros do conselho de administração do clube de futebol italiano se demitiram nesta terça-feira (29)&nbsp;...</p></div>
            </div>
        </a><a href='https://www.abola.pt/nnh/2022-11-29/caso-ronaldo-foi-o-rastilho-para-o-terramoto-na-juventus/966569'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Caso Ronaldo&#39; foi o rastilho para o terramoto na Juventus</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS_O9BL-j0BBrsN_oga2oMBFr3r3uGCWx2r_Vzn2wyybDsV3rz_Z82XlZ-lHuCiomrsrtLSRCq7" alt="&#39;Caso Ronaldo&#39; foi o rastilho para o terramoto na Juventus" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Na altura, a Juventus anunciou que os jogadores abdicaram de receber esses meses mas, na verdade, os pagamentos, garante a Gazzetta Dello Sport, foram feitos &#39;&nbsp;...</p></div>
            </div>
        </a><a href='https://www.abola.pt/nnh/2022-11-29/juventus-anunciado-o-novo-presidente-da-juventus/966480'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Anunciado o novo presidente da Juventus</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTizPylud2kOLhPgCkl2TSrrN8IDA5AbZhyilCmxdvHDD8K2EajDAJNUwp2E7fvTX0tvL9_566S" alt="Anunciado o novo presidente da Juventus" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Os membros do conselho de administração da Juventus, incluindo o presidente Andrea Agnelli e o vice-presidente Pavel Nedved, renunciaram segunda-feira à&nbsp;...</p></div>
            </div>
        </a><a href='https://eco.sapo.pt/2022/11/28/direcao-da-juventus-demite-se-em-bloco-apos-suspeita-de-fraude/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Direção da Juventus demite-se após suspeita de fraude</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR1Yf6k89uXmH_JnTFEnlfCb0xNIoPP1jyNjOYiig9Qbk2pSe3HK3-05SA2VAYDZzOiwscWic98" alt="Direção da Juventus demite-se após suspeita de fraude" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A direção do clube italiano Juventus demitiu-se esta segunda-feira, incluindo o presidente Andrea Agnelli, o vice-presidente Pavel Nedved e o CEO Maurizio&nbsp;...</p></div>
            </div>
        </a><a href='https://www.jornaldenegocios.pt/empresas/desporto/detalhe/presidente-andrea-agnelli-e-restantes-administradores-demitem-se-da-juventus'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Presidente Andrea Agnelli e restantes administradores demitem-se ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT915DIzWmwbx4zijrMagPezkQeHO2q-NgZuU4QlMkkUhj-0aDJij3IVc0zloJS0Ktsj9cW66Ir" alt="Presidente Andrea Agnelli e restantes administradores demitem-se ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sob proposta de Andrea Agnelli, que comandou a formação de Turim nos últimos 12 anos, e tendo em conta &#39;a relevância dos assuntos legais e técnico&nbsp;...</p></div>
            </div>
        </a><a href='https://www.dn.pt/desporto/conselho-de-administracao-da-juventus-apresenta-renuncia-em-bloco-incluindo-presidente-do-clube-15396748.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Conselho de administração da Juventus apresenta renúncia em ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS1XDRsKcJ88a9VwAItd6MYDmEgqpCMmatH4LTkebgxikeXSUo3wtAN3KH9q4oB9QMT8qUzzq4P" alt="Conselho de administração da Juventus apresenta renúncia em ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O conselho de administração da Juventus apresentou renúncia em bloco, incluindo o presidente, Andrea Agnelli, e o vice-presidente, Pavel Nedved, informou,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ojogo.pt/internacional/noticias/direcao-da-juventus-demite-se-apos-denuncias-de-fraude-fiscal-15396785.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Direção da Juventus demite-se após denúncias de fraude fiscal</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRYbm-NOCqWvh-Lus7ZPGA9bfe8ZKrFUNRlF6SsmidlMEcC-H3qHqIe-0m6Qm-v5mqRGRW1Ws5-" alt="Direção da Juventus demite-se após denúncias de fraude fiscal" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nos próximos meses o clube irá a eleições para eleger um novo presidente. Casos em investigação são referentes a 2020, ano de pandemia.</p></div>
            </div>
        </a><a href='https://www.noticiasaominuto.com/desporto/2123240/la-liga-exige-sancoes-desportivas-imediatas-a-juventus'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>La Liga exige &quot;sanções desportivas imediatas&quot; contra a Juventus</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQzy80IVGGS7micnosE_eLadoQFZvCtcNq05Pr09rZDlD1J7-WESTC7osgSahNjk5urXBXo6_Ur" alt="La Liga exige &quot;sanções desportivas imediatas&quot; contra a Juventus" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>La Liga anunciou, em forma de comunicado emitido através das plataformas oficiais ao final da manhã desta terça-feira, que avançou com uma queixa junto da&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}