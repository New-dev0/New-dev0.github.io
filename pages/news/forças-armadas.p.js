import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Forças Armadas</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Forças Armadas"/>
        <meta name="description" content="Trending News about Forças Armadas" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Forças Armadas</h1>
            <Image width={800} height={500} src="https://s2.glbimg.com/qOKe-8Ajuw9MbvIpcJfC98ybrh0=/1200x/smart/filters:cover():strip_icc()/s03.video.glbimg.com/x720/11191750.jpg" alt="Forças Armadas"/>
            <h3>Recent News</h3>
            <a href='https://g1.globo.com/politica/noticia/2022/12/09/forcas-armadas-escolha-de-comandantes-seguira-criterio-de-antiguidade-diz-mucio.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Forças Armadas: escolha de comandantes seguirá critério de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSAda-A62JHkZzkI5mxrne7C_thnjxgIZLBxguICRoW0xsu7Wgfzy9j7yMQ9EqN9aA_2z8zDodU" alt="Forças Armadas: escolha de comandantes seguirá critério de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Futuro ministro da Defesa disse que apresentará nomes a Lula nesta sexta. Brigadeiro Damasceno (Aeronáutica), general Arruda (Exército) e almirante Olsen&nbsp;...</p></div>
            </div>
        </a><a href='https://www.estadao.com.br/politica/lula-vai-encontrar-pela-primeira-vez-futuros-comandantes-das-forcas-armadas/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lula diz que Forças Armadas não podem fazer política e vai ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQdIptqWyTisG2EPAb4W9rflBoUMg6y-E5QI08X68Sas2qdZFdkjCxnFRsPBP3eJGL6ex0ngoF7" alt="Lula diz que Forças Armadas não podem fazer política e vai ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Presidente eleito afirma que deseja discutir “o futuro do País” com os oficiais-generais sugeridos a ele pelo próximo ministro da Defesa; encontro que&nbsp;...</p></div>
            </div>
        </a><a href='https://valor.globo.com/politica/noticia/2022/12/09/novo-ministro-da-defesa-mcio-confirma-futuros-comandantes-das-foras-armadas.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Múcio confirma critério de antiguidade para definir novos ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQssXnw388JpIaUgJaN0xaFH0Jhspw7rwU0SC4BgC643cPuw23A6mvrzZvCgF9gh-LLYdTLP6rU" alt="Múcio confirma critério de antiguidade para definir novos ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Novo ministro da Defesa diz que vai escolher os mais antigos do Exército, Aeronáutica e Marinha; saiba quem devem ser os indicados.</p></div>
            </div>
        </a><a href='https://valorinveste.globo.com/mercados/brasil-e-politica/noticia/2022/12/09/futuro-ministro-da-defesa-confirma-comandantes-das-forcas-armadas-no-governo-lula.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Futuro ministro da Defesa anuncia comandantes das Forças ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSfw9wWHm52IWoUOSjiJjczHztHkjwZgN64juQzk7tsg4KEBalN1Hui2FzVo132sWFwtcmZdWoi" alt="Futuro ministro da Defesa anuncia comandantes das Forças ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Anunciado nesta sexta-feira (9) como ministro da Defesa do presidente eleito, Luiz Inácio Lula da Silva (PT), José Múcio Monteiro confirmou os nomes dos futuros&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cartacapital.com.br/cartaexpressa/as-mencoes-de-bolsonaro-as-forcas-armadas-durante-discurso-a-apoiadores/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>As menções de Bolsonaro às Forças Armadas durante discurso a ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSUpVg9LV6EZfMYTrqKyfqzvWA9VbkVjqIxtnHbO6JEyMLw2mnKPRWRqae5stSO2r0wM7SlIcpP" alt="As menções de Bolsonaro às Forças Armadas durante discurso a ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O ex-capitão, candidato derrotado à reeleição, quebrou o silêncio nesta sexta-feira 9.</p></div>
            </div>
        </a><a href='https://www.em.com.br/app/noticia/politica/2022/12/09/interna_politica,1431675/mucio-anuncia-comandantes-das-forcas-armadas-no-governo-lula-veja-os-nomes.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Múcio anuncia comandantes das Forças Armadas no governo Lula ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS7O7CL_bNQfefcIyW-pXQpRBAI9v65xf71oJ81vav9kL9vbpAefv3iEsXeDqr9OPmC037PtZsv" alt="Múcio anuncia comandantes das Forças Armadas no governo Lula ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Futuro ministro da Defesa, José Múcio Monteiro anunciou os futuros comandantes das Forças Armadas. Ele disse que Lula lhe pediu para que escolhesse os&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnnbrasil.com.br/politica/lula-cancela-reuniao-com-novos-chefes-das-forcas-armadas-que-ocorreria-nesta-sexta/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lula cancela reunião com novos chefes das Forças Armadas, que ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTCyAQv2clIwXS3LJwEFniMiy6_RU6a8YkUBHgFUc9W2qifBo2UgaRO2cVvU5at2eIBmTjvr94F" alt="Lula cancela reunião com novos chefes das Forças Armadas, que ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O encontro foi cancelado porque Monteiro decidiu se reunir com o atual ministro da Defesa, o general Paulo Sérgio de Oliveira, antes de encontrar com os futuros&nbsp;...</p></div>
            </div>
        </a><a href='https://www.estadao.com.br/politica/bolsonaro-quebra-silencio-a-apoiadores-quem-decide-para-onde-vao-as-forcas-armadas-sao-voces/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bolsonaro quebra silêncio a apoiadores: &#39;Quem decide para onde ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRzGx-Ra4-Jt0TzitXOdeErqoe6yvMdG85-tiKGm-VZf1Xe3pVGVwlmsICTl72BLRPHEbpISEyL" alt="Bolsonaro quebra silêncio a apoiadores: &#39;Quem decide para onde ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Presidente disse que &#39;nada está perdido&#39; e que País vive momento &#39;crucial&#39;; ele se reuniu com manifestantes pela primeira vez após derrota para Lula.</p></div>
            </div>
        </a><a href='https://epocanegocios.globo.com/brasil/noticia/2022/12/bolsonaro-rompe-silencio-quem-decide-para-onde-vao-as-forcas-armadas-sao-voces.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bolsonaro rompe silêncio: &#39;Quem decide para onde vão as Forças ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRcsqpVt5-m94QPxecla-dNDERLm07t-a5TMAgvNT-TY5hw64gxChmT90m9Y0UKiCYJGYJrkkW4" alt="Bolsonaro rompe silêncio: &#39;Quem decide para onde vão as Forças ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>É a primeira vez que ele se reúne com manifestantes desde a derrota para Luiz Inácio Lula da Silva.</p></div>
            </div>
        </a><a href='https://www.em.com.br/app/noticia/politica/2022/12/09/interna_politica,1431698/forcas-armadas-sao-ultimo-obstaculo-para-o-socialismo-diz-bolsonaro.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Forças Armadas são último obstáculo para o socialismo&#39;, diz ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTvsDSV7rZSBKCMMUVmSCZyO0AHNU6giNnaXZt4teGGSPIoV6BjAkDRfbJAtu1wbHa8j3AK6-4t" alt="&#39;Forças Armadas são último obstáculo para o socialismo&#39;, diz ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Presidente Bolsonaro falou a apoiadores pela primeira vez desde a derrota das eleições. Bolsonaro disse que Forças Armadas deve lealdade ao povo brasileiro.</p></div>
            </div>
        </a>
        </Template></>;
}