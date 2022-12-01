import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Harry Kane</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Harry Kane"/>
        <meta name="description" content="Trending News about Harry Kane" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Harry Kane</h1>
            <Image width={800} height={500} src="https://www.lance.com.br/files/og_image/uploads/2022/11/30/638741d9626df.jpeg" alt="Harry Kane"/>
            <h3>Recent News</h3>
            <a href='https://www.lance.com.br/numeros-da-bola/ainda-sem-marcar-harry-kane-lidera-ranking-de-assistencias-da-copa.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Artilheiro da última Copa do Mundo, Harry Kane vira garçom em 2022</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSREvdnxRlOsRK0qERWzBT1HsPBGI8QmxAgLHUWruun2ABNYbgr9jALFBJkYDR0I8gVB-FUE5OF" alt="Artilheiro da última Copa do Mundo, Harry Kane vira garçom em 2022" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Autor de seis gols em seis partidas na última Copa do Mundo, quando se sagrou artilheiro da competição, Harry Kane ainda não marcou nesta edição.</p></div>
            </div>
        </a><a href='https://br.bolavip.com/futebol/Qatar-2022-Muito-antes-da-Inglaterra-de-Harry-Kane-Brasil-ja-havia-marcado-100-gols-em-Copas-do-Mundo-confira-o-top-5-20221130-0006.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Qatar 2022: Muito antes da Inglaterra de Harry Kane, Brasil já havia ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSrIedeBFSIcBpvC9yOYQY35HMSX2vxSFUIgt4Oq0QtAphlzHfJc7R9WXQ-zKydyP2DDMirntiQ" alt="Qatar 2022: Muito antes da Inglaterra de Harry Kane, Brasil já havia ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A seleção que concebeu o futebol chegou ao centésimo tento contra o País de Gales, na Copa do Mundo do Catar.</p></div>
            </div>
        </a><a href='https://sagresonline.com.br/artilheiro-da-ultima-copa-harry-kane-passa-em-branco-na-primeira-fase-do-mundial-do-catar/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Artilheiro da última Copa, Harry Kane passa em branco na primeira ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRgoWC1pO0LZ5MJxsQbw5fSLznNE-9ckdnBlgg0ClzdneGXsVfjMH8xj3YhC6sM7IgjPXN6JSwO" alt="Artilheiro da última Copa, Harry Kane passa em branco na primeira ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Com seis gols em sete jogos, Harry Kane foi o artilheiro da Copa do Mundo da Rússia em 2018. No entanto, o atacante da Inglaterra ainda não balançou as&nbsp;...</p></div>
            </div>
        </a><a href='https://ge.globo.com/futebol/selecoes/inglaterra/noticia/2022/11/30/garcom-kane-troca-gols-por-assistencias-para-companheiros-na-inglaterra.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Garçom! Kane troca gols por assistências para companheiros na ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQaFU5f329H8cvNX80cqRcPhqZM9aQ2S8N5UOYTvmo-zE95OlhBH_2N-38QlaIQjIVn0iA72o1d" alt="Garçom! Kane troca gols por assistências para companheiros na ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Pela seleção da Inglaterra, Harry Kane foi o artilheiro da Copa do Mundo de 2018, na Rússia, com seis gols. No Catar, muito se espera que o atacante do&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sambafoot.com/br/copa/harry-kane-vai-de-artilheiro-a-garcom-em-copas-do-mundo-entenda'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Harry Kane vai de artilheiro a garçom em Copas do Mundo; entenda!</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTt7TkmuZvvMFJI0blMPCaOR53gV2CsifhX__0NztnjeNJ72n7zQ0OuHt6sboTC_h9scaAyLyKz" alt="Harry Kane vai de artilheiro a garçom em Copas do Mundo; entenda!" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Artilheiro na Copa da Rússia em 2018 com seis gols, Kane é o líder em assistências no Qatar com três passes para gols.</p></div>
            </div>
        </a><a href='https://veja.abril.com.br/esporte/kane-termina-1a-fase-sem-gols-e-ve-maldicao-sobre-artilheiros-de-copas/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kane termina 1ª fase sem gols e vê &#39;maldição&#39; sobre artilheiros de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR5-3o1fSfsH_nqBaMaxdx8EkdAK9k_mNWG-tIt2jGakgX6ZbfVopJrZ7SV2MxF5EAVEJRmZuH1" alt="Kane termina 1ª fase sem gols e vê &#39;maldição&#39; sobre artilheiros de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Goleador do Mundial de 2018, atacante passou em branco na fase de grupos e já vê sina de dificuldades rondar - apesar de boas atuações e classificação.</p></div>
            </div>
        </a><a href='https://terceirotempo.uol.com.br/noticias/kane-termina-a-primeira-fase-sem-gols-mas-se-torna-o-maior-garcom-da-copa'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kane termina a primeira fase sem gols, mas se torna o maior ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSFIXHi-LLmh53fobs2_Q_ebuUcpGrlK15biaJ_XLNrHTQ0k14gXG3ybDwPA8XhiFpcnwObudRV" alt="Kane termina a primeira fase sem gols, mas se torna o maior ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Artilheiro da Copa de 2018 com 6 gols marcados, Harry Kane ainda não balançou as redes no mundial de 2022. O camisa 9 da Inglaterra, no entanto,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}