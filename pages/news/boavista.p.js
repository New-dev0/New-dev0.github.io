import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Boavista</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Boavista"/>
        <meta name="description" content="Trending News about Boavista" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Boavista</h1>
            <Image width={800} height={500} src="https://wm.observador.pt/wm/obs/l/https%3A%2F%2Fbordalo.observador.pt%2Fv2%2Frs%3Afill%3A770%3A403%2Fc%3A2000%3A1125%3Anowe%3A0%3A141%2Fq%3A85%2Fplain%2Fhttps%3A%2F%2Fs3.observador.pt%2Fwp-content%2Fuploads%2F2022%2F11%2F18225234%2F39860821.jpg" alt="Boavista"/>
            <h3>Recent News</h3>
            <a href='https://observador.pt/2022/11/19/boavista-regressa-aos-triunfos-com-reviravolta-frente-a-bsad-na-taca-da-liga/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Boavista regressa aos triunfos com reviravolta frente à BSAD na ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSeG7Y0BEbxEbdney4Cr0X3Ea4RHWqnh_QJvazG2bb4Q7V3W8t2bejfmOYOpXcG0Uru9lzzSB8n" alt="Boavista regressa aos triunfos com reviravolta frente à BSAD na ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Depois de uns instantes iniciais divididos, a BSAD conseguiu alcançar uma vantagem de dois golos em quatro minutos. Mas o Boavista recuperou da desvantagem&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ojogo.pt/futebol/taca-liga/noticias/nandinho-e-a-derrota-com-o-boavista-o-alerta-ao-intervalo-e-a-falta-de-maturidade-15367253.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nandinho e a derrota com o Boavista: o alerta ao intervalo e a falta ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQxZMGAKCegIVDZUaO6Bwg7waeSJwsiSLgzdGTlfYtl1mQQYwB4QrpZcivdGsJsbBH_tK3ZPOoL" alt="Nandinho e a derrota com o Boavista: o alerta ao intervalo e a falta ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Declarações de Nandinho, treinador da B SAD, após a derrota com o Boavista (3-2), depois de estar a vencer por 2-0, em jogo da primeira jornada da fase de&nbsp;...</p></div>
            </div>
        </a><a href='https://www.abola.pt/nnh/2022-11-18/taca-da-liga-boavista-vence-b-sad-com-reviravolta-veja-o-video-com-o-resumo/965282'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Boavista vence B SAD com reviravolta (veja o vídeo com o resumo)</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTjYm4O2seP-T-E-vG3Vj1IfebQxaR8_9y87Z_rjcYnim60Kt6ehngRn7tJeVSPp-KkSz5d_gEV" alt="Boavista vence B SAD com reviravolta (veja o vídeo com o resumo)" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O Boavista conquistou esta noite uma importante e difícil vitória diante do B SAD, por 3-2, em partida disputada no Estádio Nacional, em Oeiras,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.jornalnordeste.com/noticia/mogadouro-soma-empate-caseiro-com-o-boavista'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mogadouro soma empate caseiro com o Boavista</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQRO1d7p0sSEmZ2w6YZrm8GA4PiDA1WeJuFeuIRejtGRfznq55FXDn0GS3YSQcf5lFAZh1kfRN1" alt="Mogadouro soma empate caseiro com o Boavista" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O Clube Académico de Mogadouro somou um ponto na jornada 7 da série A do Campeonato Nacional de Futsal da 3ª Divisão.</p></div>
            </div>
        </a><a href='https://rr.sapo.pt/bola-branca/noticia/futebol-nacional/2022/11/18/boavista-ganha-com-remontada/308688/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Boavista ganha com remontada - Renascença</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSWMBoTbHfNeUamnXswufnpEoTCbQ2U5GllfcoBS6pzLHnKFqXumwUVQ3mvf4KDdcOkK1vUM2UI" alt="Boavista ganha com remontada - Renascença" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Os azuis marcaram primeiro – e estiveram a vencer por 2-0, com tentos de Edgar Pacheco e Brian Saramago. No entanto, os axadrezados reagiram e deram a volta ao&nbsp;...</p></div>
            </div>
        </a><a href='https://www.jn.pt/desporto/boavista-vence-b-sad-apos-reviravolta-15367001.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Boavista vence B SAD após reviravolta</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTdqTsAQ1tZ4dOCPRmQ-k9RH5dNDdlpwFfoWW7m5Nqxl-hNLAA-R4B-mCHAZ30sA3EpxJWj64ru" alt="Boavista vence B SAD após reviravolta" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O Boavista estreou-se na presente edição da Taça da Liga com uma vitória por 3-2 diante da B SAD.</p></div>
            </div>
        </a><a href='https://www.slbenfica.pt/pt-pt/agora/media-list/videos/2022/11/18/voleibol-benfica-antevisao-jogo-boavista-10-jornada-1-fase-campeonato'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Boavista-Benfica: antevisão de Rita Fernandes</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQvpnNVv-P1en5I0IiwRMoT1_CRgRRGpkdhZATV-oK4ZoU-KixpiOOytSA9L1aTDr0VgQTCP-qB" alt="Boavista-Benfica: antevisão de Rita Fernandes" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Voleibol feminino. Campeonato. 10.ª jornada da 1.ª fase. Antevisão do Boavista-Benfica.</p></div>
            </div>
        </a><a href='https://www.zerozero.pt/news.php?id=422203'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Boavista regressa às vitórias na Taça da Liga com grande ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRdDtPIAHqRrtGjvPtld3M07bMlQ0zU8Ifk_Yov10q9dxw8EzWK2pYKE6NxgJYREzCk_6_kA7jU" alt="Boavista regressa às vitórias na Taça da Liga com grande ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Os axadrezados até estiveram a perder por 2-0 a certa altura, mas Petit regressou ao «seu» esquema tático, a equipa mudou de atitude e conseguiu uma grande&nbsp;...</p></div>
            </div>
        </a><a href='https://www.noticiasaominuto.com/desporto/2116270/pantera-rugiu-mais-alto-no-jamor-e-boavista-estreia-se-com-vitoria'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pantera rugiu mais alto no Jamor e Boavista estreia-se com vitória</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTAI2miCW-TFLtwMFzWwY7OaI2M1iTChojKzimCIadL0rVL070l-_EDJnyhPipXqiYqVbSupFZh" alt="Pantera rugiu mais alto no Jamor e Boavista estreia-se com vitória" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A formação da II Liga arrancou melhor o encontro e à meia hora já vencia com golos de Edgar Pacheco (20&#39;) e Brian Saramago (24 minutos). O conjunto orientado&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}