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
            <Image width={800} height={500} src="https://s2.glbimg.com/GQJYpcRdslCAeuXRpJVop8jpIzg=/1200x/smart/filters:cover():strip_icc()/s.glbimg.com/es/ge/f/original/2014/11/11/lionel_messi_e_tata_martino_treino_argentina.jpg" alt="Messi"/>
            <h3>Recent News</h3>
            <a href='https://ge.globo.com/futebol/selecoes/argentina/noticia/2022/11/25/de-pai-para-filho-rotas-de-messi-e-tata-martino-se-cruzam-e-podem-selar-destino-do-craque-na-copa.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>De pai para filho: rotas de Messi e Tata Martino se cruzam e podem ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSkzFyvi1q-Tcb1_jQK6RhWlh4jSuKfCw44y0hunCtsNsjBNt5xHf2i0y3YoULaKlQPqr7Q5vfw" alt="De pai para filho: rotas de Messi e Tata Martino se cruzam e podem ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Argentinos nutrem amizade que envolve pai do craque e passagens por Barcelona e seleção; neste sábado, porém, técnico pode encerrar sonho de Lionel em seu&nbsp;...</p></div>
            </div>
        </a><a href='https://www1.folha.uol.com.br/esporte/2022/11/argentina-conta-com-lideranca-de-messi-para-evitar-tragedia.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Argentina conta com liderança de Messi para evitar tragédia</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTvszb6Q59-_CqpQZGghBgqKyuodoM_TiiWXTOmXcpYrjCa29uZwHnBxnvAvNBkVXY7BhPfRHlP" alt="Argentina conta com liderança de Messi para evitar tragédia" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Em 2010, no Mundial da África do Sul, o craque tropeçou no discurso antes da partida contra a Grécia. O então técnico Diego Maradona decidiu que ele seria&nbsp;...</p></div>
            </div>
        </a><a href='https://ge.globo.com/futebol/selecoes/argentina/noticia/2022/11/25/escalacao-da-argentina-messi-e-lideres-do-elenco-tem-papo-com-scaloni-que-monta-time-de-final.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Escalação da Argentina: Messi treina e joga contra o México ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcROPo2Y-JmLe9_YFF5qulRweRVynSFhccMfrosT-D2n5LVCpA_Tv7eN-jxNtS4VH4qimIbAOQ9H" alt="Escalação da Argentina: Messi treina e joga contra o México ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Messi, inclusive, teve uma conversa com o técnico Lionel Scaloni e sua comissão antes da atividade. Além do craque, outros líderes do elenco participaram, casos&nbsp;...</p></div>
            </div>
        </a><a href='https://www.terra.com.br/esportes/futebol/argentina-tem-messi-100-em-jogo-da-vida-contra-o-mexico-para-evitar-queda-precoce-na-copa,5fa9d861f0225364c618b5639566c9fclqtxp5vr.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Argentina tem Messi 100% em &#39;jogo da vida&#39; contra o México para ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT6CF5ddVGUd5tnwnTsOwGi1YCItYsaIGo4qgA_ZBAAHVQquYsIRxbE9Cw0NAU5zfY2wFv2xLeu" alt="Argentina tem Messi 100% em &#39;jogo da vida&#39; contra o México para ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Após a derrota surpreendente para a Arábia Saudita, o técnico Lionel Scaloni deve promover mudanças na equipe.</p></div>
            </div>
        </a><a href='https://www.espn.com.br/futebol/copa-do-mundo/artigo/_/id/11281503/heroi-de-titulo-mundial-da-argentina-da-ultimato-para-messi-e-companhia-ou-vao-voltar-pra-casa'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Herói de título mundial da Argentina dá &#39;ultimato&#39; para Messi e ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQD84OKqBPcHFV7o9B0TRrOF5RV8JIl6UcX3gWq9_YRvH0Oewil8JBUJliOxItUPI0QiLkz_sJF" alt="Herói de título mundial da Argentina dá &#39;ultimato&#39; para Messi e ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mario Kempes, que anotou os dois gols da final da Copa de 78, a primeira vencida pela Argentina, deu um ultimato para Messi e companhia antes de &#39;final&#39; contra&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnnbrasil.com.br/esporte/tecnico-da-argentina-diz-que-messi-esta-100-e-time-fara-de-tudo-para-classificar/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Técnico da Argentina diz que Messi está 100% e time fará de tudo ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRt0VwAAvIGLvY3LzHAB5nk-2ZEGoJdsTCSzOWStPvJGybaH9_-z7nRCCl6RZ7pzVQ3Jvd7fHCS" alt="Técnico da Argentina diz que Messi está 100% e time fará de tudo ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O treinador ainda apontou a importância de Messi para o elenco argentino. “Ele sabe que temos um jogo importante, e os mais jovens sabem que as cartas estão&nbsp;...</p></div>
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
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQvtJWoEhWEk8NFidRWrctXY-Zf9041uaHLI02mtKMtCXflX5h970JIhlKE9YNOO1szd1yk0iTz" alt="Críticas de Zico a Lionel Messi repercutem na imprensa argentina" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Convidado da live &#39;Primeiro Lance&#39; na última quinta-feira, Zico repercutiu na imprensa argentina. Durante o papo com os jornalistas Marcos Uchôa e Chandy&nbsp;...</p></div>
            </div>
        </a><a href='https://www.lance.com.br/copa-do-mundo/argentina/messi-manda-recado-para-o-elenco-da-argentina-antes-de-decisao.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Messi manda recado para o elenco da Argentina antes de decisão</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQDgvcHOjOox1U_xyRpA3vjIg6kKVlPWOVTzKnD8_MvMZfgrso7wLmqfvV0hHiVlW_bDrsawIvM" alt="Messi manda recado para o elenco da Argentina antes de decisão" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Às vésperas do jogo entre Argentina e México pela Copa do Mundo, Lionel Messi tem sido um líder dentro do vestiário da &quot;Albiceleste&quot;.</p></div>
            </div>
        </a><a href='https://cnnportugal.iol.pt/videos/levaram-uma-bandeira-de-messi-para-o-catar-mas-ronaldo-tirou-lhe-o-protagonismo-eis-os-autores-do-momento-insolito/63812f170cf2254fb284b43e'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Levaram uma bandeira de Messi para o Catar, mas Ronaldo tirou ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTRRGa3nrpzWxKf3yUU8tbXDivddddXUKo7cCYhvPJ2QsazhTnZjOyblQf4mPYC6vIh0GTgtoDh" alt="Levaram uma bandeira de Messi para o Catar, mas Ronaldo tirou ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Quem a colocou lá? A equipa de enviados da TVI/CNN Portugal descobriu os responsáveis e falou com eles - e são argentinos. Desporto&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}