import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Mundial 2022 FIFA</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Mundial 2022 FIFA"/>
        <meta name="description" content="Trending News about Mundial 2022 FIFA" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Mundial 2022 FIFA</h1>
            <Image width={800} height={500} src="https://static.globalnoticias.pt/oj/image.jpg?brand=OJ&type=generate&guid=83ec33b8-78d4-4c87-bda3-338c5576b1d7&w=800&h=420&watermark=true&t=20221202162700" alt="Mundial 2022 FIFA"/>
            <h3>Recent News</h3>
            <a href='https://www.ojogo.pt/internacional/mundial-2022/noticias/fifa-explica-golo-que-deu-a-vitoria-ao-japao-diante-da-espanha-15417413.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FIFA explica golo que deu a vitória ao Japão diante da Espanha</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTzXXO4TRh0J3eGOA4JsI7XEMczYba3xNdUNR1-OMu-rs7N-LVn6QNpFBcBdsAXim8jILq7wBNb" alt="FIFA explica golo que deu a vitória ao Japão diante da Espanha" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Segundo golo do Japão no triunfo sobre a Espanha (2-1) foi alvo de muita contestação.</p></div>
            </div>
        </a><a href='https://observador.pt/2022/12/02/fifa-partilha-novo-video-sobre-polemico-golo-do-japao-contra-espanha-totalidade-da-bola-nao-estava-fora-de-campo/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FIFA partilha novo vídeo sobre polémico golo do Japão contra ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRazogPyNuive09eO_Adc79g0NfSEmDob7XtnFUpZ29TLhe2hj3079fxo3PGKW6IsDEq4H4OtlU" alt="FIFA partilha novo vídeo sobre polémico golo do Japão contra ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A FIFA partilhou no Twitter um vídeo sobre o polémico golo que deu a vitória ao Japão contra a Espanha. É argumentado que parte da bola ainda estava dentro&nbsp;...</p></div>
            </div>
        </a><a href='https://maisfutebol.iol.pt/mundial-2022/fifa/video-fifa-explica-validacao-do-segundo-golo-do-japao'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>VÍDEO: FIFA explica validação do segundo golo do Japão</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSZppuMQzE5k6E7UBMTW6SaYYphprFURgtT-F-Bq0h9lec0_bfQSWgWyZgH0FG_YLoumW9B1dc8" alt="VÍDEO: FIFA explica validação do segundo golo do Japão" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Esta sexta-feira, a FIFA explicou por que razão o golo de Ao Tanaka não foi invalidado. O organismo que tutela o futebol mundial revelou as imagens que a equipa&nbsp;...</p></div>
            </div>
        </a><a href='https://www.abola.pt/nnh/2022-12-02/mundial-2022-jogos-a-mesma-hora-com-o-presidente-da-fifa-na-bancada-saiba-como/966925'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jogos à mesma hora com o presidente da FIFA na bancada: saiba ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQZHtlItMypQnl7L0a3nPcwWy9Ngwmo7Hs5L9ipOfxjsruz6LEaNiTAkGzeFNEhtwycZf1v-l7C" alt="Jogos à mesma hora com o presidente da FIFA na bancada: saiba ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nesta última jornada da fase de grupos, com dois jogos à mesma hora, como tem feito então Gianni Infantino? O líder do organismo que rege o futebol mundial&nbsp;...</p></div>
            </div>
        </a><a href='https://www.abola.pt/nnh/2022-12-02/mundial-2022-fifa-confirma-legalidade-do-golo-do-japao-veja-as-imagens/966957'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FIFA confirma legalidade do golo do Japão: veja as imagens</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSlf9AV-kp5DF0I8_H7YN1AIuAVqGQiaBUoDRY8CX9UYinXcFdNbKomcnAVg_efrg0MgHdIGUx9" alt="FIFA confirma legalidade do golo do Japão: veja as imagens" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O Japão venceu na quinta-feira a Espanha por 2-1, com o segundo golo a dar muito que falar, uma vez que ficou a ideia que a bola ter ultrapassado&nbsp;...</p></div>
            </div>
        </a><a href='https://www.noticiasaominuto.com/desporto/2125470/fifa-esclarece-golo-do-japao-que-eliminou-a-alemanha-e-legal'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FIFA esclarece. Golo do Japão, que eliminou a Alemanha, é legal</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSjIVRvtZyPfNSIDa2dT6HuqVw_dj55K241BPLU4iQ3F2YOZud3P4MOdnn-tXsdwmghgXu8S9mf" alt="FIFA esclarece. Golo do Japão, que eliminou a Alemanha, é legal" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Novas imagens mostram que a bola não passou a linha final na totalidade. Decisão do VAR foi acertada.</p></div>
            </div>
        </a><a href='https://www.dn.pt/desporto/golo-que-apurou-o-japao-para-os-oitavos-de-final-e-legal-por-188-milimetros-15418677.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Golo que apurou o Japão para os oitavos-de-final é legal por... 1,88 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQGtg9y0YbefWhGD-CWiJbrcD9YMnMQk1h1V435ZC3Cemv05sGaslYAwrHH7pgCIHgWnpYTXwc1" alt="Golo que apurou o Japão para os oitavos-de-final é legal por... 1,88 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A bola parecia ter saído de campo quando Mitoma serviu Tanaka para o golo, mas a Adidas, fabricante da bola do Mundial 2022, recorreu à tecnologia no interior&nbsp;...</p></div>
            </div>
        </a><a href='https://www.record.pt/internacional/competicoes-de-selecoes/mundial/mundial-2022/japao/detalhe/fifa-explica-por-que-nao-anulou-o-segundo-golo-do-japao'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FIFA explica por que não anulou o segundo golo do Japão</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRY7Uc-McVVKAId53LobpgpC3LhPtnqjz7CwJ7KnvFZhFb9gxZTZzEIVxuzBwjpTzuYIrhYc1vw" alt="FIFA explica por que não anulou o segundo golo do Japão" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tento deu a vitória à seleção nipónica no duelo com a Espanha (2-1) e a consequente liderança do Grupo E.</p></div>
            </div>
        </a>
        </Template></>;
}