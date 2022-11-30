import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Isabel dos Santos</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Isabel dos Santos"/>
        <meta name="description" content="Trending News about Isabel dos Santos" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Isabel dos Santos</h1>
            <Image width={800} height={500} src="https://wm.observador.pt/wm/obs/l/https%3A%2F%2Fbordalo.observador.pt%2Fv2%2Frs%3Afill%3A770%3A403%2Fc%3A1280%3A719%3Anowe%3A0%3A0%2Fq%3A85%2Fplain%2Fhttps%3A%2F%2Fs3.observador.pt%2Fwp-content%2Fuploads%2F2020%2F11%2F01234754%2F1q9a0995-scaled_1280x720_acf_cropped.jpg" alt="Isabel dos Santos"/>
            <h3>Recent News</h3>
            <a href='https://observador.pt/2022/11/29/isabel-dos-santos-em-entrevista-a-cnn-o-unico-sitio-onde-nao-estou-a-salvo-e-em-angola/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Isabel dos Santos em entrevista à CNN: &quot;O único sítio onde não ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQRRZ1GM_pEmTnpsfIn9-iOE9hdy3BXwqbioNQ4BwtTgI4FR248cGlRAIr3VBDRxKHfrwRllMYq" alt="Isabel dos Santos em entrevista à CNN: &quot;O único sítio onde não ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Filha de ex-Presidente José Eduardo dos Santos deu entrevista a partir de local não desvendado, quando pende sobre si um mandado de busca da Interpol.</p></div>
            </div>
        </a><a href='https://eco.sapo.pt/2022/11/29/isabel-dos-santos-recusa-favorecimentos-politicos-em-lisboa/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Isabel dos Santos recusa favorecimentos políticos em Lisboa</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR9nHTrAc8R-80td--1t0gbMJCz_2MyNwQnkCdihCQ0OrRchU0wwhDbZ_-hGYNUoos4Y2xq1vmX" alt="Isabel dos Santos recusa favorecimentos políticos em Lisboa" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Em entrevista à TVI, a empresária angolana diz que não sabe se António Costa ligou mesmo a Carlos Costa, mas garante que a sua &quot;relação com Portugal foi&nbsp;...</p></div>
            </div>
        </a><a href='https://www.publico.pt/2022/11/29/mundo/noticia/isabel-santos-alvo-perseguicao-politica-2029697'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Isabel dos Santos: “Sou alvo de perseguição política”</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQsLrAaflpr9huKquwkX5-eR7zhoAptmSxiW3DOvRGciIG1OJtO7J5qT2hApXjX8bqhzrEGyPfm" alt="Isabel dos Santos: “Sou alvo de perseguição política”" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Empresária angolana diz, em entrevista à CNN, que se sente “perseguida politicamente” por João Lourenço, que acusa ainda de não respeitar a separação de&nbsp;...</p></div>
            </div>
        </a><a href='https://www.dn.pt/internacional/isabel-dos-santos-diz-se-perseguida-e-acusa-diretamente-o-atual-presidente--15401585.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Isabel dos Santos diz-se &quot;perseguida&quot;. E acusa diretamente o atual ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRYgeAsF-buk_Ny8ijkpeQPGyVxvRnvMyiIN8WWgIf8vJMRRyv-tpb8n5lm7_J7NBWGb3gl7hS3" alt="Isabel dos Santos diz-se &quot;perseguida&quot;. E acusa diretamente o atual ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A empresária angolana Isabel dos Santos disse hoje numa entrevista que se sente &quot;perseguida politicamente&quot; pelo atual Presidente de Angola, João Lourenço,&nbsp;...</p></div>
            </div>
        </a><a href='https://rr.sapo.pt/noticia/mundo/2022/11/30/de-uma-forma-ou-de-outra-isabel-dos-santos-promete-contribuir-para-o-futuro-de-angola/310065/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;De uma forma ou de outra&quot;, Isabel dos Santos promete contribuir ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRBjI53nZ1d3u0Xv4_-dZSaBjoqYWbSNf44xlmdZ9NS2lHt2RHhzswriJhpClT6AgQPRJVXBubm" alt="&quot;De uma forma ou de outra&quot;, Isabel dos Santos promete contribuir ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>“Eu ambiciono um país diferente”, frisou, defendendo que Angola “precisa de um novo futuro político”. “Acho que nós hoje temos desafios que são outros, que já&nbsp;...</p></div>
            </div>
        </a><a href='https://cnnportugal.iol.pt/isabel-dos-santos/angola/isabel-dos-santos-quer-fazer-politica-em-angola-o-unico-sitio-onde-hoje-nao-esta-a-salvo/20221129/63868d440cf255d6e13dbf72'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Isabel dos Santos quer fazer política em Angola, o &quot;único sítio&quot; onde ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRXZzVdzuJeQTT3lrXRyFNY9rVrspeXvg_Em01CeS-73dK0MhqSgyQWOD1wu-dzW0dXE2g3ZowW" alt="Isabel dos Santos quer fazer política em Angola, o &quot;único sítio&quot; onde ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Em entrevista exclusiva à TVI e à CNN Portugal, a empresária angolana acusa o governo liderado por João Lourenço de perseguição política.</p></div>
            </div>
        </a>
        </Template></>;
}