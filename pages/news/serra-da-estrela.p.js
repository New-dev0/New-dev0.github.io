import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Serra da Estrela</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Serra da Estrela"/>
        <meta name="description" content="Trending News about Serra da Estrela" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Serra da Estrela</h1>
            <Image width={800} height={500} src="https://wm.observador.pt/wm/obs/l/https%3A%2F%2Fbordalo.observador.pt%2Fv2%2Frs%3Afill%3A770%3A403%2Fc%3A1961%3A1103%3Anowe%3A19%3A0%2Fq%3A85%2Fplain%2Fhttps%3A%2F%2Fs3.observador.pt%2Fwp-content%2Fuploads%2F2022%2F11%2F18103821%2Fnevao.jpg" alt="Serra da Estrela"/>
            <h3>Recent News</h3>
            <a href='https://observador.pt/2022/11/18/caiu-o-primeiro-nevao-da-temporada-na-serra-da-estrela-veja-aqui-as-imagens/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Caiu o primeiro nevão da temporada na Serra da Estrela. Veja aqui ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSVnEO_gD_OrO30JdBM9Y2GbvsTuO9H4aGWN07HHALVlRexyEZegQz3aK3Git2d9xdvnnN_sEiL" alt="Caiu o primeiro nevão da temporada na Serra da Estrela. Veja aqui ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tal como tinha avisado o Instituto Português de Meteorologia, na madrugada desta sexta-feira nevou na Serra da Estrela, que amanheceu pintada de branco e&nbsp;...</p></div>
            </div>
        </a><a href='https://www.dn.pt/sociedade/ja-neva-na-serra-da-estrela-15364775.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Já neva na serra da Estrela</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRXNawhVgZ8NHqaaDkOwvp5nDaOhw-CWgOff8Qq8rzq8QmILDMMcbRWy3hPgAuq2gwxBw8rhkFt" alt="Já neva na serra da Estrela" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Pela primeira vez neste outono, a serra da Estrela cobriu-se esta sexta-feira de branco, naquela que é a primeira nevada do ano em Portugal, anunciou uma&nbsp;...</p></div>
            </div>
        </a><a href='https://www.tempo.pt/noticias/actualidade/primeiro-nevao-outonal-cobre-de-branco-a-serra-da-estrela-veja-as-imagens-portugal.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Primeiro nevão outonal cobre de branco a Serra da Estrela: veja as ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRFfVCE6lVF_xNwxgPAJa3g4TURzM-DuT5d7be6NomKX6jkDiOQExuVzskpsF-FIZiks9zHyJD6" alt="Primeiro nevão outonal cobre de branco a Serra da Estrela: veja as ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A chegada de uma massa de ar polar a Portugal continental trouxe frio, vento e a primeira queda de neve deste outono à Serra da Estrela. Imagens aqui.</p></div>
            </div>
        </a><a href='https://rr.sapo.pt/noticia/pais/2022/11/18/primeiro-nevao-deste-outono-encerra-estradas-na-serra-da-estrela/308681/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Primeiro nevão deste outono encerra estradas na Serra da Estrela ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRsTT3Psj4mjkgNeevfzna69fmTlvTbvuWma5gNmodFycorCyTqyR3J1g_LfzW9RTd2lZ490czF" alt="Primeiro nevão deste outono encerra estradas na Serra da Estrela ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Para já não há previsões para a reabertura dos troços que estão encerrados à circulação automóvel.</p></div>
            </div>
        </a><a href='https://www.tsf.pt/portugal/sociedade/serra-da-estrela-coberta-de-branco-com-primeiro-nevao-da-temporada-15364923.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Serra da Estrela coberta de branco com primeiro nevão da temporada</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTLQJMHCO0nCGAp8xsu8Efz2upUqNwBQjwCLz0lhuGDnxzyse-4ak_SI4FLksf0S8qMz4LWNt2y" alt="Serra da Estrela coberta de branco com primeiro nevão da temporada" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>IPMA já tinha previsto temperaturas mais baixas para estes dias.</p></div>
            </div>
        </a><a href='https://www.nit.pt/fora-de-casa/na-cidade/a-serra-da-estrela-acordou-branca-e-as-imagens-do-primeiro-nevao-da-temporada-sao-lindas'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>A Serra da Estrela acordou branca. E as imagens do primeiro nevão ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRVCHeJ79GO-SJinRy80mJ1XMfieGtprR5o6Z8kmCxZ0wY50wYUeChLivAqNDqYRXIRdc4tmZJ7" alt="A Serra da Estrela acordou branca. E as imagens do primeiro nevão ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>As temperaturas desceram a pique e já nevou acima dos 1.400 metros. O momento ideal para marcar já a próxima escapadinha. 18/&nbsp;...</p></div>
            </div>
        </a><a href='https://www.jn.pt/nacional/fim-de-semana-com-chuva-vento-e-primeiros-nevoes-na-serra-da-estrela-15364709.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fim de semana com chuva, vento e primeiros nevões na Serra da ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRyO_a-2GPHFsvvu2a99dhZIyMM4ApCEJJD32xi0PfJ_K-ekTD-J4o5CDMM481qkmPcSZ6De6Lk" alt="Fim de semana com chuva, vento e primeiros nevões na Serra da ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O Instituto Português do Mar e da Atmosfera (IPMA) prevê para os próximos dias, em Portugal continental, ocorrência de aguaceiros, queda de neve na Serra da&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rtp.pt/noticias/pais/linha-da-frente-fogo-da-serra-da-estrela-poderia-ter-sido-extinto-em-dois-dias_v1447921'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Linha da Frente. Fogo da Serra da Estrela poderia ter sido extinto ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSBh5a3LA7VE9N1zg70oJnK2xT-j0bf2EXu4jLRxVF5hcOUU9hQJu78_wmfu7udqBHfPwpa9eIn" alt="Linha da Frente. Fogo da Serra da Estrela poderia ter sido extinto ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O incêndio da Serra da Estrela foi há três meses e ainda há muito por esclarecer. A RTP falou em exclusivo com dois comandantes dos bombeiros do distrito da&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}