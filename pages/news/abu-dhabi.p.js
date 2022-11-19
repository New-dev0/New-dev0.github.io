import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Abu Dhabi</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Abu Dhabi"/>
        <meta name="description" content="Trending News about Abu Dhabi" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Abu Dhabi</h1>
            <Image width={800} height={500} src="https://s2.glbimg.com/SA-k2qCcZaikRKvLSfEhoOM7gUg=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/i/T/hyHf8JSeO2pem1B4ymfw/gettyimages-1442502873.jpg" alt="Abu Dhabi"/>
            <h3>Recent News</h3>
            <a href='https://ge.globo.com/motor/formula-1/noticia/2022/11/18/verstappen-lidera-segundo-treino-do-gp-de-abu-dhabi.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Verstappen lidera segundo treino do GP de Abu Dhabi</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQE9WUV5Qyii9hdhbPFPHfjeAk5AiSNAs_xWsTjsLGNR8dqmTWmeMWN7g6NwayUC0a9lq6lQ6dz" alt="Verstappen lidera segundo treino do GP de Abu Dhabi" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Holandês não chegou a ser ameaçado em sessão que encerrou a sexta-feira em Yas Marina, terminando à frente de Russell e Leclerc.</p></div>
            </div>
        </a><a href='https://www.grandepremio.com.br/f1/noticias/max-verstappen-retoma-controle-lidera-tl2-gp-de-abu-dhabi-formula-1/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Verstappen retoma controle e lidera TL2 do GP de Abu Dhabi de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTMxLkYNfsJqDPWstAj0qiMHNJL2GWYjj3Z2aExPgK-r_z_dr2UK6NKqJK8hdEU1kxE28jpqjha" alt="Verstappen retoma controle e lidera TL2 do GP de Abu Dhabi de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Max Verstappen ficou com a liderança do segundo treino livre da sexta-feira da Fórmula 1 em Abu Dhabi. Mercedes e Ferrari se alternaram atrás.</p></div>
            </div>
        </a><a href='https://motorsport.uol.com.br/f1/live-text/treino-livre-1-gp-de-abu-dhabi-1117869/1117869/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>F1 AO VIVO: Acompanhe o TL1 para o GP de Abu Dhabi em Tempo ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQQEj2-xVqdpfXQgeXojxZCNTa_oI50BCg54wDxzkj306ReUVnHyNf-wNv_4Mva66zDGJO4pNR2" alt="F1 AO VIVO: Acompanhe o TL1 para o GP de Abu Dhabi em Tempo ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>13:01 Fim! Sessão encerrada em Abu Dhabi. Dobradinha da Mercedes com Leclerc em P3. Hamilton e Russell gostaram desse negócio de 1-2, hein?</p></div>
            </div>
        </a><a href='https://www.ojogo.pt/multimedia/videos/pote-em-abu-dhabi-para-assistir-ao-ultimo-gp-de-formula-1-e-com-acesso-as-boxes-15366086.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pote em Abu Dhabi para assistir ao último GP de Fórmula 1... e com ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT1dGmV5CPs2ZOi6w4Pn3a44WFeFJ9_wei6uIJvHmngkJK4ziLNxGynhHb3QPQ-evU7r5Pm-anN" alt="Pote em Abu Dhabi para assistir ao último GP de Fórmula 1... e com ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jogador do Sporting aproveitou pequena pausa para viajar para Abu Dhabi com a companheira para assistir ao último Grande Prémio de Fórmula 1 da temporada.</p></div>
            </div>
        </a><a href='https://www.grandepremio.com.br/f1/noticias/red-bull-dribla-tensao-e-se-impoe-em-abu-dhabi-mas-mercedes-e-ferrari-estao-a-espreita/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Red Bull dribla tensão e se impõe em Abu Dhabi. Mas Mercedes e ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS3kyHIayn40eJDgML-ouqSy9O2UN6a4R1Prjb9oUYUULIo6xwrwwjhMu8EaYzhrMdq8MLQf9_j" alt="Red Bull dribla tensão e se impõe em Abu Dhabi. Mas Mercedes e ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ao menos na pista, a Red Bull foi capaz de driblar o clima tenso nas garagens e voltou a comandar a tabela. Max Verstappen precisou de apenas poucas voltas&nbsp;...</p></div>
            </div>
        </a><a href='https://www.autosport.pt/formula1/f1/gp-abu-dhabi-f1-mercedes-preocupada-com-degradacao-de-pneus/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>GP Abu Dhabi F1: Mercedes preocupada com degradação de pneus</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQewtMyqdj0e3Zoxbqn_9JvfN9q4I8muV4FNAE5pyZ39u5CHURnRyz52wLCDYMcZaoP4-IQHNxv" alt="GP Abu Dhabi F1: Mercedes preocupada com degradação de pneus" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Apesar de terem estado em evidência durante o primeiro dia do Grande Prémio de Abu Dhabi, com os dois melhores tempos do primeiro treino e o segundo e&nbsp;...</p></div>
            </div>
        </a><a href='https://www.f1mania.net/f1/em-dia-hamilton-lidera-tl1-e-verstappen-o-tl2-em-abu-dhabi/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Em Dia: Hamilton lidera TL1 e Verstappen o TL2 em Abu Dhabi</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTyihtLygapm7RGL_7EHxRtZbR2hVlU-vtPrTKhIlj_Zcu1ySTnk5vcCfshsCTsmH3U4rHbwh3Z" alt="Em Dia: Hamilton lidera TL1 e Verstappen o TL2 em Abu Dhabi" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>No F1Mania Em Dia desta sexta-feira, 18 de novembro, os melhores momentos do Parque Fechado com Carlos Garcia e Gabriel Gavinelli.</p></div>
            </div>
        </a><a href='https://www.abola.pt/nnh/2022-11-18/formula-1-gp-abu-dhabi-verstappen-mais-veloz-na-segunda-sessao-livre/965232'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>GP Abu Dhabi: Verstappen mais veloz na segunda sessão livre</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQcobGIHN_e0Dsfen14UG2KjJH-GbKPtvkKwy2ByopscsMha341AXkcRdj1j3qRrpwgngZzBPCE" alt="GP Abu Dhabi: Verstappen mais veloz na segunda sessão livre" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Max Verstappen (Red Bull) alcançou o melhor tempo na segunda sessão dos treinos livres para o Grande Prémio de Abu Dhabi.</p></div>
            </div>
        </a><a href='https://www.grandepremio.com.br/f1/noticias/alonso-elogia-carro-em-abu-dhabi-e-fala-em-desfrutar-cada-momento-com-alpine/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Alonso elogia carro em Abu Dhabi e fala em &quot;desfrutar cada ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT-Ao-m9bSwQwcLQ1GlHcJPuadisEKoT83Uuu6CxL9T4RRVcIDigp1nS2qhX1f5GW1BorMOXx4r" alt="Alonso elogia carro em Abu Dhabi e fala em &quot;desfrutar cada ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Em clima de despedida com a Alpine, Fernando Alonso tratou a sexta-feira em Abu Dhabi &quot;como se fosse o último dia&quot; no time e espera um bom rendimento na&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}