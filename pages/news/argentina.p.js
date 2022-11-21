import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Argentina</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Argentina"/>
        <meta name="description" content="Trending News about Argentina" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Argentina</h1>
            <Image width={800} height={500} src="https://veja.abril.com.br/wp-content/uploads/2022/11/Maes-da-Praca-de-Maio-1.jpg?quality=70&strip=info&w=680&h=453&crop=1" alt="Argentina"/>
            <h3>Recent News</h3>
            <a href='https://veja.abril.com.br/mundo/morre-na-argentina-lider-do-movimento-maes-da-praca-de-maio/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Morre na Argentina líder do movimento &#39;Mães da Praça de Maio&#39;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQGmpmR9NY7P2oX4wvx4fwf6JdTyRaK15IChdtWXvQQgW-lI6pahtfktVbhI1czjK1V6pi7qNK2" alt="Morre na Argentina líder do movimento &#39;Mães da Praça de Maio&#39;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Hebe de Bonafini comandou o movimento contra a ditadura militar; Ao lamentar a morte, Lula disse que argentina é exemplo para quem acredita na democracia.</p></div>
            </div>
        </a><a href='https://www.cnnbrasil.com.br/internacional/hebe-de-bonafini-a-mae-que-desafiou-a-ditadura-argentina-morre-aos-93-anos/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hebe de Bonafini, a mãe que desafiou a ditadura argentina, morre ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQQE5yigblm6F7k7AT2ljTldCEeFRX8zdE0wkr1L7VAbbcrzkT9EzvmSl9yQS2OaeOpyx0k6Mto" alt="Hebe de Bonafini, a mãe que desafiou a ditadura argentina, morre ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>flipboard. Ouvir notícia. Hebe de Bonafini, a icônica cofundadora das Mães da Praça de Maio da Argentina e uma ferrenha lutadora contra as violações de direitos&nbsp;...</p></div>
            </div>
        </a><a href='https://www1.folha.uol.com.br/mundo/2022/11/evo-cristina-e-boulos-lamentam-morte-da-argentina-hebe-de-bonafini-veja-repercussao.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lula, Evo e Cristina lamentam morte da argentina Hebe de Bonafini ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT9V_qUWnenOkAnEliGAeK3WyXRoFPV29o1NU2IPMwVPz97Fa5IORLHguDjOK9np0mjVPRCwHRq" alt="Lula, Evo e Cristina lamentam morte da argentina Hebe de Bonafini ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A cofundadora das Mães da Praça de Maio, que teve dois filhos desaparecidos durante a ditadura argentina, percorreu uma trajetória marcada pela luta em busca&nbsp;...</p></div>
            </div>
        </a><a href='https://www.terra.com.br/noticias/lider-das-maes-da-praca-de-maio-morre-na-argentina,1b251a43e230855ebe15e330d0b141ac3djng1h2.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Líder das Mães da Praça de Maio morre na Argentina</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ7VdsZK8J-6BJw15gmPBIBWwe2ArwQIT-6wWCE4c0drxOk-tC9VrMeOgsHq13YyX464tG4-lvG" alt="Líder das Mães da Praça de Maio morre na Argentina" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Hebe de Bonafini, que perdeu dois filhos e uma nora durante a sanguinária ditadura militar da ...</p></div>
            </div>
        </a><a href='https://www.goal.com/br/not%C3%ADcias/argentina-arabia-saudita-copa-do-mundo-2022-onde-assistir-tv-escalacao/bltdbfc9942ea687c6d'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Argentina x Arábia Saudita: onde assistir ao vivo e online, horário ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRLl1TV6R0u2uLnwEq8Ej888Bs9kR3U7Ftca3q9LwB4YSJLQPQK85mcR-moMAMEwHbu-su9QbBK" alt="Argentina x Arábia Saudita: onde assistir ao vivo e online, horário ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Hermanos iniciam a caminhada em busca do terceiro título Mundial nesta terça-feira (22); veja como acompanhar na TV e na internet.</p></div>
            </div>
        </a><a href='https://noticias.uol.com.br/ultimas-noticias/rfi/2022/11/20/morre-na-argentina-hebe-de-bonafini-simbolo-da-resistencia-contra-os-horrores-da-ditadura-militar.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Morre na Argentina Hebe de Bonafini, símbolo da resistência contra ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Morre na Argentina Hebe de Bonafini, símbolo da resistência contra ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A ativista argentina de direitos humanos Hebe de Bonafini morreu neste domingo (20), aos 93 anos de idade. O anúncio da morte desta grande liderança das&nbsp;...</p></div>
            </div>
        </a><a href='https://www.lance.com.br/copa-do-mundo/arabia-saudita/jogadores-da-arabia-saudita-desafiam-argentina-11-contra-11.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jogadores da Arábia Saudita desafiam Argentina: &#39;11 contra 11&#39;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQYwXny9P3Od3LlZt56UQjjHEKmB_wJ-SRd2oiaQ7JbOPW9m_HOqqotpGMyl0r19b73u_uWFjpk" alt="Jogadores da Arábia Saudita desafiam Argentina: &#39;11 contra 11&#39;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>LANCE! 20/11/2022. 14:12. Doha (QAT). Às vésperas do confronto contra a Argentina pela Copa do&nbsp;...</p></div>
            </div>
        </a><a href='https://ge.globo.com/futebol/selecoes/argentina/noticia/2022/11/20/enfim-messi-craque-treina-com-elenco-da-argentina-e-nao-preocupa-para-estreia-na-copa.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Enfim, Messi! Craque treina com elenco da Argentina e não ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcThLX-kRxnI5y99vY8Fh-AATOpq1DxA2GTyKea3HYPg-TbDPfZ7rgjLmigxcJAvFN9c5FKksUYw" alt="Enfim, Messi! Craque treina com elenco da Argentina e não ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>De acordo com meios de comunicação argentinos, ausência em primeiros treinos foi apenas por precaução; atividade deste domingo foi fechada.</p></div>
            </div>
        </a><a href='https://www.gazetaesportiva.com/times/argentina/messi-treina-pela-primeira-vez-com-a-argentina-no-catar/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Messi treina pela primeira vez com a Argentina no Catar</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS1HjVk2VehWTqqe2li1YSqAJJ7JQpEhydpxHyXvZxqQ4OZixtyCe5ENqcVeRoV-fmKmLrlbSOR" alt="Messi treina pela primeira vez com a Argentina no Catar" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Lionel Messi perdeu as primeiras sessões de treino da Seleção Argentina, mas já está de volta às atividades do grupo. Confira imagens de mais um.</p></div>
            </div>
        </a><a href='https://ge.globo.com/futebol/selecoes/argentina/noticia/2022/11/20/quem-derruba-argentina-iguala-invencibilidade-do-brasil-e-esta-a-um-jogo-de-recorde-mundial.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Quem derruba? Argentina iguala invencibilidade do Brasil e está a ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQo1uBQV_AR1v-ENvKVBlEThShK66UTnPs_I-DgBxxd61udmlNVW-ljGdbBp2-rg8zTm8ZIEgL6" alt="Quem derruba? Argentina iguala invencibilidade do Brasil e está a ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Embora a França seja a atual campeã mundial, a Argentina é a seleção na Copa do Mundo do Catar com a sequência mais longa sem derrotas.</p></div>
            </div>
        </a>
        </Template></>;
}