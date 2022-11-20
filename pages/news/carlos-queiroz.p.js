import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Carlos Queiroz</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Carlos Queiroz"/>
        <meta name="description" content="Trending News about Carlos Queiroz" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Carlos Queiroz</h1>
            <Image width={800} height={500} src="https://cdn-images.rtp.pt/icm/images/d6/d61a350e332277a39b49d9e94d334617_N.jpg?" alt="Carlos Queiroz"/>
            <h3>Recent News</h3>
            <a href='https://www.rtp.pt/noticias/desporto/mundial-no-catar-carlos-queiroz-deixa-elogios-a-selecao-nacional_v1448259'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mundial no Catar. Carlos Queiroz deixa elogios à seleção nacional</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRcW6w4_Z2XTNR2qJnhgoVvYDBEbYK3R22ILeBMj_4aAs-pASBL9Jv5sC1NPhVsoe7Y2OFNCWg3" alt="Mundial no Catar. Carlos Queiroz deixa elogios à seleção nacional" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Carlos Queiroz disse esta manhã que Portugal está num momento único na história devido à quantidade de valores no grupo.</p></div>
            </div>
        </a><a href='https://rr.sapo.pt/bola-branca/noticia/futebol-internacional/2022/11/19/carlos-queiroz-bom-senso-de-fernando-santos-vai-ajudar-a-gerir-o-caso-ronaldo/308719/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Carlos Queiroz. &quot;Bom senso&quot; de Fernando Santos vai ajudar a gerir ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRvp3IUTeoD73jcCFcKOZUpDl9OKVtx_Y3VxLkWJl6jGRH_kA_hPh6vCUkyWvO-YcDjyky4iRVW" alt="Carlos Queiroz. &quot;Bom senso&quot; de Fernando Santos vai ajudar a gerir ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Selecionador do Irão falou do &quot;momento único&quot; que o futebol português vive e acredita que Portugal não sairá prejudicado da entrevista dada recentemente por&nbsp;...</p></div>
            </div>
        </a><a href='https://desporto.sapo.pt/futebol/mundial/artigos/mundial2022-queiroz-nao-se-mostra-surpreendido-com-criticas-de-ronaldo-ao-united'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mundial2022: Carlos Queiroz não se mostra surpreendido com ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTTpq2ApocvF5diQ7uB4xDcbLviIVl73HaY2zGfQAPYRfTgxOydin29cd7p5WLdPirs3cOVwAOT" alt="Mundial2022: Carlos Queiroz não se mostra surpreendido com ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Carlos Queiroz, técnico-adjunto dos &#39;red devils&#39; entre 2002 e 2008, falou da “grande instabilidade” que o jogador português encontrou em Old Trafford.</p></div>
            </div>
        </a><a href='https://www.ojogo.pt/internacional/cristiano-ronaldo/noticias/queiroz-e-a-entrevista-de-ronaldo-nao-me-surpreende-o-contexto-do-clube-nao-e-o-mesmo-15368137.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Queiroz e a entrevista de Ronaldo: &quot;Não me surpreende, o contexto ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ2o7qHUoGNkg38nGmQMxnm2Gij3pHOzl60Ea_6Cb-TB5WnPsWQj1FoDc_XVWyDNYtiAUandlrv" alt="Queiroz e a entrevista de Ronaldo: &quot;Não me surpreende, o contexto ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O selecionador do Irão, o português Carlos Queiroz, não se mostrou este sábado surpreendido com as críticas do compatriota Cristiano Ronaldo ao Manchester&nbsp;...</p></div>
            </div>
        </a><a href='https://www.abola.pt/nnh/2022-11-19/queiroz-compreende-criticas-de-ronaldo-ao-manchester-united/965306'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Queiroz compreende críticas de Ronaldo ao Manchester United</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSL1jYB-yeABNu4wTjqip1gtPlD3lCGjqsuvX6o6UIeW_kELM7TtOS3htjgYlywMEzVLjMhRHIQ" alt="Queiroz compreende críticas de Ronaldo ao Manchester United" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Carlos Queiroz, selecionador do Irão, avaliou a situação de Cristiano Ronaldo no Manchester United, ele que foi adjunto de Alex Ferguson na primeira&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}