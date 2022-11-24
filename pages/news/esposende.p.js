import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Esposende</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Esposende"/>
        <meta name="description" content="Trending News about Esposende" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Esposende</h1>
            <Image width={800} height={500} src="https://wm.observador.pt/wm/obs/l/https%3A%2F%2Fbordalo.observador.pt%2Fv2%2Frs%3Afill%3A770%3A403%2Fc%3A1440%3A809%3Anowe%3A0%3A75%2Fq%3A85%2Fplain%2Fhttps%3A%2F%2Fs3.observador.pt%2Fwp-content%2Fuploads%2F2022%2F11%2F23152405%2F39884039-1.jpg" alt="Esposende"/>
            <h3>Recent News</h3>
            <a href='https://observador.pt/2022/11/23/dois-mortos-em-deslizamento-de-terra-em-palmeira-de-faro-esposende/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Corpos de vítimas de deslizamento de terras em Esposende ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT7-FqFoHJ7RyC9wsp_jn-5s--cAZNIEcLI557mm-d2PX_If5PffZCRIOqxxXbRyE7lIgo7RJYh" alt="Corpos de vítimas de deslizamento de terras em Esposende ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Um deslizamento de terra e de pedras de grandes dimensões em Palmeira de Faro, no concelho de Esposende, distrito de Braga, atingiu na madrugada de quarta-feira&nbsp;...</p></div>
            </div>
        </a><a href='https://expresso.pt/sociedade/2022-11-23-Derrocada-em-Esposende-movimentacao-de-terras-durante-o-verao-vai-ser-investigada-f8fe1216'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Derrocada em Esposende: movimentação de terras durante o verão ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTRYWKcsr9IvEFSnHhVu1TK7fKeqk2BLa2epZs7wl52JxP2IvRkNth_aqZJoLICHPgMb7wjO1Cq" alt="Derrocada em Esposende: movimentação de terras durante o verão ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Movimentações essas que poderão ter contribuído para o deslizamento de terras que ocorreu na madrugada desta quarta-feira, depois de vários dias de chuva&nbsp;...</p></div>
            </div>
        </a><a href='https://www.tsf.pt/portugal/sociedade/terrenos-instaveis-e-risco-de-derrocada-marcam-resgate-de-vitimas-mortais-em-esposende-15379452.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Terrenos instáveis&quot; e &quot;risco de derrocada&quot; marcam resgate de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSeSaJR0idVDuzO4S9PukzSgoT9r1aDKHNSIxV7WamVfucqlhKT6SH0RdGy2sl9vOX0RbrvDngU" alt="&quot;Terrenos instáveis&quot; e &quot;risco de derrocada&quot; marcam resgate de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O comandante da Proteção Civil Rui Costa explica à TSF que este é ″um trabalho muito minucioso″, tendo já sido retiradas as pedras que estavam na parte&nbsp;...</p></div>
            </div>
        </a><a href='https://rr.sapo.pt/noticia/pais/2022/11/23/deslizamento-de-terras-em-esposende-corpos-foram-resgatados/309227/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Deslizamento de terras em Esposende: corpos foram resgatados ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSYkx5egQy7SHQDnCw3a1fT2UXDlzlz_2Arpur3FawUF9jve3OABbUz7kzavJiIRvC7ZOmrAH9j" alt="Deslizamento de terras em Esposende: corpos foram resgatados ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Em declarações à Lusa, o 2.º comandante distrital de Operações e Socorro de Braga, Rui Costa, adiantou que a remoção dos cadáveres está agora apenas dependente&nbsp;...</p></div>
            </div>
        </a><a href='https://www.dn.pt/sociedade/dois-mortos-em-deslizamento-de-terra-em-palmeira-de-faro-esposende-15378618.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dois jovens morrem em deslizamento de terra em Palmeira de Faro ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcScub4cPA2UxgpJncLRFKzzP_yscmYYNGdZakhBJ1IW7m29vgFhXbK8wppY_h3_nqaMJRuz7R7k" alt="Dois jovens morrem em deslizamento de terra em Palmeira de Faro ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Duas pessoas morreram esta madrugada em Palmeira de Faro, concelho de Esposende, vítimas de um deslizamento de terra, disse à Lusa fonte dos Bombeiros&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rtp.pt/noticias/pais/esposende-dois-mortos-em-deslizamento-em-palmeira-de-faro_n1448932'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Esposende. Dois mortos em deslizamento em Palmeira de Faro</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTu3omt2oYpHk0rnwy68AA3Kwg4WIgRZu3CAaKl_62Lc-vQCd-CekRa8FQ1PIUXbt8Z-dl2yWzb" alt="Esposende. Dois mortos em deslizamento em Palmeira de Faro" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Duas pessoas morreram na madrugada desta quarta-feira em Palmeira de Faro, Esposende, vítimas de um deslizamento de terra e pedras que se abateram sobre uma&nbsp;...</p></div>
            </div>
        </a><a href='https://www.jn.pt/local/noticias/braga/esposende/jovem-casal-morreu-soterrado-num-deslizamento-de-terras-em-esposende-15378675.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Casal de namorados morreu soterrado num deslizamento de terras ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcScqUmplkvYggBDl8kLObweTUbNJFbx2L10xM3l5-HxArEOPlJ13UwdtHERrTFhydcLTNvFPNgO" alt="Casal de namorados morreu soterrado num deslizamento de terras ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Um casal de 22 anos morreu numa habitação atingida por um deslizamento de terras em Esposende. Dois adultos e duas crianças foram retirados ilesos.</p></div>
            </div>
        </a>
        </Template></>;
}