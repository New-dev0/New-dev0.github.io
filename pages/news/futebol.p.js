import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Futebol</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Futebol"/>
        <meta name="description" content="Trending News about Futebol" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Futebol</h1>
            <Image width={800} height={500} src="https://img.iol.pt/preset/637f9a920cf2aea7857e3732/og/cnn" alt="Futebol"/>
            <h3>Recent News</h3>
            <a href='https://cnnportugal.iol.pt/sustentabilidade/residuos/ana-trigo-morais-a-jornada-sustentavel-a-caminho-do-futebol/20221124/637f90bd0cf255d6e13c3dec'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>A jornada sustentável a caminho do futebol</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQYqrtyKBnqTz-LZMJC2v539_C9hOo-aPsPVAMl4yso23UUnEprAb9d-uw5BsFYjqmjw2f7dzGK" alt="A jornada sustentável a caminho do futebol" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Porém, mais brilhante ainda foi o exemplo que todos os nipónicos deram após o jogo. Nas bancadas, os adeptos japoneses ajudaram a recolher todos os resíduos&nbsp;...</p></div>
            </div>
        </a><a href='https://lifestyle.sapo.pt/saude/fitness-e-bem-estar/artigos/o-futebol-e-as-lesoes-do-punho-e-mao'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>O futebol e as lesões do punho e mão à lupa de uma ortopedista</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSnX9ydN8jwswy5w9VebKAE2cB8c4OJ5pWM8fCwNT84OI3mHjDGuSw92X_D8TeKJpzebq6BdqQg" alt="O futebol e as lesões do punho e mão à lupa de uma ortopedista" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Com o mundial do futebol a decorrer as lesões tornam-se uma preocupação ainda mais presente. Embora seja um jogo que se joga essencialmente com os pés como&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ojogo.pt/internacional/selecao/noticias/inacio-recorda-mundial-de-1986-foi-o-25-de-abril-do-futebol-15384209.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Inácio recorda Mundial de 1986: &quot;Foi o 25 de abril do futebol&quot;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSyr-flGf-z_jJ0J_Ls5-XyYzIA3-y9UY0OKD4Q8EFFpWmAvw_e_Lm9UqGIjD2ZI1hPhAdFYt8U" alt="Inácio recorda Mundial de 1986: &quot;Foi o 25 de abril do futebol&quot;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Treinador e ex-defesa esquerdo da Seleção Nacional e do Sporting e do FC Porto conta por que razão o Campeonato do Mundo do México &quot;deu na barraca que deu&quot;</p></div>
            </div>
        </a><a href='https://ominho.pt/aprender-a-apostar-em-futebol-na-parimatch/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Aprender a apostar em futebol na Parimatch</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQSnXlwPOV8DMZ-0-wrwXnzq6ufUHMKspjdLulbwlA0VV0XBsjmLqsnZzD91HErBo6AMMNuHGxR" alt="Aprender a apostar em futebol na Parimatch" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>– O desempenho das equipas: é preciso analisar o histórico recente dos clubes para saber como elas estão no momento. Isso inclui o número de vitórias e derrotas&nbsp;...</p></div>
            </div>
        </a><a href='https://portocanal.sapo.pt/noticia/315592'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>VN de Gaia quer abrir nova escola de futebol feminino</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT8trt-wSx89dPo9Ks9JQYyTuhkgQWwUnZ5K2mscPV-1bv3OZn4wAn-RSlgABY1-zVyZw7EjaHd" alt="VN de Gaia quer abrir nova escola de futebol feminino" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Desporto para todos” é o lema da Escola Municipal de Futebol de Vila Nova de Gaia. Todas as quartas e sextas-feiras, cerca de 60 crianças e jovens gaienses&nbsp;...</p></div>
            </div>
        </a><a href='https://www.abrilabril.pt/internacional/o-futebol-praticado-por-homens-num-campeonato-de-varios-campeonatos'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>O futebol praticado por homens num campeonato de vários ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTCZZbl7vJ_GKm3U2ozk5_svsmbudISc8fQGuCo_CJPWIOJ6hlcmtjB04MCw4XyGaBZjtcJpizP" alt="O futebol praticado por homens num campeonato de vários ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Entre a pressão que toca aos catarianos que querem brilhar em casa, os senegaleses sem a sua estrela e a afirmação daqueles que lutam pela liberdade onde&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}