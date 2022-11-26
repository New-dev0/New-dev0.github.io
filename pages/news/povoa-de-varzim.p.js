import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Povoa de Varzim</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Povoa de Varzim"/>
        <meta name="description" content="Trending News about Povoa de Varzim" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Povoa de Varzim</h1>
            <Image width={800} height={500} src="https://wm.observador.pt/wm/obs/l/https%3A%2F%2Fbordalo.observador.pt%2Fv2%2Frs%3Afill%3A770%3A403%2Fc%3A1920%3A1078%3Anowe%3A0%3A277%2Fq%3A85%2Fplain%2Fhttps%3A%2F%2Fs3.observador.pt%2Fwp-content%2Fuploads%2F2022%2F11%2F25124458%2Fwhatsapp-image-2022-11-25-at-121650.jpeg" alt="Povoa de Varzim"/>
            <h3>Recent News</h3>
            <a href='https://observador.pt/2022/11/25/jovem-de-20-anos-desaparecida-depois-de-ter-sido-arrastada-por-onda-numa-praia-da-povoa-de-varzim/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Autoridades encontram corpo de jovem militar desaparecida na ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQUGoKs7NKAFfzVZp-V7xJSG26O97vVW2ORRBsyKumhN-zDtydMLFbeGUQUhFyojL0Jh7ldWBZo" alt="Autoridades encontram corpo de jovem militar desaparecida na ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Oito jovens militares foram arrastados esta madrugada pelas ondas da praia da Lagoa, na Póvoa de Varzim. Após saírem de um bar, decidiram &quot;molhar os pés&quot;.</p></div>
            </div>
        </a><a href='https://www.publico.pt/2022/11/25/sociedade/noticia/tres-jovens-resgatados-desaparecido-praia-lagoa-povoa-varzim-2029139'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Corpo da militar desaparecida na Póvoa de Varzim encontrado</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRg0uXNyTCwehxNZ4D-w7ev68B3w-gexPTWjjd9bLWVJ2Z2XxYhLCeM5kug7knPExm3T90MeYrw" alt="Corpo da militar desaparecida na Póvoa de Varzim encontrado" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O alerta para o incidente envolvendo oito militares que frequentavam um curso de formação da Escola Prática de Serviços da Póvoa de Varzim foi dado às 4h48.</p></div>
            </div>
        </a><a href='https://www.dn.pt/sociedade/retirado-corpo-do-mar-em-praia-na-povoa-de-varzim-15388205.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Retirado corpo do mar em praia na Póvoa de Varzim</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRcTTVMX2bm-BjUIwSbxJIhxYRI6-WK5kh3fIIFmcpElzUt45CcxBQe4hPbw_6eEbjK2TAkinSv" alt="Retirado corpo do mar em praia na Póvoa de Varzim" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O corpo foi localizado na água cerca de meia hora antes do resgate, que foi posteriormente efetuado por um mergulhador que saiu do helicóptero.</p></div>
            </div>
        </a><a href='https://www.jn.pt/local/noticias/porto/povoa-de-varzim/localizado-corpo-da-militar-que-desapareceu-na-povoa-de-varzim-15388106.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Resgatado corpo da militar que desapareceu na Póvoa de Varzim</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSvpGxTXfj6nmn7jxgj3BTYwFRXiirCDuVm1kBlRx5a8C6XowfGcXRImv_reY4Vxtij38swL7Iq" alt="Resgatado corpo da militar que desapareceu na Póvoa de Varzim" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O cadáver da militar de 20 anos que se encontrava desaparecida desde a madrugada desta sexta-feira, na praia da Lagoa, Póvoa de Varzim, foi localizado e&nbsp;...</p></div>
            </div>
        </a><a href='https://rr.sapo.pt/noticia/pais/2022/11/25/marcelo-lamenta-morte-de-jovem-militar-na-povoa-de-varzim/309600/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Marcelo lamenta morte de jovem militar na Póvoa de Varzim ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR_TQ0PqcJTrUOK0A9I0JeCPRMPm5kRDxnGLO5-q3VK7k35Uh-J-eHjGtOyx4d3G-_ujQ5QgFFA" alt="Marcelo lamenta morte de jovem militar na Póvoa de Varzim ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Presidente apresentou os &quot;seus sentidos pêsames&quot; aos familiares e ao Exército. Corpo da vítima, uma jovem de 20 anos, foi encontrado pelas 16h00 desta&nbsp;...</p></div>
            </div>
        </a><a href='https://24.sapo.pt/atualidade/artigos/o-que-aconteceu-aos-militares-no-mar-da-povoa-de-varzim'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>O que aconteceu aos militares no mar da Póvoa de Varzim?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT4_fviq6hRVuZ7rbSwTlYeJEF2gz_zgtCkOoNS4LlbrhY-4gRSQFYE0nLnpcnOTW1TTcymwBGC" alt="O que aconteceu aos militares no mar da Póvoa de Varzim?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Até ao início da tarde, três das vítimas tinham sido transferidas para o Hospital Militar do Porto para “continuarem a ser vigiadas”, três tinham recebido alta&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rtp.pt/noticias/pais/corpo-resgatado-no-mar-da-povoa-de-varzim-sera-o-da-jovem-militar-desaparecida_n1449647'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Corpo resgatado no mar da Póvoa de Varzim &quot;será&quot; o da jovem ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Corpo resgatado no mar da Póvoa de Varzim &quot;será&quot; o da jovem ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sete das vítimas conseguiram regressar a terra, mas uma jovem, de 20 anos, ficou desaparecida. Os sete militares foram encaminhados para o Centro Hospitalar da&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}