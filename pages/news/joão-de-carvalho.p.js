import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>João de Carvalho</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,João de Carvalho"/>
        <meta name="description" content="Trending News about João de Carvalho" /></Head><Template>
            <h1 style={{fontSize: "30"}}>João de Carvalho</h1>
            <Image width={800} height={500} src="https://images.trustinnews.pt/uploads/sites/6/2022/11/937378615-João-de-Carvalho_wm.jpg" alt="João de Carvalho"/>
            <h3>Recent News</h3>
            <a href='https://caras.sapo.pt/famosos/2022-11-29-joao-de-carvalho-internado-de-urgencia-com-quadro-de-desorientacao-e-perdas-de-memoria/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Caras | João de Carvalho internado de urgência com quadro de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQNt9AKDj90qXlOLoy-_f4mgHESYEOrhVTdMl2i34bBUlY307oWSwpE91WXFT-8ENZOcAKfAQIG" alt="Caras | João de Carvalho internado de urgência com quadro de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O filho de Ruy de Carvalho, de 67 anos, “está internado a fazer exames” e encontra-se “estável”, de acordo com informações avançadas pela irmã do ator, Paula de&nbsp;...</p></div>
            </div>
        </a><a href='https://www.noticiasaominuto.com/fama/2123266/joao-de-carvalho-aos-cuidados-da-familia-e-sera-substituido-em-peca'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>João de Carvalho &quot;aos cuidados da família&quot; e será substituído em ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTf3eGS0HCKei38MKS6deZqlGtjW80f6_y3JxGzFuCFaP-oAC-nZyeAJr1ieotre182QKMz2IzS" alt="João de Carvalho &quot;aos cuidados da família&quot; e será substituído em ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O ator João de Carvalho continua internado, embora se encontre &quot;estável&quot;. A garantia é dada pela irmã, Paula de Carvalho, que ao Fama ao Minuto contou ainda&nbsp;...</p></div>
            </div>
        </a><a href='https://magg.sapo.pt/celebridades/artigos/filho-ruy-de-carvalho-internado'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Filho de Ruy de Carvalho internado de urgência após ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTq4VuSrvcH2lVNOGRt-BlXVP9iXdRDKEJeT2mQwqx2aSo7jr3UFgtN5beYUUPzWznWzDFneDkA" alt="Filho de Ruy de Carvalho internado de urgência após ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Paula de Carvalho confirma à MAGG o internamento do irmão e faz uma atualização sobre o estado de saúde do ator de 67 anos. João de Carvalho foi internado&nbsp;...</p></div>
            </div>
        </a><a href='https://www.maria.pt/noticias-e-tv/joao-de-carvalho-filho-de-ruy-de-carvalho-internado-no-hospital-com-desorientacao-mental/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>João de Carvalho: Filho de Ruy de Carvalho internado no hospital ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSeG_1HTUKoPgpnzFndWNHliTKFReUS_rgnFqD8WfQwYCsLXC8qFge5Cg4mfKw0RpPOPKxunsWE" alt="João de Carvalho: Filho de Ruy de Carvalho internado no hospital ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>João de Carvalho, filho de Ruy de Carvalho, está internado desde sábado na unidade de neurologia do Hospital de Santa Maria devido a complicações de saúde.</p></div>
            </div>
        </a><a href='https://selfie.iol.pt/joao-de-carvalho/internado/joao-de-carvalho-internado-no-servico-de-neurologia-esta-tudo-a-ser-analisado/20221129/6386107b0cf27230dc1a94ec'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>João de Carvalho internado no serviço de Neurologia: &quot;Está tudo a ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTDIlv2q0PUdbdLNK3N29qsclzGTD7PUsRwM9JO-rE0-LJPYVcrBeJ8bEvhALnu3RRVhmkErqtP" alt="João de Carvalho internado no serviço de Neurologia: &quot;Está tudo a ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A irmã de João de Carvalho, Paula Carvalho, confirma à SELFIE que o irmão deu entrada no Hospital de Santa Maria.</p></div>
            </div>
        </a>
        </Template></>;
}