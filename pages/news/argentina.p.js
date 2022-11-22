import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Argentina</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Argentina"/>
        <meta name="description" content="Trending News about Argentina" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Argentina</h1>
            <Image width={800} height={500} src="https://static.globalnoticias.pt/oj/image.jpg?brand=OJ&type=generate&guid=064a0281-a2c5-4328-b92d-57ab6f555f61&w=800&h=420&watermark=true&t=20221121140100" alt="Argentina"/>
            <h3>Recent News</h3>
            <a href='https://www.ojogo.pt/internacional/mundial-2022/noticias/adeptos-da-argentina-agitam-catar-veja-a-impressionante-pintura-humana--15372878.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Adeptos da Argentina agitam Catar. Veja a impressionante pintura ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcScuJggEELmHgGlgXT-bG0nrki0u3meNzElXSnPCj-UB4UCux87fV_I0aWMcZR6Vl2qrmMzoY6E" alt="Adeptos da Argentina agitam Catar. Veja a impressionante pintura ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A Argentina estreia-se no Mundial de 2022 na manhã de terça-feira, diante da Arábia Saudita, mas os adeptos já fazem a festa nas ruas de Doha.</p></div>
            </div>
        </a><a href='https://ge.globo.com/futebol/selecoes/argentina/noticia/2022/11/21/scaloni-faz-misterio-sobre-time-titular-da-argentina-e-divide-favoritismo-com-outras-selecoes.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Scaloni faz mistério sobre time titular da Argentina e divide ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQWlAIjdy0jxnRXQ6Tx3GXVJTZH1lpfDLwvtX35H8V0tYvgNsu4EMEuI3c1MzxMTVUSs6z0RBJt" alt="Scaloni faz mistério sobre time titular da Argentina e divide ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Time sul-americano chega ao Catar com 36 jogos de invencibilidade; treinador tem dúvida no meio-campo.</p></div>
            </div>
        </a><a href='https://ge.globo.com/futebol/selecoes/argentina/noticia/2022/11/21/antes-da-estreia-na-copa-pela-argentina-messi-avisa-chego-em-grande-momento.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Leve e sorridente, Messi promete desfrutar cada detalhe com a ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQSVhOuBC-7WerniqwztEiwsfWp5hXlaPaBALxd6jzMZU9tFMunp0JwZymIotiSNHAApg9ovEuW" alt="Leve e sorridente, Messi promete desfrutar cada detalhe com a ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Desfrutar. Palavra que praticamente virou mantra para um Lionel Messi no Catar. Em busca do que chama de &quot;grande sonho&quot;&nbsp;...</p></div>
            </div>
        </a><a href='https://www.uol.com.br/esporte/ultimas-noticias/enm/2022/11/21/argentina-x-arabia-saudita-retrospecto-escalacoes-arbitragem-e-onde-assistir.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Argentina x Arábia Saudita: retrospecto, escalações, arbitragem e ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQlE-zeaR1FmXG6P2KYa3esEZtegNm0ohP3wEEzVHDY7qWnAcHkVsk2zpzQUISoCqdaOijak5VQ" alt="Argentina x Arábia Saudita: retrospecto, escalações, arbitragem e ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A Argentina estreia na Copa do Mundo Qatar 2022 nessa terça-feira (22) diante da Arábia Saudita, às 7h, pelo horário de Brasília-DF, no estádio Lusail,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.infomoney.com.br/consumo/argentina-franca-e-dinamarca-favoritas-e-1-jogo-equilibrado-veja-numeros-do-3o-dia-da-copa/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Argentina, França e Dinamarca favoritas e 1 jogo equilibrado; veja ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQDtdegMlxhY3Ddi09_O9r7sZpYeMeVr5iOAsmeBG7PBO-cIpow58rtE3ko3OzyEkN3I_PKTxYN" alt="Argentina, França e Dinamarca favoritas e 1 jogo equilibrado; veja ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Já México e Polônia devem fazer a partida mais equilibrada até o momento, segundo dados de 3 casas de apostas esportivas online compilados pelo InfoMoney. Jogos&nbsp;...</p></div>
            </div>
        </a><a href='https://extra.globo.com/esporte/com-argentina-lionel-messi-estreia-na-copa-do-mundo-proximo-de-quebrar-cinco-recordes-saiba-quais-25611707.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Com a Argentina, Lionel Messi estreia na Copa do Mundo próximo ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRAzGflpzAjGrCXUIWqD8-9oNUtAyoER8Sc3i-qyzDAayffLYU_NJYIhQPLijy_xssAsatVeJbI" alt="Com a Argentina, Lionel Messi estreia na Copa do Mundo próximo ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Apesar de a França, atual campeã mundial, estrear na Copa do Mundo do Catar, os holofotes do dia 3 estarão voltados para Lionel Messi. O astro da Argentina,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.uol.com.br/esporte/futebol/copa-do-mundo/2022/11/21/argentina-dramatiza-tornozelo-maradoniano-de-messi-astro-diz-estar-bem.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Argentina dramatiza tornozelo &#39;maradoniano&#39; de Messi; astro diz ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRAnf0bdAxeAzbpohGEVluUWrV7hWsblAjnT582kYkObHfYV7kgMHoeEik8bTV3jPIcgSdMiOUX" alt="Argentina dramatiza tornozelo &#39;maradoniano&#39; de Messi; astro diz ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Lionel Messi treinou hoje na véspera da estreia da Argentina na Copa com o tornozelo direito inchado. O craque, porém, disse que não terá probelmas para&nbsp;...</p></div>
            </div>
        </a><a href='https://www.abola.pt/nnh/2022-11-21/argentina-messi-assume-chegar-ao-mundial-num-grande-momento/965572'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Messi assume chegar ao Mundial num «grande momento»</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQobA7l3AmsSI8lt9BwT_cvqrJE2dZ3TsYXpO_gELHJXV9w9nyGZzhyYgC9_WnZ9lJHToVRJbc7" alt="Messi assume chegar ao Mundial num «grande momento»" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Messi assumiu, na antevisão ao duelo entre Argentina e Arábia Saudita, chegar ao Mundial num grande momento. «Sinto-me muito bem fisicamente.</p></div>
            </div>
        </a><a href='https://www.terra.com.br/esportes/futebol/copa-2022/tornozelo-inchado-de-messi-chama-atencao-em-treino-da-argentina,f924e8d0058ab45b7a631b790777fb989283f1mo.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tornozelo inchado de Messi chama atenção em treino da Argentina</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRchpZ2WmzPULVBlDeEMyXTSScIfrw5MQB6YCcP4qM_tRHBtFSF8peZ8poOoMaIa2GXKDDS2r6C" alt="Tornozelo inchado de Messi chama atenção em treino da Argentina" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O atacante Lionel Messi, do Paris Saint-Germain, afirmou que a Copa do Mundo do Catar será sua última chance de vencer a competição da Fifa.</p></div>
            </div>
        </a><a href='https://www.cnnbrasil.com.br/esporte/copa-do-mundo-argentina-e-arabia-saudita/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jogo da Copa Ao Vivo: Argentina x Arábia Saudita</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTn4RW8Ij4wBaUcpn2UXrji1mNNympQdgmJONwz8k_BOgx4HxAR19bPDnn2F0nVz4FzVaIplago" alt="Jogo da Copa Ao Vivo: Argentina x Arábia Saudita" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A partida será realizada no Lusail Stadium, localizado em Lusail. A arena tem capacidade para receber até 80 mil torcedores. Leia mais&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}