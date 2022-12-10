import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Livakovic</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Livakovic"/>
        <meta name="description" content="Trending News about Livakovic" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Livakovic</h1>
            <Image width={800} height={500} src="https://wm.observador.pt/wm/obs/l/https%3A%2F%2Fbordalo.observador.pt%2Fv2%2Frs%3Afill%3A770%3A403%2Fc%3A4096%3A2306%3Anowe%3A0%3A0%2Fq%3A85%2Fplain%2Fhttps%3A%2F%2Fs3.observador.pt%2Fwp-content%2Fuploads%2F2022%2F12%2F09175920%2FGettyImages-1447980638-scaled.jpg" alt="Livakovic"/>
            <h3>Recent News</h3>
            <a href='https://observador.pt/2022/12/09/rei-na-defesa-de-penaltis-e-heroi-da-croacia-quem-e-dominik-livakovic/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rei na defesa de penáltis e herói da Croácia: quem é Dominik ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcST8ccjtv_riYb8X6PgatFpNl2EscNdx6Xwd6i25BKP8ybvyCY-o48XijbXpUxXVnuLYle6mXsW" alt="Rei na defesa de penáltis e herói da Croácia: quem é Dominik ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Filho de uma família notável, guardião de 27 anos tem sido o herói croata no Qatar. Já leva quatro grandes penalidades defendidas em dois desempates que&nbsp;...</p></div>
            </div>
        </a><a href='https://ge.globo.com/futebol/selecoes/croacia/noticia/2022/12/09/goleiro-da-croacia-adia-plano-de-ser-diplomata-para-acabar-com-sonho-do-hexa-do-brasil.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Goleiro da Croácia adia plano de ser diplomata para acabar com ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSh2pr9-aNwnWB8nvrRQjYI_nbncXWWdBKBugtfAxfjXPhLFSv9n0YCvWLz_t9MxnObjjqeE2_x" alt="Goleiro da Croácia adia plano de ser diplomata para acabar com ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Livakovic, herói da classificação croata contra o Brasil, já havia defendido três cobranças de pênaltis contra o Japão, nas oitavas de final.</p></div>
            </div>
        </a><a href='https://www.gazetaesportiva.com/copa-do-mundo/melhor-em-campo-livakovic-fecha-o-gol-e-brilha-em-mais-uma-disputa-de-penaltis/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Melhor em campo, Livakovic &#39;fecha o gol&#39; e brilha em mais uma ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQs5hIZIgIiFaUWllQybNW9sm_RDzSgTLypMNRa5iGd0xYG-XxcOHvrSNJHGfK1s2kH3sPz57ss" alt="Melhor em campo, Livakovic &#39;fecha o gol&#39; e brilha em mais uma ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Não foi a primeira vez que Dominik Livakovic se destacou em uma disputa de pênaltis nesta Copa do Mundo do Catar. Contra o Japão, nas oitavas.</p></div>
            </div>
        </a><a href='https://www.correiobraziliense.com.br/esportes/2022/12/5057989-saiba-quem-e-livakovic-goleiro-croata-que-barrou-o-avanco-do-brasil-da-copa.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Saiba quem é Livakovic, goleiro croata que barrou o avanço do ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRaTXOzzTyVhhPj4jDdB0gjmuiOw8uM6f4dkG1iHkQHRqwWWK7Ho4UdPiVdNI4TlKZ9-18XKxLG" alt="Saiba quem é Livakovic, goleiro croata que barrou o avanço do ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O goleiro foi considerado o melhor jogador da partida entre Brasil e Croácia desta sexta-feira (9/12). Ele atua no clube croata Dínamo de Zagreb.</p></div>
            </div>
        </a><a href='https://extra.globo.com/esporte/livakovic-iguala-recordes-se-torna-terceiro-defender-quatro-penaltis-em-uma-copa-do-mundo-25624953.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Livakovic iguala recordes e se torna o terceiro a defender quatro ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSrQtaimO8ArWP_cerR8KWC4VrMzi9JAe0b2hkdZ_oiRY7rc3jbr6TjxnGX5HTvjGrZ-M6eDQ6l" alt="Livakovic iguala recordes e se torna o terceiro a defender quatro ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O goleiro Dominik Livaković escreveu seu nome na história do futebol mundial ao defender a quarta cobrança de pênaltis em uma Copa do Mundo. Ele já havia...</p></div>
            </div>
        </a><a href='https://www.oliberal.com/esportes/copa-do-mundo/quem-e-dominik-livakovic-goleiro-da-croacia-e-algoz-do-brasil-na-copa-do-mundo-2022-1.623128'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Quem é Dominik Livakovic, goleiro da Croácia e algoz do Brasil na ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRTjWKYr-GlNFgs0YgJP0tTGDd81vYI7werNXGrZSn3XXjQLDmqJQH8XtNBwGmXkUDdvT7Aa9QQ" alt="Quem é Dominik Livakovic, goleiro da Croácia e algoz do Brasil na ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Goleiro de 27 anos atua no futebol croata e sofreu apenas dois gols durante toda a Copa do Mundo; Livakovic foi o herói da partida para os europeus.</p></div>
            </div>
        </a><a href='https://trivela.com.br/copa-do-mundo/livakovic-brilhou-de-novo-nos-penaltis-mas-foi-ainda-melhor-pela-seguranca-que-impos-em-120-minutos/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Livakovic brilhou de novo nos pênaltis, mas foi ainda melhor pela ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTLanZpqnQd5P9jubczZdX9B0HS4AksNbYJb_Ozshqanw_NDtWOKK_sWVsjDr-HQD04GiM1aJ71" alt="Livakovic brilhou de novo nos pênaltis, mas foi ainda melhor pela ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Livakovic teve excelente posicionamento e senso de antecipação, o que facilitou suas seguidas defesas contra o Brasil.</p></div>
            </div>
        </a>
        </Template></>;
}