import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Johnson Semedo Morreu</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Johnson Semedo Morreu"/>
        <meta name="description" content="Trending News about Johnson Semedo Morreu" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Johnson Semedo Morreu</h1>
            <Image width={800} height={500} src="https://wm.observador.pt/wm/obs/l/https%3A%2F%2Fbordalo.observador.pt%2Fv2%2Frs%3Afill%3A770%3A403%2Fc%3A1280%3A718%3Anowe%3A0%3A161%2Fq%3A85%2Fplain%2Fhttps%3A%2F%2Fs3.observador.pt%2Fwp-content%2Fuploads%2F2022%2F11%2F30105022%2Facademia-do-johnson.jpeg" alt="Johnson Semedo Morreu"/>
            <h3>Recent News</h3>
            <a href='https://observador.pt/2022/11/30/morreu-johnson-semedo-o-ativista-e-fundador-da-academia-do-johnson-um-projeto-social-na-amadora/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Morreu Johnson Semedo, ativista e fundador da Academia do ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ4vCkzjbJQHqwJ4wyw5zQmEN478TK1WtyLjSshqcvg9oS4teOI1q4FQRV6xYtcwP3RmISEvbSJ" alt="Morreu Johnson Semedo, ativista e fundador da Academia do ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Morreu João Semedo, mais conhecido como Johnson Semedo e criador do projeto social Academia do Johnson, elogiada por Marcelo Rebelo de Sousa e vencedora de&nbsp;...</p></div>
            </div>
        </a><a href='https://www.publico.pt/2022/11/30/local/noticia/morreu-joao-semedo-fundador-academia-johnson-2029763'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Morreu João Semedo, fundador da Academia do Johnson</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTfCQziAZ065hEcAb3Iz4xkHKYeunAOat-ciO_omvy0yTFmzX8WlRVBGJm1QTKOPM9WYGoLAhHa" alt="Morreu João Semedo, fundador da Academia do Johnson" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Associação trabalha com jovens de bairros carenciados e foi este mês distinguida com uma menção honrosa do Prémio Manuel António da Mota.</p></div>
            </div>
        </a><a href='https://www.dn.pt/opiniao/morreu-um-grande-heroi-da-solidariedade-15408186.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Morreu um Grande Herói da Solidariedade</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQR7BZEskIQblSfw6vrmWW14RejCH4XMND5mxYL5fk4vKhHK2ewdP7DtO_zPqrGWhsGPJP4blT8" alt="Morreu um Grande Herói da Solidariedade" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Como membro do Conselho de Curadores da Fundação Manuel António da Mota, conheci a Academia do Johnson, no Bairro do Zambujal, junto à Cova da Moura,&nbsp;...</p></div>
            </div>
        </a><a href='https://sol.sapo.pt/artigo/786762/morreu-joao-semedo-tavares-fundador-da-academia-do-johnson'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Morreu João Semedo Tavares, fundador da Academia do Johnson</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS-5Vp8uWNwAST0u57vT8QXsbNnGO71J4eo2K-JxOaithWEOC_yovgxPsvd1kG1wCtni5oKFH3X" alt="Morreu João Semedo Tavares, fundador da Academia do Johnson" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Presidente da República veio já lamentar a morte do ativista.</p></div>
            </div>
        </a>
        </Template></>;
}