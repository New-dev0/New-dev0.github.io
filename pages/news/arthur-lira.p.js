import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Arthur Lira</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Arthur Lira"/>
        <meta name="description" content="Trending News about Arthur Lira" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Arthur Lira</h1>
            <Image width={800} height={500} src="https://i.em.com.br/MwIz0JUq8RacfHE1Q3o2pwWQORw=/600x315/smart/imgsapp.em.com.br/app/noticia_127983242361/2022/11/30/1427581/arthur-lira_1_77075.jpg" alt="Arthur Lira"/>
            <h3>Recent News</h3>
            <a href='https://www.em.com.br/app/noticia/politica/2022/11/30/interna_politica,1427581/arthur-lira-e-hostilizado-por-bolsonaristas-omisso.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Arthur Lira é hostilizado por bolsonaristas: &#39;Omisso&#39;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSGWWoAJocJOZNarg18gpnY6w-Wu6T0uAPdDf6aNxgd5_KvDRcjHMrX1Qapo4BzXUxa_pI8NIxA" alt="Arthur Lira é hostilizado por bolsonaristas: &#39;Omisso&#39;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Presidente da Câmara dos Deputados foi hostilizado quando chegava para um jantar com membros do PL, sigla do presidente Jair Bolsonaro.</p></div>
            </div>
        </a><a href='https://veja.abril.com.br/coluna/radar/gleisi-justifica-o-apoio-do-pt-a-arthur-lira-nao-tinhamos-outra-pessoa/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gleisi justifica o apoio do PT a Arthur Lira: &#39;não tínhamos outra pessoa&#39;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR8YUlFk9E2wfZBju4p_OrtsLF0ln6zTrLB1yQROunj0XRXqGI1LnMjPOB6bpPyH64WfSCPpO2-" alt="Gleisi justifica o apoio do PT a Arthur Lira: &#39;não tínhamos outra pessoa&#39;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bancada petista acredita que aliança para reeleição do progressista no Legislativo não isola partido no Congresso.</p></div>
            </div>
        </a><a href='https://www.em.com.br/app/noticia/politica/2022/11/30/interna_politica,1427465/pt-apoia-reeleicao-de-arthur-lira-em-troca-de-base-para-governo-lula.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>PT apoia reeleição de Arthur Lira em troca de base para governo Lula</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSRdmdUCZpXGXADpFnkp-9i3xHqINnFvBVInHpcNz693ZRSmgQQGFfOWYZRCmOAxuaB79nN103X" alt="PT apoia reeleição de Arthur Lira em troca de base para governo Lula" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&#39;&#39;O próprio presidente Arthur Lira foi o primeiro a reconhecer a legitimidade das urnas, do voto popular, e nós entendemos que é fundamental essa&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bbc.com/portuguese/brasil-63803460'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>As razões por trás do apoio do PT a Lira na Presidência da Câmara</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTrkktYaZGkUmzynYZp0yvbF9FfJ0ueq5yziKxwyUeXbFsSfimUuE7ac4PBZZYvmV8SifXMeajT" alt="As razões por trás do apoio do PT a Lira na Presidência da Câmara" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Após crise gerada por relação rui do governo com Eduardo Cunha, Lula quer garantir governabilidade no Congresso.</p></div>
            </div>
        </a><a href='https://www.gazetadopovo.com.br/republica/lula-pt-arthur-lira-reeleicao-camara/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Por que o PT e Lula abraçam a reeleição de Arthur Lira na Câmara</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQodxpbg5O1SC9_QvgkvW7DVgo9FHPC3XX3LD6afGcCWhPhFyUExSjqSm4vCPWUlLNmYN7A9l0m" alt="Por que o PT e Lula abraçam a reeleição de Arthur Lira na Câmara" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>*) O deputado Arthur Lira é do PP, o Partido Progressistas. Foi um aliado de primeira hora e fez campanha declarada pela reeleição do presidente Jair Bolsonaro&nbsp;...</p></div>
            </div>
        </a><a href='https://cultura.uol.com.br/noticias/54077_brasil-da-esperanca-anuncia-apoio-a-reeleicao-de-arthur-lira-na-camara-dos-deputados.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Brasil da Esperança anuncia apoio à reeleição de Arthur Lira na ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTnS5s5d7QBTHXqX7E8Bb4ZZOOTRI0sxtK4-utcpy2j0jkFaqgeNMoUSG4gYSH6XygRzxrlA2Tf" alt="Brasil da Esperança anuncia apoio à reeleição de Arthur Lira na ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Integram a coligação PT, PV e PCdoB; atual presidente da Casa já teria mais de 300 potenciais votos. Da Redação 30/11/2022 09h41. Reprodução/Filipe Scotti.</p></div>
            </div>
        </a><a href='https://revistaoeste.com/politica/em-jantar-do-pl-arthur-lira-e-confrontado-por-manifestantes/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Em jantar do PL, Arthur Lira é confrontado por manifestantes</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ-9_Qh2fC-jXSB_YqB9e-eo393fWX7EGhr_GmeSHYU6PlbaUZ9FwTlMBkBiA58rC-3ErT4xrod" alt="Em jantar do PL, Arthur Lira é confrontado por manifestantes" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O presidente da Câmara dos Deputados, Arthur Lira, foi chamado de &#39;omisso&#39; por manifestantes. Clique para saber mais.</p></div>
            </div>
        </a><a href='https://horadopovo.com.br/arthur-lira-e-chamado-de-covarde-e-traidor-da-patria-por-bolsonaristas-ensandecidos/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Arthur Lira é chamado de covarde e traidor da Pátria por ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR2d4nwB7V3F_Cr6xGJZIZLRFVyH2Ap7UNkPR1ljVFysaYU48B-PDNiw5iecYjk2nY8sgRX8LI-" alt="Arthur Lira é chamado de covarde e traidor da Pátria por ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A hostilidade ao presidente da Câmara dos Deputados ocorreu no jantar do PL com Bolsonaro na noite de terça-feira (29) em Brasília. O presidente da Câmara,&nbsp;...</p></div>
            </div>
        </a><a href='https://br.noticias.yahoo.com/omisso-e-traidor-da-p%C3%A1tria-143353829.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Omisso&#39; e &#39;traidor da pátria&#39;: Arthur Lira é hostilizado ao chegar no ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="&#39;Omisso&#39; e &#39;traidor da pátria&#39;: Arthur Lira é hostilizado ao chegar no ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O presidente da Câmara dos Deputados, Arthur Lira (PP-AL), foi hostilizado por apoiadores do presidente Jair Bolsonaro (PL) na porta do restaurante em que&nbsp;...</p></div>
            </div>
        </a><a href='https://recontaai.com.br/vendido-covarde-arthur-lira-e-xingado-por-manifestantes-em-brasilia'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Vendido, covarde: Arthur Lira é xingado por manifestantes em Brasília</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Vendido, covarde: Arthur Lira é xingado por manifestantes em Brasília" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Arthur Lira foi hostilizados por militantes do Partido Liberal na entrada de restaurante em Brasília.</p></div>
            </div>
        </a>
        </Template></>;
}