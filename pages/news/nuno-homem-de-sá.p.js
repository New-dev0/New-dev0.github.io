import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Nuno Homem de Sá</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Nuno Homem de Sá"/>
        <meta name="description" content="Trending News about Nuno Homem de Sá" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Nuno Homem de Sá</h1>
            <Image width={800} height={500} src="https://infocul.pt/wp-content/uploads/2022/07/nuno-e-frederica1.jpg" alt="Nuno Homem de Sá"/>
            <h3>Recent News</h3>
            <a href='https://infocul.pt/nuno-homem-de-sa-e-frederica-lima-celebram-10-meses-de-namoro-amo-te-como-nunca-paixao-da-minha-alma/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nuno Homem de Sá e Frederica Lima celebram 10 meses de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSUQmjJfb7Tp0giLLoGoVaqWIIDYI24XukROGFzP8qh8Wt9jybJsfBqtF8cEAySpRPR3fgL2AMx" alt="Nuno Homem de Sá e Frederica Lima celebram 10 meses de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>“Dez meses de puro amor, companheirismo, aventura, confiança, verdade e muita diversão”, escreveu Nuno nas redes sociais. “Amo-te como nunca, paixão da minha&nbsp;...</p></div>
            </div>
        </a><a href='https://www.hiper.fm/apaixonado-nuno-homem-de-sa-assinala-data-especial-amo-te-como-nunca-paixao-da-minha-alma/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Apaixonado! Nuno Homem de Sá assinala data especial: “Amo-te ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRVBieR3KAVV73NTeUlez25m8yEUAjtfUGd1a2KQ5__v1sG1vdmmn9YT9C3Mtw61mcUonNZqsD6" alt="Apaixonado! Nuno Homem de Sá assinala data especial: “Amo-te ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nuno Homem de Sá reencontrou o amor após sair do &#39;Big Brother Famosos&#39;, ao lado de Frederica Lima. Neste domingo, dia 27 de novembro, os &#39;pombinhos&#39;&nbsp;...</p></div>
            </div>
        </a><a href='https://www.atelevisao.com/tvi/nuno-homem-de-sa-celebra-data-especial-e-declara-se-a-frederica-lima-amo-te-como-nunca-paixao-da-minha-alma/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nuno Homem de Sá celebra data especial e declara-se a Frederica ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQQHmLZw5-rHFZzZVGtygqCJYb97YH8RF7YQc8bzXn3bq9j3spCX7ejR0KlqIlcnCJcN4vKmSsV" alt="Nuno Homem de Sá celebra data especial e declara-se a Frederica ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nuno Homem de Sá e Frederica Lima celebram este domingo, dia 27 de novembro, 10 meses de namoro e o ator não deixou passar a data em branco nas redes sociais.</p></div>
            </div>
        </a>
        </Template></>;
}