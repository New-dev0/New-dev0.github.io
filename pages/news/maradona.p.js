import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Maradona</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Maradona"/>
        <meta name="description" content="Trending News about Maradona" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Maradona</h1>
            <Image width={800} height={500} src="https://conteudo.imguol.com.br/c/noticias/6e/2022/11/27/maradona-holograma-1669558508885_v2_615x300.png" alt="Maradona"/>
            <h3>Recent News</h3>
            <a href='https://www.uol.com.br/tilt/noticias/redacao/2022/11/27/maradona-vivo-no-qatar-ia-permite-conversar-com-jogador-veja-videos.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Maradona vivo no Qatar: IA deixa conversar com craque argentino ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS9XwhyF9nLV49tZhOaIoAnFVtrdO4Woy8uUelE56c8Xo8rL4byoOQF5BT1NFOocVg1jQS69p-d" alt="Maradona vivo no Qatar: IA deixa conversar com craque argentino ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Torcedores que chegam à sede da Copa do Mundo podem interagir com o craque argentino Maradona, em 10 idiomas diferentes, graças a inteligência artificial.</p></div>
            </div>
        </a><a href='https://www1.folha.uol.com.br/esporte/2022/11/maradona-virtual-conversa-com-fas-na-copa-do-qatar.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Maradona virtual conversa com fãs na Copa do Qatar</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTrEQruRWWjT4K0W8WnrwzqjGyLVHolRbmmFWpB66c3QN3iK2RXWbWP0u0tYno4KzCpJ47i7DR1" alt="Maradona virtual conversa com fãs na Copa do Qatar" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Camisa 10 argentino campeão em 1986 dá dica de quem vai ganhar o Mundial.</p></div>
            </div>
        </a><a href='https://olhardigital.com.br/2022/11/27/pro/inteligencia-artificial-faz-maradona-voltar-a-vida-no-catar-assista/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Inteligência artificial faz Maradona “voltar à vida” no Catar; assista</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT3TSMD0GgFYObeqwrgzE2-ygr87YKr5NpdY1b9BoEIRg6q0JilOV6n59BonbSXzCySYj-Ee7LF" alt="Inteligência artificial faz Maradona “voltar à vida” no Catar; assista" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A Copa do Mundo do Catar é a primeira desde a morte de Diego Maradona. Porém, os fãs ganharam uma chance de ver e até falar com o ídolo.</p></div>
            </div>
        </a><a href='https://www.metropoles.com/mundo/empresa-recria-maradona-virtual-em-campanha-para-a-copa-veja-video'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Empresa recria Maradona “virtual” em campanha para a Copa. Veja ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR90AtMYF3dy65laJHXeyC1jyywFPqgoPHNPEoT19TzbzEscv_Xotq5En9PE49LgTAX2tdF9xYX" alt="Empresa recria Maradona “virtual” em campanha para a Copa. Veja ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Avião Tango D10S reproduz figura virtual do argentino que interage com visitantes em dez idiomas diferente ao desembarcar no Catar.</p></div>
            </div>
        </a><a href='https://esporte.ig.com.br/parceiros/onefootball/2022-11-27/messi-iguala-maradona-em-partidas-de-copa-do-mundo.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Messi iguala Maradona em partidas de Copa do Mundo</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT9xqypnpOy7yWl3Ai9zYwfm1nAdLoNAnHVJmspSjRaJ2Qldno85HDCVZuy6Y46aiE7A2Egyg19" alt="Messi iguala Maradona em partidas de Copa do Mundo" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Lionel Messi se igualou com Diego Armando Maradona como o argentino com mais partidas na história da Copa do Mundo, com 22 jogos disputados.</p></div>
            </div>
        </a><a href='https://www.bnews.com.br/noticias/esporte/empresa-recria-maradona-virtual-em-campanha-para-a-copa.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Empresa recria Maradona “virtual” em campanha para a Copa; confira</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT588CbD_G7fZ4CanpxCQ8m9o5QcrxwHHuNbA-O5kdqAiNp_ZjREJxd-Q3WgRh97PZGA-bwm8GM" alt="Empresa recria Maradona “virtual” em campanha para a Copa; confira" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Foram necessárias&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}