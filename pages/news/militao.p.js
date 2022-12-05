import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Militao</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Militao"/>
        <meta name="description" content="Trending News about Militao" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Militao</h1>
            <Image width={800} height={500} src="https://s2.glbimg.com/8PRB9vHJ-z8HSLvGfNn11lp7gR8=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2022/B/8/TIQsJBQCWX4TGDPhvACg/whatsapp-image-2022-12-02-at-12.17.09.jpeg" alt="Militao"/>
            <h3>Recent News</h3>
            <a href='https://oglobo.globo.com/ela/gente/noticia/2022/12/karoline-lima-ex-de-eder-militao-se-prepara-para-assistir-ao-jogo-da-selecao-brasileira.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Karoline Lima, ex de Éder Militão, se prepara para assistir ao jogo ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQsL7yegz_g2MnZAqWJtO5r37SFNc7cnluQzYaGKyEVdCfaFqDwVpMI93tOpTx6PSDj7soouNYp" alt="Karoline Lima, ex de Éder Militão, se prepara para assistir ao jogo ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Influenciadora e jogador, que entra em campo na partida hoje, se separaram pouco antes da filha nascer e travaram conflito na justiça.</p></div>
            </div>
        </a><a href='https://inmagazine.ig.com.br/post/Karoline-Lima-erra-no-look-e-manda-indireta-para-Militao'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Karoline Lima erra no look e manda indireta para Militão</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSIaZpMoNEKwgoJXi9e70RlVTi35YXUB9U9Qhup13DRU4YDptdcmcaRL6m4EA6mEbyLujuQNBdi" alt="Karoline Lima erra no look e manda indireta para Militão" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A influenciadora, Karoline Lima, está no Catar para acompanhar os jogos da Copa do Mundo. Nessa sexta-feira (2), Karoline, foi ao jogo da seleção brasileira&nbsp;...</p></div>
            </div>
        </a><a href='https://gshow.globo.com/tudo-mais/copa-do-mundo/noticia/look-de-karoline-lima-para-o-jogo-do-brasil-tem-nome-escrito-errado-e-referencia-a-rihanna.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Look de Karoline Lima para o jogo do Brasil tem nome escrito ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR78Fpw5E8w-3zBNdnCc6ikAxEtzCReZ6ek_HbxyJ-llyLblVjMdV9CoIJOupHrEGKqUaFWETTCqw" alt="Look de Karoline Lima para o jogo do Brasil tem nome escrito ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A ex-mulher de Éder Militão já está prontíssima para assistir à partida da Seleção Brasileira contra Camarões.</p></div>
            </div>
        </a><a href='https://vogue.globo.com/celebridades/noticia/2022/12/em-doha-karoline-lima-assiste-ao-jogo-do-brasil-e-manda-suposta-indireta.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Em Doha, Karoline Lima assiste ao jogo do Brasil e manda suposta ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQI32R4KRj5URlAw0n0Fc7NTMols2wlqz4LT1PRyoO7JUsBQit023fHzJnoOxofIEAMJS3-zV3s" alt="Em Doha, Karoline Lima assiste ao jogo do Brasil e manda suposta ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Karoline Lima está em Doha, no Catar, curtindo a Copa do Mundo. Nesta sexta-feira (02.12), a modelo marcou presença no estádio de Lusail, na partida do&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bnews.com.br/noticias/entretenimento/no-catar-karoline-lima-dispensa-torcida-para-eder-militao-e-faz-referencia-cantora-famosa.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>No Catar, Karoline Lima dispensa torcida para Éder Militão e faz ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQhaODRGQS3usJ8_jFdEVbslSTUhqrYBABw8ZxbipyibouHPpSxTvm2Q3l_dbHERz4v8aG0tyMX" alt="No Catar, Karoline Lima dispensa torcida para Éder Militão e faz ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>“Já estou pronta e belí&nbsp;...</p></div>
            </div>
        </a><a href='https://www.uol.com.br/splash/noticias/2022/12/02/karoline-lima-mostra-nome-errado-na-camisa-do-brasil-e-referencia-a-rihanna.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Karoline Lima mostra nome errado na camisa do Brasil e referência ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSAWcX7zfrNULu01N3Eg5nan7b8Suc7SPhd0lTI8Zj7wpfBkKj0qT6J75RpjWZPM6d66NjyEywC" alt="Karoline Lima mostra nome errado na camisa do Brasil e referência ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Karoline viajou ao Qatar para assistir aos jogos da Copa do Mundo. A influenciadora digital chegou para assistir ao jogo do Brasil contra Camarões.</p></div>
            </div>
        </a><a href='https://diariodonordeste.verdesmares.com.br/entretenimento/zoeira/seguidor-acusa-karoline-lima-de-passar-pouco-tempo-com-a-filha-e-ela-rebate-1.3307854'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Seguidor acusa Karoline Lima de passar pouco tempo com a filha e ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ1Hq1a1-HtFzBG4tJMUT6bNNDM5je1GkMgW4OqVp4aLB6riQLk1rg8jibd5wb_qlrBtWwQR12I" alt="Seguidor acusa Karoline Lima de passar pouco tempo com a filha e ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A influenciadora digital cearense Karoline Lima abriu uma caixinha de perguntas no Instagram, na quarta-feira (30), e recebeu um questionamento de um&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}