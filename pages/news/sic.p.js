import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>SIC</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,SIC"/>
        <meta name="description" content="Trending News about SIC" /></Head><Template>
            <h1 style={{fontSize: "30"}}>SIC</h1>
            <Image width={800} height={500} src="https://i0.wp.com/www.zapping-tv.com/wp-content/uploads/2019/11/SIC-Natal.jpg?fit=1000%2C563&ssl=1" alt="SIC"/>
            <h3>Recent News</h3>
            <a href='https://www.zapping-tv.com/sic-ja-promove-cinema-de-natal-2022-saiba-o-que-ai-vem/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>SIC já promove cinema de Natal 2022! Saiba o que aí vem | Zapping</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSu9bnsbAW9Wyb3QKzTr5LWPmmnWIrBMP5KvFy3xKuXcuZEwioy_6x0oAar3P5OoNIPWARY0hOC" alt="SIC já promove cinema de Natal 2022! Saiba o que aí vem | Zapping" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A SIC já arrancou com a sua campanha de Natal ao promover os filmes que vão ser aposta nesta quadra.</p></div>
            </div>
        </a><a href='https://www.atelevisao.com/sic/sic-promove-filmes-que-vao-ser-exibidos-este-natal/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>SIC promove filmes que vão ser exibidos este Natal</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSWmt3TBOgX0X_FnppGKWExxI5IlQcP0ysDpvhnwWjNBI7ZnRcrdeGJ_QFFYHJDX5eGodHLfSBn" alt="SIC promove filmes que vão ser exibidos este Natal" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A SIC já começou a promover a programação de Natal, nomeadamente os filmes. Como já é habitual, a estação de Paço de Arcos vai transmitir &#39;Sozinho em Casa&#39;&nbsp;...</p></div>
            </div>
        </a><a href='https://infocul.pt/sic-anuncia-filmes-que-exibira-no-natal-e-sozinho-em-casa-e-dos-escolhidos/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>SIC anuncia filmes que exibirá no Natal e &#39;Sozinho em Casa&#39; é dos ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT0UEVcLIrffz4ajjMAsSXAJpCPebe4WXxyGgollpIiettnyRsvbyW3OTj_c_aZSfn5n0kz_wy2" alt="SIC anuncia filmes que exibirá no Natal e &#39;Sozinho em Casa&#39; é dos ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Entre os escolhidos estão: &#39;Sozinho em Casa&#39; e &#39;Sozinho em Casa 2&#39;; &#39;Trolls&#39; e &#39;A Vida Secreta dos Nossos Bichos 2&#39;; &#39;As Vigaristas&#39; ou ainda &#39;Homem-Aranha:&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}