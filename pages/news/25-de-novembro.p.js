import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>25 de novembro</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,25 de novembro"/>
        <meta name="description" content="Trending News about 25 de novembro" /></Head><Template>
            <h1 style={{fontSize: "30"}}>25 de novembro</h1>
            <Image width={800} height={500} src="https://images.impresa.pt/expresso/2022-11-24-Arq_TESTE.jpg-31b32405/1.91x1?wm=true&outputFormat=jpeg" alt="25 de novembro"/>
            <h3>Recent News</h3>
            <a href='https://expresso.pt/revista/2022-11-25-As-linhas-cruzadas-do-25-de-Novembro-o-dia-em-que-a-revolucao-acabou-15525ac8'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>As linhas cruzadas do 25 de Novembro, o dia em que a revolução ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQG59f7hFVKnV6LNO56507wGxtAjwM4WwxaR37d0ctIJOLy1KyoNAuMcCkpK9wyFmc9Xf1OyhQ_" alt="As linhas cruzadas do 25 de Novembro, o dia em que a revolução ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Vasco Lourenço revela o nome do militante comunista que ao telefone deu a ordem de avanço e, depois, recuo para as forças comunistas a 25 de novembro de&nbsp;...</p></div>
            </div>
        </a><a href='https://observador.pt/2022/11/25/nao-podemos-esquecer-o-25-de-novembro-que-e-complementar-do-25-de-abril-defende-marcelo/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Não podemos esquecer o 25 de Novembro que é complementar do ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS4s9mSacwsIs7RdeZoDcOMY4-H0bs-fuWqFjtwJLShcv1w5zSUsClH6Nc7vJ_fK3MBQqtbjop2" alt="Não podemos esquecer o 25 de Novembro que é complementar do ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O Presidente da República justificou a realização da cerimónia evocativa do 25 de Novembro, afirmando que esta é uma data complementar do 25 de Abril de&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rtp.pt/noticias/politica/25-de-novembro-marcelo-lembra-data-relevante-para-o-pais_v1449698'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>25 de Novembro. Marcelo lembra &quot;data relevante para o país&quot;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR0Ol3LArb-7dnpuJiP0a-Fa_KX8bHETox5KmaqZg8FKW0iHMcuu6PurEl99dVCkaiuYKid_Q1q" alt="25 de Novembro. Marcelo lembra &quot;data relevante para o país&quot;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O presidente da República considerou o 25 de Novembro indissociável do 25 de Abril. No Parlamento, as áreas socialista e não socialista voltaram a estar&nbsp;...</p></div>
            </div>
        </a><a href='https://observador.pt/2022/11/25/vasco-lourenco-contesta-aproveitamento-politico-do-25-de-novembro-pela-extrema-direita/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Vasco Lourenço contesta aproveitamento político do 25 de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSENZmnuzyOdoN1hTPRITBNu0apIUTT7xvmoQTdlblatVfHDwYom31U1Sq8wFF0UXGwfBuLyYEz" alt="Vasco Lourenço contesta aproveitamento político do 25 de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sem fazer referência direta ao Chega, capitão de Abril diz que não aceita agradecimentos vindos dos &quot;vencidos&quot;, que acusa de estarem a usar de forma abusiva&nbsp;...</p></div>
            </div>
        </a><a href='https://rr.sapo.pt/noticia/politica/2022/11/25/moedas-inaugura-placa-do-25-de-novembro-sem-ele-o-25-de-abril-teria-sido-diferente/309532/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Moedas inaugura placa do 25 de novembro. Sem ele, &quot;o 25 de abril ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRbAlVqLjzDG588s4uDT0boagqBPy7h0kNJoJekH5dklIo_2PR7qcOXL3aRhyfAJwVpTKSE4lps" alt="Moedas inaugura placa do 25 de novembro. Sem ele, &quot;o 25 de abril ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Presidente da Câmara Municipal de Lisboa sublinha que a data é &quot;crucial&quot; e que em 1975, o 25 de novembro impediu que o país entrasse numa &quot;ditadura de&nbsp;...</p></div>
            </div>
        </a><a href='https://expresso.pt/inimigo-publico/2022-11-25-IP-Wiki-O-que-foi-o-25-de-Novembro--99142717'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IP Wiki: O que foi o 25 de Novembro?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQO5-8vPilOYHSgj7H0vcFLhqD850vIAMINjwFjKOyVCQi_yj1b5eHfWqRUzjhyNEJFeKYvkcN6" alt="IP Wiki: O que foi o 25 de Novembro?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Em 1975, não havia CMVM, a economia era regulada a partir de Moscovo, Lisboa só batia Pyongyang no comprimento das patilhas e o erário público cabia todo na&nbsp;...</p></div>
            </div>
        </a><a href='https://www.jn.pt/nacional/marcelo-assinala-25-de-novembro-com-condecoracao-postuma-de-pires-veloso-15387601.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Marcelo assinala 25 de Novembro com condecoração póstuma de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRE5Egz9fGOkDp0M9496q8Kofxo9ltJq6TQEN5ZT9wReRJCS0_4W0jD1qNyL2q2oAgUNSFrk2N5" alt="Marcelo assinala 25 de Novembro com condecoração póstuma de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O presidente da República, Marcelo Rebelo de Sousa, vai condecorar o general Pires Veloso, postumamente, e a Associação de Comandos, para assinalar o 25 de&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rtp.pt/madeira/politica/o-25-de-novembro-deve-ser-mais-celebrado-video_106454'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>O 25 de novembro deve ser mais celebrado (vídeo)</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTExYwtFdSEqx-DeM4h4U9vGmmBOOCk7jpFs_3bZiYg0tqHiJrWlLjuMfWfraX8QvmFkp8y-uSQ" alt="O 25 de novembro deve ser mais celebrado (vídeo)" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O 25 de novembro deve ser mais celebrado do que é . A ideia foi defendida pelo professor e jornalista José Milhazes e partilhada por Alberto João jardim que há&nbsp;...</p></div>
            </div>
        </a><a href='https://sicnoticias.pt/pais/2022-11-25-Os-47-anos-do-25-de-Novembro-e-a-injustica-que-Marcelo-reparou-271793d7'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Os 47 anos do 25 de Novembro e a “injustiça” que Marcelo reparou</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTgWyB27xhP4hNNzoQHDmCIciu3-ySldl2F2nODEOk91MHql29lkVb94vRfZ-sjUSOH9DlaI3eE" alt="Os 47 anos do 25 de Novembro e a “injustiça” que Marcelo reparou" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>De regresso do Qatar, o Presidente Marcelo assinalou a data dizendo que não se a pode esquecer.</p></div>
            </div>
        </a>
        </Template></>;
}