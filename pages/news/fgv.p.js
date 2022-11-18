import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>FGV</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,FGV"/>
        <meta name="description" content="Trending News about FGV" /></Head><Template>
            <h1 style={{fontSize: "30"}}>FGV</h1>
            <Image width={800} height={500} src="https://conteudo.imguol.com.br/c/noticias/bf/2022/11/17/17nov22---integrantes-da-policia-federal-deflagram-operacao-contra-um-esquema-de-corrupcao-fraudes-a-licitacoes-evasao-de-divisas-e-lavagem-de-dinheiro-que-explorava-a-fgv-1668686145879_v2_615x300.jpg" alt="FGV"/>
            <h3>Recent News</h3>
            <a href='https://economia.uol.com.br/noticias/redacao/2022/11/17/pf-deflagra-operacao-contra-corrupcao-na-fgv-familia-simonsen-e-alvo.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>PF investiga esquema de corrupção na FGV; família Simonsen é alvo</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTXWuIzi9EJWy20JtVx3qsaK_NprQoZ477C3vBiLsEIY4FCEceBN-QtXCb5ZjLlG0D_W1tRGsHY" alt="PF investiga esquema de corrupção na FGV; família Simonsen é alvo" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Agentes da PF cumprem na manhã de hoje 29 mandados de busca e apreensão no Rio de Janeiro e em São Paulo. A investigação começou em 2019.</p></div>
            </div>
        </a><a href='https://obastidor.com.br/justica/fgv-na-mira-da-policia-4689'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FGV na mira da polícia – O Bastidor</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS8xyletlpj76N8tvGV_2aCl8jvuNnZZ_w0U5SgT8YL8EvSLP2DYPRqaWnVV6SW91NpmFKYeMRH" alt="FGV na mira da polícia – O Bastidor" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Segundo o G1, estão entre os investigados Ricardo Simonsen, Maria Inês Norbert Simonsen e Rafael Norbert Simonsen. O presidente da FGV, Carlos Ivan Simonsen&nbsp;...</p></div>
            </div>
        </a><a href='https://gauchazh.clicrbs.com.br/economia/noticia/2022/11/fgv-esta-na-mira-do-ministerio-publico-do-rio-de-janeiro-desde-2018-clalmblw3000501g2sg0sozpz.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FGV está na mira do Ministério Público do Rio de Janeiro desde 2018</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="FGV está na mira do Ministério Público do Rio de Janeiro desde 2018" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Segundo os promotores, no episódio, a FGV subcontratou empresas com pagamentos superfaturados para viabilizar propinas. Segundo o MP-RJ, a instituição recebeu R&nbsp;...</p></div>
            </div>
        </a><a href='https://www.direcaoconcursos.com.br/noticias/concurso-fgv-operacao-pf-editais/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Concurso FGV: operação não deve afetar certames, dizem ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTekM-U3lLifvKKj3uRBUAyTAMc_q8wnIDgQqItvM2dwFtHtLUJi-JsHA4tghRosSxXZHFqf1Tf" alt="Concurso FGV: operação não deve afetar certames, dizem ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A informação foi dada à equipe de jornalismo do Direção Concursos pela diretora-geral do Senado, Ilana Trombka, órgão que também tem editais geridos pela&nbsp;...</p></div>
            </div>
        </a><a href='https://g1.globo.com/rj/rio-de-janeiro/noticia/2022/11/17/pf-cumpre-mandados-no-rj.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>PF faz operação contra supostas fraudes na Fundação Getúlio ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQRrqF1WfcOVSw49Ge3IM6ppbqsvaMAGmdIUjicqJs6rJMu7_HLrhJpqyO92KVrJY7K_tCUxcft" alt="PF faz operação contra supostas fraudes na Fundação Getúlio ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Entre os alvos de buscas estão Ricardo Simonsen, MariaI Inês Norbert Simonsen e Rafael Norbert Simonsen. O presidente da FGV, Carlos Ivan Simonsen Leal, não foi&nbsp;...</p></div>
            </div>
        </a><a href='https://www.correiobraziliense.com.br/politica/2022/11/5052428-pf-faz-operacao-para-apurar-esquema-de-corrupcao-que-usava-fgv.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>PF faz operação para apurar esquema de corrupção que &#39;usava&#39; FGV</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSualbQflqEsXBoxEs3RqqLkaMuaixEGb9ytO-dQGMrzGq8V8HA0Wef4GWfJ5IkXBmq7RfTf_xj" alt="PF faz operação para apurar esquema de corrupção que &#39;usava&#39; FGV" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cerca de cem policiais participam das diligências, cumprindo 26 mandados na capital fluminense e três na capital paulista.</p></div>
            </div>
        </a><a href='https://portal.fgv.br/noticias/evento-aborda-lideranca-e-transformacao-digital'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Evento aborda liderança e transformação digital</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTHOBvO7GlmRSlruWOB1P3aiTA5CLAJDPb8QP9cmOBjaMmMXqqQz_a9e2m9JtYkuhUVVvb1WSZ-" alt="Evento aborda liderança e transformação digital" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Rodrigo Kede Lima, presidente América Latina e VP Corporativo da Microsoft, será o entrevistado do FGV In Company &amp; Academia CEO.</p></div>
            </div>
        </a>
        </Template></>;
}