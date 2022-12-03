import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Putin</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Putin"/>
        <meta name="description" content="Trending News about Putin" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Putin</h1>
            <Image width={800} height={500} src="https://static.globalnoticias.pt/dn/image.jpg?brand=DN&type=generate&guid=da40d50d-a339-4f3c-ad30-2bf2c4bf23d7&w=800&h=420&watermark=true&t=20221202230200" alt="Putin"/>
            <h3>Recent News</h3>
            <a href='https://www.dn.pt/internacional/putin-rejeita-conversacoes-porque-eua-nao-reconhecem-anexacoes-15419064.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Putin rejeita conversações porque EUA não reconhecem anexações</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTQlxaZHAqL-CcoEX_QWp6jYzZv9LZm488Hw_FfZzOmxO-ZU-XqVKiNf5GzsDpOoxnAKgMZ6wM5" alt="Putin rejeita conversações porque EUA não reconhecem anexações" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Só o norte-coreano Kim Jong-un reconheceu a intenção de Moscovo anexar as regiões ucranianas, mas para o Kremlin a posição de Washington é que &quot;complica&quot; a&nbsp;...</p></div>
            </div>
        </a><a href='https://www.dn.pt/internacional/putin-diz-a-scholz-que-atacar-infraestruturas-na-ucrania-e-inevitavel-15417507.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Putin diz a Scholz que atacar infraestruturas na Ucrânia é &quot;inevitável&quot;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ8OsyHIVUTwp1hVbFhm7kcZ2i6x0nRxagkjfmCktSj1HrJxCWnES3nsSQUkSQS3VLxgZzZecoJ" alt="Putin diz a Scholz que atacar infraestruturas na Ucrânia é &quot;inevitável&quot;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O presidente russo, Vladimir Putin, disse ao chanceler alemão, Olaf Scholz, esta sexta-feira que os ataques em massa da Rússia às infraestruturas de energia&nbsp;...</p></div>
            </div>
        </a><a href='https://www.publico.pt/2022/12/02/culturaipsilon/noticia/navalny-homem-putin-nao-conseguiu-matar-documentario-dificil-acreditar-2029418'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Navalny é “o homem que Putin não conseguiu matar” num ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTz4lRb5Sr207B3v952m83OWh6Zq0X-smC94JsT3VQJSKuTlUlnHX9MsYruB_cZZD1GdMdfAwf6" alt="Navalny é “o homem que Putin não conseguiu matar” num ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Estreia-se em Portugal um documentário que reconstrói o envenenamento do activista político no Verão de 2020. O caso expôs a “ineficiência” dos regimes&nbsp;...</p></div>
            </div>
        </a><a href='https://valor.globo.com/mundo/noticia/2022/12/02/putin-aceita-dilogo-sobre-a-ucrnia-mas-no-nos-termos-de-biden.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Putin aceita diálogo sobre a Ucrânia, mas não nos termos de Biden</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTA88iPbQKAHVe6Ma_GQACZnY59l4UsY8gf_8a-vkUHd3QaCurfpirJLJmpWpyJt1Nidq1O7oCB" alt="Putin aceita diálogo sobre a Ucrânia, mas não nos termos de Biden" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O porta-voz do Kremlin, Dmitry Peskov, rejeitou as condições dos EUA, dizendo que Moscou não está preparada para entrar em negociações com os EUA se sua&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rtp.pt/noticias/mundo/biden-disposto-a-falar-com-putin-para-por-fim-a-guerra_a1450972'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Biden disposto a falar com Putin para pôr fim à guerra</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTm4uPodRab0sDk4N_m9vqxdhiNrKZYCH54f2Dzhx7WBVQxi7nl2pzC0zoinGXpc_Q_hZF8g852" alt="Biden disposto a falar com Putin para pôr fim à guerra" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O presidente dos Estados Unidos mostra-se disponível para falar com Vladimir Putin, caso o presidente russo tenha interesse em acabar com a guerra.</p></div>
            </div>
        </a><a href='https://www.jn.pt/mundo/scholz-pede-retirada-da-russia-e-putin-aconselha-alemanha-a-rever-posicao-15416752.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Scholz pede retirada da Rússia e Putin aconselha Alemanha a ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSe6Y1GEzMeGwEK7b1GT2D7gxuKvRAnAXOAJEvvsI6fV7zmb00ImWQu_9a0U5aQ2fDYavI9Hnj1" alt="Scholz pede retirada da Rússia e Putin aconselha Alemanha a ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O chanceler alemão pediu esta sexta-feira ao presidente russo que retire as suas tropas da Ucrânia para permitir uma &quot;solução diplomática&quot; do conflito,&nbsp;...</p></div>
            </div>
        </a><a href='https://sicnoticias.pt/especiais/guerra-russia-ucrania/2022-12-02-Scholz-pede-a-Putin-para-retirar-as-tropas-russas-da-Ucrania-3449a7ab'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Scholz pede a Putin para retirar as tropas russas da Ucrânia</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQkRAOkvMfKIxZovxdf33ZofLP39DtbH1_S2qZzVtjZOiZw62K5bOcwE_EmZWoiVuEC8vV8I07i" alt="Scholz pede a Putin para retirar as tropas russas da Ucrânia" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O Presidente russo, Vladimir Putin, e o chanceler alemão, Olaf Scholz, falaram esta manhã ao telefone, segundo avançou o porta-voz do governo da Alemanha.</p></div>
            </div>
        </a><a href='https://sicnoticias.pt/especiais/guerra-russia-ucrania/2022-12-02-Guerra-na-Ucrania-Biden-e-Putin-abertos-ao-dialogo-mas-com-condicoes-ed88eefe'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Guerra na Ucrânia: Biden e Putin abertos ao diálogo mas com ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQsT29iZLB49Phegnof68anLlVfghaWh5ndsac63HknM8fyVYIbn83rsAsAnY73IaLceiA1SR5c" alt="Guerra na Ucrânia: Biden e Putin abertos ao diálogo mas com ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Moscovo &quot;sempre esteve disponível&quot; para a possibilidade de uma reunião entre os Presidentes russo e norte-americano.</p></div>
            </div>
        </a><a href='https://www.rfi.fr/br/europa/20221202-putin-rejeita-retirada-de-tropas-e-diz-que-ataques-na-ucr%C3%A2nia-s%C3%A3o-inevit%C3%A1veis'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Putin rejeita retirada de tropas e diz que ataques na Ucrânia são ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSP-2BQVa0438RAZ7bYxXBG02yjfMEwFw3-ajyTpxfhKZ-op27LGXSKwuTxG7n-o2R8SgxQnute" alt="Putin rejeita retirada de tropas e diz que ataques na Ucrânia são ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Em conversa com o chefe de governo alemão, Olaf Scholz, nesta sexta-feira (2), o presidente russo, Vladimir Putin, disse que os ataques maciços da Rússia às&nbsp;...</p></div>
            </div>
        </a><a href='https://epocanegocios.globo.com/mundo/noticia/2022/12/biden-nao-pretende-falar-com-putin-ate-que-existam-condicoes-para-negociacao.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Biden não pretende falar com Putin até que existam condições para ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSQCqy1pRcKbQ_TWSsS-g55wvDVqedJHQeWfyZ-IH2XCO8Y0_qfBniOvcM4lEmZIftwidpyR-yp" alt="Biden não pretende falar com Putin até que existam condições para ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Um dia antes, Biden disse que estaria disposto a conversar caso Putin queira acabar com a guerra.</p></div>
            </div>
        </a>
        </Template></>;
}