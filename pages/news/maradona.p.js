import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Maradona</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Maradona"/>
        <meta name="description" content="Trending News about Maradona" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Maradona</h1>
            <Image width={800} height={500} src="https://f.i.uol.com.br/fotografia/2022/12/01/16699045326388b894aac0a_1669904532_3x2_rt.jpg" alt="Maradona"/>
            <h3>Recent News</h3>
            <a href='https://www1.folha.uol.com.br/esporte/2022/12/casa-de-maradona-e-aberta-para-torcida-assistir-argentina-na-copa.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Casa de Maradona é aberta para torcida assistir Argentina na Copa</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT0CvOCJI2Gvl7i_kngd3ZSaZow9XORn9n_9mOFEoOckseK7yHsZhyqv3M58JiWCxeK9TXuNY0L" alt="Casa de Maradona é aberta para torcida assistir Argentina na Copa" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Las puertas de la casa de Diego Maradona en Villa Devoto se abrieron al público para los hinchas argentinos que quieran ir a festejar. Se puede pasar a los&nbsp;...</p></div>
            </div>
        </a><a href='https://www.mg.superesportes.com.br/app/noticias/futebol/copa-do-mundo/catar/2022/12/01/catar-2022,3982079/argentinos-celebram-classificacao-na-copa-em-antiga-casa-de-maradona.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Argentinos celebram classificação na Copa em antiga casa de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTh1cg42bqF8p9_hi8ivB5Ex8pWoe6jaAUEQ1UOq8OJQm0nKLKBjJTqGwg3l2zcvAQVz94Loiv5" alt="Argentinos celebram classificação na Copa em antiga casa de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Argentina venceu a Polônia por 2 a 0, na terceira rodada da fase de grupos da Copa do Mundo.</p></div>
            </div>
        </a><a href='https://aventurasnahistoria.uol.com.br/noticias/historia-hoje/antiga-casa-de-maradona-e-aberta-para-torcedores-assistirem-argentina-na-copa.phtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Antiga casa de Maradona é aberta para torcedores assistirem ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcREWcijky-inEFsxX23ciKpZwK4XIfjOhQZCE794fi9a8-BnOP34ST4Gh0tXlHVB9Y1BJRxVIKP" alt="Antiga casa de Maradona é aberta para torcedores assistirem ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Com telão e churrasco, atuais donos da residência abriram os portões para torcedores argentinos assistirem à partida.</p></div>
            </div>
        </a><a href='https://esporte.ig.com.br/futebol/copa-do-mundo/2022-12-01/torcedores-invadem-mansao-maradona-celebrar-vitoria-copa.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Torcedores &#39;invadem&#39; mansão de Maradona para celebrar vitória na ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRxiRnIm1tQHtTY4yKmdZIikNOKqv5n4qMeXJ6u6M9KyK1lapvVPD8BGHyqi2CCU2Er-P7tCUJ6" alt="Torcedores &#39;invadem&#39; mansão de Maradona para celebrar vitória na ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Maradona não será esquecido pelos argentinos. A prova disso é que, na primeira Copa do Mundo sem o ídolo - que morreu em novembro de 2020 -, a figura do&nbsp;...</p></div>
            </div>
        </a><a href='https://gauchazh.clicrbs.com.br/esportes/copa-do-mundo/noticia/2022/12/casa-que-foi-de-maradona-vira-palco-de-festa-da-torcida-argentina-apos-classificacao-para-as-oitavas-da-copa-clb5l6us0006i014unvr50v20.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Casa que foi de Maradona vira palco de festa da torcida argentina ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSyeMYHKgI04H82HzHhDyeNR_6CopGmDICxjmlbFlv1PlDsFbXQ1wK0FAsBU9tps6MfPC_rcKgy" alt="Casa que foi de Maradona vira palco de festa da torcida argentina ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Delírio é a palavra que o jornal Clarin usou para descrever a situação em Buenos Aires após a vitória por 2 a 0 da Argentina diante da Polônia,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.terra.com.br/esportes/adversarios-no-qatar-argentina-e-australia-ja-decidiram-repescagem-com-maradona-protagonista,80a559aee519022e049b36bcf69705478hm36huk.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Adversários no Qatar, Argentina e Austrália já decidiram ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSKVRDcqAqwS4QhU9xUSslF7gb3O5lduoOn6Xnxm-kIlFTMiTpCNCbuMyylK93jaabiwIoS4b5z" alt="Adversários no Qatar, Argentina e Austrália já decidiram ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Argentinos e australianos se enfrentaram na repescagem da Copa de 1994; Diego Maradona foi decisivo no duelo.</p></div>
            </div>
        </a><a href='https://esportes.yahoo.com/noticias/torcedores-da-argentina-fazem-festa-em-casa-antiga-de-maradona-apos-classificacao-153902044.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Torcedores da Argentina fazem festa em casa antiga de Maradona ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRrfI5WixpOyqcfLnl3cGBb2341S3lESrMEqcMHHkyBmxX3TorwFx6ghjTcySP89hY3PXwmOAhq" alt="Torcedores da Argentina fazem festa em casa antiga de Maradona ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A classificação da Argentina às oitavas de final gerou muita alegria no país. O contexto foi complicado, já que o time sofreu a virada para a Arábia Saudita&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}