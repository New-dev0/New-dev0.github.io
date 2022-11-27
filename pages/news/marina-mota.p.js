import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Marina Mota</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Marina Mota"/>
        <meta name="description" content="Trending News about Marina Mota" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Marina Mota</h1>
            <Image width={800} height={500} src="https://sic.pt/wp-content/uploads/2022/11/WhatsApp-Image-2022-11-26-at-19.01.37-2-e1669491957420.jpeg" alt="Marina Mota"/>
            <h3>Recent News</h3>
            <a href='https://sic.pt/programas/caixa-magica/damos-colo-uma-a-outra-marina-mota-fala-sobre-a-relacao-com-a-sua-mae/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Damos colo uma a outra&quot; - Marina Mota fala sobre a relação com a ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS4mCg9DSgi24a_Op9VMgQyoURhiuv5c1Xodld8cg0WrzyE13JxHuWUYLHZRFJSJljA76m4YERH" alt="&quot;Damos colo uma a outra&quot; - Marina Mota fala sobre a relação com a ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A atriz tem na sua mãe o seu pilar e emociona-se com mensagem enviada por ela.</p></div>
            </div>
        </a><a href='https://sic.pt/programas/caixa-magica/e-muita-vida-marina-mota-reage-as-imagens-da-sua-carreira/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;É muita vida!&quot; - Marina Mota reage às imagens da sua carreira - SIC</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSqz6tsbfAfhhkX7WYOGJjIz8P37WY4wmOHWpKCO0YNzFcJ9nLZBr1ELP_SSXbpBo9nUlxdYAKh" alt="&quot;É muita vida!&quot; - Marina Mota reage às imagens da sua carreira - SIC" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A atriz foi a &#39;Estrela da Tarde&#39; da Caixa Mágica e viajou no tempo pelos momentos mais inesquecíveis do seu percurso profissional.</p></div>
            </div>
        </a><a href='https://sic.pt/programas/caixa-magica/marina-mota-relembra-a-casa-do-artista-tem-la-gente-que-eu-tenho-a-maior-admiracao/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Marina Mota relembra a Casa do Artista: &quot;Tem lá gente que eu ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRkXMHHSvvx3fUQkcLZCUa9qPYYax_hEqmU1KQhwdU1xoCB4vbH6-HwtbyNBJEBxkLuK-Y-gdlG" alt="Marina Mota relembra a Casa do Artista: &quot;Tem lá gente que eu ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A atriz falou de amigos que estão na Casa do Artista e na necessidade que tem de encontrar tempo para os visitar.</p></div>
            </div>
        </a>
        </Template></>;
}