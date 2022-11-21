import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Rodrigo Maia</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Rodrigo Maia"/>
        <meta name="description" content="Trending News about Rodrigo Maia" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Rodrigo Maia</h1>
            <Image width={800} height={500} src="https://i.em.com.br/n_5z-PWjn3sNdaofjs7CBe1lPPY=/600x315/smart/imgsapp.em.com.br/app/noticia_127983242361/2022/11/20/1423382/o-deputado-federal-rodrigo-maia_1_57952.jpg" alt="Rodrigo Maia"/>
            <h3>Recent News</h3>
            <a href='https://www.em.com.br/app/noticia/politica/2022/11/20/interna_politica,1423382/rodrigo-maia-e-chamado-de-ladrao-na-bahia-e-responde-com-l.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rodrigo Maia é chamado de &#39;ladrão&#39; na Bahia e responde com &#39;L&#39;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT65DPb6ZmW4xOLcce3WhxSMH5hVbg6JME_Ks-Agj7gh2uW43M0ys2CsnM__Dr1feq8vKPytkTr" alt="Rodrigo Maia é chamado de &#39;ladrão&#39; na Bahia e responde com &#39;L&#39;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Deputado federal tucano recebeu ofensas em resort no Nordeste. No segundo turno da eleição presidencial, ele indicou apoio à chapa do PT.</p></div>
            </div>
        </a><a href='https://www.poder360.com.br/congresso/rodrigo-maia-e-hostilizado-em-resort-na-bahia-assista/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rodrigo Maia é hostilizado em resort na Bahia; assista</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQPfrY_l0EEoWqXENZu-lvORTzmBCWokBOwAsC3_nJ2cJSXPBhRKyw3h_Aor7iSCKgctmUIVtYT" alt="Rodrigo Maia é hostilizado em resort na Bahia; assista" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Episódio foi neste domingo em hotel na Praia do Forte; chamado de “ladrão”, ex-presidente da Câmara faz o “L” de Lula. Leia no Poder360.</p></div>
            </div>
        </a><a href='https://www.metropoles.com/brasil/video-rodrigo-maia-e-hostilizado-em-resort-na-bahia-vagabundo'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Vídeo. Rodrigo Maia é hostilizado em resort na Bahia: “Vagabundo”</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRiaLmOuicpMLofTh76tSD8GjzkhEcuYYaci7BtVBEZ-adWVtK0bB4f-Pqmh9Sn3WT71biUZXKo" alt="Vídeo. Rodrigo Maia é hostilizado em resort na Bahia: “Vagabundo”" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>As imagens mostram o ex-presidente da Câmara sendo xingado de &quot;ladrão&quot; e &quot;vagabundo&quot;. A esposa do deputado também foi atacada.</p></div>
            </div>
        </a><a href='https://revistaforum.com.br/politica/2022/11/20/video-rodrigo-maia-faz-l-para-bolsonaristas-que-hostilizaram-127559.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>VÍDEO – Rodrigo Maia faz o “L” para bolsonaristas que o hostilizaram</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSKOgR-q_7fSzyUpHgxjnDKqml0xnGYqy0eEZ_AVpObqwj2HdYEQETwkvD7rFlIBrzVICNgqo-S" alt="VÍDEO – Rodrigo Maia faz o “L” para bolsonaristas que o hostilizaram" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Turba dirigiu ofensas ao deputado federal e sua companheira em resort na Praia do Forte, Bahia; Parlamentares se solidarizam com colega na internet.</p></div>
            </div>
        </a><a href='https://oglobo.globo.com/politica/noticia/2022/11/rodrigo-maia-e-alvo-de-bolsonaristas-na-bahia-e-recebe-solidariedade-do-pt.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rodrigo Maia é alvo de bolsonaristas na Bahia e recebe ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT9Vzm1abSrfyAQ5D_dPiaqFqR0cEhrQ44-Rqq0l9E0yVHPWCrYDhM0E7tPwfTty7DaVKQ3Tzed" alt="Rodrigo Maia é alvo de bolsonaristas na Bahia e recebe ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ex-presidente da Câmara estava com a mulher em resort de luxo e foi xingado por hóspedes na manhã deste domingo.</p></div>
            </div>
        </a><a href='https://www.otempo.com.br/politica/rodrigo-maia-e-hostilizado-em-hotel-na-bahia-e-rebate-fazendo-l-1.2769260'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rodrigo Maia é hostilizado em hotel na Bahia e rebate fazendo &#39;L&#39;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ0GhhOGAd7_SM3Kev-rIVVjh7R9fqhYKCcKntM1TE8ESEvjeFApfGKNhEJq42Zkr-lTf1B1UEN" alt="Rodrigo Maia é hostilizado em hotel na Bahia e rebate fazendo &#39;L&#39;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ex-presidente da Câmara foi xingado de &#39;ladrão&#39; e &#39;vagabundo&#39; ao lado da esposa, que também foi alvo de ataques.</p></div>
            </div>
        </a>
        </Template></>;
}