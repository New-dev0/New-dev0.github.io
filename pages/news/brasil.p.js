import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Brasil</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Brasil"/>
        <meta name="description" content="Trending News about Brasil" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Brasil</h1>
            <Image width={800} height={500} src="https://imagens.ebc.com.br/0H0mGgfdtwRi-7NhnzTFOdGt9qQ=/1600x800/https://agenciabrasil.ebc.com.br/sites/default/files/thumbnails/image/fachada_do_ministerio_da_economia2402221041.jpg?itok=c8coxKBV" alt="Brasil"/>
            <h3>Recent News</h3>
            <a href='https://agenciabrasil.ebc.com.br/economia/noticia/2022-11/ministerio-eleicao-de-goldfajn-para-bid-traz-reconhecimento-ao-brasil'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ministério: eleição de Goldfajn para BID traz reconhecimento ao Brasil</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSRshb5ILckQ3fcnwjd3LoCMrw8OoSKtGmugsvA8MPVFBSA_QuGJOz7DJl79x9YAI8h74ysg7_1" alt="Ministério: eleição de Goldfajn para BID traz reconhecimento ao Brasil" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Gestão do brasileiro terá três eixos: melhoria de infraestrutura física e digital; combate à pobreza; e combate à mudança climática e proteção da&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cartacapital.com.br/opiniao/voltamos-a-normalidade-no-brasil-aquela-que-nos-enfiou-nesse-buraco/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Voltamos à normalidade no Brasil. Aquela que nos enfiou nesse ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT7fOgoGSoiUo8iawLr4JviBWTP_PDmME_suYx_okDQSE_VS4V41dsYvYB2s_lXjoVWic4jTJEv" alt="Voltamos à normalidade no Brasil. Aquela que nos enfiou nesse ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O presidente eleito, que ainda sequer tomou posse, se tornou alvo e o responsável por &#39;equilibrar as contas públicas&#39; da farra deste governo que aí ainda&nbsp;...</p></div>
            </div>
        </a><a href='https://valor.globo.com/brasil/noticia/2022/11/20/veja-como-a-economia-do-brasil-se-sai-na-copa-de-2022-do-pib.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Veja como a economia do Brasil se sai na Copa de 2022 do PIB</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSfsmchW7nt_vF_WY4TCTgbQuJTCLxSn_W8hGSILR-meddvsynAGRsyHwxnoNO5LGVGzOXv2uH-" alt="Veja como a economia do Brasil se sai na Copa de 2022 do PIB" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>No futebol, resultado brasileiro seria daqueles que seriam lembrados por gerações e gerações.</p></div>
            </div>
        </a><a href='https://valor.globo.com/brasil/noticia/2022/11/20/ilan-no-bid-vai-projetar-brasil-na-esfera-internacional-diz-coordenador-da-campanha.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ilan no BID vai projetar Brasil na esfera internacional, diz ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTk-vpAOXM-p0VcYTa75GeonG0m1_k2MG6dWDpGHOsDSYgNa8-Eq_w6cIyPUarclUtyhe5fmDY6" alt="Ilan no BID vai projetar Brasil na esfera internacional, diz ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Lucas Ferraz diz que economista vai contribuir para pautas fundamentais do momento, como mudanças climáticas e infraestrutura regional.</p></div>
            </div>
        </a><a href='https://www.cnnbrasil.com.br/business/brasil-vence-eleicoes-para-presidencia-do-bid-e-ocupara-cargo-pela-primeira-vez/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Brasil vence eleições para presidência do BID e ocupará cargo pela ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRS6hKx1T7aubeZd17FT-thctXiap0KaoqPvxTefVCBz2U3AHFnPR3ddsOSM_b4dZw0wXkRCT9X" alt="Brasil vence eleições para presidência do BID e ocupará cargo pela ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O economista brasileiro Ilan Goldfajn foi eleito presidente do Banco Interamericano de Desenvolvimento (BID). É a primeira vez que o Brasil vai presidir a&nbsp;...</p></div>
            </div>
        </a><a href='https://sul21.com.br/noticias/economia/2022/11/indicado-pelo-brasil-ilan-goldfajn-e-eleito-presidente-do-bid/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Indicado pelo Brasil, Ilan Goldfajn é eleito presidente do BID - Sul 21</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSc7VNvcUDZHoKb5dreelLzDA2CjfBQHEtgGNjaBnsVQpuBm-IhKY_ZzXxURGcgkVruuMAt2A_I" alt="Indicado pelo Brasil, Ilan Goldfajn é eleito presidente do BID - Sul 21" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Indicado pelo governo brasileiro, Ilan Goldfajn foi eleito hoje (20) presidente do Banco Interamericano de Desenvolvimento (BID). A informação foi confirmada&nbsp;...</p></div>
            </div>
        </a><a href='https://www1.folha.uol.com.br/mercado/2022/11/minha-candidatura-representa-o-brasil-diz-ilan-goldfajn-apos-ser-eleito-presidente-do-bid.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Não podemos desperdiçar este momento histórico&#39;, diz Ilan ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQsxV7yJQiwBtck-98tyYDsTixv3O6DHhWF-Zg6kJ9gbl75iAPjJr87TxI89FQxSv5SuoowduvB" alt="&#39;Não podemos desperdiçar este momento histórico&#39;, diz Ilan ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>É hora de harmonia e de trabalho que orgulhe a todos, diz economista após eleição à revelia de ala do PT; executivo defende combate à fome e crescimento&nbsp;...</p></div>
            </div>
        </a><a href='https://veja.abril.com.br/coluna/radar-economico/a-vez-do-brasil-no-comando-do-maior-banco-de-fomento-da-america-latina/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>A vitória do Brasil e de Ilan Goldfajn à presidência do BID</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ_Y1O09lgx56vHbkPZLiiD4wX3RTCjmvfcgixxP1nDpxV5PZOG2roR_B2edzFDMS2j1KtDRJ50" alt="A vitória do Brasil e de Ilan Goldfajn à presidência do BID" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ilan Goldfajn foi eleito presidente do BID neste domingo; será o primeiro brasileiro a comandar o banco de fomento.</p></div>
            </div>
        </a>
        </Template></>;
}