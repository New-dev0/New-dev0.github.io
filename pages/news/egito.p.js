import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Egito</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Egito"/>
        <meta name="description" content="Trending News about Egito" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Egito</h1>
            <Image width={800} height={500} src="https://midias.correiobraziliense.com.br/_midias/jpg/2022/11/18/675x450/1_cbifot140920211097-26875524.jpg?20221118161814?20221118161814" alt="Egito"/>
            <h3>Recent News</h3>
            <a href='https://www.correiobraziliense.com.br/mundo/2022/11/5052805-piramide-de-antiga-rainha-e-centenas-de-mumias-sao-descobertas-no-egito.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pirâmide de antiga rainha e centenas de múmias são descobertas ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQN3c688gcTZG7XHPWU7EcCVtq7jUr3ycbtM2uYMYI10BiyQAoYfBB2Zp0YyF3LPeiqtTUOvJxs" alt="Pirâmide de antiga rainha e centenas de múmias são descobertas ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Os arqueólogos encontraram múmias bem preservadas dentro dos caixões. Além de jogos e pequenas estatuetas. CB. Correio Braziliense.</p></div>
            </div>
        </a><a href='https://extra.globo.com/noticias/politica/eu-tinha-um-amigo-que-vinha-tinha-um-aviao-diz-lula-sobre-uso-de-jatinho-na-viagem-ao-egito-para-cop27-25611282.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Eu tinha um amigo que vinha e tinha um avião, diz Lula sobre uso ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTn7NK_42lFbZGB4kihZrjkCscMK2Zk5Q74nZZKaq9RHKEnN_sdZ1LCSIhlYPaByZWPy9eVtMjL" alt="&#39;Eu tinha um amigo que vinha e tinha um avião, diz Lula sobre uso ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O presidente eleito Luiz Inácio Lula da Silva (PT) explicou, nesta sexta-feira, o uso do jatinho do empresário José Seripieri Filho, dono da operadora&nbsp;...</p></div>
            </div>
        </a><a href='https://www.em.com.br/app/noticia/politica/2022/11/18/interna_politica,1422906/lula-sobre-carona-em-jatinho-para-egito-meu-amigo-tinha-um-aviao.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lula sobre carona em jatinho para Egito: &#39;Meu amigo tinha um avião&#39;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSLLKCgi6fOCfcy3J8bnzfVRQCt0MdaQZbLPf9uwQJhIPXuRC4RU93IwCOWKwlHHMBu3TnfE5kD" alt="Lula sobre carona em jatinho para Egito: &#39;Meu amigo tinha um avião&#39;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O presidente eleito responsabilizou Jair Bolsonaro (PL) e apoiadores raivosos pela utilização do jato para viagem.</p></div>
            </div>
        </a><a href='https://www.cnnbrasil.com.br/esporte/belgica-egito-amistoso-copa-do-mundo-2022-catar/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bélgica perde para Egito no último amistoso antes da Copa</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ_AyVGDhPkFgPp5qtJ45XRLf6oPvmsYMw8n4kdEIlE-mdIQ82AxC6VdGhvmd_AZaEAvxIEUB9S" alt="Bélgica perde para Egito no último amistoso antes da Copa" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ainda sem Lukaku, a seleção da Bélgica foi a única de seu grupo na Copa do Mundo a perder o último amistoso antes do Mundial no Catar.</p></div>
            </div>
        </a><a href='https://www.uol.com.br/esporte/futebol/ultimas-noticias/gazeta-esportiva/2022/11/18/belgica-decepciona-e-perde-para-o-egito-em-ultimo-teste-antes-da-copa.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bélgica decepciona e perde para o Egito em último teste antes da ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Bélgica decepciona e perde para o Egito em último teste antes da ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A Bélgica decepcionou em seu último compromisso antes de embarcar ao Catar para a disputa da Copa do Mundo. A seleção foi derrotada no amistoso contra o&nbsp;...</p></div>
            </div>
        </a><a href='https://gauchazh.clicrbs.com.br/esportes/copa-do-mundo/noticia/2022/11/belgica-perde-para-o-egito-no-ultimo-amistoso-antes-da-copa-clamnf56t000k014ur9f5zknl.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bélgica perde para o Egito no último amistoso antes da Copa</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRWy8nsixZjmTxY8GX66ta-dmk0eZoR5IIv7k5pYTKTtsxKYb8G-S3gyO2zPhwIYbRnjHjpYr-3" alt="Bélgica perde para o Egito no último amistoso antes da Copa" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Seleção de De Bruyne e cia não encaixou seu jogo contra a equipe de Salah.</p></div>
            </div>
        </a><a href='https://noticias.uol.com.br/ultimas-noticias/rfi/2022/11/18/lula-brilha-na-cop27-mas-deixa-o-egito-sem-responder-sobre-viagem-em-jatinho.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lula brilha na COP27, mas deixa o Egito sem responder sobre ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Lula brilha na COP27, mas deixa o Egito sem responder sobre ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Depois de três dias de uma intensa agenda de encontros na Conferência das Nações Unidas sobre as Mudanças Climáticas (COP27), em Sharm el-Sheikh,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.espn.com.br/futebol/copa-do-mundo/artigo/_/id/11243946/belgica-perde-egito-ultimo-amistoso-antes-copa-do-mundo-qatar'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>De Bruyne erra feio, e Bélgica perde para o Egito no último ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSHybh5GU6ruNOZ_BlwflwzwUHYaXNwcyx1iAxNsVJ0CFqJH72F0iAbH4zbdKyflUZ10TZ7m5KV" alt="De Bruyne erra feio, e Bélgica perde para o Egito no último ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Red Devils estreiam no Mundial do Qatar contra o Canadá na quarta-feira (23), às 16h (de Brasília), pelo grupo F.</p></div>
            </div>
        </a><a href='https://www.lance.com.br/copa-do-mundo/belgica/de-bruyne-vacila-e-belgica-perde-para-o-egito-em-ultimo-amistoso-antes-da-copa-do-mundo.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>De Bruyne vacila, e Bélgica perde para o Egito em último amistoso ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRevGhzu88mJU2MOZfUN0ELNdkjq-yiJ5mYM6cvOugX_rohG7UA61VXM3kcOsjLitndOg3MvPZc" alt="De Bruyne vacila, e Bélgica perde para o Egito em último amistoso ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Meio-campista atuou por 45 minutos e deu a bola nos pés de Mohamed, que abriu o placar de partida; Hazard também foi titular, mas sem grande destaque.</p></div>
            </div>
        </a><a href='https://www.terra.com.br/nos/cop-no-egito-e-oportunidade-para-africanos-falarem-a-uma-so-voz-diz-guineense,9077ea8d85fc567e0898a9af9b0d7f1fph3yf92n.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;COP no Egito é oportunidade para africanos falarem a uma só voz ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQC2HNDQi51ayMlXFXhGUCyRk489wZlhAR-fkiL-ag94fClbJNCik1aIgEXLF1o_cwKilADBOmG" alt="&quot;COP no Egito é oportunidade para africanos falarem a uma só voz ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Financiamento para a compensação de perdas e danos devido às mudanças climáticas e para apoiar a adaptação ao clima é a pauta central do continente africano&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}