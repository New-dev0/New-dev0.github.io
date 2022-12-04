import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Botafogo</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Botafogo"/>
        <meta name="description" content="Trending News about Botafogo" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Botafogo</h1>
            <Image width={800} height={500} src="https://www.abola.pt/img/fotos/abola2015/BRASIL/Botafogo/LuisCastroBotafogoFBDR.jpg" alt="Botafogo"/>
            <h3>Recent News</h3>
            <a href='https://www.abola.pt/brasil/2022-12-03/brasil-botafogo-invicto-no-estagio-em-inglaterra/967102'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Botafogo invicto no estágio em Inglaterra</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS9OJURg3YG_W3WLmAzE1rVSFtXYfWMTyjdGZPEkNGfXh8fevdWBQ-i7ZNxQDaDURniIVZuCYUB" alt="Botafogo invicto no estágio em Inglaterra" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Depois de ter vencido o Charlton, por 4-2, equipa da League One (terceiro escalão do futebol inglês), na quinta-feira, os comandados do treinador português Luís&nbsp;...</p></div>
            </div>
        </a><a href='https://ge.globo.com/futebol/times/botafogo/noticia/2022/12/03/vasco-nao-assinara-contrato-de-transmissao-do-carioca-e-confirma-pre-temporada-nos-eua-1.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Botafogo não assinará contrato de transmissão do Carioca e ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRJruV630sN7o2jRsAQleJS7xyGUDXsQIn7DlyP7dvz2KDylvSsUlrTM3m3UMIVHVSFDbDChDgQ" alt="Botafogo não assinará contrato de transmissão do Carioca e ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O Botafogo decidiu não assinar o modelo comercial proposto pela FERJ para a transmissão do Campeonato Carioca. A decisão foi tomada neste sábado,&nbsp;...</p></div>
            </div>
        </a><a href='https://ge.globo.com/futebol/times/botafogo/noticia/2022/12/03/analise-novos-titulares-amenizam-duvidas-na-defesa-do-botafogo.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Análise: novos titulares amenizam dúvidas na defesa do Botafogo</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTsLJLjkVVMXNhyCDxrFDXjvCz4UcHYidUNkQ-pCCtxG1Ruwc_5pmW5hvDd5sByBpWp33yndbFo" alt="Análise: novos titulares amenizam dúvidas na defesa do Botafogo" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Em um jogo com exigência europeia, a melhor notícia para o Botafogo no 0 a 0 com o Crystal Palace foi a defesa. A equipe brasileira suportou bem a pressão&nbsp;...</p></div>
            </div>
        </a><a href='https://www.lance.com.br/botafogo/botafogo-recusa-acordo-do-carioca-e-cita-privilegios-individuais.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Botafogo recusa acordo do Carioca e cita &#39;privilégios individuais&#39;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT03-7wIzTjvecjN_P-w_ejK0xvaQGIgZ3OXauLaqM_PFfeBafNVQtBsYrophhHkrAo8xctqZHL" alt="Botafogo recusa acordo do Carioca e cita &#39;privilégios individuais&#39;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Da mesma forma que o Vasco, Alvinegro não concorda com distribuição de valores da transmissão do estadual de 2023. Botafogo x Flamengo - Nilton Santos.</p></div>
            </div>
        </a><a href='https://www.lance.com.br/botafogo/ao-l-correspondente-da-globo-celebra-excursao-do-botafogo-em-londres-euforico.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ao L!, correspondente da Globo celebra excursão do Botafogo em ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTCt-vU_4WBzLzWhnoXIYWmpE8quoJVVlLkrQ55KPLi-4mC6u_IHXTybRoyVGG22K6sUivfnMMS" alt="Ao L!, correspondente da Globo celebra excursão do Botafogo em ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Em entrevista exclusiva, Rodrigo Carvalho revelou detalhes do clima da cidade.</p></div>
            </div>
        </a><a href='https://www.terra.com.br/esportes/botafogo/atuacao-da-torcida-do-botafogo-no-estadio-crystal-palace-se-torna-assunto-na-web,9e5c1ff79ea7b014f7d453965b51d82ezw0iva1u.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Atuação da torcida do Botafogo no estádio Crystal Palace se torna ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT5FL9kKqVdr9GUVWWeYl7F64ZCoRlZZvwn8LblHM3nmE2Ce33DyHwu9ykXwKUStukoMXlgLiZF" alt="Atuação da torcida do Botafogo no estádio Crystal Palace se torna ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Botafogo e Crystal Palace não saíram do 0 a 0, na partida amistosa entre os clubes do bilionário norte-americano John Textor. O jogo disputado no estádio&nbsp;...</p></div>
            </div>
        </a><a href='https://www.gazetaesportiva.com/times/botafogo/botafogo-segura-crystal-palace-e-fica-no-0-a-0-em-amistoso-na-inglaterra/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Botafogo segura Crystal Palace e fica no 0 a 0 em amistoso na ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQSRSgQ_srW0eX1sWuqh-QZnBLaXlwdvCSquJ-KLFgQPiOW1e-z0Vkx6z7raZLQiVYkIechyuYt" alt="Botafogo segura Crystal Palace e fica no 0 a 0 em amistoso na ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O Botafogo foi pressionado pelo Crystal Palace ao longo de quase noventa minutos. Apesar do aperto, o amistoso disputado na manhã deste sábado, no Estádio.</p></div>
            </div>
        </a><a href='https://www.uol.com.br/esporte/futebol/ultimas-noticias/2022/12/03/botafogo-acompanha-vasco-e-nao-vai-assinar-acordo-de-transmissao-do-carioca.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Botafogo acompanha Vasco e não vai assinar acordo de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSSg9IIKeXPWN5r7Wt_yHvPRmMc72YEkcQ2DGGTedUgg6agdP0ibByK1Hz8EqK8-tfRCp0tW6C7" alt="Botafogo acompanha Vasco e não vai assinar acordo de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O Alvinegro apontou que o parecer foi alinhado em reunião com a presença do acionista majoritário John Textor, em Londres, na Inglaterra, onde o clube realizou&nbsp;...</p></div>
            </div>
        </a><a href='https://esportes.r7.com/futebol/campeonato-carioca/botafogo-empata-com-o-crystal-palace-em-amistoso-disputado-em-londres-03122022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Botafogo empata com o Crystal Palace em amistoso disputado em ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQaYjLQlPvp8deRVVpwes4dCojsiqCd6SerdqeLEXWfFhXAAX4cSBsGNNX9fz5B0xdC_YQSNxzj" alt="Botafogo empata com o Crystal Palace em amistoso disputado em ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Duelo marcou o início de uma relação entre os clubes irmãos pertencentes à família Eagle FootBall, liderada pelo acionista John Textor.</p></div>
            </div>
        </a><a href='https://extra.globo.com/esporte/botafogo-perri-brilha-time-segura-crystal-palace-amistoso-em-londres-fica-no-0-0-25620928.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Botafogo: Perri brilha, time segura o Crystal Palace, e amistoso em ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQJVjMiW3hD-a0YyvGJvW5dU5GjvXFgy4nwzf7e4QAcHHx4YfqLvsx8mBcJ4pexbihWI0M3E7w0" alt="Botafogo: Perri brilha, time segura o Crystal Palace, e amistoso em ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O amistoso entre Botafogo e Crystal Palace, os dois clubes de propriedade do americano John Textor, terminou sem gols. Neste sábado, os alvinegros&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}