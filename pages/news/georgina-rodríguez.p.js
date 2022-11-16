import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Georgina Rodríguez</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Georgina Rodríguez"/>
        <meta name="description" content="Trending News about Georgina Rodríguez" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Georgina Rodríguez</h1>
            <Image width={800} height={500} src="https://thumbs.web.sapo.io/?W=1200&H=630&delay_optim=1&tv=1&crop=center&bottom_overlay=https%3A%2F%2Fmag.sapo.pt%2Fassets%2Fimg%2Flifestyle-sapo%2Ffacebook-overlay.png&epic=M2Qw3GajMYXNOfgxv6IudqeM6w2Lj8+r2pRb+Hfc0oGceYF/gFQUkOHfgnANRKL/ZgFryKgEL54lSef5cULt2hascklpC8R4jeqvxAOq9z409LA=" alt="Georgina Rodríguez"/>
            <h3>Recent News</h3>
            <a href='https://lifestyle.sapo.pt/fama/noticias-fama/artigos/cristiano-ronaldo-e-georgina-rodriguez-orgulhosos-de-cristianinho'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cristiano Ronaldo e Georgina Rodríguez orgulhosos de Cristianinho</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRFZmDo0JkNX3jSa7m4UbQh9DZNzOP5Sdpdm3DaGIJjOvTsaPvkZ_6U9UWo_HFdRXFes-3ftioY" alt="Cristiano Ronaldo e Georgina Rodríguez orgulhosos de Cristianinho" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O filho mais velho de CR7 faz parte da campanha de uma marca desportiva, onde aparece a jogar futebol.</p></div>
            </div>
        </a><a href='https://www.hiper.fm/orgulhosa-georgina-rodriguez-mostra-nova-conquista-de-cristianinho-e-declara-se-meu-amor-lindo/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Orgulhosa! Georgina Rodríguez mostra nova conquista de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTlBWYyGL5PUM258k0kp7ZhrYb3QCPlTNGujpj68Lv6prc8NCmj2rZoIbFJKHrEoyyICZAL9yLX" alt="Orgulhosa! Georgina Rodríguez mostra nova conquista de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cristianinho é o protagonista de uma nova campanha de uma marca desportiva conhecida. Através da conta pessoal do Instagram, Cristiano Ronaldo e Georgina&nbsp;...</p></div>
            </div>
        </a><a href='https://www.atelevisao.com/famosos/georgina-rodriguez-orgulhosa-com-conquista-de-cristianinho-meu-amor-lindo/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Georgina Rodríguez orgulhosa com conquista de Cristianinho: &quot;Meu ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTqASHVm0vjkVaSBPQYqjzlLa7FcIkg3b4nDOE4Iq5wOmVhU85TDb8LB559IY2I6gZgq02b9jBx" alt="Georgina Rodríguez orgulhosa com conquista de Cristianinho: &quot;Meu ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Depois de Cristiano Ronaldo se mostrar orgulhoso com a nova conquista de Cristianinho, Georgina Rodríguez também recorreu às suas redes sociais para provar.</p></div>
            </div>
        </a>
        </Template></>;
}