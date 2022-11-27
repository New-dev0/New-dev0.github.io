import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Gleisi Hoffmann</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Gleisi Hoffmann"/>
        <meta name="description" content="Trending News about Gleisi Hoffmann" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Gleisi Hoffmann</h1>
            <Image width={800} height={500} src="https://media.gazetadopovo.com.br/2022/11/01201658/bolsonaro-660x372.jpg" alt="Gleisi Hoffmann"/>
            <h3>Recent News</h3>
            <a href='https://www.gazetadopovo.com.br/republica/breves/bolsonaro-stf-lula-gleisi/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bolsonaro vai ao STF contra Lula e Gleisi Hoffmann</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQBJGalMPrT2AZ1fHxLm-I_Nfa2NXlcgBf--UB0JFFy1_tIHnDUcOq9fmFHaBvEgdfTk0ms4jWp" alt="Bolsonaro vai ao STF contra Lula e Gleisi Hoffmann" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bolsonaro (PL), protocolou no Supremo Tribunal Federal (STF) uma representação contra o presidente eleito, Lula (PT). Leia mais na Gazeta do Povo.</p></div>
            </div>
        </a><a href='https://g1.globo.com/politica/noticia/2022/11/26/ministro-da-justica-manda-pf-investigar-falas-de-gleisi-e-lula-contra-bolsonaro-na-campanha.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ministro da Justiça manda PF investigar falas de Gleisi e Lula contra ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTUQ_ZbqyHB6DsSM0YxaCn0q0Baje4yWdqTucYpjosD2XjPni7qsKseMKe4SWKfs-jmK4LUqkup" alt="Ministro da Justiça manda PF investigar falas de Gleisi e Lula contra ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Anderson Torres cita possíveis crimes contra a honra e a reputação de Bolsonaro. PF pediu que STF defina se foro privilegiado de Gleisi Hoffmann mudaria&nbsp;...</p></div>
            </div>
        </a><a href='https://br.noticias.yahoo.com/bolsonaro-aciona-stf-contra-lula-e-gleisi-por-crimes-contra-a-honra-191628610.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bolsonaro aciona STF contra Lula e Gleisi por &#39;crimes contra a honra&#39;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSGug2Mtlhk76qCzZdJ20AQjXnKf7GyuV7CxOdhXys9NvSgNPxhr4I6K9jFspG7fBqhM9TdY9d3" alt="Bolsonaro aciona STF contra Lula e Gleisi por &#39;crimes contra a honra&#39;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Documento cita &quot;falas ofensivas à honra do presidente e imputação de fatos definidos como crime&quot;</p></div>
            </div>
        </a><a href='https://www.osul.com.br/bolsonaro-vai-ao-supremo-contra-lula-e-gleisi-hoffmann-por-supostos-crimes-contra-a-sua-honra/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bolsonaro vai ao Supremo contra Lula e Gleisi Hoffmann por ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Bolsonaro vai ao Supremo contra Lula e Gleisi Hoffmann por ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O Ministério da Justiça apresentou ao STF (Supremo Tribunal Federal) um documento no qual o presidente Jair Bolsonaro (PL) pede a instauração de ação penal&nbsp;...</p></div>
            </div>
        </a><a href='https://www.correiobraziliense.com.br/politica/2022/11/5054754-bolsonaro-aciona-stf-contra-lula-e-gleisi-por-crimes-contra-honra.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bolsonaro aciona STF contra Lula e Gleisi por &#39;crimes contra honra&#39;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQxdXTIhlDRVPzB79aNQ_u8v-thr72LjZZ6PCOcIwg0Iq1mXuuJHMGFPkfPw-mJ966_9dyTKb_J" alt="Bolsonaro aciona STF contra Lula e Gleisi por &#39;crimes contra honra&#39;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Pedido foi feito depois do comício feito por Lula no Complexo do Alemão, onde ele chama Bolsonaro de &#39;genocida, miliciano, assassino, demônio e canibal&#39;</p></div>
            </div>
        </a><a href='https://cbn.globoradio.globo.com/media/audio/393714/bolsonaro-aciona-o-stf-contra-gleisi-hoffmann-e-lu.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bolsonaro aciona o STF contra Gleisi Hoffmann e Lula por crimes ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRdJLVkjxqHmei8gXnJ6XA6-RSlmRrXNHwqOz6jl9nwTGsZLoWDe0fjQoNZ7CmyzX111dN19P50" alt="Bolsonaro aciona o STF contra Gleisi Hoffmann e Lula por crimes ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Por meio de ofício da Polícia Federal e do Ministério da Justiça, Bolsonaro quer que sejam apurados supostos crimes contra a honra dele.</p></div>
            </div>
        </a><a href='https://jovempan.com.br/videos/programas/jornal-da-manha/bolsonaro-aciona-o-stf-contra-lula-e-gleisi-hoffmann-por-conta-de-ofensas.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bolsonaro aciona o STF contra Lula e Gleisi Hoffmann por conta de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSf4MNVw8PUr-Q1u2P5HQZOmh-7SZXoW8iDRBoFUXvazssy1AnKeCTrBB6w6LFc-7r3iGVWAWML" alt="Bolsonaro aciona o STF contra Lula e Gleisi Hoffmann por conta de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A JOVEM PAN usa cookies para armazenar informações sobre como você usa o nosso site e APPs e as páginas que visita. Tudo para tornar sua experiência a mais&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}