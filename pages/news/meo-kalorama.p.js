import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>MEO Kalorama</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,MEO Kalorama"/>
        <meta name="description" content="Trending News about MEO Kalorama" /></Head><Template>
            <h1 style={{fontSize: "30"}}>MEO Kalorama</h1>
            <Image width={800} height={500} src="https://wm.observador.pt/wm/obs/l/https%3A%2F%2Fbordalo.observador.pt%2Fv2%2Frs%3Afill%3A770%3A403%2Fc%3A3000%3A1689%3Anowe%3A0%3A311%2Fq%3A85%2Fplain%2Fhttps%3A%2F%2Fs3.observador.pt%2Fwp-content%2Fuploads%2F2022%2F09%2F22231648%2F20220922filipeamorim5854.jpg" alt="MEO Kalorama"/>
            <h3>Recent News</h3>
            <a href='https://observador.pt/2022/11/23/arcade-fire-e-florence-the-machine-no-festival-meo-kalorama-em-2023/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Arcade Fire e Florence + The Machine no festival MEO Kalorama ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTSY0DLHGd-yQhHT9urQs3m288UrKN3ZEVwekI87wnzTLOr_AHsIyrgGz1VdneKqaC6m4Htgj3S" alt="Arcade Fire e Florence + The Machine no festival MEO Kalorama ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Organização do festival avançou nove primeiros nomes do cartaz da segunda edição, agendada para 31 de agosto e 1 e 2 de setembro. The Blaze, Foals, Capitão&nbsp;...</p></div>
            </div>
        </a><a href='https://www.timeout.pt/lisboa/pt/noticias/arcade-fire-entre-as-primeiras-confirmacoes-para-o-meo-kalorama-112322'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Arcade Fire entre as primeiras confirmações para o MEO Kalorama</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQofOtXTPKr6AakvJfgkaYR9narLmLSg4RPyKUtAIzqdu4ZsKao65gg1Swyfj_iI0-Wu7PoLnCN" alt="Arcade Fire entre as primeiras confirmações para o MEO Kalorama" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Florence + The Machine, The Blaze, Foals, Metronomy ou Amyl &amp; The Sniffers são outros nomes confirmados. Mas há mais.</p></div>
            </div>
        </a><a href='https://www.nit.pt/cultura/musica/arcade-fire-e-florence-the-machine-confirmados-no-proximo-meo-kalorama'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Arcade Fire e Florence + The Machine confirmados no próximo ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR1lXcOPTfJ9cPZhfUSsfOd5F0SeqsI0KOqhIQO1ZsZjV0H_VxbnJPWKaEs3HF7zBdZOs6wwLqz" alt="Arcade Fire e Florence + The Machine confirmados no próximo ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O MEO Kalorama anunciou os primeiros nomes para a edição de 2023 nesta quarta-feira, 23 de novembro. Arcade Fire e Florence + The Machine são os artistas&nbsp;...</p></div>
            </div>
        </a><a href='https://echoboomer.pt/arcade-fire-florence-and-the-machine-foals-meo-kalorama-2023/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Arcade Fire, Florence + The Machine, Foals e mais no MEO ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTCrdBeGOUNGL0UNbzCfzt50qpFhLyE2jeyagloje1ldBESHEn16CMGO9I7Y6tGskdFh3DApPPD" alt="Arcade Fire, Florence + The Machine, Foals e mais no MEO ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Na semana passada, dissemo-vos que esta semana seria de novidades para festivais. Ontem, terça-feira, dia 22 de novembro, era suposto termos tido novidades&nbsp;...</p></div>
            </div>
        </a><a href='https://24.sapo.pt/vida/artigos/anunciados-os-primeiros-nomes-para-o-meo-kalorama'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Anunciados os primeiros nomes para o MEO Kalorama</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQyV1Tk2tUHRt61e9xpTpx8MfdfazLXekpFJLwYQghn8uQA2y49YYpTm4VSlAK1OiFTZZqGjQsx" alt="Anunciados os primeiros nomes para o MEO Kalorama" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Os canadianos Arcade Fire e os britânicos Florence + The Machine, Foals e Metronomy estão entre as primeiras confirmações para o festival Kalorama,&nbsp;...</p></div>
            </div>
        </a><a href='https://mag.sapo.pt/musica/artigos/dos-arcade-fire-a-florence-the-machine-as-primeiras-confirmacoes-para-o-meo-kalorama-2023'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>De Florence + The Machine aos Arcade Fire: as primeiras ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTbzpm_6p1_PFr6pSyandK0H8XOBIhk3YEVkc8UlvQKF6gtzj1UbajYyeKs2HG_mO6-ThAU69WO" alt="De Florence + The Machine aos Arcade Fire: as primeiras ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O festival regressa ao Parque da Bela Vista, em Lisboa, nos dias 31 de agosto, 1 e 2 de setembro de 2023....</p></div>
            </div>
        </a><a href='https://www.magazine-hd.com/apps/wp/meo-kalorama-anuncia-arcade-fire-e-florence-the-machine-para-2023/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>MEO Kalorama anuncia Arcade Fire e Florence + The Machine para ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQQ5z5sVhwyMKgj1NB0q8e04_-F2ktjbsL2UGFx8CRgvTscYVCy3ShXhzJf3i1SaN1NGX7MYWcd" alt="MEO Kalorama anuncia Arcade Fire e Florence + The Machine para ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Na mesma linha, outra banda que também actuou este ano em Portugal, os Arcade Fire têm lugar reservado para a segunda edição do festival. Mas há mais&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}