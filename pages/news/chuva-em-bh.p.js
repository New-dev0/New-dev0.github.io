import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Chuva em BH</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Chuva em BH"/>
        <meta name="description" content="Trending News about Chuva em BH" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Chuva em BH</h1>
            <Image width={800} height={500} src="https://s2.glbimg.com/nj7oSQPVe8xEmEBEWn8Lz1iDN18=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/R/B/u8fNxdSHu0VywgBUjs6w/vespasiano-1.jpeg" alt="Chuva em BH"/>
            <h3>Recent News</h3>
            <a href='https://g1.globo.com/mg/minas-gerais/noticia/2022/12/08/belo-horizonte-amanhece-sem-chuva-mas-com-rastro-de-destruicao-apos-temporal.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sobe para dois o número de mortos na Grande BH durante chuva ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTxKekQ6fUtRkAIiOO6orbhezeYLDTUZLvov3e5I3dcPyI5K_PzUVjC76aAGsRo9YkO-pQb0eCt" alt="Sobe para dois o número de mortos na Grande BH durante chuva ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Óbitos foram registrados nas cidades de Santa Luzia e Vespasiano. Na capital mineira, placas de asfalto foram arrancadas e árvores caíram.</p></div>
            </div>
        </a><a href='https://www.em.com.br/app/noticia/gerais/2022/12/08/interna_gerais,1431061/chuva-em-bh-banca-de-revista-e-freezer-foram-levados-pela-enxurrada.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Chuva em BH: banca de revista e freezer foram levados pela ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQwXfnTSQtE8thFuDveoEjGyyJAS_BbW4UMS9lA1EIroVp9m5O_hwKalLTocQj7vr4-XMQr_81S" alt="Chuva em BH: banca de revista e freezer foram levados pela ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Moradores da Av. Bernardo Vasconcelos calculam prejuízos causados pelo transbordamento do Córrego Cachoeirinha devido ao temporal que atingiu BH ontem.</p></div>
            </div>
        </a><a href='https://exame.com/brasil/chuva-em-bh-deixa-dois-mortos-e-rastro-de-destruicao/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Chuva em BH deixa dois mortos e rastro de destruição | Exame</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRljjntaYCmYqoJnD511jQrLF2fa-H62TSJ2xtpAQi7GWkn_8TuyObk-gDh4ptZjVzc8P31dxv_" alt="Chuva em BH deixa dois mortos e rastro de destruição | Exame" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Temporal que caiu na região metropolitana de Belo Horizonte, Minas Gerais, causou alagamentos, desabamentos e deslizamentos de terra.</p></div>
            </div>
        </a><a href='https://g1.globo.com/mg/minas-gerais/noticia/2022/12/07/chuva-causa-alagamentos-em-avenidas-de-bh-e-carros-sao-arrastados-pela-correnteza.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Chuva causa alagamentos em avenidas de BH e carros são ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRG9D19DPmfTK7_fHFrSnuzpEArs_Wtxaf9xbvMQ4krCnk5n9_3qX8LZDILwo3H-1UuJQYkXJTg" alt="Chuva causa alagamentos em avenidas de BH e carros são ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Na Avenida Cristiano Machado, uma mulher subiu em cima de um veículo para se proteger da correnteza. Na Bernardo Vasconcelos, uma pessoa se segurou em um&nbsp;...</p></div>
            </div>
        </a><a href='https://noticias.r7.com/minas-gerais/chuva-em-bh-vias-sao-interditadas-e-pessoas-ficam-ilhadas-08122022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Chuva em BH: vias são interditadas e pessoas ficam ilhadas</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTwXZsJkEd2b8L8P7ao9bIdBAPvhlrb89dj9AmdDuEg-lXQFGItp4sKLsv9CupYTHFFlTHGY9si" alt="Chuva em BH: vias são interditadas e pessoas ficam ilhadas" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O forte temporal que atingiu Belo Horizonte na noite desta quarta-feira (7) causou alagamentos, interditou vias e deixou pessoas ilhadas.</p></div>
            </div>
        </a><a href='https://noticias.uol.com.br/cotidiano/ultimas-noticias/2022/12/08/chuvas-deixam-pelo-menos-dois-mortos-na-grande-belo-horizonte.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Chuva em MG causa 2 mortes; corpo de garota é achado dentro de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQhvILsnEM8mvl2pjQpCfhhXI5i266qOI6H7C85CObABavWclgqLPBGxDSP2-AH6-b6ulOFL8K6" alt="Chuva em MG causa 2 mortes; corpo de garota é achado dentro de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Uma das vítimas foi atingida por um muro que desabou e outra, uma adolescente, morreu dentro de carro arrastado pela água.</p></div>
            </div>
        </a><a href='https://www.otempo.com.br/cidades/chuva-em-bh-pelo-menos-84-pessoas-ficaram-desalojadas-em-menos-de-24-horas-1.2779210'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Chuva em BH: pelo menos 84 pessoas ficaram desalojadas em ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ4HdC6UEz_VhUG29SI7Boq6EuZwT3zD2PFYx05TbDgm-kX5fW6MDIV-nW7gDSpDWGjm1ph2Jbs" alt="Chuva em BH: pelo menos 84 pessoas ficaram desalojadas em ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Vítimas de desastres tiveram de deixar suas casas e se deslocar para residências de familiares ou amigos.</p></div>
            </div>
        </a><a href='https://bhaz.com.br/noticias/bh/agua-quase-no-pescoco-e-nao-desistiram-testemunha-narra-drama-de-mulheres-ilhadas-na-chuva-de-bh/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Água quase no pescoço e não desistiram&#39;: Testemunha narra ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR96PdhpBIQwHWn3t3FivjC4AUPeWr3ZFhJUly_C5pcdZ0g1qfe21UwnFGF209IP_83-jLUp9Gu" alt="&#39;Água quase no pescoço e não desistiram&#39;: Testemunha narra ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Durante a chuva que atingiu BH na noite dessa quarta-feira, a aposentada Maria das Graças, de 72 anos, relata o desespero das mulheres ilhadas.</p></div>
            </div>
        </a><a href='https://www.em.com.br/app/noticia/gerais/2022/12/08/interna_gerais,1430951/duas-pessoas-morrem-durante-fortes-chuvas-na-grande-bh.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Duas pessoas morrem durante fortes chuvas na Grande BH</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSMuEvtM6T8Fh2dyuDiyr9HpLLmF8UpiCvjhsct2qVztJu0sqf0zq6zOBkqD3Qv8TJUOORo9YJS" alt="Duas pessoas morrem durante fortes chuvas na Grande BH" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Um homem morreu após parte da residência desabar em Santa Luzia. Já em Vespasiano, uma adolescente foi arrastada pelas águas.</p></div>
            </div>
        </a><a href='https://www.otempo.com.br/super-noticia/cidades/ufmg-fica-alagada-durante-chuva-em-bh-e-carros-sao-arrastados-nunca-vi-igual-1.2778891'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>UFMG fica alagada durante chuva em BH e carros são arrastados ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTdLm5F0QYRzKQIDxXV2iY46fXUafGP7sVMZ7_xhRtVTfZY-V6izSyDUnPM2gAU28GVyrkCpI3W" alt="UFMG fica alagada durante chuva em BH e carros são arrastados ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O temporal registrado em Belo Horizonte, nesta quarta-feira (7), deixou a Praça de Serviços da Universidade Federal de Minas Gerais (UFMG) alagada.</p></div>
            </div>
        </a>
        </Template></>;
}