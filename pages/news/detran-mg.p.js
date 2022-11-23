import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Detran-MG</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Detran-MG"/>
        <meta name="description" content="Trending News about Detran-MG" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Detran-MG</h1>
            <Image width={800} height={500} src="https://i.em.com.br/bB6RyzsdgH1eyNYt6j_jV5c35kY=/600x315/smart/imgsapp.em.com.br/app/noticia_127983242361/2022/11/22/1424152/fachada-de-um-predio-e-uma-placa_1_52151.png" alt="Detran-MG"/>
            <h3>Recent News</h3>
            <a href='https://www.em.com.br/app/noticia/gerais/2022/11/22/interna_gerais,1424152/site-do-detran-esta-com-problemas-na-emissao-do-documento-2022.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Site do Detran está com problemas na emissão do documento 2022</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSFKUWF0MNePMeGcDZ0VEblK49FusVk6Dvw49lSa8jt2xrRLQanEkcNzRtcjcp_Gpp9BHxj5FVw" alt="Site do Detran está com problemas na emissão do documento 2022" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Em Minas Gerais, Certificado de Registro e Licenciamento de Veículo (CRLV) do ano de 2022 é de posse obrigatória.</p></div>
            </div>
        </a><a href='https://www.itatiaia.com.br/editorias/cidades/2022/11/22/site-do-detran-mg-esta-com-problema-para-emitir-documento-2022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Site do Detran-MG está com problema para emitir documento 2022</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSB2LSGSt53LfJlev1w-ksaSvwLjqZzWk2Jy4vcxatFn2s-fLonuqNiXf3AOcw9A_o4YTpmPC16" alt="Site do Detran-MG está com problema para emitir documento 2022" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Certificado de Registro e Licenciamento de Veículo (CRLV) 2022 é obrigatório.</p></div>
            </div>
        </a><a href='https://www.otempo.com.br/cidades/emissao-do-crlv-2022-site-do-detran-mg-e-normalizado-apos-instabilidade-1.2770403'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Emissão do CRLV 2022: site do Detran-MG é normalizado após ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTXvexY4fvgkygJRXnbzQSeGbGczmcFg3PRxgsVeTvHh_Pc-fvRD4XgaDJIrN8thlLB6Wl78vJq" alt="Emissão do CRLV 2022: site do Detran-MG é normalizado após ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Apresentação do documento, que comprova a regularidade do veículo, passou a ser exigida no Estado desde segunda-feira (21)</p></div>
            </div>
        </a><a href='https://www.agenciaminas.mg.gov.br/noticia/policia-civil-promove-leilao-de-82-veiculos-apreendidos-em-coronel-fabriciano'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Polícia Civil promove leilão de 82 veículos apreendidos em Coronel ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTwM4i-CtvGhOe-gti_2It8uNzh3sZQ8z-RugC4bmVeyEqD8g6K7ljF2RAhTzIt-mCX7htFUa_l" alt="Polícia Civil promove leilão de 82 veículos apreendidos em Coronel ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Entre os dias 28 e 30/11, a Polícia Civil de Minas Gerais (PCMG) promove leilão de 82 veículos apreendidos, na cidade de Coronel Fabriciano, no...</p></div>
            </div>
        </a><a href='https://www.opopularjm.com.br/detran-mg-vai-leiloar-82-veiculos-apreendidos-em-coronel-fabriciano/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Detran-MG vai leiloar 82 veículos apreendidos em Coronel Fabriciano</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ0wMFj8I7fj5NGgLdXzDd8ree4i6M4D25Ea-cTEX9dJ1nPL12I_ag6jtz3HXXNHPrOIr9TNHHK" alt="Detran-MG vai leiloar 82 veículos apreendidos em Coronel Fabriciano" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Do total de lotes ofertados 52 foram classificados como conversados e 30 foram considerados sucatas pela Comissão Especial de Leilão da 1ª Delegacia Regional de&nbsp;...</p></div>
            </div>
        </a><a href='https://g1.globo.com/mg/vales-mg/noticia/2022/11/22/veiculos-apreendidos-vao-a-leilao-em-coronel-fabriciano.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Veículos apreendidos vão a leilão em Coronel Fabriciano</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRPNmo0kcfdC4vQrAPseEtjvc8Vy_SpKSRvQFJFKi9l9PUJ35uxWqMDvjmgrNG3Zs8cUWXR6S1e" alt="Veículos apreendidos vão a leilão em Coronel Fabriciano" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Visitação presencial aos lotes poderá ser realizada pelos interessados entre os dias 23 e 25 de novembro, das 10:00 às 17:00 horas, no pátio credenciado&nbsp;...</p></div>
            </div>
        </a><a href='https://diariodeuberlandia.com.br/noticia/32521/registro-de-licenciamento-do-veiculo-comeca-a-ser-cobrado-em-minas'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Registro de licenciamento do veículo começa a ser cobrado em Minas</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR-WZiNSN1Ss_osIHXNBO5m1GYFb2I8CwV-XVy9Vp9P6dwh9Y9Le5Won6QrcSV34H3dGu5DL2GP" alt="Registro de licenciamento do veículo começa a ser cobrado em Minas" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O Departamento de Trânsito de Minas Gerais (Detran-MG) já está exigindo dos motoristas mineiros a apresentação do Certificado de Registro e Licenciamento de&nbsp;...</p></div>
            </div>
        </a><a href='https://www.diariodoaco.com.br/noticia/0101984-oitenta-e-dois-veiculos-apreendidos-serao-leiloados-em-coronel-fabriciano'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Oitenta e dois veículos apreendidos serão leiloados em Coronel ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSO6UOgCFuo6wqeSC5-vlqpcjtyCNw7q81_y6pmVM97oFvNjkSYH_IGmcsE-srmZ7oz-W8nA7BX" alt="Oitenta e dois veículos apreendidos serão leiloados em Coronel ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>“Do total de lotes ofertados 52 foram classificados como conversados e 30 foram considerados sucatas pela Comissão Especial de Leilão da 1ª Delegacia Regional&nbsp;...</p></div>
            </div>
        </a><a href='https://varginhadigital.com.br/noticias/minas/atencao-motoristas-crlv-2022-comeca-a-ser-exigido-em-minas-c/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Atenção motoristas: CRLV 2022 começa a ser exigido em Minas</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS0J_1uUz4R1vtiHAM9gH5nhvXYdbPCYxFoIYlfu_xKnjbCZiizkW6iS54wMcievuHSv8t7wwFx" alt="Atenção motoristas: CRLV 2022 começa a ser exigido em Minas" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O condutor precisa apresentar a CRLV 2022 no formato digital ou impresso, para comprovar a regularidade do veículo em circulação.</p></div>
            </div>
        </a><a href='https://regionalzao.com.br/noticia/54095/atencao-motoristas-crlv-2022-comeca-a-ser-exigido-em-mg'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Atenção motoristas: CRLV 2022 começa a ser exigido em MG</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTeiDR7k18y76WZRymUw0pj32BemHn_KwKjBkg9Qqx24O4n9vlLgVnpw6zL1qHlMtJ3y3HVCwbz" alt="Atenção motoristas: CRLV 2022 começa a ser exigido em MG" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Documento pode ser apresentado às autoridades em formato digital ou impresso, de forma a comprovar a regularidade do veículo.</p></div>
            </div>
        </a>
        </Template></>;
}