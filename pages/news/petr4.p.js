import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>PETR4</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,PETR4"/>
        <meta name="description" content="Trending News about PETR4" /></Head><Template>
            <h1 style={{fontSize: "30"}}>PETR4</h1>
            <Image width={800} height={500} src="https://www.infomoney.com.br/wp-content/uploads/2022/03/petrobras.jpg?quality=70" alt="PETR4"/>
            <h3>Recent News</h3>
            <a href='https://www.infomoney.com.br/mercados/petrobras-petr4-ubs-bb-faz-duplo-rebaixamento-recomenda-venda-da-acao-e-corta-preco-alvo-em-53-fenix-volta-ao-ninho/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Petrobras (PETR4): UBS faz duplo rebaixamento, recomenda venda ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRLArDiVLsiCAoczz0lS9C5iSqIvdfSAKmQc-WCp2Hqc1i6gfDBPJXOEXLdD3e6dxPvWpPeI2hB" alt="Petrobras (PETR4): UBS faz duplo rebaixamento, recomenda venda ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Banco reduz recomendação com base em visão sobre preços dos combustíveis, investimentos e despesas gerais.</p></div>
            </div>
        </a><a href='https://www.suno.com.br/noticias/petrobras-petr4-analistas-acoes-venda/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Petrobras (PETR4): analistas preveem &#39;tempos sombrios&#39; e menos ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ4x_oSOqYonEcV8FxM08til6OSQC2z14g54geCs0IjQGprdwKJjFHI6RHCSMUkYjtUDffDMuhM" alt="Petrobras (PETR4): analistas preveem &#39;tempos sombrios&#39; e menos ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Vendo nebulosidade a frente com o governo Lula, analistas cortaram pela metade o preço-alvo das ações da Petrobras. Clique e confira!</p></div>
            </div>
        </a><a href='https://www.moneytimes.com.br/ibovespa-hoje-fecha-queda-084-petrobras-petr4-bolsonaro-pec-da-transicao-22-11-2022/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Petrobras (PETR4) e Bolsonaro balançam Ibovespa (IBOV) nesta ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQgwOK2mvYvhW-hT31u3ufe6_iffRWnVwgwjObVU00YaPBu7r8O9vkFym-W7cLLDWIL9B15iW1h" alt="Petrobras (PETR4) e Bolsonaro balançam Ibovespa (IBOV) nesta ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O alívio que o Ibovespa (IBOV) sentiu no pregão passado durou pouco. O índice de referência da Bolsa brasileira voltou a cair nesta terça-feira (22).</p></div>
            </div>
        </a><a href='https://www.seudinheiro.com/2022/empresas/ubs-bb-rebaixa-acoes-da-petrobras-petr4-de-compra-para-a-venda-e-teme-uma-volta-ao-passado-jsmn/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>UBS BB rebaixa ações da Petrobras (PETR4) de compra para ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRyJ_gHVjpPzEAOjyASF-JFJ0RPPwTVWux4qbyN_CrxwVT4vLXQIXfmD6Z7fZa6tAuoKAGarzvA" alt="UBS BB rebaixa ações da Petrobras (PETR4) de compra para ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A raiz das preocupações está em alguns comentários recentes da equipe de transição levam os analistas a acreditar em um cenário mais cauteloso.</p></div>
            </div>
        </a><a href='https://valor.globo.com/financas/noticia/2022/11/22/acoes-da-petrobras-tem-forte-queda-e-pressionam-o-ibovespa-que-opera-volatil.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Incertezas sobre futuro da Petrobras derrubam ações da estatal ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTJor4VLrJ8ghe93rIdroVmZ5heKHCyHoF0szzy-G2MmXAtUhFL_Y9-p9hS1QF-Kz_ivdZAp7xf" alt="Incertezas sobre futuro da Petrobras derrubam ações da estatal ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O UBS rebaixou a recomendação dos papéis dizendo que há falta de clareza sobre a gestão da companhia no próximo governo; além disso, senador Jean Paul&nbsp;...</p></div>
            </div>
        </a><a href='https://www.moneytimes.com.br/e-hora-de-dar-adeus-a-petrobras-petr4-itau-tem-a-resposta/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>É hora de dar adeus a Petrobras (PETR4)? Itaú tem a resposta</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ2M3I-hmlA_vIEDV3W4T_cGYgiBnVUk6JFL85j3uvhM3tLR-CBm1xkXHG68DIN1yT0Fqtk7yI7" alt="É hora de dar adeus a Petrobras (PETR4)? Itaú tem a resposta" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Petrobras (PETR4): Paridade internacional de preços é a resposta para a estatal em 2023? Veja o que diz o Itaú BBA.</p></div>
            </div>
        </a><a href='https://bmcnews.com.br/2022/11/22/apos-ser-rebaixada-para-venda-pela-ubs-bb-petrobras-petr4-pode-cair-mais-analista-avalia/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Após ser rebaixada para venda pela UBS BB, Petrobras (PETR4 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTjKedzy-vFb9DAG82ekFLPsFD3RpTWUTfR53mEWUDrFSwbbZdjql6tdkqvCzcFlJ4WsIf3GogB" alt="Após ser rebaixada para venda pela UBS BB, Petrobras (PETR4 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O analista da Levante Investimentos, Flávio Conde, destacou que PETR4 não voltará mais para R$ 37.</p></div>
            </div>
        </a><a href='https://einvestidor.estadao.com.br/ultimas/petr4-petrobras-acoes-22-de-novembro-2/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Petrobras (PETR4): ações diminuem ritmo de queda nesta terça ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT--GI2nhXPVKwdLVc_2h1SrIyUOogDkCpCca5Eqp0ZRLUAbaca_TH96fuySYzDRwYGMeXXy6kS" alt="Petrobras (PETR4): ações diminuem ritmo de queda nesta terça ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O banco de investimentos UBS BB reduziu hoje o preço-alvo das ações preferenciais da estatal (PETR4 PN) de R$ 47 para R$ 22.</p></div>
            </div>
        </a>
        </Template></>;
}