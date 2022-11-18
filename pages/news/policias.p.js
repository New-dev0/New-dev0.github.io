import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Policias</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Policias"/>
        <meta name="description" content="Trending News about Policias" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Policias</h1>
            <Image width={800} height={500} src="https://wm.observador.pt/wm/obs/l/https%3A%2F%2Fbordalo.observador.pt%2Fv2%2Frs%3Afill%3A770%3A403%2Fc%3A4096%3A2303%3Anowe%3A0%3A213%2Fq%3A85%2Fplain%2Fhttps%3A%2F%2Fs3.observador.pt%2Fwp-content%2Fuploads%2F2022%2F11%2F17114700%2FGettyImages-1404086042-scaled.jpg" alt="Policias"/>
            <h3>Recent News</h3>
            <a href='https://observador.pt/2022/11/17/odio-racista-e-ameacas-de-policias-e-gravissimo/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Ódio racista&quot; e ameaças de polícias é &quot;gravíssimo&quot;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTk-rO36MhnYD6xuUhcoQDxqA3egAtnxumAWOAm1Lh8PrpzkLdzJzhPHx8xoVQc5D1Qvw3LfW0p" alt="&quot;Ódio racista&quot; e ameaças de polícias é &quot;gravíssimo&quot;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&quot;O PCP considera gravíssimo os dados agora vindos a público sobre umas centenas de elementos da PSP e da GNR que expressam o ódio racista e xenófobo&quot;,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.tsf.pt/portugal/politica/mensagens-de-odio-atitude-do-governo-denigre-imagem-dos-policias-15361182.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Não o faremos.&quot; Ventura recusa dar ao Governo nomes de polícias ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT5oNVa030JReyBeYQGGLUT5P_EFBro6m4IpT7yXHXuctGUpRWr10RcophBRrmELstMicKffyQl" alt="&quot;Não o faremos.&quot; Ventura recusa dar ao Governo nomes de polícias ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>André Ventura argumentou que, durante anos, ninguém se preocupou que outras classes profissionais fossem próximas do PCP, BE ou PS.</p></div>
            </div>
        </a><a href='https://www.jn.pt/justica/pgr-abre-inquerito-a-discurso-de-odio-das-policias-nas-redes-sociais--15363200.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>PGR abre inquérito a discurso de ódio das polícias nas redes sociais</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRVCaTGzL7Q3pFdtXd_lAmsXf9NkKYYwumuvlsyQJyvROYbPmCvIWDp6t2WOpGxeQ8_UKT4ebPf" alt="PGR abre inquérito a discurso de ódio das polícias nas redes sociais" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A Procuradoria-Geral da República (PGR) abriu um inquérito à queixa apresentada pela Direção Nacional da PSP relativa à publicação, por agentes das forças&nbsp;...</p></div>
            </div>
        </a><a href='https://sicnoticias.pt/pais/2022-11-17-PGR-abre-inquerito-a-publicacoes-de-odio-de-policias-nas-redes-sociais-f9b8e515'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>PGR abre inquérito a publicações de ódio de polícias nas redes ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRHa7CiSplXehcEBdWeCnLVEuFurZk-wkd-SKDBUHDiWJG7y-hBGPD9op-_VwIyL-LZsHjeU9yU" alt="PGR abre inquérito a publicações de ódio de polícias nas redes ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Representantes das forças de segurança integram base de dados a que o Consórcio de Jornalistas de Investigação portugueses, de que fazem parte a SIC e o&nbsp;...</p></div>
            </div>
        </a><a href='https://www.publico.pt/2022/11/17/politica/noticia/ventura-acusa-governo-atitude-persecutoria-policias-2028121'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ventura acusa Governo de perseguir polícias. Chega desconhece ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTCC7DB_OgyswKRgOE04qADFGLUrR12qOB4ZhYgzjCacuI16c06LZwDu75n_lvaqlBkFXF29Au3" alt="Ventura acusa Governo de perseguir polícias. Chega desconhece ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Líder do Chega considera que casos noticiados não passam de uma “amostra muito insignificante”. Ao PÚBLICO, o Chega diz não saber se e quantos elementos das&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rtp.pt/madeira/politica/ventura-acusa-governo-de-atitude-persecutoria-contra-policias-_105891'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ventura acusa Governo de «atitude persecutória» contra polícias</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQVOvJWn6PfOZdGB14z986syr1EO9nmQaWnOLklPw2QT2k-3DW77H1wfwFKFwZ-TSGSu-emOFAb" alt="Ventura acusa Governo de «atitude persecutória» contra polícias" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>“O Chega é frontalmente contra, conforme os seus estatutos deixam claro, quaisquer práticas de racismo, xenofobia ou discriminação”, disse, numa declaração&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rtp.pt/noticias/pais/mensagens-de-odio-de-policias-e-caso-grave-mas-minoritario-diz-observatorio_n1447795'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mensagens de ódio de polícias é caso &quot;grave&quot;, mas minoritário, diz ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Mensagens de ódio de polícias é caso &quot;grave&quot;, mas minoritário, diz ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O vice-presidente do Observatório de Segurança Interna, Hugo Costeira, considerou hoje &quot;grave&quot; o caso das mensagens discriminatórias publicadas nas redes&nbsp;...</p></div>
            </div>
        </a><a href='https://expresso.pt/revista/2022-11-17-Racismo-nas-policias-como-o-caso-das-agressoes-na-esquadra-de-Alfragide-destapou-uma-realidade-incomoda-c070f0b4'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Racismo nas polícias: como o caso das agressões na esquadra de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTSG8Y3K74sqdzGagpvSjTAgRPWYhd0Iuc9Vn_qmCKkVrYdwqTjR_z-BuHyWG6bMXgkNZ4FVuWm" alt="Racismo nas polícias: como o caso das agressões na esquadra de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Há grupos fechados de Facebook onde operacionais das forças de segurança portuguesas se exprimem à vontade. Fazem posts, trocam mensagens e escrevem&nbsp;...</p></div>
            </div>
        </a><a href='https://sicnoticias.pt/programas/reportagemsic/2022-11-17-Quando-o-odio-veste-farda-as-vitimas-do-odio-de-policias-nas-redes-sociais-cccb46a0'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Quando o ódio veste farda&quot;: as vítimas do ódio de polícias nas ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRtm-RIZ9Eq3lhVFe-sr8IZN2JaN68tC0htfzPiS_UZXpzBSVA8nQ1QjHBTWoML9RiKs4-TnOts" alt="&quot;Quando o ódio veste farda&quot;: as vítimas do ódio de polícias nas ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Esta Grande Reportagem resulta de uma investigação dos jornalistas Pedro Coelho, Filipe Teles, Paulo Pena, Cláudia Marques Santos e Ricardo Cabral Fernandes.</p></div>
            </div>
        </a><a href='https://visao.sapo.pt/atualidade/politica/2022-11-17-constanca-urbano-de-sousa-sobre-caso-dos-policias-so-um-caso-ja-era-grave/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Constança Urbano de Sousa sobre caso dos polícias: “Só um caso ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTFUN00DogL-NaYslraksrqorONPW68XtEwuro_RmpVAbs8wwg1IN0K_na1pMq9JCXSpC80ccI" alt="Constança Urbano de Sousa sobre caso dos polícias: “Só um caso ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>“Não há lugar para racistas, xenófobos e extremistas nas forças de segurança”, defende, à VISÃO, a ex-ministra da Administração Interna.</p></div>
            </div>
        </a>
        </Template></>;
}