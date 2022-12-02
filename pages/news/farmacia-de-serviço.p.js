import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Farmacia de serviço</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Farmacia de serviço"/>
        <meta name="description" content="Trending News about Farmacia de serviço" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Farmacia de serviço</h1>
            <Image width={800} height={500} src="https://thumbs.web.sapo.io/?epic=V2:GZNieWob6kOBls8JgiJJjNhocq0J/F/iPGLY7oRPE5W/6tUOFKV9yMXCkqn7zAT+0Q412obL7QeHU82cwEwa5raMUhSC2/56dTB0dHIovkjDUUE/hGGZ5tf1mKN/f75jCvoKcKj+nOAs6BjfuJp5dA==&proxy=1" alt="Farmacia de serviço"/>
            <h3>Recent News</h3>
            <a href='https://defesadeespinho.sapo.pt/2022/12/01/farmacias-de-espinho-permanecem-sem-servico-noturno-fruto-de-acordo-no-inicio-da-pandemia/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Farmácias de Espinho permanecem sem serviço noturno, fruto de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRk7ItAM0xPr8JIzkgoepyOaIRyhega-hfNqmaFzdh9fSWKVf_xqb3B5uaAPloz9xnKKKgr4Aen" alt="Farmácias de Espinho permanecem sem serviço noturno, fruto de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Um acordo entre Associação Nacional de Farmácias, o Infarmed e a Administração Regional De Saúde Do Norte (ARS) estabeleceu o encerramento das farmácias de&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}