import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Danilo</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Danilo"/>
        <meta name="description" content="Trending News about Danilo" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Danilo</h1>
            <Image width={800} height={500} src="https://s2.glbimg.com/RUymGtRFkPKRt4W9OdurqkxTEhg=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/h/V/lTuBgfQl2EwVTYrHpr6g/microsoftteams-image-18-.png" alt="Danilo"/>
            <h3>Recent News</h3>
            <a href='https://g1.globo.com/educacao/noticia/2022/12/09/titulares-da-selecao-richarlison-e-danilo-estudaram-na-mesma-escola-mestres-revelam-notas-e-boas-acoes.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Titulares da seleção, Richarlison e Danilo estudaram na mesma ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSTC2gDPBoOEzEacmxF518XDro7LZeVFUtxM4n1tn3_jxG0c4den6-jpUJLKmpDyQj_yTBELX_H" alt="Titulares da seleção, Richarlison e Danilo estudaram na mesma ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Para descobrir se eram alunos disciplinados (e se já curtiam as &#39;dancinhas&#39;) na adolescência, o g1 conversou com funcionários e docentes da Escola Estadual&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}