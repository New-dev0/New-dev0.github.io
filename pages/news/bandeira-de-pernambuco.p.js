import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Bandeira de Pernambuco</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Bandeira de Pernambuco"/>
        <meta name="description" content="Trending News about Bandeira de Pernambuco" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Bandeira de Pernambuco</h1>
            <Image width={800} height={500} src="https://s2.glbimg.com/dWHQzWGlZUETZjXcFg98CVmLJMQ=/1200x/smart/filters:cover():strip_icc()/s04.video.glbimg.com/x720/11146111.jpg" alt="Bandeira de Pernambuco"/>
            <h3>Recent News</h3>
            <a href='https://g1.globo.com/pe/pernambuco/noticia/2022/11/22/autoridades-do-catar-tomam-bandeira-de-pernambuco-de-brasileiros-apos-jogo-da-copa-do-mundo.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Brasileiro diz que autoridades do Catar tomaram bandeira de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRB7-JWtdU0TwUQxWwrfKCXzR5pKVP9N-5mO8etKk8EdTQ-bGwHIHcP4KTLzo4lhbcgHQwQHvJs" alt="Brasileiro diz que autoridades do Catar tomaram bandeira de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Caso ocorreu depois da partida da Copa do Mundo entre Arábia Saudita e Argentina, nesta terça-feira (22).</p></div>
            </div>
        </a><a href='https://ge.globo.com/futebol/copa-do-mundo/noticia/2022/11/22/jornalista-e-abordado-no-catar-ao-confundirem-bandeira-de-pernambuco-com-a-da-causa-lgbtqiap-video.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bandeira de Pernambuco é confundida com LGBTQIAP+ e gera ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTcv6pPkOr9YYDe3YIoka3oAvcLhCxYTEZdSxr3KYi6mdgSKWpt8qOUnFWsO9EGJwDh8p3xw7oF" alt="Bandeira de Pernambuco é confundida com LGBTQIAP+ e gera ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jornalista relata que precisou apagar vídeo de abordagem para ter celular devolvido, mas outras pessoas filmaram ação, que mostra homem com farda policial&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cartacapital.com.br/esporte/reporter-e-hostilizado-no-catar-apos-bandeira-de-pernambuco-ser-confundida-com-simbolo-lgbt/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Repórter é hostilizado no Catar após bandeira de Pernambuco ser ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQZMaM-7-g2BH1WX_Nd524WTVNSNOM7symK7fJq8qEXZcHhH_8rq5EBO4ZxZGbvvzZ4YI3ETBO_" alt="Repórter é hostilizado no Catar após bandeira de Pernambuco ser ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&#39;Fui filmar, mas eles pegaram meu celular e só devolveram me obrigando a deletar o vídeo&#39;, relatou Victor Pereira.</p></div>
            </div>
        </a><a href='https://veja.abril.com.br/mundo/bandeira-de-pernambuco-e-confundida-com-manifestacao-lgbtqia-no-catar/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bandeira de Pernambuco é confundida com manifestação ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRId0bs0kzUkcG1vyibRS0IM5cNGJizq_wrBrddYbfJdi3pbEZyl6Mc6sqEnRRMC8iGm6f30Hl2" alt="Bandeira de Pernambuco é confundida com manifestação ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Segundo jornalista, um homem catari e policiais tiraram a bandeira da mão de uma voluntária e pisaram ao confundir o arco-íris da bandeira pernambucana.</p></div>
            </div>
        </a><a href='https://gauchazh.clicrbs.com.br/esportes/copa-do-mundo/noticia/2022/11/bandeira-de-pernambuco-confundida-com-simbolo-lgbt-e-apreendida-no-catar-clasme7a100150170fe8codzq.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bandeira de Pernambuco confundida com símbolo LGBT+ é ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQVjlUzuFd_jhjTYvWJmBVME1QeV3zWQG9ogXs_CKDuIw7t0kZ4OORY9yLPCR_vwX6W8kXO7FI9" alt="Bandeira de Pernambuco confundida com símbolo LGBT+ é ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Um jornalista brasileiro afirma que teve o celular apreendido por um homem vestido com trajes árabes acompanhado por um policial no Catar por gravar imagens&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnnbrasil.com.br/esporte/bandeira-de-pernambuco-e-confundida-com-simbolo-lgbt-e-jornalista-e-reprimido-no-catar/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bandeira de Pernambuco é confundida com símbolo LGBT e ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQeNPcJsxQRWz1J6Nd5rnqgYo9_SeFsob7xXB30CxNpXVPoLiewzJAJ7Narf8wB-wfRv1bOQUhm" alt="Bandeira de Pernambuco é confundida com símbolo LGBT e ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Visivelmente nervoso, o jornalista tenta explicar a situação. “Eu fui atacado por alguns integrantes do Catar e também por policiais. Eles vieram pra cima&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}