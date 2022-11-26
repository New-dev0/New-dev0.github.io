import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Sao tome e principe</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Sao tome e principe"/>
        <meta name="description" content="Trending News about Sao tome e principe" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Sao tome e principe</h1>
            <Image width={800} height={500} src="https://static.globalnoticias.pt/dn/image.jpg?brand=DN&type=generate&guid=96ce71ae-aeb3-452d-a354-7b0da02c7d74&w=800&h=420&watermark=true&t=20221125191000" alt="Sao tome e principe"/>
            <h3>Recent News</h3>
            <a href='https://www.dn.pt/internacional/situacao-calma-apos-tentativa-de-golpe-em-sao-tome-e-principe-15388848.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Situação &quot;calma&quot; após tentativa de golpe em São Tomé e Príncipe</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRpgeQVmbUsU-WFnPAEAD0ZzbUGRqTVFb5gG_HbGB6JVI3raOJ6mjbHti1dedulDhKMSr3lnATR" alt="Situação &quot;calma&quot; após tentativa de golpe em São Tomé e Príncipe" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Um dos alegados mandantes do ataque foi morto quando supostamente tentava fugir. Mas advogado de outro detido, o ex-líder da Assembleia, alega que foi&nbsp;...</p></div>
            </div>
        </a><a href='https://www.publico.pt/2022/11/25/mundo/noticia/golpe-estado-bastante-estranho-sao-tome-principe-2029289'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Um golpe de Estado “bastante estranho” em São Tomé e Príncipe</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSUhNtqKuWfsZmvUufKqDr5wjHyT4P9W6aMzj0VzBlTz552AxMYEV4Yj7N2LeQ1Np5d8a4y5cOS" alt="Um golpe de Estado “bastante estranho” em São Tomé e Príncipe" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Delfim Neves, o ex-presidente da Assembleia Nacional, foi detido por ter sido referido como um dos financiadores. Há registo de quatro mortos e vários&nbsp;...</p></div>
            </div>
        </a><a href='https://observador.pt/2022/11/25/sao-tome-e-principe-ex-presidente-do-parlamento-detido-apos-tentativa-de-golpe/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>São Tomé e Príncipe. Ex-presidente do parlamento detido após ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRIjZ2UGEjBnCxpw9Zy82Vdmnp0tJAgchlmBxM99ToNb7zsEZhLn1bsHpLXlLk2uN2QbKCx5aqv" alt="São Tomé e Príncipe. Ex-presidente do parlamento detido após ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ex-presidente da Assembleia Nacional de São Tomé e Príncipe Delfim Neves foi detido esta manhã, na sequência de um ataque ao quartel militar,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rfi.fr/pt/%C3%A1frica/20221125-s%C3%A3o-tom%C3%A9-e-pr%C3%ADncipe-mandantes-de-tentativa-de-golpe-morreram'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>São Tomé e Príncipe: Cinco mortos após tentativa de golpe de Estado</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRP1l8c9jvTShkXuesC6gYc7SiH0WZCcdnBVsdXgbAFOFET4Obbo38YW010PupPXVmicKTu7CGb" alt="São Tomé e Príncipe: Cinco mortos após tentativa de golpe de Estado" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Um dos alegados mandantes da tentativa de golpe de Estado em São Tomé e Príncipe, Arlécio Costa, e quatro assaltantes do quartel, morreram esta sexta-feira,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rtp.pt/noticias/mundo/sao-tome-e-principe-detidos-atacantes-e-militares-envolvidos-em-assalto-a-quartel_n1449507'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>São Tomé e Príncipe. Detidos presumíveis atacantes e militares ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTb3q76lSsid8k_sZtHaWXuF21Fbr1E4_SSIMxkguQ4q44mhguJ7a-IQycAlvYWc64ELlxobBYR" alt="São Tomé e Príncipe. Detidos presumíveis atacantes e militares ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>As forças de segurança são-tomenses detiveram esta sexta-feira militares que alegadamente permitiram a entrada de um grupo de atacantes num quartel militar.</p></div>
            </div>
        </a><a href='https://www.rtp.pt/noticias/cultura/o-memorial-do-convento-foi-dancado-em-sao-tome-e-principe_v1449655'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>O memorial do Convento foi dançado em São Tomé e Príncipe</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSip1OroWyPgfNd61xuj0tiB3v3u85limMVq7yVZKO0CmV-arBuV-EI0fp8qUQagTheMIaXhwkd" alt="O memorial do Convento foi dançado em São Tomé e Príncipe" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Conhecer a obra de José Saramago através da dança é o objetivo do projeto &quot;Memorial do Convento - Leitura coreografada&quot;</p></div>
            </div>
        </a><a href='https://www.rfi.fr/br/%C3%A1frica/20221125-tentativa-de-golpe-em-s%C3%A3o-tom%C3%A9-e-pr%C3%ADncipe-foi-promovida-pelos-que-n%C3%A3o-respeitam-as-urnas-diz-ativista'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tentativa de golpe em São Tomé e Príncipe foi promovida &quot;pelos ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR8B-6vMcaaGwptVxIVKnOaMNBx_IEEulDYnRM0gUHv0qW2VokwuJocT53HgRq6OzWdw47dNWb4" alt="Tentativa de golpe em São Tomé e Príncipe foi promovida &quot;pelos ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Delfim Neves perdeu as funções de presidente da Assembleia no último dia 11, depois que o partido de centro-direita de Trovoada, Independente Ação Democrática (&nbsp;...</p></div>
            </div>
        </a><a href='https://www.voaportugues.com/a/situa%C3%A7%C3%A3o-calma-em-s%C3%A3o-tom%C3%A9-e-pr%C3%ADncipe-depois-de-alegada-tentativa-de-golpe-de-estado/6849740.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Situação calma em São Tomé e Príncipe depois de alegada ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSZ97pRlISjNviLIxK_k8gsLjEmKjxyLOY-gGNaKCeZHCJ7QKUjbq3cXiFM9CL9Tz5-EE51Smah" alt="Situação calma em São Tomé e Príncipe depois de alegada ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Primeiro-ministro apela à calma e agradece a pronta intervenção das Forças Armadas.</p></div>
            </div>
        </a><a href='https://www.sapo.pt/noticias/atualidade/pr-de-sao-tome-e-principe-recebe-a-mais-alta-_63808ccb484e0a4303385bf2'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>PR de São Tomé e Príncipe recebe a mais alta distinção de Cabo ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSfwFvxOusuEd5Cf_bpy6xnQlpJfxf39WKMDnWsyJbWgHDQ9PUZaQrY_OL4W8iwCaOayBzx5LH-" alt="PR de São Tomé e Príncipe recebe a mais alta distinção de Cabo ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O Presidente cabo-verdiano vai atribuir a Ordem Amílcar Cabral ao homólogo de São Tomé e Príncipe, reconhecendo o &quot;empenho&quot; de Carlos Vila Nova no reforço&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}