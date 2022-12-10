import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Hugues Aufray</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Hugues Aufray"/>
        <meta name="description" content="Trending News about Hugues Aufray" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Hugues Aufray</h1>
            <Image width={800} height={500} src="https://resize-public.ladmedia.fr/img/var/public/storage/images/news/hospitalise-d-urgence-1753891/47219734-2-fre-FR/Hugues-Aufray-Hospitalise-d-urgence.jpg" alt="Hugues Aufray"/>
            <h3>Recent News</h3>
            <a href='https://www.public.fr/News/hospitalise-d-urgence-1753891'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hugues Aufray : Hospitalisé d&#39;urgence !</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQv8pZJXREEGm4thwF2F5NbEZ8ghVryKfwBSOHbK-G6OEpu91onEihaiFW8EAJMcUXCngIQ7p-9" alt="Hugues Aufray : Hospitalisé d&#39;urgence !" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>D&#39;après nos informations, le chanteur de 93 ans aurait fait une mauvaise chute à son domicile…</p></div>
            </div>
        </a><a href='https://www.gala.fr/l_actu/news_de_stars/photo-hugues-aufray-blesse-a-93-ans-le-poignet-casse-il-honore-un-rendez-vous-important_508267'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>PHOTO – Hugues Aufray blessé à 93 ans : le poignet cassé, il ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQmaMIRFsEd1j5Y5I4BY1VCe9vw6WRxc4bx_K0tg7tgRTVE-1cgmmFLAuo7ljycwM3a1qqI1yKx" alt="PHOTO – Hugues Aufray blessé à 93 ans : le poignet cassé, il ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Il est l&#39;un des chanteurs préférés des Français, et malgré ses 93 ans, il continue de tourner sur les routes de France. Hugues Aufray affiche une f...</p></div>
            </div>
        </a><a href='https://www.voici.fr/news-people/hugues-aufray-victime-dune-chute-le-chanteur-de-93-ans-a-ete-transporte-a-lhopital-744795'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hugues Aufray victime d&#39;une chute : le chanteur de 93 ans a été ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSSVPjV2RHG65HjBI-pMvN7ekzNP8B_hf5GQ93PDRtfe0mwMhSUvmaKd4QXNL1-IqkWcBakGIcl" alt="Hugues Aufray victime d&#39;une chute : le chanteur de 93 ans a été ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tout comme le chanteur Dave quelques mois plus tôt, Hugues Aufrey a été victime d&#39;une malheureuse chute à son domicile. Fort heureusement, il s&#39;en...</p></div>
            </div>
        </a><a href='https://www.dhnet.be/lifestyle/people/2022/12/09/hugues-aufray-emmene-durgence-a-lhopital-LIIZZRQEKFEDTPPOQJSD6X42HI/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hugues Aufray emmené d&#39;urgence à l&#39;hôpital</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTByfsFglFVTcEiVnejBY4kC2HXePQsJAhq-omn8M0ZSVdhKYJtc12e8Mw7p5JSz-1ZXQs9ld5f" alt="Hugues Aufray emmené d&#39;urgence à l&#39;hôpital" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le chanteur de 93 ans a été victime d&#39;une vilaine chute, heureusement sans gravité, selon France Dimanche.</p></div>
            </div>
        </a>
        </Template></>;
}