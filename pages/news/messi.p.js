import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Messi</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Messi"/>
        <meta name="description" content="Trending News about Messi" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Messi</h1>
            <Image width={800} height={500} src="https://static.globalnoticias.pt/oj/image.jpg?brand=OJ&type=generate&guid=62735626-c820-438b-8c86-695ac73cb422&w=800&h=420&watermark=true&t=20221125112800" alt="Messi"/>
            <h3>Recent News</h3>
            <a href='https://www.ojogo.pt/internacional/noticias/dani-alves-visa-mbappe-ainda-nao-percebeu-que-neymar-e-messi-sao-mais-fenomenos-do-que-ele-15387051.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dani Alves visa Mbappé: &quot;Ainda não percebeu que Neymar e Messi ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSqW5EQ2Nke1GVaqDxBI4w3dVfBuEZWtDqUc9R_hSf8z8lf8suhCNnbula_ZQwQopaOrNDiSBat" alt="Dani Alves visa Mbappé: &quot;Ainda não percebeu que Neymar e Messi ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O lateral brasileiro, que partilhou balneário com o avançado francês na temporada 2017/18, no PSG, não mordeu a língua quando questionado sobre as&nbsp;...</p></div>
            </div>
        </a><a href='https://www1.folha.uol.com.br/esporte/2022/11/argentina-conta-com-lideranca-de-messi-para-evitar-tragedia.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Argentina conta com liderança de Messi para evitar tragédia</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTvszb6Q59-_CqpQZGghBgqKyuodoM_TiiWXTOmXcpYrjCa29uZwHnBxnvAvNBkVXY7BhPfRHlP" alt="Argentina conta com liderança de Messi para evitar tragédia" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Pouco antes da subida ao gramado do Maracanã, os jogadores da seleção argentina se reuniram em círculo, e Lionel Messi discursou.</p></div>
            </div>
        </a><a href='https://ge.globo.com/futebol/selecoes/argentina/noticia/2022/11/25/de-pai-para-filho-rotas-de-messi-e-tata-martino-se-cruzam-e-podem-selar-destino-do-craque-na-copa.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>De pai para filho: rotas de Messi e Tata Martino se cruzam e podem ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSkzFyvi1q-Tcb1_jQK6RhWlh4jSuKfCw44y0hunCtsNsjBNt5xHf2i0y3YoULaKlQPqr7Q5vfw" alt="De pai para filho: rotas de Messi e Tata Martino se cruzam e podem ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Argentinos nutrem amizade que envolve pai do craque e passagens por Barcelona e seleção; neste sábado, porém, técnico pode encerrar sonho de Lionel em seu&nbsp;...</p></div>
            </div>
        </a><a href='https://www.terra.com.br/esportes/futebol/argentina-tem-messi-100-em-jogo-da-vida-contra-o-mexico-para-evitar-queda-precoce-na-copa,5fa9d861f0225364c618b5639566c9fclqtxp5vr.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Argentina tem Messi 100% em &#39;jogo da vida&#39; contra o México para ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQvsoWalmlzWJ_7ZA4CBRIPwi8C0s_EEl-ZnUSX9VijfyoebT8twJo9GNV50Yt6yhPT-akjaevY" alt="Argentina tem Messi 100% em &#39;jogo da vida&#39; contra o México para ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Após a derrota surpreendente para a Arábia Saudita, o técnico Lionel Scaloni deve promover mudanças na equipe.</p></div>
            </div>
        </a><a href='https://www.espn.com.br/futebol/copa-do-mundo/artigo/_/id/11281503/heroi-de-titulo-mundial-da-argentina-da-ultimato-para-messi-e-companhia-ou-vao-voltar-pra-casa'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Herói de título mundial da Argentina dá &#39;ultimato&#39; para Messi e ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTIzroSzbOYWn8vFGo8ziCNrrz7cBvzzzOuX4uld0a0OKN-ZOearky9J7ka8DEclriJIhnuZOtz" alt="Herói de título mundial da Argentina dá &#39;ultimato&#39; para Messi e ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mario Kempes, que anotou os dois gols da final da Copa de 78, a primeira vencida pela Argentina, deu um ultimato para Messi e companhia antes de &#39;final&#39; contra&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnnbrasil.com.br/esporte/tecnico-da-argentina-diz-que-messi-esta-100-e-time-fara-de-tudo-para-classificar/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Técnico da Argentina diz que Messi está 100% e time fará de tudo ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRt0VwAAvIGLvY3LzHAB5nk-2ZEGoJdsTCSzOWStPvJGybaH9_-z7nRCCl6RZ7pzVQ3Jvd7fHCS" alt="Técnico da Argentina diz que Messi está 100% e time fará de tudo ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O comandante ainda lembrou os tempos áureos como jogador, mas mostrou qual será a filosofia do elenco argentino. “Um jogo, você pode perder, mas o importante é&nbsp;...</p></div>
            </div>
        </a><a href='https://www.uol.com.br/esporte/colunas/tales-torraga/2022/11/25/messi-sente-dores-e-vai-para-o-sacrificio-na-decisao-de-amanha-com-o-mexico.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tales Torraga - Messi sente dores e vai para o sacrifício na decisão ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQEcP8ywzrIoCdX_fec0sgddQTifC6TcTMUDiy_6VZgioeZ3q2-L_Y3g4xTawd8j32ESdFR9ym_" alt="Tales Torraga - Messi sente dores e vai para o sacrifício na decisão ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Lionel Messi está com dificuldades físicas e não chegará 100% para a decisão da Argentina amanhã contra o México, pelo Grupo C da Copa do Qatar.</p></div>
            </div>
        </a><a href='https://www.terra.com.br/esportes/criticas-de-zico-a-lionel-messi-repercutem-na-imprensa-argentina,6cebfc467f188ca851f0da30a1614af24k2p90kb.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Críticas de Zico a Lionel Messi repercutem na imprensa argentina</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR37zYw9FCYGC0_aF0TY-aMcZ6oTZvTCuVOWrr1LLMr3DGDn8aIR7o-QS6eDjGQc8_pGLkDeo-Y" alt="Críticas de Zico a Lionel Messi repercutem na imprensa argentina" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Convidado da live &#39;Primeiro Lance&#39; na última quinta-feira, Zico repercutiu na imprensa argentina. Durante o papo com os jornalistas Marcos Uchôa e Chandy&nbsp;...</p></div>
            </div>
        </a><a href='https://cnnportugal.iol.pt/videos/levaram-uma-bandeira-de-messi-para-o-catar-mas-ronaldo-tirou-lhe-o-protagonismo-eis-os-autores-do-momento-insolito/63812f170cf2254fb284b43e'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Levaram uma bandeira de Messi para o Catar, mas Ronaldo tirou ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTRRGa3nrpzWxKf3yUU8tbXDivddddXUKo7cCYhvPJ2QsazhTnZjOyblQf4mPYC6vIh0GTgtoDh" alt="Levaram uma bandeira de Messi para o Catar, mas Ronaldo tirou ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Quem a colocou lá? A equipa de enviados da TVI/CNN Portugal descobriu os responsáveis e falou com eles - e são argentinos. Desporto&nbsp;...</p></div>
            </div>
        </a><a href='https://www.lance.com.br/copa-do-mundo/argentina/messi-manda-recado-para-o-elenco-da-argentina-antes-de-decisao.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Messi manda recado para o elenco da Argentina antes de decisão</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQDgvcHOjOox1U_xyRpA3vjIg6kKVlPWOVTzKnD8_MvMZfgrso7wLmqfvV0hHiVlW_bDrsawIvM" alt="Messi manda recado para o elenco da Argentina antes de decisão" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Às vésperas do jogo entre Argentina e México pela Copa do Mundo, Lionel Messi tem sido um líder dentro do vestiário da &quot;Albiceleste&quot;.</p></div>
            </div>
        </a>
        </Template></>;
}