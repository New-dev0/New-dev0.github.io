import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Dia do Samba</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Dia do Samba"/>
        <meta name="description" content="Trending News about Dia do Samba" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Dia do Samba</h1>
            <Image width={800} height={500} src="https://s2.glbimg.com/XeljLFkRILCGSwlfRd_5OLAtbX4=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_5dfbcf92c1a84b20a5da5024d398ff2f/internal_photos/bs/2022/l/0/LASi6RQaqRpvuUEXlh6A/2021-03-31-teresa-cristina.jpg" alt="Dia do Samba"/>
            <h3>Recent News</h3>
            <a href='https://www.capital.sp.gov.br/noticia/dia-do-samba-e-celebrado-com-shows-na-vila-itororo-e-em-pracas-e-casas-de-cultura-descentralizadas-neste-final-de-seman'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dia do Samba é celebrado com shows na Vila Itororó e em praças e ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Dia do Samba é celebrado com shows na Vila Itororó e em praças e ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A Prefeitura de São Paulo, por meio da Secretaria Municipal de Cultura, celebra o Dia do Samba com programação na Vila Itororó e em diversas praças da&nbsp;...</p></div>
            </div>
        </a><a href='https://vogue.globo.com/cultura/musica/noticia/2022/12/no-dia-do-samba-10-artistas-relembram-a-importancia-do-ritmo-em-suas-carreiras.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>No Dia do Samba, 10 artistas relembram a importância do ritmo em ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQvEAWGlvtJx8rMCOnqdY5QvHYKTGAc8xFdbV_Jj2FyNfPz5ReF2f1O4PsiLj0ZtP61MvIl5D1n" alt="No Dia do Samba, 10 artistas relembram a importância do ritmo em ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>De Zeca Pagodinho a Ludmilla, o gênero musical centenário ganha depoimentos que mostram a sua importância na construção da identidade nacional.</p></div>
            </div>
        </a><a href='https://www.estadao.com.br/viagem/no-dia-do-samba-uma-lista-de-rodas-para-curtir-no-rio-de-janeiro/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>No Dia do Samba, uma lista de rodas para curtir no Rio de Janeiro</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="No Dia do Samba, uma lista de rodas para curtir no Rio de Janeiro" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Com samba todos os dias, o botequim tem data fixa para o Pagode do Arlindinho, às segundas-feiras, e para o Encontros Casuais, às quintas-feiras. Dentre as&nbsp;...</p></div>
            </div>
        </a><a href='https://www.correiodopovo.com.br/arteagenda/dia-do-samba-%C3%A9-celebrado-com-shows-e-lan%C3%A7amentos-1.931701'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dia do Samba é celebrado com shows e lançamentos</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ27wGXeSeoXY3TuHlDVzC_9Gk6VLo5MjRZ8-9GjcmkqiYHa7QD62Rz-8SK1jolCPJLrWaBEX7o" alt="Dia do Samba é celebrado com shows e lançamentos" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O clipe, gravado no Rio de Janeiro, tem direção de Alexandre Sosinho, a música é de autoria de Carlinhos Presidente, Adilson Ribeiro e Silvio Xavier, arranjos&nbsp;...</p></div>
            </div>
        </a><a href='https://portalpopline.com.br/dia-samba-canal-bis-monta-programacao-especial-homenagear-genero/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dia do Samba: BIS monta programação especial em comemoração ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSlhHjm3ofZH9OFO7wbGt3QOhc0CnsWmm1hVm8D-SPW8rQTp9_VvOwS80u90-ew2SSxwC9YoM0I" alt="Dia do Samba: BIS monta programação especial em comemoração ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A partir das 21h, Teresa Cristina fará homenagem especial para Noel Rosa no show “Teresa Canta Noel: Batuque é Um Privilégio Vol.1”. Acompanhada pelo violista&nbsp;...</p></div>
            </div>
        </a><a href='https://gq.globo.com/cultura/musica/noticia/2022/12/sambistas-playlist.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dia do Samba: 8 grandes sambistas para compor a sua playlist</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ_4AbokxIPOytHUaVcCbwsMNlQk7HWedHdbXrmYyiLNr81J7WNK9YyTafNbRaUbLt0Vkbs9cju" alt="Dia do Samba: 8 grandes sambistas para compor a sua playlist" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Celebrado nesta sexta-feira, 2 de dezembro, o Dia Nacional do Samba foi criado em homenagem ao artista Ary Barroso, compositor do samba Aquarela do Brasil — um&nbsp;...</p></div>
            </div>
        </a><a href='https://www.brasildefato.com.br/2022/12/02/dia-nacional-do-samba-bambas-nao-fogem-ao-legado-de-luta-por-direitos-de-sambistas-do-passado'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dia Nacional do Samba: bambas não fogem ao legado de luta por ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTnhVGUm1IDCpjUvySIIz856GOQ-LnRxdXiEitPXovpz1C4_TsMTXX4rCCHdPElwHbIl03lFneQ" alt="Dia Nacional do Samba: bambas não fogem ao legado de luta por ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>No Samba do Trabalhador, artistas falam sobre suas origens e contestam tese de que samba e política não se misturam.</p></div>
            </div>
        </a><a href='https://jc.ne10.uol.com.br/cultura/2022/12/15133888-dia-nacional-do-samba-veja-origem-curiosa-da-data-e-mensagem-e-frases-para-enviar-neste-2-de-dezembro-dia-do-samba.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>DIA NACIONAL DO SAMBA: veja origem curiosa da data e ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT0JEMcILzG5AbEzR1U98CpXr8jCyswnNiAsnVRAgpHWOpdnhwn3hXDm75MVm_IMxk_lEYl2FE6" alt="DIA NACIONAL DO SAMBA: veja origem curiosa da data e ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O Dia Nacional do Samba é comemorado nesta quinta-feira (2). A data celebra um dos ritmos brasileiros de maior importância para a identidade nacional.</p></div>
            </div>
        </a><a href='https://vogue.globo.com/gente/noticia/2022/12/receita-caipirinha-de-caldo-de-cana.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dia do Samba: aprenda a receita de Caipirinha de caldo de cana</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS5dr5V78JEfKprZGPebqr08DV5AdfV9epMjqWjj5r0O6N3oqB0QFaW5mAnDf0OdAN-OE43H-G7" alt="Dia do Samba: aprenda a receita de Caipirinha de caldo de cana" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A chef Aline Chermoula ensina o passo a passo da receita de caipirinha feita com caldo de cana.</p></div>
            </div>
        </a><a href='https://ndmais.com.br/diversao/dia-do-samba-curiosidades-do-ritmo-samba-no-pe-e-musica-ao-vivo/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dia do samba: curiosidades do ritmo, samba no pé e música ao vivo</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTaFVGzTp1j6YnT6RPPT4i7Cl6ZCeVQjZBP5FYf6iftMiCVpDRVrxB91_NygmrS43fKQODQptqk" alt="Dia do samba: curiosidades do ritmo, samba no pé e música ao vivo" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O Grupo ND utiliza cookies para melhorar a sua experiência de navegação e desenvolver iniciativas de marketing e publicidade. Clique em &quot;definições de&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}