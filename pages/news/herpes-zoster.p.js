import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Herpes zoster</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Herpes zoster"/>
        <meta name="description" content="Trending News about Herpes zoster" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Herpes zoster</h1>
            <Image width={800} height={500} src="https://s2.glbimg.com/wwDwv4E84YX7SfvBSsZk44Lxv2s=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_63b422c2caee4269b8b34177e8876b93/internal_photos/bs/2022/3/Y/x06AzCRbmpKW0ieFSqTg/gsz-hz-valor.jpg" alt="Herpes zoster"/>
            <h3>Recent News</h3>
            <a href='https://valor.globo.com/conteudo-de-marca/gsk/noticia/2022/11/21/herpes-zoster-virus-adormecido-pode-se-manifestar-ao-longo-da-vida.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Herpes zoster: vírus adormecido pode se manifestar ao longo da vida</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQD2V6wGHpDg663BxDh5UFMtKZWSe_b6Pgo-Qb5tZyyMrGoyn-AH46S4kmGqRv0Vb_zJK45ArF5" alt="Herpes zoster: vírus adormecido pode se manifestar ao longo da vida" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Causada pelo mesmo agente da catapora, doença provoca dores agudas e pode deixar sequelas permanentes (1)</p></div>
            </div>
        </a>
        </Template></>;
}