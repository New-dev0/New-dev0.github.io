import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Greve cantinas escolares</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Greve cantinas escolares"/>
        <meta name="description" content="Trending News about Greve cantinas escolares" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Greve cantinas escolares</h1>
            <Image width={800} height={500} src="https://images.newrr.sapo.pt/cantinaescolar_comida676805f972141422_capa1.jpg" alt="Greve cantinas escolares"/>
            <h3>Recent News</h3>
            <a href='https://rr.sapo.pt/noticia/pais/2022/11/28/greve-do-pessoal-das-cantinas-afetou-cerca-de-90-dos-refeitorios-escolares/309873/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Greve do pessoal das cantinas afetou cerca de 90% dos refeitórios ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcShrfPeCTnTxXSe8c9M64bMANZvUUvguG4R9ne7l3aG8rKiqWoBtI_0t72bT_sNjSXPVDMl16ug" alt="Greve do pessoal das cantinas afetou cerca de 90% dos refeitórios ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A greve abrangeu todos os trabalhadores das cantinas concessionadas em escolas, hospitais, fábricas e serviços. O presidente do Sindicato dos Trabalhadores na&nbsp;...</p></div>
            </div>
        </a><a href='https://www.esquerda.net/artigo/greve-encerrou-mais-de-duzentas-cantinas/84081'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Greve encerrou mais de duzentas cantinas</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTCKVPXKfvuhoKeb23pWWOvc-NnM4iMhvH6rHRzd9UgCm3lFc7R-EFU2HHnjMPSt4wgbEhdEdAa" alt="Greve encerrou mais de duzentas cantinas" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Instituições de ensino são as principais entidades onde se faz sentir esta greve. Trabalhadores lutam por aumentos salariais, estabilidade profissional e&nbsp;...</p></div>
            </div>
        </a><a href='https://sicnoticias.pt/economia/2022-11-28-Greve-fechou-cantinas-de-escolas-hospitais-e-fabricas-8b5f3f37'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Greve fechou cantinas de escolas, hospitais e fábricas</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT6Cskom9bvf0qoBT_zzFa4GrBs-tm59LBVGvvjmeKXcBkSHVmwAHTSvuPWMpcn2deBZOr7d-WT" alt="Greve fechou cantinas de escolas, hospitais e fábricas" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Os trabalhadores exigem aumentos salariais, a valorização da carreira e o fim da precariedade.</p></div>
            </div>
        </a><a href='https://www.jn.pt/nacional/greve-encerra-centenas-de-cantinas-15396076.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Greve encerra &quot;centenas&quot; de cantinas</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSowkfgucPm6SAKsJZB5qKCDzdfHZOMG9gMK4KGWfnjgXeXgUfTOr8Qf9UEvYydyk4hoyxL5xdZ" alt="Greve encerra &quot;centenas&quot; de cantinas" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sindicato fala em adesão de 90% em escolas da região norte e de 70% no geral dos setores.</p></div>
            </div>
        </a><a href='https://oamarense.pt/greve-encerra-cantinas-em-escolas-de-guimaraes-barcelos-e-famalicao/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>REGIÃO - Greve encerra cantinas em escolas de Guimarães ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQsxKlsj-wCDsjdcMVe-BMlYBy72atZjoOJ5CTXgExexUbO_KPj_FqDwZdm613Y1GHdx2LxbkhB" alt="REGIÃO - Greve encerra cantinas em escolas de Guimarães ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Em Guimarães, Barcelos, Famalicão e Ponte de Lima são exemplos dos concelhos que viram esta segunda-feira cantinas escolares encerradas, avança o Sindicato&nbsp;...</p></div>
            </div>
        </a><a href='https://jornaldocentro.pt/noticias/diario/greve-das-cantinas-deixa-sem-refeicoes-varias-escolas-do-distrito'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Greve das cantinas deixa sem refeições várias escolas do distrito</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTZxWbVXazlIIIHpVRsO3KCsoJif8GGWrJMhl7nrpDFIQgeRBCpPyuzfD5ynpuP-vktw7KF0VWC" alt="Greve das cantinas deixa sem refeições várias escolas do distrito" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Centenas de alunos do distrito de Viseu ficaram esta segunda-feira (28 de novembro) sem almoço devido à greve dos trabalhadores das cantinas concessionadas&nbsp;...</p></div>
            </div>
        </a><a href='https://famatv.pt/pais/11/28/trabalhadores-das-cantinas-concessionadas-em-greve/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Trabalhadores das cantinas concessionadas em greve</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcROA2zlGEUsOBJGGCFzrdm5umG-Y3LcvGiPKEQuTvt0eP8iYKCXXTLmUq8kJtQqFDhIFiHwaV_d" alt="Trabalhadores das cantinas concessionadas em greve" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Segundo o dirigente, a greve deverá ter um maior impacto nas cantinas escolares e nos hospitais. Em causa, estão as negociações com a Associação da Hotelaria,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}