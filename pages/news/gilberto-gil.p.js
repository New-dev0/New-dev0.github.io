import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Gilberto Gil</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Gilberto Gil"/>
        <meta name="description" content="Trending News about Gilberto Gil" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Gilberto Gil</h1>
            <Image width={800} height={500} src="https://wm.observador.pt/wm/obs/l/https%3A%2F%2Fbordalo.observador.pt%2Fv2%2Frs%3Afill%3A770%3A403%2Fc%3A3072%3A1729%3Anowe%3A0%3A137%2Fq%3A85%2Fplain%2Fhttps%3A%2F%2Fs3.observador.pt%2Fwp-content%2Fuploads%2F2022%2F06%2F24184333%2FGettyImages-535830298.jpg" alt="Gilberto Gil"/>
            <h3>Recent News</h3>
            <a href='https://observador.pt/2022/11/27/gilberto-gil-foi-insultado-por-adeptos-bolsonaristas-no-qatar-musico-pede-brasil-sem-odio/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gilberto Gil foi insultado por adeptos bolsonaristas no Qatar. Músico ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR7Diagvh6fBBtIn1GfWYipDghvCRsQsgUKIuQESNo3HTuO2I8EKwlJ1xZaibM3K_QX8CUzXwFE" alt="Gilberto Gil foi insultado por adeptos bolsonaristas no Qatar. Músico ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O músico Gilberto Gil, que apoiou Lula da Silva nas eleições brasileiras, foi alvo de ofensas por parte bolsonaristas no Qatar. Lula já ligou ao cantor,&nbsp;...</p></div>
            </div>
        </a><a href='https://valor.globo.com/politica/noticia/2022/11/27/gilberto-gil-agradece-apoio-de-lula-e-janja-aps-ataque-no-catar-o-amor-vai-seguir-vencendo.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gilberto Gil agradece apoio de Lula e Janja após ataque no Catar ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQIZEoVtxI2ScFJRnpBeAcl22aWwGWxnAiex2CPmyZu8Owv2nIcrZTm0sRFqJutjeS6PUJKdXuy" alt="Gilberto Gil agradece apoio de Lula e Janja após ataque no Catar ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Gil, de 80 anos, e a empresária Flora Gil, de 62 anos, se dirigiam à arquibancada quando foram abordados por torcedores brasileiros com palavrões e gritos&nbsp;...</p></div>
            </div>
        </a><a href='https://ge.globo.com/futebol/copa-do-mundo/noticia/2022/11/27/ronaldo-sai-em-defesa-de-gilberto-gil-e-pede-punicao-devida-a-agressores.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ronaldo sai em defesa de Gilberto Gil e pede &quot;punição devida&quot; a ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTFwu3ry9wZeyfwOMcxATvNUZ-obWCDRCO8oMpDSdOdBll-i-lftEMxoGTp7ywFmAkyc1JIZ10t" alt="Ronaldo sai em defesa de Gilberto Gil e pede &quot;punição devida&quot; a ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Lenda da música popular brasileira foi ofendido por grupo de torcedores no estádio onde o Brasil fez sua estreia na Copa do Mundo 2022, no Catar.</p></div>
            </div>
        </a><a href='https://g1.globo.com/ba/bahia/noticia/2022/11/27/famosos-prestam-solidariedade-a-gilberto-gil-apos-cantor-ser-hostilizado-por-torcedores-brasileiros-no-catar-veja.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Famosos, influenciadores e políticos prestam solidariedade a ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRAvtQcl2fRk_dU0N9PV1OAyJ_s9T6AtiCk1TFaXtL4BT-aDh1ptNfaEGhmh8jGhWw0zho3p476" alt="Famosos, influenciadores e políticos prestam solidariedade a ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Famosos, influenciadores e políticos prestam solidariedade a Gilberto Gil após cantor ser hostilizado no Catar &middot; Entre eles estão Caetano Veloso, Preta Gil e&nbsp;...</p></div>
            </div>
        </a><a href='https://24.sapo.pt/atualidade/artigos/gilberto-gil-foi-insultado-por-apoiantes-de-jair-bolsonaro-no-qatar'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gilberto Gil foi insultado por apoiantes de Jair Bolsonaro no Qatar</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSZsKtJCCra3MLoWJvnbBJqZPopy2ybRx1GvmHsQZc3JUZuB32jCM_kZqDC4ZBbZ1D4BfKu9DjM" alt="Gilberto Gil foi insultado por apoiantes de Jair Bolsonaro no Qatar" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>No Qatar para apoiar a seleção canarinha, o cantor e ex-ministro da Cultura foi alvo de insultos durante o jogo com a Sérvia. ...</p></div>
            </div>
        </a><a href='https://www.poder360.com.br/midia/huck-chama-de-despreziveis-ataques-a-neymar-e-gilberto-gil/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Huck chama de “desprezíveis” ataques a Neymar e Gilberto Gil</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTJOVZfF8Kb5Pnu7vbQK1lgAFj58VxFSARsQQvfYfvXo-2jWuAw-FQDn5GGicl-dG-7E4FhtyoB" alt="Huck chama de “desprezíveis” ataques a Neymar e Gilberto Gil" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Usuários nas redes e apoiadores de Lula ironizaram lesão de atacante; já o cantor de 80 anos foi hostilizado no Qatar. Leia no Poder360.</p></div>
            </div>
        </a>
        </Template></>;
}