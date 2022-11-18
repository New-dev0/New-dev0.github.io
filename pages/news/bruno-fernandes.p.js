import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Bruno Fernandes</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Bruno Fernandes"/>
        <meta name="description" content="Trending News about Bruno Fernandes" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Bruno Fernandes</h1>
            <Image width={800} height={500} src="https://static.globalnoticias.pt/oj/image.jpg?brand=OJ&type=generate&guid=2dba0952-3949-4b54-aa63-4e86099e20fc&w=800&h=420&watermark=true&t=20221117211800" alt="Bruno Fernandes"/>
            <h3>Recent News</h3>
            <a href='https://www.ojogo.pt/internacional/selecao/noticias/bruno-fernandes-questionado-sobre-ronaldo-o-manchester-vem-depois-disso--15363159.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bruno Fernandes questionado sobre Ronaldo: &quot;O Manchester vem ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSihCs-bz7zRaWE1zq41VQAa3-3oJLhQH4XO08lZkbiHynrDjgcrynW7UZX6O74wpCwLWaUpMzD" alt="Bruno Fernandes questionado sobre Ronaldo: &quot;O Manchester vem ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Declarações de Bruno Fernandes após o Portugal-Nigéria (4-0), partida de preparação para o Mundial&#39;2022.</p></div>
            </div>
        </a><a href='https://desporto.sapo.pt/futebol/mundial/artigos/bruno-fernandes-entrevista-sao-questoes-pessoais-do-cristiano-e-ele-esta-no-direito-de-fazer-aquilo'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bruno Fernandes: &quot;Entrevista? São questões pessoais do Cristiano ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTcoTkry6Vld5nXqYyBnCiHxAnMGoEi8VqB1tmrUQYpX18XbI6-wI4izTJDK4zznieEMDMH_dk4" alt="Bruno Fernandes: &quot;Entrevista? São questões pessoais do Cristiano ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O médio foi questionado pelos jornalistas sobre a polémica entrevista do capitão português, conduzida pelo jornalista inglês Piers Morgan.</p></div>
            </div>
        </a><a href='https://www.abola.pt/nnh/2022-11-17/portugal-bruno-fernandes-recusa-se-a-falar-da-entrevista-de-ronaldo/965142'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bruno Fernandes recusa-se a falar da entrevista de Ronaldo</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQNYb1QEVWaCBynvfCnivFqyYNWni1RkG66QSUlUu952hmtzQIaKAAIxFHFoxsBIHubZqAv9jVb" alt="Bruno Fernandes recusa-se a falar da entrevista de Ronaldo" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bruno Fernandes foi questionado sobre a situação de Cristiano Ronaldo, que está em choque com o Manchester United: «Só falo da Seleção e do dia a dia. O&nbsp;...</p></div>
            </div>
        </a><a href='https://maisfutebol.iol.pt/selecao/mundial-2022/bruno-fernandes-toda-a-gente-sabe-o-que-o-sporting-significa-para-mim'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bruno Fernandes: «Toda a gente sabe o que o Sporting significa ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS-lSjix4YQP_z4QficLdAznhYrhqemz6v-mY4G6WX9IJOEPsIGqIPU0lCWkqlbJwTrFEf45gu2" alt="Bruno Fernandes: «Toda a gente sabe o que o Sporting significa ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Portugal-Nigéria, 4-0 (reportagem) ... Bruno Fernandes, jogador da Seleção Nacional, em declarações aos jornalistas na zona mista do Estádio José Alvalade após a&nbsp;...</p></div>
            </div>
        </a><a href='https://www.record.pt/internacional/competicoes-de-selecoes/mundial/mundial-2022/portugal/detalhe/na-ausencia-de-ronaldo-bruno-fernandes-assume-penalti-e-nao-desperdica-veja-o-2-0-de-portugal-a-nigeria'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Na ausência de Ronaldo, Bruno Fernandes assume penálti e não ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQDr4wxX0Z1Zbdjaon5jm3IKGCBBbjHhkZyksPs2LQAHLJwcSNMwWllWd_piV058FASOx5kpU0Q" alt="Na ausência de Ronaldo, Bruno Fernandes assume penálti e não ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Na ausência de Cristiano Ronaldo, o habitual batedor de penáltis da Seleção Nacional, Bruno Fernandes assumiu a função diante da Nigéria e chamado à&nbsp;...</p></div>
            </div>
        </a><a href='https://www.terra.com.br/esportes/apos-decidir-amistoso-para-portugal-bruno-fernandes-se-esquiva-sobre-polemicas-com-cristiano-ronaldo,f2b07cc909fd804b26e62ae5a936fc8a0rumtvlq.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Após decidir amistoso para Portugal, Bruno Fernandes se esquiva ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTgVBmVlOS0SAg7Hm8om0mRRhkqDt5GqwbWKJCmTY3BwB8OSocT-sBoY239gvnPudeILNzz7FZw" alt="Após decidir amistoso para Portugal, Bruno Fernandes se esquiva ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Meia do United reiterou foco na seleção e celebrou a goleada sobre a Nigéria ante da Copa do Mundo.</p></div>
            </div>
        </a><a href='https://observador.pt/liveblogs/portugal-nigeria-antes-de-voar-para-o-qatar-selecao-joga-em-alvalade-no-ultimo-teste-antes-do-mundial/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Portugal goleia a Nigéria em Alvalade no último jogo de preparação ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQtb-WoibfOOIUKewQukbl17kd2gbZdddxs3kOYVqh2XWzEmxxXAp8apOzqa0HSSWpjinLyv5F6" alt="Portugal goleia a Nigéria em Alvalade no último jogo de preparação ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Portugal é protagonista no ensaio geral. Sem ser uma comédia, atuação no Qatar pode ser “uma grande alegria”. Fernando Santos mostra-se confiante para o Mundial&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}