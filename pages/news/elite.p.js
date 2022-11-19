import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Elite</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Elite"/>
        <meta name="description" content="Trending News about Elite" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Elite</h1>
            <Image width={800} height={500} src="https://www.nit.pt/wp-content/plugins/madmen-opengraph-image-v2/madmen-opengraph-image.php?post_id=984856&ts=20221118111129" alt="Elite"/>
            <h3>Recent News</h3>
            <a href='https://www.nit.pt/cultura/televisao/os-episodios-da-sexta-temporada-de-elite-ja-chegaram-a-netflix'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Os episódios da sexta temporada de “Elite” já chegaram à Netflix</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT_geGvCdBEd7VUffsgyTmxSa4EMXEffnH5uwJEEuYZJYjLnkHToPPP16tiEyTe6KsL_6cUx2T_" alt="Os episódios da sexta temporada de “Elite” já chegaram à Netflix" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Leia também este artigo da NiT sobre o ator português Carloto Cotta que integrou o elenco da quinta temporada de “Elite” e que irá continuar na história. E pode&nbsp;...</p></div>
            </div>
        </a><a href='https://www.uol.com.br/splash/noticias/2022/11/18/elite-sem-sexo-6-temporada-muda-tom-e-divide-fas.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Elite&#39; sem sexo? 6ª temporada muda tom e divide fãs</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQko_Kp3IHoyPg3AdVwEJPNbhd2a0_SUxXnCKKGcFw1p2pTf8U4NgXkXEdeeLtvpVY256z6z6qR" alt="&#39;Elite&#39; sem sexo? 6ª temporada muda tom e divide fãs" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Penúltimo ano da série espanhola da Netflix prioriza temas maduros e diminui foco em sexo. Criado e roteirista explicam motivo.</p></div>
            </div>
        </a><a href='https://sapobrasil.com.br/celebridades/artigos/nos-bastidores-da-nova-temporada-de-elite-estreia-dia-18'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nos bastidores da nova temporada de “Elite”. Estreia dia 18</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQOsaba5K6IqYxkr0BMk3tpPXrxdUFYINlbuXsbGgUBv1Z7syqLJsFtq7jaaPLkgdIi5MCyl1k8" alt="Nos bastidores da nova temporada de “Elite”. Estreia dia 18" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Las Encinas vai começar mais um ano letivo. Veja o vídeo com as primeiras imagens da série da Netflix e a galeria com fotos das ...</p></div>
            </div>
        </a><a href='https://www.terra.com.br/diversao/entre-telas/series/nova-temporada-de-elite-diminui-cenas-de-sexo-e-divide-fas,69daf13d732b1b68db2b1640625d1c60xkqhhyt0.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nova temporada de &quot;Elite&quot; diminui cenas de sexo e divide fãs</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQet8vHMPe6k6wD0Pwz841l9AMKJv0Vz4r7PvtnkTPAnuP9RgZe3gaxDofLOnkfXmAgjOrrWLqs" alt="Nova temporada de &quot;Elite&quot; diminui cenas de sexo e divide fãs" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A 6ª temporada de &quot;Elite&quot; estreou na Netflix nessa sexta (18/11) com uma diferença crucial em ...</p></div>
            </div>
        </a><a href='https://jc.ne10.uol.com.br/cultura/2022/11/15123157-elite-sexta-temporada-de-elite-estreia-na-netflix-hoje-18-11-veja-o-que-se-sabe-sobre-a-serie.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ELITE: sexta temporada de Elite estreia na Netflix hoje, 18/11; veja o ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT40btTsgmgplshPXop1HdXUht_cZNXNaQ7fs4ycNziiJ5ApM7Dykr9Efn1iqH34D1LvD0V7MdQ" alt="ELITE: sexta temporada de Elite estreia na Netflix hoje, 18/11; veja o ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A 6ª temporada da espanhola &quot;Elite&quot;, série de grande sucesso da Netflix, estreia na sexta-feira (18)</p></div>
            </div>
        </a><a href='https://www.jornalcontabil.com.br/elite-sexta-temporada-ja-esta-disponivel-na-netflix/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Elite: sexta temporada já está disponível na Netflix</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQco8_BrqCYrHY0cCnMomC9oPDnqdwSdBePxtXDGqQvne7YSrp-GQySzygupqGPuDXf7ezArZbn" alt="Elite: sexta temporada já está disponível na Netflix" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Após a morte de Samuel, Las Encinas enfrenta um novo ano letivo tentando encobrir os desastres do passado. No entanto, o conflito em suas salas de aula é&nbsp;...</p></div>
            </div>
        </a><a href='https://www.tecmundo.com.br/minha-serie/254498-elite-estreia-7-temporada-descubra.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Elite: quando estreia a 7ª temporada? Descubra!</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTSywL9veqDk4H95efqkBkVbIazRPBtvWlQOiMQoYQPhV_S6bJvmmPdt0PKVnTQjlimmAvejT4P" alt="Elite: quando estreia a 7ª temporada? Descubra!" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Veja tudo o que já sabemos sobre a 7ª temporada de Elite, desde a data de estreia, até a trama e elenco dos novos episódios da série.</p></div>
            </div>
        </a>
        </Template></>;
}