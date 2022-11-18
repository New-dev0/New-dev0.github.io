import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Greve enfermeiros</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Greve enfermeiros"/>
        <meta name="description" content="Trending News about Greve enfermeiros" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Greve enfermeiros</h1>
            <Image width={800} height={500} src="https://wm.observador.pt/wm/obs/l/https%3A%2F%2Fbordalo.observador.pt%2Fv2%2Frs%3Afill%3A770%3A403%2Fc%3A2000%3A1124%3Anowe%3A0%3A105%2Fq%3A85%2Fplain%2Fhttps%3A%2F%2Fs3.observador.pt%2Fwp-content%2Fuploads%2F2016%2F08%2F26191404%2F18969600.jpg" alt="Greve enfermeiros"/>
            <h3>Recent News</h3>
            <a href='https://observador.pt/2022/11/17/adesao-a-greve-dos-enfermeiros-nos-70-a-nivel-nacional/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Adesão à greve dos enfermeiros nos 70% a nível nacional</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTDQBiovF1Z6L0DKJ8zxahLm5k31hXragZZtptU73J1RAdFILmGQ3SyHuc8x57pmq9PJ0wJlJJG" alt="Adesão à greve dos enfermeiros nos 70% a nível nacional" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A dirigente sindical do SEP Guadalupe Simões disse que, segundo dados recolhidos até às 13h00 de quinta-feira, a adesão à greve nos hospitais do país varia&nbsp;...</p></div>
            </div>
        </a><a href='https://www.publico.pt/2022/11/17/sociedade/noticia/aumentos-salariais-progressao-carreira-pedem-enfermeiros-professores-greve-2028170'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Aumentos salariais e progressão na carreira. O que pedem ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSoh6rDI1eG7bXtwENbT3Jdyw3vXlTfUis_ZLDatNBc7MZqha2cLfukb6jGfMqjQqOsT16eK2rB" alt="Aumentos salariais e progressão na carreira. O que pedem ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Fenprof e SEP acompanham reivindicações da Frente Comum quanto ao Orçamento do Estado de 2023. Professores contra proposta de alteração de concurso.</p></div>
            </div>
        </a><a href='https://www.rtp.pt/noticias/pais/enfermeiros-iniciam-greve-de-quatro-dias_v1447704'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Enfermeiros iniciam greve de quatro dias</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQzoQ0kHOSPwGAZd2RVNvnuSXuXV1ZO2EGNiTsGXE_H2z-CuEVvjCeR54TjDpvZxHBJUcoYdjL3" alt="Enfermeiros iniciam greve de quatro dias" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A paralisação pode dificultar o trabalho nos hospitais. Os enfermeiros exigem a contagem de pontos nas carreiras e a paridade com os licenciados na&nbsp;...</p></div>
            </div>
        </a><a href='https://www.esquerda.net/artigo/enfermeiros-dao-inicio-greve-de-quatro-dias/83876'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Enfermeiros dão início à greve de quatro dias</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRIQanzMYJBhE86zUmroNTnO15leUL2rnbzcXBp-hqVagP25CXiHHruk-kRyPh2qJy0RvF545P5" alt="Enfermeiros dão início à greve de quatro dias" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A greve convocada pelo Sindicato dos Enfermeiros Portugueses (SEP) decorre nos dias 17, 18, 22 e 23 de novembro. Esta sexta-feira, dia 18, juntam-se outras&nbsp;...</p></div>
            </div>
        </a><a href='https://sol.sapo.pt/artigo/785757/greve-dos-enfermeiros-com-adesao-de-70-'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Greve dos enfermeiros com adesão de 70%</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS_8UtsGD7elu3L_nEwy9Ye4zzaYO92Pr5ScOrJqtF_NDu0onILFyHsIo1Zg5N8gRzv7VP3TLGf" alt="Greve dos enfermeiros com adesão de 70%" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O sindicato exige a abertura do processo negocial de alteração à carreira de enfermagem, tendo entregue na quarta-feira um pedido de reunião com o objetivo&nbsp;...</p></div>
            </div>
        </a><a href='https://www.dnoticias.pt/2022/11/17/336606-enfermeiros-estao-em-greve-de-quatro-dias/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Enfermeiros estão em greve de quatro dias</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRSh7BGu3hL0Q23mjlo8WwquIFdpu4Lhe8gPoDp6KbJ-hnjDqq73WkY4w0ik4azMJ1Xa5OVgklk" alt="Enfermeiros estão em greve de quatro dias" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Enfermeiros iniciaram hoje uma greve de quatro dias convocada pelo Sindicato dos Enfermeiros Portugueses (SEP) para exigir a contagem de pontos nas suas&nbsp;...</p></div>
            </div>
        </a><a href='https://sicnoticias.pt/pais/2022-11-17-Greve-dos-enfermeiros-cancela-dezenas-de-cirurgias-em-Lisboa-e-no-Porto-102136a8'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Greve dos enfermeiros cancela dezenas de cirurgias em Lisboa e ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS9Rvx70HqOgwYhB20mHVOGdg3ydhXO_BOQ9dwi6YQwqIJUDEuOX2m1mu5yjpx8JPW48VOjbdn1" alt="Greve dos enfermeiros cancela dezenas de cirurgias em Lisboa e ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>José Carlos Martins, presidente do Sindicato dos Enfermeiros Portugueses informa que “os blocos no [Hospital] São José estão nos mínimos” e no D. Estefânia “os&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}