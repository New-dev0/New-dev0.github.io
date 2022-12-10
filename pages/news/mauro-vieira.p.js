import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Mauro Vieira</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Mauro Vieira"/>
        <meta name="description" content="Trending News about Mauro Vieira" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Mauro Vieira</h1>
            <Image width={800} height={500} src="https://s2.glbimg.com/TFW_fadKYdxHsBsCwYNI2KLkxaU=/1200x/smart/filters:cover():strip_icc()/s04.video.glbimg.com/x720/11191907.jpg" alt="Mauro Vieira"/>
            <h3>Recent News</h3>
            <a href='https://g1.globo.com/politica/noticia/2022/12/09/embaixador-mauro-vieira-sera-o-ministro-das-relacoes-exteriores-de-lula-veja-perfil.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Embaixador Mauro Vieira será o ministro das Relações Exteriores ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS-J2d5i3UMFoyX0PnFeBZr9mQOU2dTQWclRMMGyIs3ALdBRrKqo8ZYuLEID34G279U0zIqCVPE" alt="Embaixador Mauro Vieira será o ministro das Relações Exteriores ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Vieira já comandou Itamaraty no segundo governo Dilma (PT) e, atualmente, é chefe da Embaixada do Brasil na Croácia. Presidente eleito anunciou primeiros&nbsp;...</p></div>
            </div>
        </a><a href='https://extra.globo.com/noticias/mundo/mauro-vieira-volta-por-cima-do-embaixador-humilhado-por-bolsonaro-25624863.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mauro Vieira: A volta por cima do embaixador humilhado por ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS3zZHwopryVqPVtX_i4iPhaTpQ9GI0oN-P6tYuBTXhhLqfTvil-ukMn2ROr7Mq0oNTg0DowY4s" alt="Mauro Vieira: A volta por cima do embaixador humilhado por ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mauro Vieira, novo ministro das Relações Exteriores do governo Lula, em encontro na comissão do Senado em 2015, quando era ministro de Dilma Roussef Foto:&nbsp;...</p></div>
            </div>
        </a><a href='https://www.estadao.com.br/politica/mauro-vieira-vai-comandar-o-itamaraty-com-a-missao-de-recuperar-imagem-da-diplomacia-do-pais/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mauro Vieira vai comandar o Itamaraty com desafio de recuperar ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRtvNaxJ2pIWVBcD9Q3bn2Gs-zWywRmylTenw6MWSL5mgchUsbYFESrW0fcObbuQ-KDMwytakjh" alt="Mauro Vieira vai comandar o Itamaraty com desafio de recuperar ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Chanceler anunciado volta a chefiar Relações Exteriores seis anos e sete meses após impeachment da então presidente Dilma Rousseff.</p></div>
            </div>
        </a><a href='https://www.jota.info/eleicoes/quem-e-mauro-vieira-indicado-de-lula-para-o-ministerio-das-relacoes-exteriores-09122022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Quem é Mauro Vieira, indicado de Lula para o Ministério das ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRGt0i2Pd8FbkME2kAAPgpiZozud0KB05AfFiHNDWKGR2hRO2pg2_08lwUxEhLocxrcdU2iS-fx" alt="Quem é Mauro Vieira, indicado de Lula para o Ministério das ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Um dos mais experientes diplomatas em atuação, foi chanceler no governo Dilma Rousseff. Leia o perfil do novo ministro.</p></div>
            </div>
        </a><a href='https://www.poder360.com.br/governo/lula-anuncia-mauro-vieira-para-o-itamaraty/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lula anuncia Mauro Vieira para o Itamaraty</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSBCp6Y-cUrfccP2oXGZLVhaWx2nu0Iv68w9p77exjozTz-AgME8ubesSSaa-Yynfe0BCJJfjL-" alt="Lula anuncia Mauro Vieira para o Itamaraty" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Diplomata de carreira, ocupou o cargo de 2015 a 2016, no governo Dilma; hoje, é embaixador do Brasil na Croácia. Leia no Poder360.</p></div>
            </div>
        </a>
        </Template></>;
}