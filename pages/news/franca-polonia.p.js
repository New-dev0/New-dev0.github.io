import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Franca polonia</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Franca polonia"/>
        <meta name="description" content="Trending News about Franca polonia" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Franca polonia</h1>
            <Image width={800} height={500} src="https://wm.observador.pt/wm/obs/l/https%3A%2F%2Fbordalo.observador.pt%2Fv2%2Frs%3Afill%3A770%3A403%2Fc%3A2000%3A1125%3Anowe%3A0%3A115%2Fq%3A85%2Fplain%2Fhttps%3A%2F%2Fs3.observador.pt%2Fwp-content%2Fuploads%2F2022%2F12%2F04170036%2Fmbappe-12.jpg" alt="Franca polonia"/>
            <h3>Recent News</h3>
            <a href='https://observador.pt/2022/12/04/queriam-saber-onde-andava-mbappe-esta-aqui-a-cronica-do-franca-polonia/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Queriam saber onde andava Mbappé? Está aqui (a crónica do ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRxV4PTjAV7p4wbClZkHyhxrC6QuPiqUB3OViiE-ZCkFWr7Oz8K-xZjvZWJeMwVR6OVZxP1S4mk" alt="Queriam saber onde andava Mbappé? Está aqui (a crónica do ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Giroud já não é só o avançado que dá e aprendeu também a receber e marcar nesta equipa mas não há nada como fenómeno Mbappé, tão rápido a fazer a diferença&nbsp;...</p></div>
            </div>
        </a><a href='https://desporto.sapo.pt/futebol/mundial/artigos/acompanhe-ao-minuto-o-jogo-entre-franca-e-polonia'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Acompanhe, AO MINUTO, o jogo entre França e Polónia</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRb3cJbyVkAPRYZLog216a77dU655bCsNd5dQE3pNeDKfy9mQvQoeG5wrfLY6mLmuZtxbvtg0bl" alt="Acompanhe, AO MINUTO, o jogo entre França e Polónia" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Todas as emoções dos oitavos de final aqui no SAPO Desporto.</p></div>
            </div>
        </a><a href='https://www.ojogo.pt/internacional/mundial-2022/noticias/mbappe-passa-registo-de-pele-com-este-belo-golo-no-franca-polonia-veja-o-video-15426851.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mbappé passa registo de Pelé com este belo golo no França ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR53BbZ3yAvgvOSGlaxMjeJNs82qF20qhG-109RssZzEzDrXtucnCkJltkHdHt-HmbkQccTM2u_" alt="Mbappé passa registo de Pelé com este belo golo no França ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>No França-Polónia, dos oitavos de final do Mundial&#39;2022, Mbappé passou Pelé como o jogador a alcançar oito golos em Mundiais antes de completar 24 anos.</p></div>
            </div>
        </a><a href='https://www.jn.pt/desporto/franca-vence-a-polonia-e-segue-para-os-quartos-de-final-15426932.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>França vence a Polónia e segue para os quartos de final</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ0Id8rSGrxtt_YtEW77L75QRw1neOIpLkeDgzV3lLdaKS-ux89YiYLGx8cCbl9_N6NF_ZJTbXv" alt="França vence a Polónia e segue para os quartos de final" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A França, detentora do título, qualificou-se hoje para os quartos de final do Mundial de futebol de 2022, ao vencer a Polónia por 3-1, no terceiro encontro&nbsp;...</p></div>
            </div>
        </a><a href='https://maisfutebol.iol.pt/jogo/aominuto/franca/polonia/13800059'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>França X Polónia - AO MINUTO | MAISFUTEBOL</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ-hi7znHLBrh0K77dX4dEApQ-jjhZntnNyN1Z10qRUbfCIK3SEXhku3OYM-Dyg2Xsixm6Ym4uA" alt="França X Polónia - AO MINUTO | MAISFUTEBOL" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Copa do Mundo - Dom, 4 dez 2022 15:00.</p></div>
            </div>
        </a><a href='https://www.tsf.pt/desporto/campea-franca-derrota-polonia-e-avanca-para-os-quartos-do-mundial-15426917.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Campeã França derrota Polónia e avança para os quartos do Mundial</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS7QP035byCf6LlrL2krKClPER7YTXl6IzmWmIW8QgacCVu1sOuC18lfEzB1T91Ee34ZvCjCP3V" alt="Campeã França derrota Polónia e avança para os quartos do Mundial" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O golo Olivier Giroud e um bis de Kylian Mbappé ajudaram os franceses a ultrapassar os polacos. Segue-se a Inglaterra ou o Senegal.</p></div>
            </div>
        </a>
        </Template></>;
}