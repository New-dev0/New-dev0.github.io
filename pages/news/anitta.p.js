import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Anitta</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Anitta"/>
        <meta name="description" content="Trending News about Anitta" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Anitta</h1>
            <Image width={800} height={500} src="https://s2.glbimg.com/9H1h5Sas63D6LJVG3_sdCloIt9Q=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/E/l/1cfH0bRbuSZfdvUKmeUw/ludayer13-317994193-860834024945096-8224614957045414462-n.jpg" alt="Anitta"/>
            <h3>Recent News</h3>
            <a href='https://ge.globo.com/eu-atleta/saude/noticia/2022/12/08/epstein-barr-entenda-o-virus-de-anitta-e-o-que-ele-pode-causar.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Epstein-Barr: entenda o vírus de Anitta e o que ele pode causar</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRQI3uMGkOq7mZHOg9kiItWMmRg0nSAwKRQ6GM65DJcWdB2Mi3poQbAOAk6PMGwdnPGq1POHceq" alt="Epstein-Barr: entenda o vírus de Anitta e o que ele pode causar" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Causador da mononucleose, também conhecida como &quot;febre do beijo&quot;, microrganismo infecta a maioria das pessoas, mas apenas algumas desenvolvem a doença,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnnbrasil.com.br/saude/virus-de-epstein-barr-conheca-a-doenca-do-beijo-que-ja-acometeu-anitta/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Vírus de Epstein-Barr: conheça a “doença do beijo” que já ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSdJ8lsyOqKSmA0w-nNmfxifJ-BJe71DOEPHA9IKM5YnqGrEbmhyFo7RDUddeP1N3U_Vh2KA8yH" alt="Vírus de Epstein-Barr: conheça a “doença do beijo” que já ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Em entrevista à CNN Rádio, a especialista da Clínica Croce Vanessa Radonsky explicou quais são os sintomas. “Eles estão relacionados com quadro viral, como dor&nbsp;...</p></div>
            </div>
        </a><a href='https://sicnoticias.pt/cultura/2022-12-07-Anitta-internada-pela-segunda-vez-numa-semana-05ef7c2f'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Anitta internada pela segunda vez numa semana</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQVCcQjrVVJT4aVd93EQ_TGqw9dVAyueD5f18YyzkuJj6dUbcWWUesGMhouQDfCYG4I_sDmBL_w" alt="Anitta internada pela segunda vez numa semana" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A cantora brasileira Anitta voltou a ser hospitalizada, esta quarta-feira, obrigando a cancelar o concerto previsto para o festival Farofa Gkay.</p></div>
            </div>
        </a><a href='https://sol.sapo.pt/artigo/787357/anitta-fala-com-fas-sobre-a-sua-sa-de-'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Anitta fala com fãs sobre a sua saúde</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRzhqWwNHSsdBNOCFcg7mfJu0Mw5RNGNIs_TFVbvpnto9d3MUiTdYuzNKvl1Rd44zWLXxqp9o35" alt="Anitta fala com fãs sobre a sua saúde" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&quot;Estou fora de risco, está tudo ok comigo. O que está a acontecer é que estou a prevenir para não voltar para um ciclo em que está tudo mal&quot;, concluiu.</p></div>
            </div>
        </a><a href='https://extra.globo.com/tv-e-lazer/tratamento-medico-de-anitta-comecou-durante-preparacao-para-escalar-everest-para-novo-documentario-sobre-sua-vida-rv1-1-25624129.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tratamento médico de Anitta começou durante preparação para ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ-HieQedYHixGdw5xZWPtogihBAJOijQ47cAlgXbzKAZAn2mAz-V_yFZ-pZbkdHLzEcJZ73Hge" alt="Tratamento médico de Anitta começou durante preparação para ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nos últimos dez dias, Anitta precisou ser hospitalizada duas vezes: primeiro, no dia 1º de dezembro, para fazer um exame específico; depois, no dia 7, para.</p></div>
            </div>
        </a><a href='https://magg.sapo.pt/celebridades/artigos/anitta-hospitalizada-pela-segunda-vez-no-espaco-de-uma-semana-tabu-em-torno-de-motivo'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Anitta hospitalizada pela segunda vez no espaço de uma semana ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSPvgBYIzUAj61s44rfYDu7prcKIAFZ2naW5cHuFy_yx9S7TFuA5HTkbENfTyk0AUX32ZVVKGBG" alt="Anitta hospitalizada pela segunda vez no espaço de uma semana ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Uma semana depois de ter estado internada num hospital em São Paulo, a cantora voltou a receber cuidados médicos especializados. Anitta cancelou presença no&nbsp;...</p></div>
            </div>
        </a><a href='https://famashow.pt/nas-redes/anitta-novamente-internada-em-menos-de-uma-semana-cantora-contou-o-que-aconteceu/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Anitta novamente internada em menos de uma semana. Cantora ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ5XQrgC8QhhRDGMlW4ulp6XNk4CYIoxPLHL2T0UJjlSafXHJ-koGf7phh_IVEHthwyPG23_VF_" alt="Anitta novamente internada em menos de uma semana. Cantora ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>“Comunicamos o cancelamento da participação de Anitta durante a Farofa da Gkay neste ano. A pedido de seus médicos, a cantora foi internada em São Paulo, o que&nbsp;...</p></div>
            </div>
        </a><a href='https://oglobo.globo.com/cultura/noticia/2022/12/entenda-tratamento-de-ozonioterapia-que-anitta-fez-nos-eua-pratica-e-irregular-no-brasil.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Entenda tratamento de ozonioterapia que Anitta fez nos EUA ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQD_NEBkE9QVX7oulCQBv7tsIkjPHwuAxDPLTfKMg3T4RnUb8ybtxqLjn2v896GmTloKmpYZKNM" alt="Entenda tratamento de ozonioterapia que Anitta fez nos EUA ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Internada, cantora descobriu problema de saúde após se submeter a terapia para melhor condicionamento físico, com intuito de escalar Everest.</p></div>
            </div>
        </a><a href='https://g1.globo.com/pop-arte/noticia/2022/12/07/anitta-e-internada-novamente-e-cancela-participacao-na-farofa-da-gkay.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Anitta é internada novamente e cancela participação na Farofa da ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ_Q0GFYM7VdLk6CFTZ7NlZrKoCLtsw7iHLendEDRj2m3CECIh7DvtrxpwOmvpSh1he_pxwl-3o" alt="Anitta é internada novamente e cancela participação na Farofa da ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&quot;Comunicamos o cancelamento da participação de Anitta durante a Farofa da Gkay deste ano. A pedido de seus médicos, a cantora foi internada em São Paulo, o que&nbsp;...</p></div>
            </div>
        </a><a href='https://jc.ne10.uol.com.br/colunas/saude-e-bem-estar/2022/12/15137051-virus-epstein-barr-entenda-diagnostico-da-cantora-anitta-com-virus-ebv.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>VÍRUS EPSTEIN BARR: Entenda diagnóstico da cantora ANITTA ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQrqWORIxUEuATRjR7V7BIV9laxvgwG5KJRKjh2im6PKokK7EQi-9jEbfOyKVIeRIr9KpogEZb1" alt="VÍRUS EPSTEIN BARR: Entenda diagnóstico da cantora ANITTA ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Um comunicado oficial divulgado pela BPM, agência que gerencia a carreira da cantora Anitta, informa que Anitta foi internada. De acordo com o comunicado,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}