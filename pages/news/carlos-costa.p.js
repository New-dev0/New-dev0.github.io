import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Carlos Costa</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Carlos Costa"/>
        <meta name="description" content="Trending News about Carlos Costa" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Carlos Costa</h1>
            <Image width={800} height={500} src="https://wm.observador.pt/wm/obs/l/https%3A%2F%2Fbordalo.observador.pt%2Fv2%2Frs%3Afill%3A770%3A403%2Fc%3A3000%3A1689%3Anowe%3A0%3A78%2Fq%3A85%2Fplain%2Fhttps%3A%2F%2Fs3.observador.pt%2Fwp-content%2Fuploads%2F2022%2F11%2F15222121%2F20221115filipeamorim4918.jpg" alt="Carlos Costa"/>
            <h3>Recent News</h3>
            <a href='https://observador.pt/2022/11/15/ministerio-publico-deve-investigar-venda-do-banif-diz-marques-mendes-na-apresentacao-do-livro-o-governador-sobre-carlos-costa/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Tentativa de intromissão política&quot;. Ex-governador Carlos Costa diz ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTXIRKGS-xoZdr1fiidAEcWRVP9KcXtb_06w2YsB9-u_8xJVNMp3tXzWA9dBI9F6ICW2cosauUkIQ" alt="&quot;Tentativa de intromissão política&quot;. Ex-governador Carlos Costa diz ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ameaçado de processo, Carlos Costa confirma, em viva voz, que António Costa lhe telefonou em 2016 a falar da &quot;filha de Presidente de país amigo&quot;.</p></div>
            </div>
        </a><a href='https://www.publico.pt/2022/11/15/politica/noticia/antonio-costa-reafirma-vai-processar-carlos-costa-ofensa-honra-bom-nome-2027881'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>António Costa reafirma que vai processar Carlos Costa por ofensa à ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR_UK1REl3G3_deAxc4wEwz5lCR2QvTfCDtXHiQO9n1q6h5Z3qdOwFSddJvVW_rMwagoziXq28e" alt="António Costa reafirma que vai processar Carlos Costa por ofensa à ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Primeiro-ministro insistiu que as declarações proferidas pelo ex-governador do Banco de Portugal são “falsas”.</p></div>
            </div>
        </a><a href='https://expresso.pt/economia/2022-11-15-Carlos-Costa-recebeu-SMS-de-Antonio-Costa-E-o-primeiro-ministro-a-confirmar-a-tentativa-de-intromissao-junto-do-Banco-de-Portugal-a52dedc6'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Carlos Costa recebeu SMS de António Costa: &quot;É o primeiro-ministro ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRNs1M2fWS3FOH7eTYnGGudpxhDo61iCnEzZi-ORW2vjpulbjoqZDIoyRSBF5GBWr-GbQPxOPMJ" alt="Carlos Costa recebeu SMS de António Costa: &quot;É o primeiro-ministro ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Carlos Costa reitera que primeiro-ministro o pressionou em 2016, e considera que sms enviada na semana passada o confirma. Foi a ideia forte do seu discurso&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rtp.pt/noticias/economia/carlos-costa-diz-que-mensagem-de-antonio-costa-confirma-tentativa-de-intromissao-politica_n1447283'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Carlos Costa diz que mensagem de António Costa confirma ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSbCcH7hjCLhkarh2z18sc8iB5ut-ZXGMT6CIhJMNjlMoxtPqXb1tMe_4FAYmjU2WtFtRcbKiM6" alt="Carlos Costa diz que mensagem de António Costa confirma ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O ex-governador do Banco de Portugal Carlos Costa acusou hoje o primeiro-ministro de intromissão política junto do supervisor bancário no caso de Isabel dos&nbsp;...</p></div>
            </div>
        </a><a href='https://www.jornaldenegocios.pt/empresas/banca---financas/detalhe/antonio-costa-declaracoes-de-carlos-costa-para-alem-de-falsas-sao-ofensivas-do-meu-bom-nome'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>António Costa: Declarações de Carlos Costa, para além de falsas ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSX_dxvkGwXeWsLv8-GFYbWvH5xMnGuKGa3qQbYYJbIzlyWkCkaA2NiKampsMivNWg4otLjDmGa" alt="António Costa: Declarações de Carlos Costa, para além de falsas ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Primeiro-ministro garante que vai acionar meios legais contra o antigo governador do Banco de Portugal depois de Carlos Costa ter revelado ter recebido um&nbsp;...</p></div>
            </div>
        </a><a href='https://eco.sapo.pt/2022/11/15/carlos-costa-acusa-antonio-costa-de-tentativa-de-intromissao-do-poder-politico-junto-do-banco-de-portugal/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Costa acusa Costa de “tentativa de intromissão” junto do BdP</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSmb8-1G34UpknEBiY12-GfgyJX_Uvl5eOxZyuJL1BqImH0vVJoTpEawtEwbYjFn-6jTPkVngF9" alt="Costa acusa Costa de “tentativa de intromissão” junto do BdP" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ex-governador confirma telefonema do primeiro-ministro em 2016 em que pediu para não afastar Isabel dos Santos do BIC, porque &quot;não se pode tratar mal a&nbsp;...</p></div>
            </div>
        </a><a href='https://www.tsf.pt/portugal/sociedade/carlos-costa-e-antonio-costa-trocam-acusacoes-misseis-atingem-polonia-e-outros-destaques-tsf-15355678.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Carlos Costa e António Costa trocam acusações, mísseis atingem ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTDXJlq8u9nz7lVnyjqJM0AKF9x4oWrDR7O8Nu1vKfOe7MCvF5IJE4FT-HeoM_kXfUxCiP1Jk2W" alt="Carlos Costa e António Costa trocam acusações, mísseis atingem ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O antigo governador do Banco de Portugal Carlos Costa reafirmou esta terça-feira que o atual primeiro-ministro, António Costa, tentou intrometer-se no Banco&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}