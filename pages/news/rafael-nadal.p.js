import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Rafael Nadal</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Rafael Nadal"/>
        <meta name="description" content="Trending News about Rafael Nadal" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Rafael Nadal</h1>
            <Image width={800} height={500} src="https://bolamarela.com.br/wp-content/uploads/2022/11/FhoGwueXgAEUSil.jpeg" alt="Rafael Nadal"/>
            <h3>Recent News</h3>
            <a href='https://bolamarela.com.br/rafael-nadal-esta-oficialmente-eliminado-da-luta-pelas-meias-nas-atp-finals/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rafael Nadal está oficialmente eliminado da luta pelas &#39;meias&#39; nas ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRvFdowBqvuaP3Lh_G1r6C6JT7gKuHFELh_cL68NX6NfG3mHKrBtpaDidhTKonzjS-v3rzZcXZV" alt="Rafael Nadal está oficialmente eliminado da luta pelas &#39;meias&#39; nas ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Número dois do ranking ATP precisava de ajuda de Taylor Fritz, que tinha de ganhar por dois sets a zero diante de Casper Ruud, para ainda sonhar.</p></div>
            </div>
        </a><a href='https://www.terra.com.br/esportes/tenis/rafael-nadal-perde-segunda-no-atp-finals-deixa-briga-por-numero-1-e-se-complica-em-turim,f231febd9afb48c8d026c0e14383ea0058qmquga.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rafael Nadal perde segunda no ATP Finals, deixa briga por número ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTQH6TG4ERrEXvSmDJtyOhwmjt33Ex7nu8wyAxe7xH6eCJyr2Tw4U7EFemK7mrxDNwOuze_bKCc" alt="Rafael Nadal perde segunda no ATP Finals, deixa briga por número ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Espanhol é superado por Felix Auger-Aliassime por 2 sets a 0, com parciais de 6/3 e 6/4.</p></div>
            </div>
        </a><a href='https://istoe.com.br/ruud-vence-fritz-elimina-nadal-e-avanca-a-semifinal-do-atp-finals/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ruud vence Fritz, elimina Nadal e avança à semifinal do ATP Finals</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Ruud vence Fritz, elimina Nadal e avança à semifinal do ATP Finals" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Acabou o sonho de Rafael Nadal de conquistar o ATP Finals e voltar a ser o número 1 do mundo, posto hoje de Carlos Alcaraz. O espanhol, que perdeu os dois&nbsp;...</p></div>
            </div>
        </a><a href='https://www.uol.com.br/esporte/futebol/ultimas-noticias/lancepress/2022/11/15/nadal-perde-para-aliassime-e-esta-praticamente-eliminado-do-atp-finals.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nadal perde para Aliassime e está praticamente eliminado do ATP ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQlE-zeaR1FmXG6P2KYa3esEZtegNm0ohP3wEEzVHDY7qWnAcHkVsk2zpzQUISoCqdaOijak5VQ" alt="Nadal perde para Aliassime e está praticamente eliminado do ATP ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Rafael Nadal, número dois do mundo, foi derrotado mais uma vez, nesta terça-feira, e praticamente se despediu de suas chances de ir à semifinal do ATP World&nbsp;...</p></div>
            </div>
        </a><a href='https://ge.globo.com/tenis/noticia/2022/11/15/nadal-perde-para-aliassime-e-fica-a-beira-da-eliminacao-no-atp-finals.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nadal perde para Aliassime e fica à beira da eliminação no ATP ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQT8mnYXV1E-OYhsPii4OlIOYfbN-y-ZbkOIkRTp_f4eEj8-TCCzSUHSOQzr__SubuhpWaxDPdm" alt="Nadal perde para Aliassime e fica à beira da eliminação no ATP ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O canadense Felix Auger-Aliassime, de apenas 22 anos, garantiu a primeira vitória da carreira no ATP Finals diante de Rafael Nadal. O espanhol fez uma&nbsp;...</p></div>
            </div>
        </a><a href='https://tenisbrasil.uol.com.br/noticias/101199/Acho-que-nao-esqueci-como-jogar-tenis-diz-Nadal/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>TenisBrasil - &#39;Acho que não esqueci como jogar tênis&#39;, diz Nadal</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQp68u5NOc9Q0vYL9N-krD7oMNCODzAJta-cDVtWvr0nCvTGNpxI0slt8HBfsk40VIvZiNdUAFA" alt="TenisBrasil - &#39;Acho que não esqueci como jogar tênis&#39;, diz Nadal" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Turim (Itália) - Derrotado nas duas partidas que fez até então neste ATP Finals, o espanhol Rafael Nadal saiu de quadra nesta terça-feira com sentimentos&nbsp;...</p></div>
            </div>
        </a><a href='https://www.surtoolimpico.com.br/2022/11/nadal-perde-segunda-consecutiva-e-esta.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nadal perde segunda consecutiva e está eliminado do ATP Finals ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS8hmpZPbEKgvZK6YTjjTXXYnxnBkvDSDhcvpYU8IP7IGd9jNW1axdo7ZPMLS9bcDxSnTA7_2dd" alt="Nadal perde segunda consecutiva e está eliminado do ATP Finals ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O terceiro dia de competições do ATP Finals 2022 contou com uma nova derrota de Rafael Nadal, desta vez para o canadense Auger-Aliassime.</p></div>
            </div>
        </a>
        </Template></>;
}