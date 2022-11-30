import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Lakers</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Lakers"/>
        <meta name="description" content="Trending News about Lakers" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Lakers</h1>
            <Image width={800} height={500} src="https://i.superesportes.com.br/MmydE-VQRlQTXQIDI5WbIozmCHA=/smart/imgsapp.mg.superesportes.com.br/app/noticia_126420360808/2022/11/29/3981696/kevin-durant_1_34174.jpg" alt="Lakers"/>
            <h3>Recent News</h3>
            <a href='https://www.mg.superesportes.com.br/app/noticias/basquete/2022/11/29/noticia_basquete,3981696/durant-marca-45-pontos-em-vitoria-do-nets-na-nba-lakers-perde-no-estouro.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Durant marca 45 pontos em vitória do Nets na NBA; Lakers perde ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRLf_qh8-Pywd9v0jN40WnT7K4LhXRuYsS8fGu1co55lMJ_X4Q3zN8hoWK_EIM42syRWivwMx_2" alt="Durant marca 45 pontos em vitória do Nets na NBA; Lakers perde ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Noite de segunda-feira da NBA contou com vitórias de Nets, Suns, Wizards, Celtics, Nuggets, 76ers, Pacers, Raptors, Pelicans e Bulls.</p></div>
            </div>
        </a><a href='https://www.terra.com.br/esportes/basquete/indiana-pacers-bate-los-angeles-lakers-com-cesta-de-tres-pontos-no-ultimo-segundo-na-nba,dae941fd9b6c4736cff5460c9f8a87627nn5v64e.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Indiana Pacers bate Los Angeles Lakers com cesta de três pontos ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Indiana Pacers bate Los Angeles Lakers com cesta de três pontos ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Andrew Nembhard crava no estouro da campainha, time de Indianápolis recupera de diferença de 17 pontos e vence por 116 a 115.</p></div>
            </div>
        </a><a href='https://jumperbrasil.lance.com.br/tecnico-lakers-derrota-pacers/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Técnico do Lakers assume culpa por colapso e derrota contra o ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRyt8CAsFlZ0Ryrp6ZroqKM5HSYliCibgWMvtdkhBXKayCJSWoOaEkALTeTk46A3Wk5ejqA54zs" alt="Técnico do Lakers assume culpa por colapso e derrota contra o ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O técnico do Los Angeles Lakers, Darvin Ham, assistiu a um desastre no quarto período da derrota da equipe para o Indiana Pacers.</p></div>
            </div>
        </a><a href='https://www.lakersbrasil.com/site/noticias/2022/11/nba_lakers_e_pacers_decidem_duelo_no_segundo_final_em_los_angeles'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>NBA: Lakers e Pacers decidem duelo no segundo final em Los ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ4QL3M8KAFFc7YLr1X0AFv-0IjeGXT9PAIQTYJ8jWSf5gsAdW5Vx38Fh_GgLgTV4SyP1ItmHSt" alt="NBA: Lakers e Pacers decidem duelo no segundo final em Los ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Com LeBron e Davis em quadra, o Lakers acabou sendo derrotado em Los Angeles por 116-115 para o Indiana Pacers na noite desta terça. Com a dupla em quadra,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.theplayoffs.com.br/nba/tecnico-dos-lakers-darvin-ham-assume-culpa-por-derrota-contra-os-pacers/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Técnico dos Lakers, Darvin Ham assume culpa por derrota contra ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQC0a7fi6i8E4FT_ZiD8RD5iN4u1QtRmemAxIP8_w-32lqJnAjRMhO_PCm8-QhiLr-Zjihl1wSE" alt="Técnico dos Lakers, Darvin Ham assume culpa por derrota contra ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nesta segunda-feira (28), o Indiana Pacers derrotou o Los Angeles Lakers por 116 a 115, com uma virada de 17 pontos nos dez minutos finais e uma bola de&nbsp;...</p></div>
            </div>
        </a><a href='https://br.bolavip.com/esportes/NBA-Tecnico-do-Lakers-nao-foge-da-raia-e-assume-culpa-pela-mau-desempenho-no-ultimo-quarto-na-derrota-para-o-Pacers-20221129-0117.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>NBA: Técnico do Lakers não &#39;foge da raia&#39; e assume culpa pela mau ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR0mlT951TENjzxCJXQZ_ROBM0OpzAqp16k6m84qUnKnCty0nLQrGZ6UaUSs_5UJp3773dL0vNt" alt="NBA: Técnico do Lakers não &#39;foge da raia&#39; e assume culpa pela mau ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Darvin Ham explicou que o time não esteve organizado e menos agressivo do que deveria; Pacers buscou uma reação para tirar 17 pontos de desvantagem e ganhar&nbsp;...</p></div>
            </div>
        </a><a href='https://www.abola.pt/nnh/2022-11-29/nba-kevin-durant-em-destaque-em-nova-vitoria-dos-nets/966512'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kevin Durant em destaque em nova vitória dos Nets</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQI49JJw3DJ3r3rITo8SjSfGeX8EXQKIv4WI8FfN2H8egvjTbwr69-Zz4AcHU-afRIT25xY56wa" alt="Kevin Durant em destaque em nova vitória dos Nets" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Joel Embiid esteve de regresso nos Philadelphia 76ers, que, depois de desvantagem de 16 pontos, levaram de vencida os Atlanta Hawks (104-101). No último jogo da&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}