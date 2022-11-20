import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Luana Piovani</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Luana Piovani"/>
        <meta name="description" content="Trending News about Luana Piovani" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Luana Piovani</h1>
            <Image width={800} height={500} src="https://sic.pt/wp-content/uploads/2022/11/315530203_1157473274768822_3158917065434128792_n.jpg" alt="Luana Piovani"/>
            <h3>Recent News</h3>
            <a href='https://sic.pt/programas/caixa-magica/apesar-de-todos-os-naos-que-ouviu-luana-piovani-afirma-sou-muito-feliz-com-a-minha-historia/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Apesar de todos os &#39;nãos&#39; que ouviu, Luana Piovani afirma: “Sou ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR1ZXsfe4OsJTtHUGJq5-9zl1Pe6oW4HvfvIQjk105eaV0y0VDv4S087UwTalfGKzTtbWYp4kl6" alt="Apesar de todos os &#39;nãos&#39; que ouviu, Luana Piovani afirma: “Sou ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A atriz interpreta Vanda, a vilã da novela de sucesso &#39;Sangue Oculto&#39;.</p></div>
            </div>
        </a>
        </Template></>;
}