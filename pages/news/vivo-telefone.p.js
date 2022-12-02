import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Vivo telefone</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Vivo telefone"/>
        <meta name="description" content="Trending News about Vivo telefone" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Vivo telefone</h1>
            <Image width={800} height={500} src="https://s2.glbimg.com/1SIqLXIG_WATGEnXP0hj_0uEamk=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/h/d/z2UhbPS9KyYFdshU0e3w/loja-da-vivo.jpg" alt="Vivo telefone"/>
            <h3>Recent News</h3>
            <a href='https://g1.globo.com/tecnologia/noticia/2022/12/01/vivo-apresenta-instabilidade-nesta-quinta-feira.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Vivo apresenta instabilidade em serviços de telefonia e internet</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRQvSA0vSvmI6xgXE82t_XoOUOK2xfpIYe25GaQFb9QjV0zWhb7X1G01ZMO8vnh9slSejWMjpLo" alt="Vivo apresenta instabilidade em serviços de telefonia e internet" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Clientes da empresa de telecom reclamaram de falta de sinal em várias regiões do Brasil. Em rede social, Vivo disse que &#39;sistemas estão passando por&nbsp;...</p></div>
            </div>
        </a><a href='https://www.em.com.br/app/noticia/tecnologia/2022/12/01/interna_tecnologia,1428183/vivo-usuarios-relatam-instabilidade-nos-servicos-de-telefone-e-internet.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Vivo: usuários relatam instabilidade nos serviços de telefone e internet</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSTS-Nuo5nvU-pjJ9C729-MJOFPMWtSrljwzxNiKBF0l5JE4gHy3Qp3tQeXbetqEYlYR-ffz_1j" alt="Vivo: usuários relatam instabilidade nos serviços de telefone e internet" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Em relatos feitos pelas redes sociais, usuários da operadora de celular reclamam de não conseguir enviar mensagens, fazer ligações e acessar a internet.</p></div>
            </div>
        </a><a href='https://www1.folha.uol.com.br/mercado/2022/12/sinal-da-vivo-tem-instabilidade-nesta-quinta-feira-1o.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sinal da Vivo tem instabilidade nesta quinta-feira (1º)</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQsSY68Ks4_nVcxjvtFyCjiVY7ZMGafpAT0rXO-DPTmBmGMl5GE31czrc4XdBl4_FhXBZUKuAme" alt="Sinal da Vivo tem instabilidade nesta quinta-feira (1º)" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sinal da Vivo tem instabilidade nesta quinta-feira (1º). Plataforma de monitoramento registrou pico de reclamações às 10h30.</p></div>
            </div>
        </a><a href='https://www.moneytimes.com.br/vivo-sem-sinal-usuarios-reclamam-de-problemas-com-telefone-movel-e-internet-fixa/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Vivo sem sinal: Usuários reclamam de problemas com telefone ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRdiMJo4U61uXAYXzaV2yVR_fNDjnydFS1kCQH3ljY-kBiNLTNerYebUDUllU3io3gR_h59b_Ha" alt="Vivo sem sinal: Usuários reclamam de problemas com telefone ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Vivo fora do ar? Nas redes sociais, usuários indicam problemas com serviços de telefonia móvel e internet fixa da operadora. Confira.</p></div>
            </div>
        </a><a href='https://tecnoblog.net/noticias/2022/12/01/vivo-fica-fora-do-ar-falta-de-sinal-afeta-clientes-nessa-quinta-1/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Vivo fica fora do ar: falta de sinal afeta clientes nessa quinta (1)</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcToyuSbNT6lvPkaqPN0Lyqcr5mhoQse_qzxaCy2iLaaPBLl5zAs6XN4VxZu9YKDQ8UvJ_jHjgRJ" alt="Vivo fica fora do ar: falta de sinal afeta clientes nessa quinta (1)" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Usuários da Vivo estão com problemas para utilizar serviços da operadora; indisponibilidade afeta clientes em diversas partes do Brasil.</p></div>
            </div>
        </a><a href='https://www.campograndenews.com.br/educacao-e-tecnologia/usuarios-relatam-instabilidade-no-sinal-da-vivo-nesta-quinta-feira'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Usuários relatam instabilidade no sinal da Vivo nesta quinta-feira</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTi4JkqgP18y4uLV4HnCyR5AmSR1Xb9AFclR-prBZAUUFNHATzbii4up4pHzz4JGMnlJAtUGe33" alt="Usuários relatam instabilidade no sinal da Vivo nesta quinta-feira" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Usuários da empresa de telefonia Vivo relatam instabilidade no sinal de internet nesta quinta-feira (1º) em Campo Grande e em várias cidades do ...</p></div>
            </div>
        </a>
        </Template></>;
}