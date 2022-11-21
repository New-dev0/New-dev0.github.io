import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Joana Duarte</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Joana Duarte"/>
        <meta name="description" content="Trending News about Joana Duarte" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Joana Duarte</h1>
            <Image width={800} height={500} src="https://media-manager.noticiasaominuto.com/1280/naom_637a365e4cfc9.jpg?crop_params=eyJsYW5kc2NhcGUiOnsiY3JvcFdpZHRoIjoxMDQ1LCJjcm9wSGVpZ2h0Ijo1ODgsImNyb3BYIjoxNywiY3JvcFkiOjUwfX0=" alt="Joana Duarte"/>
            <h3>Recent News</h3>
            <a href='https://www.noticiasaominuto.com/fama/2116901/joana-duarte-exibe-barriguinha-de-gravida-com-noite-de-gala'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Joana Duarte exibe barriguinha de grávida com noite de gala</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRc7B5xIt7EzI5OYMwZ4i9L48Cj0Rx5-D04cSIqXb6LjBkIhQHOH-qW4kYeTsNa7-AMkDVnJ7bf" alt="Joana Duarte exibe barriguinha de grávida com noite de gala" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A atriz marcou presença na cerimónia GQ Men of the Year 2022.</p></div>
            </div>
        </a><a href='https://sic.pt/sic-mulher/gravida-joana-duarte-aposta-em-vestido-justo-e-cheio-de-brilhantes/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Grávida, Joana Duarte aposta em vestido justo e cheio de brilhantes ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQY8d7wiG9lNUgppCh8OUP9oLR7af4obn_kxjA1klfPs_H0WHSAprMUXgWIZuiI6hcxT3bCiY6j" alt="Grávida, Joana Duarte aposta em vestido justo e cheio de brilhantes ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Apostou numa das grandes tendências da noite: um vestido prateado cheio de brilhos bem justo ao corpo. Uma criação de Nuno Miguel Ramos. Ora veja abaixo em&nbsp;...</p></div>
            </div>
        </a><a href='https://www.atelevisao.com/famosos/joana-duarte-exibe-curvas-em-gala-com-vestido-brilhante-que-linda-gravida/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Joana Duarte exibe curvas em gala com vestido brilhante: &quot;Que ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS153LHINTEyfXG_tzmpIl2M0iAhbB8j4T0C5iSuDimrxzmCwYCuTec0BBiO9dQIq-GhOEPA-4Z" alt="Joana Duarte exibe curvas em gala com vestido brilhante: &quot;Que ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Na noite do passado sábado, dia 19 de novembro, realizou-se mais uma gala &#39;Men of the Year&#39;, da GQ Portugal. Joana Duarte foi uma das figuras públicas que.</p></div>
            </div>
        </a>
        </Template></>;
}