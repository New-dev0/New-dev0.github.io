import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Extra</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Extra"/>
        <meta name="description" content="Trending News about Extra" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Extra</h1>
            <Image width={800} height={500} src="https://meups.com.br/wp-content/uploads/2022/11/PS-Plus-Extra-e-Deluxe-jogos-que-saem-em-dezembro-1.jpg" alt="Extra"/>
            <h3>Recent News</h3>
            <a href='https://meups.com.br/noticias/jogo-ubisoft-ps-plus-extra-deluxe-dezembro/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Grande jogo da Ubisoft deixará o PS Plus Extra e Deluxe em ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQl-4FRLYAY80KoEmoatNssHWhOKdXSl2m4cJRgEWQfV3xZ8OPvsViXZQvll1c1baLNDHcCaH22" alt="Grande jogo da Ubisoft deixará o PS Plus Extra e Deluxe em ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Os níveis Extra e Deluxe funcionam de forma semelhante à Netflix, Prime Video, Game Pass e outras opções de subscrição no mercado. A Sony promove uma&nbsp;...</p></div>
            </div>
        </a><a href='https://extra.globo.com/noticias/rio/museu-nacional-enterra-capsula-do-tempo-para-abertura-em-2072-25615689.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Museu Nacional enterra cápsula do tempo para abertura em 2072</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ7swR4H8LpKNv9PJzxbmbPbnZcAj6crAQFzARZPhUBjtJ3QUE24EnN48v2TbjsKZbzaeUD9ZBq" alt="Museu Nacional enterra cápsula do tempo para abertura em 2072" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Museu Nacional lança sua promeira Capsula do Tempo que será aberta em 2072 Foto: Custódio Coimbra / Agência O Globo. -A A A+. Julio Cesar Lyra.</p></div>
            </div>
        </a><a href='https://extra.globo.com/noticias/rio/em-um-mes-prefeitura-retira-duas-toneladas-de-fiacao-sem-uso-nas-ruas-do-rio-25615633.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Em um mês, prefeitura retira duas toneladas de fiação sem uso nas ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTngUHVcD7DtaCueRIw1ZJJZO7mBBosPK6oImE-YACwGwiJQFLGTYeRgDg8kfYnljJ8ubTkf_0f" alt="Em um mês, prefeitura retira duas toneladas de fiação sem uso nas ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Em um mês de Operação Caça-Fios, a prefeitura do Rio já retirou duas toneladas de fiação sem uso dos postes da cidade. Coordenada pela Rioluz, a ação tenta.</p></div>
            </div>
        </a><a href='https://adrenaline.com.br/noticias/v/80535/assassins-creed-valhalla-deixa-a-ps-plus-extra-e-deluxe-em-dezembro'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Assassin&#39;s Creed Valhalla deixa a PS Plus Extra e Deluxe em ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRFuJcWeX_8DwpUQpkiP8D41DGOclzn2mYTUSKhYc-_gUJiOCIFpVanEH7T2xwb0bnsWkp9V8aC" alt="Assassin&#39;s Creed Valhalla deixa a PS Plus Extra e Deluxe em ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O game deixa o catálogo do serviço poucos dias após a chegada de sua última atualização.</p></div>
            </div>
        </a><a href='https://www.pjf.mg.gov.br/noticias/view.php?modo=link2&idnoticia2=77865'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>PJF disponibiliza linha extra para as finais da Copa Prefeitura ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ3S-ZfKW9eLQ1Eyg5o1wzkRU6KOYsmPXCGzL-yX08isiWTwHekthqvyTP95Zzemxy2gC7382WL" alt="PJF disponibiliza linha extra para as finais da Copa Prefeitura ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A Prefeitura de Juiz de Fora (PJF) informa que, em virtude da realização das finais da Copa Prefeitura Bahamas de Futebol Amador, que serão disputadas nos&nbsp;...</p></div>
            </div>
        </a><a href='https://www.eurogamer.pt/assassins-creed-valhalla-sai-do-ps-plus-extra-em-dezembro'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Assassin&#39;s Creed Valhalla sai do PS Plus Extra em dezembro</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRk8dtesvUrvCCijG56ytQNoPa8xWbgZnXSGTgH3VF_UA0pofGLw71UP3Aa8kq7G8diQiMpPImG" alt="Assassin&#39;s Creed Valhalla sai do PS Plus Extra em dezembro" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Assassin&#39;s Creed Valhalla faz parte da lista de jogos inseridos no catálogo do PlayStation Plus Extra e PlayStat…</p></div>
            </div>
        </a><a href='https://psxbrasil.com.br/assassins-creed-valhalla-saira-do-plano-ps-plus-extra-em-20-de-dezembro/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Assassin&#39;s Creed Valhalla sairá do plano PS Plus Extra em 20 de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTdjErg1Z2VIYuTIhUTtZoY2hTN4nQSq89avQbDrNbaI8ghVYLzjplCGTPuy_9EdPjdPiHAo7vq" alt="Assassin&#39;s Creed Valhalla sairá do plano PS Plus Extra em 20 de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ou seja, os assinantes só podem aproveitar o jogo da Ubisoft até essa data. Após isso, ele ficará inacessível – apenas comprando o game para continuar jogando.</p></div>
            </div>
        </a>
        </Template></>;
}