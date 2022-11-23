import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>TSE</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,TSE"/>
        <meta name="description" content="Trending News about TSE" /></Head><Template>
            <h1 style={{fontSize: "30"}}>TSE</h1>
            <Image width={800} height={500} src="" alt="TSE"/>
            <h3>Recent News</h3>
            <a href='https://economia.uol.com.br/noticias/reuters/2022/11/22/sem-expectativa-de-prosperar-no-tse-contestacao-eleitoral-de-bolsonaro-alimenta-manifestacoes-golpistas.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sem expectativa de prosperar no TSE, contestação eleitoral de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Sem expectativa de prosperar no TSE, contestação eleitoral de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Por Maria Carolina Marcello BRASÍLIA (Reuters) - O pedido de &quot;verificação extraordinária&quot; dos resultados eleitorais apresentado nesta terça-feira pela&nbsp;...</p></div>
            </div>
        </a><a href='https://www.tse.jus.br/comunicacao/noticias/2022/Novembro/confira-a-pauta-de-julgamentos-do-plenario-do-tse-desta-terca-feira-22'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Confira a pauta de julgamentos do Plenário do TSE desta terça-feira ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSZJcU1ArLR5wI9goh5H0KkUwrFPiVIl6YHXmGuHXS-61mMkMrWsYcJkq58zS9SRBzvUpSRGWHd" alt="Confira a pauta de julgamentos do Plenário do TSE desta terça-feira ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Na sessão administrativa desta terça-feira (22), a partir das 19h, o Plenário do Tribunal Superior Eleitoral (TSE) deve analisar cinco processos de apuração&nbsp;...</p></div>
            </div>
        </a><a href='https://a10mais.com/noticias/politica/bolsonaro-pede-ao-tse-anulacao-de-votos-em-parte-das-urnas-nas-eleicoes-de-2022-8559.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bolsonaro pede ao TSE anulação de votos em parte das urnas nas ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR_lzCzhUf87jDHxeFTBk9FjOBtYJLEbLHyBsXBEFS4Iv9u6J4xWvbbayXsibsoQrCYw1evMsjc" alt="Bolsonaro pede ao TSE anulação de votos em parte das urnas nas ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O presidente Jair Bolsonaro (PL) e o presidente do PL, Valdemar Costa Neto, entraram com uma representação no Tribunal Superior Eleitoral (TSE) para pedir a&nbsp;...</p></div>
            </div>
        </a><a href='https://www.jota.info/eleicoes/pl-questiona-no-tse-votos-em-urnas-eletronicas-antigas-moraes-pede-relatorio-completo-22112022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>PL questiona no TSE votos em parte das urnas eletrônicas; Moraes ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTe7EgNOQCW16mKtMMgymRR2YTHoFfpewTVH5VFQN4FzUTK1HLJSr7mv5kfZ2aZoKBsMUBU33mA" alt="PL questiona no TSE votos em parte das urnas eletrônicas; Moraes ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Presidente do TSE deu 24 horas para coligação de Bolsonaro apresentar informações sobre suposta desconformidade também no 1º turno.</p></div>
            </div>
        </a><a href='https://www.cartacapital.com.br/politica/pl-nao-questiona-no-tse-o-resultado-do-1o-turno-que-deu-a-sigla-a-maior-bancada-da-camara/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>PL não questiona no TSE o resultado do 1º turno, que deu à sigla a ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTI0FOSecbW1BepqtdHh6N1uOp6fGybln9JOUmb0a7bYawpB3oSf3h3Vo5KO2gzMIqdB6HUb8vy" alt="PL não questiona no TSE o resultado do 1º turno, que deu à sigla a ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A incoerência do partido de Jair Bolsonaro está no centro de uma resposta imediata do presidente do tribunal, Alexandre de Moraes.</p></div>
            </div>
        </a><a href='https://www.metropoles.com/brasil/eleicoes-2022/pl-de-bolsonaro-pede-que-tse-invalide-votos-de-urnas-com-mau-funcionamento'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>PL de Bolsonaro pede que TSE invalide votos de urnas com “mau ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR0cBr5ALZODVE5_tt6td7BqmC6zbAlWgWejsBNLBi8R6eiStZpUazArt4NDbCEPgaB-RVzAq1e" alt="PL de Bolsonaro pede que TSE invalide votos de urnas com “mau ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Valdemar Costa Neto, presidente do PL, disse na última semana que um estudo interno apontou problemas na apuração dos votos de 279 mil urnas.</p></div>
            </div>
        </a><a href='https://www.cnnbrasil.com.br/politica/expectativa-de-que-tse-decida-a-favor-de-bolsonaro-e-zero-diz-lider-do-governo/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Expectativa de que TSE decida a favor de Bolsonaro é zero, diz ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSAQl46ofvlBWf2-i4TcQ7Ks-4Pl-aqsjnBS3qMn_ngNqxyYGgmzezO97BGzcPc0fETLmQICDh9" alt="Expectativa de que TSE decida a favor de Bolsonaro é zero, diz ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O líder do governo na Câmara, deputado federal Ricardo Barros (PP-PR), falou à CNN sobre a decisão do presidente Jair Bolsonaro e o presidente do PL,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.tse.jus.br/comunicacao/noticias/2022/Novembro/missoes-de-observacao-tse-ampliou-combate-a-desinformacao-aponta-faculdade-de-direito-de-vitoria'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Missões de Observação: TSE ampliou combate à desinformação ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSoRISVl4Zmi86_Ra9ISeyIJGwHQ6DVWeHo5g8_UB1BAKlORJPlhFU8685aujSb-LZauCK4jnNo" alt="Missões de Observação: TSE ampliou combate à desinformação ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Grupo formado por 14 observadores analisou o impacto das redes sociais no processo eleitoral e ressaltou a qualificação do Tribunal no combate às fake news.</p></div>
            </div>
        </a>
        </Template></>;
}