import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Copel</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Copel"/>
        <meta name="description" content="Trending News about Copel" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Copel</h1>
            <Image width={800} height={500} src="https://conteudo.imguol.com.br/c/noticias/d1/2022/11/21/governo-do-parana-quer-transformar-empresa-em-corporation-privatizando-a-companhia-1669043987468_v2_615x300.jpg" alt="Copel"/>
            <h3>Recent News</h3>
            <a href='https://economia.uol.com.br/noticias/reuters/2022/11/21/parana-quer-privatizar-copel-no-modelo-de-corporation-acoes-disparam.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Governo do Paraná quer privatizar Copel; ações disparam</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR48RWy24DFjvx0tplyMb4zDMn27jhloCKmlsYEQYI4nD4Fx1JzzaeNo8hKuW_CWWDUlB2CpRAR" alt="Governo do Paraná quer privatizar Copel; ações disparam" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A elétrica paranaense Copel informou nesta segunda-feira que recebeu do governo do Paraná, seu controlador, um comunicado sobre a intenção do Estado de&nbsp;...</p></div>
            </div>
        </a><a href='https://g1.globo.com/pr/parana/economia/noticia/2022/11/21/governo-do-parana-propoe-tornar-copel-uma-corporacao-e-reduzir-participacao-na-companhia.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Governo do Paraná propõe tornar Copel uma corporação e reduzir ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS9Wn7JfFyJfdiPfzVDsMnlrKfMAOZ20dTw2RRXz7gbeuaO_GqfS2iIceyiUP8eAETs4sGYSYHn" alt="Governo do Paraná propõe tornar Copel uma corporação e reduzir ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O Governo do Paraná apresentou nesta segunda-feira (21), na Assembleia Legislativa do Paraná (Alep), um projeto de lei para transformar a Companhia&nbsp;...</p></div>
            </div>
        </a><a href='https://www.infomoney.com.br/onde-investir/privatizacao-da-copel-dividendos-podem-aumentar-com-reducao-da-divida-e-melhor-governanca-dizem-analistas/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Privatização da Copel: dividendos podem aumentar com redução ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRPzCe4ZON5pkHQDQZ_93X3JJno7RMCqOeZxo6j9dUezmQ7PgjtcLLt54EVYQX5KyG7h2FI4Jqx" alt="Privatização da Copel: dividendos podem aumentar com redução ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Embora o forte avanço no preço de uma ação diminua o retorno em dividendos (dividend yield) para os investidores, analistas consultados pelo InfoMoney se&nbsp;...</p></div>
            </div>
        </a><a href='https://braziljournal.com/parana-vai-privatizar-a-copel/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Paraná vai privatizar a Copel</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSG6qfQKaDx5HoW3zeKUTXS6dLhK5vDoQxOirVUg_WVwtlhSoefPdC1ixDhnM5pt_Sbjp5wuuT7Dg" alt="Paraná vai privatizar a Copel" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Demonstrando ser aquele raro governador que entende que o papel do estado não é ser investidor, o Governador Ratinho Júnior disse numa carta enviada à companhia&nbsp;...</p></div>
            </div>
        </a><a href='https://valor.globo.com/empresas/noticia/2022/11/21/privatizacao-desobriga-copel-a-alienar-a-sua-maior-usina.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Privatização desobriga Copel a alienar a sua maior usina</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTSOnHqYyaWTcm11m7oRL3S936KoL_lI5UkGasP1z1Np4tQ8YPAJJH7wa2g30yxFijqCpACSHai" alt="Privatização desobriga Copel a alienar a sua maior usina" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O presidente da Copel, Daniel Slaviero, disse que o processo de venda do controle acionário da hidrelétrica Foz do Areia está agora sendo revisto,&nbsp;...</p></div>
            </div>
        </a><a href='https://valorinveste.globo.com/mercados/renda-variavel/empresas/noticia/2022/11/21/acao-da-copel-cple6-dispara-apos-governo-do-parana-anunciar-intencao-de-deixar-controle-da-empresa.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ação da Copel tem alta de 22% após governo do Paraná anunciar ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRabAoKdjzMDoAYIhgECbhc_XX7FyhCuHVv7fq-cBHVlumPR8NpqLi9u72icpB0NwzKKCvrpUpc" alt="Ação da Copel tem alta de 22% após governo do Paraná anunciar ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A empresa informou hoje que seu acionista controlador, o governo estadual do Paraná, tem a intenção de transformar a companhia em empresa de capital&nbsp;...</p></div>
            </div>
        </a><a href='https://valorinveste.globo.com/mercados/renda-variavel/empresas/noticia/2022/11/21/copel-vai-distribuir-r-970-milhoes-em-juros-sobre-capital-proprio-veja-detalhes.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Copel vai distribuir R$ 970 milhões em juros sobre capital próprio ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQgWpxY3Yio7GLtr5dYzs7-_j1YfTALmvUWzCDztKoxZJHBY9WgEwYtnLt2eepcpZ2GA3qxLTXh" alt="Copel vai distribuir R$ 970 milhões em juros sobre capital próprio ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Os acionistas da Companhia Paranaense de Energia (Copel) aprovaram nesta segunda-feira (21), em assembleia extraordinária, a distribuição de juros sobre&nbsp;...</p></div>
            </div>
        </a><a href='https://www.aen.pr.gov.br/Noticia/Copel-e-entidades-do-agronegocio-promovem-campanha-para-evitar-acidentes-na-area-rural'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Copel e entidades do agronegócio promovem campanha para ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSMTX2wI_MIVcW-6zeaaGMjk9BKkf3OmREDhVebcObR6ytcn6MSfdVqedbv38uO2cqBakGzrY9m" alt="Copel e entidades do agronegócio promovem campanha para ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Caminhões, pulverizadores e colheitadeiras são parte do cenário rural paranaense, e a operação deste tipo de maquinário facilita cada vez mais a rotina em&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}