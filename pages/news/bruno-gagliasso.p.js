import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Bruno Gagliasso</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Bruno Gagliasso"/>
        <meta name="description" content="Trending News about Bruno Gagliasso" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Bruno Gagliasso</h1>
            <Image width={800} height={500} src="https://s2.glbimg.com/wkdvaG53QFRtHyfCbn161iCs454=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_71a8fe14ac6d40bd993eb59f7203fe6f/internal_photos/bs/2022/3/h/YuZDrTT4WKBhjPqDdLAw/captura-de-tela-2022-11-27-as-10.28.34.png" alt="Bruno Gagliasso"/>
            <h3>Recent News</h3>
            <a href='https://gq.globo.com/noticia/2022/11/bruno-gagliasso-filha-titi-cortar-cabelo.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bruno Gagliasso deixa filha mais velha Titi cortar seu cabelo</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSDgEpCf4oc3V0A3WJrAppmlusaVEKNUO4q3tHSzrluigwmyDldbk81Vn0iv-H4962GrhNVzTrI" alt="Bruno Gagliasso deixa filha mais velha Titi cortar seu cabelo" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Giovanna Ewbank compartilhou nas redes sociais momentos do corte com uma tesoura de cozinha.</p></div>
            </div>
        </a><a href='https://revistamarieclaire.globo.com/celebridades/noticia/2022/11/titi-e-zyan-cortam-cabelo-de-bruno-gagliasso-e-resultado-nao-agrada-giovanna.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Titi e Zyan cortam cabelo de Bruno Gagliasso e resultado não ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcROlmAjEtYCpmzcLdqnTz0jp_akkCHwowq4VANpVKFdgQRzz7blJObfvEdehznbIt2jVBVNsA83" alt="Titi e Zyan cortam cabelo de Bruno Gagliasso e resultado não ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A influenciadora e atriz Giovanna Ewbank compartilha os vídeos no Instagram Story da sessão caseira de corte de cabelo; &#39;Está ficando lindo demais&#39;</p></div>
            </div>
        </a><a href='https://glamour.globo.com/entretenimento/noticia/2022/11/giovanna-ewbank-e-bruno-gagliasso-mostram-convite-para-farofa-da-gkay-quase-joguei-no-lixo-disse-o-ator.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Giovanna Ewbank e Bruno Gagliasso mostram convite para Farofa ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQEl794b9_R4nnznOGgAph7xkBT0L7Mi3F9pKIFremG3rlBb6M8lV59dtAPUiJnQv2OF76Wvn19" alt="Giovanna Ewbank e Bruno Gagliasso mostram convite para Farofa ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Casal se divertiu com a criatividade da humorista ao entregar os kits para convidados vips.</p></div>
            </div>
        </a>
        </Template></>;
}