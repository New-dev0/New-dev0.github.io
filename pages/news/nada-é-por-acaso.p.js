import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Nada é por acaso</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Nada é por acaso"/>
        <meta name="description" content="Trending News about Nada é por acaso" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Nada é por acaso</h1>
            <Image width={800} height={500} src="https://s2.glbimg.com/pueMQ50YvbnOAJjFG98yNVjC5lI=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/B/X/xbQKxQSaOE8kePxkzB6g/nada-e-por-acaso.jpg" alt="Nada é por acaso"/>
            <h3>Recent News</h3>
            <a href='https://g1.globo.com/ac/acre/noticia/2022/11/17/filme-nada-e-por-acaso-estreia-no-cinema-de-rio-branco.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Filme &#39;Nada é por acaso&#39; estreia no cinema de Rio Branco</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSPsOOKumdo3qWpnEvH3-vqtwW_fm2ruMmLViqzIGT9svAIIreDMpNxph2f6vCIsrc5ZBnZG8t5" alt="Filme &#39;Nada é por acaso&#39; estreia no cinema de Rio Branco" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&quot;Pantera Negra: Wakanda para Sempre&quot; e &quot;Adão Negrão&quot; seguem em cartaz no Cine Araújo.</p></div>
            </div>
        </a><a href='https://www.bemparana.com.br/cinema/nada-e-por-acaso/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nada é Por Acaso</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTKwQS_x7NHxOhNW6ODuuvvTgU2Nq8eFxxI-IG_-pfed_S7AxvPuyGHGhm0z5csd7VzVJscpssk" alt="Nada é Por Acaso" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O longa acompanha duas mulheres, Marina e Maria Eugênia, que possuem temperamentos fortes e percebem ao longo de suas trajetórias, a importância da evolução&nbsp;...</p></div>
            </div>
        </a><a href='https://tangerina.uol.com.br/filmes-series/nada-e-por-acaso-critica/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nada É Por Acaso: Filme preserva obra de Zíbia, mas peca no ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT4YBBqxrDyVBaCS4Jrofh5M6WEzjJnl_z8-s02wPcicKkOJDzDsI7zrPX8tVf_c26pa6mRLaVk" alt="Nada É Por Acaso: Filme preserva obra de Zíbia, mas peca no ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nada É Por Acaso, filme protagonizado por Giovanna Lancellotti e Mika Guluzian estreia nesta quinta-feira (17) nos cinemas; leia a crítica.</p></div>
            </div>
        </a><a href='https://www.campograndenews.com.br/lado-b/diversao/cinemas-tem-suspense-brasileiro-com-estreia-de-nada-e-por-acaso'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cinemas têm suspense brasileiro com estreia de Nada É Por Acaso</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSms_-e2jMss1Qm7Pal3luVf1UMD6JYuO6uzz-SqRFsCv8WPBEVjA-cpIAqFAf6x76Xvpdvd8sj" alt="Cinemas têm suspense brasileiro com estreia de Nada É Por Acaso" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Além da reexibição de &#39;E.T. - O Extraterrestre&#39;, os cinemas têm estreia de suspense brasileiro com “Nada É Por Acaso”, com Giovanna Lancellotti,...</p></div>
            </div>
        </a><a href='https://br.noticias.yahoo.com/estreias-no-cinema-nesta-quinta-080313767.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Estreias no cinema nesta quinta-feira (17): &#39;Nada é por acaso ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Estreias no cinema nesta quinta-feira (17): &#39;Nada é por acaso ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O drama espírita &quot;Nada é por acaso&quot;, com Giovanna Lancellotti e Rafael Cardoso, adaptação de livro de Zibia Gasparetto, é uma das principais apostas. O cinema&nbsp;...</p></div>
            </div>
        </a><a href='https://midiamax.uol.com.br/midiamais/2022/do-livro-para-a-telona-nada-e-por-acaso-chega-aos-cinemas-e-espiritas-comemoram-nao-perco/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Do livro para a telona, &#39;Nada é por Acaso&#39; chega aos cinemas e ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRN-fkhyUXUhHmow-KUD8Bs19yvBPWIrZiwLDqzk8c1T-hYq7BiHAY9UgatZs7OkDT1bUoOS-Px" alt="Do livro para a telona, &#39;Nada é por Acaso&#39; chega aos cinemas e ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Filme mostra história verídica de um casal determinado a dar vida a um sonho, com histórias entrelaçadas, ambição e um desfecho surpreendente.</p></div>
            </div>
        </a>
        </Template></>;
}