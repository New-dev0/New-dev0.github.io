import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Marquinhos</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Marquinhos"/>
        <meta name="description" content="Trending News about Marquinhos" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Marquinhos</h1>
            <Image width={800} height={500} src="https://s2.glbimg.com/5dEr_heEvt18yfGmy7KhqfJHN2s=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2022/c/8/AuqQDcSHGHNDbwT8A3Ng/carol.jpg" alt="Marquinhos"/>
            <h3>Recent News</h3>
            <a href='https://oglobo.globo.com/ela/gente/noticia/2022/12/carol-cabrino-mulher-do-jogador-marquinhos-e-atacada-nas-redes-sociais.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Carol Cabrino, mulher do jogador Marquinhos, é atacada nas redes ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSBqnQ_-cF03tMKa9aHs9Y_KYx9p4jq2tw2Uae1PWxJYcBSVpl6PFdih-pXBXZKYOi6je5HzSRR" alt="Carol Cabrino, mulher do jogador Marquinhos, é atacada nas redes ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A influenciadora Carol Cabrino, mulher do jogador Marquinhos, está recebendo ataques nas redes sociais após a eliminação do Brasil na Copa do Mundo.</p></div>
            </div>
        </a><a href='https://www.terra.com.br/esportes/futebol/copa-2022/esposa-de-marquinhos-revela-rituais-em-dia-de-jogo-da-selecao-para-tudo-dar-certo,c929b6d84e1517ba7cc1661e139b9325m1fle1wa.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Esposa de Marquinhos revela rituais em dia de jogo da Seleção ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTn_U0CjBS-ySpjtMdxnklDYffZ-4LBFwevEPbF9IoQ4hsZU9QczUc5IuTWhl0aDwEzPm20tpE9" alt="Esposa de Marquinhos revela rituais em dia de jogo da Seleção ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Carol Cabrino contou nas redes sociais o que faz para dar sorte ao Brasil durante a partida.</p></div>
            </div>
        </a><a href='https://www.terra.com.br/esportes/atuacoes-neymar-marca-e-se-salva-em-eliminacao-do-brasil-marquinhos-tem-jogo-infeliz-e-recebe-pior-nota,89881a59991679cf52f797c3edab5f8bjp1npaob.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ATUAÇÕES: Neymar marca e se salva em eliminação do Brasil ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRMNOdM0DiZDy_5At6WcWNDGQN0kD-yh3PwO5mkV4NQeaVPRHXukJa27N35KVKYvG-T3GRDrTwx" alt="ATUAÇÕES: Neymar marca e se salva em eliminação do Brasil ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ALISSON - 6,0 - Apareceu apenas com os pés durante todo o jogo, já que a Croácia não finalizou em gol. No único chute, a Croácia empatou, mas a bola desviou.</p></div>
            </div>
        </a><a href='https://www.metropoles.com/esportes/mulher-de-marquinhos-diz-usar-blusa-suada-do-marido-em-dias-de-jogos'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mulher de Marquinhos diz usar blusa “suada” do marido em dias de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTc7_cYkkSpvrl0yZFNApIAMZOVrtGl7l1Bvdw0a66oxlGT6Y0k2piiMFUve9hW8E2lar9xYwIU" alt="Mulher de Marquinhos diz usar blusa “suada” do marido em dias de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&quot;Eu visto minha camiseta oficial, que é a camiseta do meu marido, usada e suada por ele, só que lavada óbvio&quot;, disse a influenciadora.</p></div>
            </div>
        </a><a href='https://revistaquem.globo.com/noticias/noticia/2022/12/amuleto-camisa-suada-e-mais-mulher-de-marquinhos-carol-cabrino-entrega-seus-rituais-em-dia-de-jogo-da-selecao.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Amuleto, camisa suada e mais: Mulher de Marquinhos, Carol ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQQ248mpdwOEXn1EhcQP5i5lfEkRk8_1ZyLWfnRmNtNxSy4PzFU3ysc3Onz-kHurN-mbDE-E4tS" alt="Amuleto, camisa suada e mais: Mulher de Marquinhos, Carol ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A influenciadora é mulher do jogador da seleção brasileira na Copa do Mundo 2022, Marquinhos.</p></div>
            </div>
        </a><a href='https://extra.globo.com/esporte/voce-vai-se-reerguer-mulher-de-marquinhos-consola-marido-que-perdeu-penalti-decisivo-do-brasil-na-copa-25625125.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Você vai se reerguer&#39;: Mulher de Marquinhos consola marido, que ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSbVyFDy_rhceXDy6HvmrgOw6Ic2FX3YuGBmUcZi23ZjxScBsEzrQGTyjyEhlPMxnI-kKJn3Tjn" alt="&#39;Você vai se reerguer&#39;: Mulher de Marquinhos consola marido, que ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Poucas horas após a eliminação do Brasil na Copa, após a derrota de 4 a 2 nos pênaltis para a Croácia, a mulher de Marquinhos, Carol Cabrino, foi às redes.</p></div>
            </div>
        </a><a href='https://www.uol.com.br/esporte/futebol/copa-do-mundo/2022/12/09/mulher-de-marquinhos-carol-cabrino-revela-rituais-em-dia-de-jogo-do-brasil.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mulher de Marquinhos, Carol Cabrino revela rituais em dia de jogo ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT8mo3-Kr9SkzynNiQVtUsFb1yxT92VUiec9J5QoWMhREl-5XhHVErwunHOdCZspVkIKJQyXSd_" alt="Mulher de Marquinhos, Carol Cabrino revela rituais em dia de jogo ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Carol Cabrino, mulher de Marquinhos que está no Qatar com os três filhos (Enrico, Maria Eduarda e Martina) para prestigiar o defensor durante a disputa da&nbsp;...</p></div>
            </div>
        </a><a href='https://revistaforum.com.br/esporte/copadomundo/2022/12/9/loira-aguada-seu-marido-f-brasil-mulher-de-marquinhos-atacada-nas-redes-128456.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>“Loira aguada” e “seu marido f... o Brasil”: mulher de Marquinhos é ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQkhVTilT3PLh251ZFU01rxjxwadXzpGizWpf49XKDbCPFqd4bqhW16Rvcfnql1Z9GnuHJW0OvvEA" alt="“Loira aguada” e “seu marido f... o Brasil”: mulher de Marquinhos é ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O ódio presente nas redes sociais nem sempre é explicitado quando o tema tem a ver com a política nacional.</p></div>
            </div>
        </a><a href='https://gauchazh.clicrbs.com.br/esportes/copa-do-mundo/noticia/2022/12/a-cena-que-entrou-em-campo-apos-a-eliminacao-brasileira-clbgv6xjb000t0170ve221skl.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>A cena que entrou em campo após a eliminação brasileira</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSV7BoYdbbyGkSdLpBTaPDCuF2H9IbbsMtPZi8WeZrBnwupGyaNefi8AX1fWBNUI1b6PoauQtXh" alt="A cena que entrou em campo após a eliminação brasileira" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Marquinhos tombou no gramado e ali ficou. Alisson saiu caminhando sem rumo. Ao lado deles, os croatas corriam eufóricos em direção ao goleiro Livakovic,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}