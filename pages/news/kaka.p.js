import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Kaka</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Kaka"/>
        <meta name="description" content="Trending News about Kaka" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Kaka</h1>
            <Image width={800} height={500} src="https://s2.glbimg.com/K91Zx_DRCa10huHDTFxodfwJtWM=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_5dfbcf92c1a84b20a5da5024d398ff2f/internal_photos/bs/2022/q/e/bnuwuwTpOypkcV0AnuhA/kaka-317447694-1579384879161547-6641616582669429204-n.jpg" alt="Kaka"/>
            <h3>Recent News</h3>
            <a href='https://vogue.globo.com/celebridades/noticia/2022/11/kaka-posa-ao-lado-de-cafu-roberto-carlos-e-ronaldo.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kaká, Cafu, Roberto Carlos e Ronaldo posam juntos em estádio no ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQwpm-jjkPS7CbCr6qMBWJnqJAWKkNJLZzHC44iHJ8MCZAt7m6KAQD_ZWs7j7Mn1YRCnLFODdDu" alt="Kaká, Cafu, Roberto Carlos e Ronaldo posam juntos em estádio no ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kaká, Cafu, Roberto Carlos e Ronaldo Fenômeno posaram juntos nesta segunda-feira (28.11) no estádio 974. As lendas do futebol se reuniram no segundo jogo do&nbsp;...</p></div>
            </div>
        </a><a href='https://ge.globo.com/futebol/selecao-brasileira/noticia/2022/11/28/video-ronaldo-roberto-carlos-cafu-e-kaka-vibram-com-gol-de-casemiro-pela-selecao.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Vídeo: Ronaldo, Roberto Carlos, Cafu e Kaká vibram com gol de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQFPmBksxYJz36adBZrlHc8ehofW_5I_A9U4uDlK6XguAte0S-SxosXgafFmXdejk31bgDvuMBP" alt="Vídeo: Ronaldo, Roberto Carlos, Cafu e Kaká vibram com gol de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Quarteto do penta esteve nesta segunda-feira no estádio 974, no Catar, para o duelo contra a Suíça.</p></div>
            </div>
        </a><a href='https://br.noticias.yahoo.com/beleza-de-kaka-rouba-a-cena-em-aparicao-na-copa-do-mundo-que-nem-vinho-192701465.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Beleza de Kaká rouba a cena em aparição na Copa do Mundo ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT4c1hXixI-66RgjiJJoDRy5kCQfgGJF4Z5cOo9h3gctzC6mfCivT7oeP0vv5_Qatztv1LSPxAM" alt="Beleza de Kaká rouba a cena em aparição na Copa do Mundo ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ex-jogador marcou presença ao lado dos colegas pentacampeões no jogo do Brasil.</p></div>
            </div>
        </a><a href='https://www.eonline.com/br/news/1356127/ronaldo-assiste-jogo-da-copa-ao-lado-de-kaka-cafu-e-roberto-carlos'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ronaldo assiste jogo da Copa ao lado de Kaká, Cafu e Roberto ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTOh4oAbAbjMCDkDNbhj1oGWgGFor1pOFYWVSTKIocQPuvUmNU5tHnj2eKEvFRN7ndFwibSCbRX" alt="Ronaldo assiste jogo da Copa ao lado de Kaká, Cafu e Roberto ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O astro se reuniu com outros gigantes do futebol para assistir ao jogo do Brasil no Qatar!</p></div>
            </div>
        </a><a href='https://diariodonordeste.verdesmares.com.br/jogada/futebol/copa-do-mundo/internautas-exaltam-kaka-ao-longo-de-dez-anos-envelheceu-como-vinho-1.3306290'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Internautas exaltam Kaká ao longo de dez anos: &#39;envelheceu como ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRlrtesHZemFOu2KjZXZvx-SZHzYVihX-jtJ1Dt-8iCkyWDYJicU_w0Apus4VOFud9wN2JeFhiI" alt="Internautas exaltam Kaká ao longo de dez anos: &#39;envelheceu como ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jogadores que trouxeram o pentacampeonato para o Brasil estiveram presentes na plateia do jogo da seleção brasileira contra a Suíça, na Copa do Mundo 2022,&nbsp;...</p></div>
            </div>
        </a><a href='https://gcmais.com.br/camisa-8/2022/11/28/kaka-ronaldo-cafu-e-roberto-carlos-assistem-juntos-vitoria-do-brasil-contra-suica/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kaká, Ronaldo, Cafu e Roberto Carlos assistem juntos vitória do ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTBiv6goqHf8vDt-lq5etSyYnAMlQRXmTA0esc7HO70Ru4rWeQv7c7qvbtv5vtTxaPkGLJ1YqGP" alt="Kaká, Ronaldo, Cafu e Roberto Carlos assistem juntos vitória do ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kaká, Cafu, Roberto Carlos e Ronaldo Fenômeno posaram juntos durante partida do Brasil contra a Suiça, em mais uma rodada da Copa do Mundo do Catar.</p></div>
            </div>
        </a>
        </Template></>;
}