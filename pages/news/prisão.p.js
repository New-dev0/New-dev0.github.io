import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Prisão</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Prisão"/>
        <meta name="description" content="Trending News about Prisão" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Prisão</h1>
            <Image width={800} height={500} src="https://www.infomoney.com.br/wp-content/uploads/2019/06/bandeira-do-peru.jpg?quality=70" alt="Prisão"/>
            <h3>Recent News</h3>
            <a href='https://www.infomoney.com.br/economia/castilho-esta-em-prisao-preventiva-e-dina-boluarte-admite-marcar-novas-eleicoes/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Castillo está em prisão preventiva e Dina Boluarte admite marcar ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR4aB3YYhbv7Y333gQboKjOKEVgxdvmeN5BDV_PQdiga7WasNxsRoRujAPP0JioMw9ss1F5kAD7" alt="Castillo está em prisão preventiva e Dina Boluarte admite marcar ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nova presidente afirma que, se sociedade pedir e situação se justificar, pode antecipar a disputa eleitoral; Castillo diz que não pegou armas.</p></div>
            </div>
        </a><a href='https://www.metropoles.com/brasil/justica/mendonca-vota-para-derrubar-prisao-preventiva-de-sergio-cabral'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mendonça vota para derrubar prisão preventiva de Sérgio Cabral</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ2TTZ4o6QiANgVGfk5X28yq27NF1A4dlSRgvmIR20ipEfXk9O1K9ruWtI4nSEUxshmWoZ2wkf8" alt="Mendonça vota para derrubar prisão preventiva de Sérgio Cabral" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O ministro André Mendonça, do Supremo Tribunal Federal (STF), apresentou, nas primeiras horas desta sexta-feira (9/12), um voto favorável ao fim da prisão&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnnbrasil.com.br/politica/stf-julga-prisao-preventiva-sergio-cabral/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sérgio Cabral está a um voto de ser solto pelo STF</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT9xvGvNJgTrcyZlyyscqAIVhxAV5rudW8w1ow8EDz-7TEpE5qIN9-ePPPdsMEwkIjlPBbc4FOy" alt="Sérgio Cabral está a um voto de ser solto pelo STF" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O ministro do Supremo Tribunal Federal (STF) André Mendonça votou, nesta sexta-feira (9), a favor do fim da prisão do ex-governador do Rio de Janeiro,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.correiobraziliense.com.br/politica/2022/12/5057955-mendonca-vota-contra-prisao-do-ex-governador-do-rj-sergio-cabral.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mendonça vota contra prisão do ex-governador do RJ Sérgio Cabral</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRgFDEylE7LvDZHc-gwgJdImJHIdXqLR2yPdbrZvdGF37-F1udDRZo7PxBv_dsUCrWw3uwlVxKM" alt="Mendonça vota contra prisão do ex-governador do RJ Sérgio Cabral" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Segunda Turma do STF julga pedido de habeas corpus apresentado pela defesa do político. Placar está 2 a 1 pela derrubada da prisão preventiva.</p></div>
            </div>
        </a><a href='https://g1.globo.com/pr/norte-noroeste/noticia/2022/12/09/reu-e-condenado-a-7-anos-de-prisao-por-matar-homem-em-via-publica-em-paranavai.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Réu é condenado a 7 anos de prisão por matar homem em via ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQUJY8UrO0RPnJM58pYt0YvyVfLm8SuTiAmLdD9oFfwZ9hrLjapXaZ5OvuAHoKzrI07DYgEq16T" alt="Réu é condenado a 7 anos de prisão por matar homem em via ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O crime aconteceu em setembro de 2011. Maycon Jhony Moreira Gomes foi morto a tiros por Celso após alegar estar recebendo ameaças da vítima, segundo&nbsp;...</p></div>
            </div>
        </a><a href='https://noticias.r7.com/brasilia/stf-retoma-julgamento-que-pode-libertar-sergio-cabral-da-prisao-09122022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>STF retoma julgamento que pode libertar Sérgio Cabral da prisão</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTFv1VxFymyYSfXZLj-C9gusR3HPnxHZWRtF8Rp8q-mAM7KvHjAvp2vPmr89bHGrQN1tqA0uD90" alt="STF retoma julgamento que pode libertar Sérgio Cabral da prisão" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Corte analisa habeas corpus apresentado pela defesa do ex-governador do Rio de Janeiro, preso durante a Lava Jato.</p></div>
            </div>
        </a><a href='https://www.estadao.com.br/politica/blog-do-fausto-macedo/mendonca-ve-excesso-de-prazo-e-vota-por-soltura-de-cabral-placar-e-de-2x1-a-favor-do-ex-governador/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mendonça vê &#39;excesso de prazo&#39; e vota por revogar prisão de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRszh5wu3Y8-FqnLPuHhxAjipMdQ4NvUY1aDcSicP4E91_dPJ_Hq7joo5Vqs3WAm9IabtzsPKmn" alt="Mendonça vê &#39;excesso de prazo&#39; e vota por revogar prisão de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ministro do Supremo aponta &#39;insubsistência dos fundamentos&#39; que basearam prisão preventiva decretada pelo então juiz Sérgio Moro contra o ex-governador&nbsp;...</p></div>
            </div>
        </a><a href='https://www.band.uol.com.br/bandnews-fm/rio-de-janeiro/noticias/justica-do-rio-converte-em-preventiva-prisao-de-capitao-guimaraes-16568020'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Justiça do Rio converte em preventiva prisão de Capitão Guimarães</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRe661hT2-vqtgkOB9H4GS9eD4cjnOcDiJFvhmeajQ0I1HVBmZWvrHokmD_nLASwGyXTYOhnHqS" alt="Justiça do Rio converte em preventiva prisão de Capitão Guimarães" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A Justiça do Rio converte em preventiva a prisão do contraventor Aílton Guimarães Jorge. O Capitão Guimarães, como é conhecido, passou por audiência de&nbsp;...</p></div>
            </div>
        </a><a href='https://g1.globo.com/rj/rio-de-janeiro/noticia/2022/12/09/justica-solta-capitao-guimaraes-e-converte-prisao-em-domiciliar-com-uso-de-tornozeleira.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Justiça converte prisão de Capitão Guimarães em domiciliar com ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR-kbEdMKNGseY_s902BrokBgbU_25Ab_DTIIcfQT5NZ2iDAIkE_qCpebQ5NQteJE64CeV1LNPx" alt="Justiça converte prisão de Capitão Guimarães em domiciliar com ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Decisão é do desembargador Heleno Nunes, do Plantão Judiciário, desta sexta-feira (9).</p></div>
            </div>
        </a><a href='https://exame.com/mundo/oposicao-de-bangladesh-denuncia-prisao-de-seus-lideres-pela-policia/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Oposição de Bangladesh denuncia prisão de seus líderes pela ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS3XXJ0Ne4LCy2_MfECj83C88kz45CZd0DzT00jr8QjS62b9RSwcPmSC_Za7OyFEOZ7uZ8oX3c9" alt="Oposição de Bangladesh denuncia prisão de seus líderes pela ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>De acordo com o porta-voz do Partido Nacionalista de Bangladesh (BNP), seu secretário-geral, Mirza Fakhrul Islam Alamgir, e o ex-ministro Mirza Abbas foram&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}