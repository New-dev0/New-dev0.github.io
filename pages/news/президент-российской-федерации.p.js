import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Президент Российской федерации</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Президент Российской федерации"/>
        <meta name="description" content="Trending News about Президент Российской федерации" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Президент Российской федерации</h1>
            <Image width={800} height={500} src="https://s-cdn.sportbox.ru/images/shares_matchtv/1200x630/article/1738473/312dbecc0a16b575850ddcb85e41f203.jpg" alt="Президент Российской федерации"/>
            <h3>Recent News</h3>
            <a href='https://matchtv.ru/diving/matchtvnews_NI1738473_Prezident_Rossijskoj_federacii_pryzhkov_v_vodu_zajavil_chto_v_Igrah_druzhby_v_dalnejshem_primut_uchastije_kubincy_i_irancy'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Президент Российской федерации прыжков в воду заявил, что в ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQSCUNiQWZavPhUd9bNzwFMLNXJIdC_dyxbeOU71xg2pbFcUR2M6WowSwKIFStnDypxUZTlSucS" alt="Президент Российской федерации прыжков в воду заявил, что в ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Средство массовой информации сетевое издание «www.matchtv.ru» зарегистрировано Федеральной службой по надзору в сфере связи, информационных технологий и&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}