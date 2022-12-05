import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Keke Palmer</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Keke Palmer"/>
        <meta name="description" content="Trending News about Keke Palmer" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Keke Palmer</h1>
            <Image width={800} height={500} src="https://assets.papelpop.com/wp-content/uploads/2022/12/keke-palmer.png" alt="Keke Palmer"/>
            <h3>Recent News</h3>
            <a href='https://www.papelpop.com/2022/12/keke-palmer-confirma-gravidez-durante-monologo-no-saturday-night-live-veja/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Keke Palmer confirma gravidez durante monólogo no “Saturday ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTlIBV-N9EIKoriHzMVjgVIHsuEGHJURHnbWyZLu9xYnK88syN6qHM_2kC8y5wfRQZ6VI02b2je" alt="Keke Palmer confirma gravidez durante monólogo no “Saturday ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mais uma mamãe de primeira viagem na área! Keke Palmer assumiu o comando do “Saturday Night Live” no sábado (03) e, durante seu monólogo de abertura,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.oribatejo.pt/keke-palmer-anuncia-gravidez-em-monologo-do-snl/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Keke Palmer anuncia gravidez em monólogo do &#39;SNL&#39;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSMpqXZ_FtK5PKEavPGlVhCaJduXq-oOKqSosOQ7u0LWT4DIyCJem7EG2jSsmsbozFw2WbPie8u" alt="Keke Palmer anuncia gravidez em monólogo do &#39;SNL&#39;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&quot;sábado à noite ao vivoRetornou após o feriado com o anfitrião Keke Palmer Um grande anúncio é feito: ela vai ter um bebê! &quot;As pessoas estavam em meus.</p></div>
            </div>
        </a>
        </Template></>;
}