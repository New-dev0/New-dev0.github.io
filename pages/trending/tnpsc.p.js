import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>TNPSC</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,TNPSC"/>
        <meta name="description" content="Trending News about TNPSC" /></Head><Template>
            <h1 style={{fontSize: "30"}}>TNPSC</h1>
            <Image width={800} height={500} src="https://tamil.indianexpress.com/wp-content/uploads/2022/10/TNPSC.jpg" alt="TNPSC"/>
            <h3>Recent News</h3>
            <a href='https://tamil.indianexpress.com/education-jobs/tnpsc-group-2-2a-and-group-4-exams-results-date-latest-updates-538122/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>TNPSC Results: குரூப் 2, 2A, குரூப் 4 ரிசல்ட் எப்போது ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSMudkNl9CCLskRUwT2xOZi7WfVnpybnSl6LCnea0TZvfaXq4JwYzPg4qABHSchzw-kWJKjNoCN" alt="TNPSC Results: குரூப் 2, 2A, குரூப் 4 ரிசல்ட் எப்போது ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>TNPSC Results: குரூப் 2, 2A, குரூப் 4 ரிசல்ட் எப்போது? புதிய தகவல்கள். TNPSC: தமிழ்நாடு அரசுப்&nbsp;...</p></div>
            </div>
        </a><a href='https://tamil.oneindia.com/news/chennai/tnpsc-released-group-2-group-2-a-exams-results-484356.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>தமிழகத்தில் டிஎன்பிஎஸ்சி குரூப் 2, 2 ஏ தேர்வு ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTxwyDmFq9CWeXPZmfBv-c7_xqOOrhPSsQJ3GWVFqYQexhlg3UpdyyeKAyUs9tmLcZF1gWVSx3w" alt="தமிழகத்தில் டிஎன்பிஎஸ்சி குரூப் 2, 2 ஏ தேர்வு ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>தற்போது குரூப்2 முதல் நிலைத் தேர்வு முடிவுகள் வெளியாகிவிட்டன. இதனைத் தொடர்ந்து குரூப்2&nbsp;...</p></div>
            </div>
        </a><a href='https://tamil.news18.com/news/employment/tnpsc-group-2-result-announced-833217.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>TNPSC Group 2 Result | டிஎன்பிஎஸ்சி குரூப் 2 தேர்வு ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRN2y3O57s1lldZorQ6E60EU4OhdC-lmWJQiD3CtjEGCp1P8NKCirJwvoxF0HnYV8NPld1hRvw8" alt="TNPSC Group 2 Result | டிஎன்பிஎஸ்சி குரூப் 2 தேர்வு ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>டிஎன்பிஎஸ்சி தேர்வு முடிவுகள் இன்று மாலை வெளியானது. Published by:Vijay R. First published: November 08, 2022, 19:10&nbsp;...</p></div>
            </div>
        </a><a href='https://tamil.news18.com/news/employment/tamilnadu-2022-budget-gist-for-tnpsc-group-1-prelims-exam-832867.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>இன்னும் 10 நாட்களில் TNPSC குரூப் 1 தேர்வு... தமிழக ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRx2O8DQwLTg8HZ72QP4KSATecXEZHGlBGunAhrOQUnTIn9I9EoDshggCfRSl6qYaxhMXahs3JI" alt="இன்னும் 10 நாட்களில் TNPSC குரூப் 1 தேர்வு... தமிழக ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>இன்னும் 10 நாட்களில் TNPSC குரூப் 1 தேர்வு... தமிழக பட்ஜெட் இவ்வளவு தான் .. ஈஸியா படிங்க! TNPSC&nbsp;...</p></div>
            </div>
        </a><a href='https://www.dinamani.com/tamilnadu/2022/nov/08/tnpsc-group-exams-result-out-3945779.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>குரூப் 2, குரூப் 2ஏ தேர்வு முடிவுகள் வெளியீடு...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSL8E9eSDFOM1RFCxVRIzWok77simiWIPeTpSXCAja8qt3btY_KskmB2YP5INOY2HAS9btEzAXA" alt="குரூப் 2, குரூப் 2ஏ தேர்வு முடிவுகள் வெளியீடு..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>குரூப் 2 மற்றும் குரூப் 2ஏ பிரிவில் 5 ஆயிரத்து 400 காலிப் பணியிடங்களுக்கான முதல் நிலைத்&nbsp;...</p></div>
            </div>
        </a><a href='https://jantaserishta.com/local/tamil-nadu/tnpsc-group-2-2a-exam-results-declared-check-details-here-1731199'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>TNPSC Group 2, 2A परीक्षा परिणाम घोषित: विवरण यहां देखें</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcStcuYzkklQGYiEo1iNCxTTUPTL7lwOcirZsN_I_qu6sFhZmUlAi-tCvjYq-zD6ABQFBLW9E1tQ" alt="TNPSC Group 2, 2A परीक्षा परिणाम घोषित: विवरण यहां देखें" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>CHENNAI: तमिलनाडु लोक सेवा आयोग (TNPSC) ने मंगलवार को ग्रुप 2 और ग्रुप 2A प्रारंभिक परीक्षा&nbsp;...</p></div>
            </div>
        </a><a href='https://tamil.news18.com/news/employment/health-officer-job-in-tamil-nadu-health-services-tnpsc-announced-833064.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>தமிழ்நாடு பொது சுகாதாரத் துறையில் வேலைவாய்ப்பு ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTjiWvo33q4LXOkcf6NBu0blYYMRvjjs4NZNQdOwhAQFyDnLf7kdq5IZb0KUiliE4PJuAATSQI1" alt="தமிழ்நாடு பொது சுகாதாரத் துறையில் வேலைவாய்ப்பு ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>health officer job in tamil nadu health services | தமிழ்நாடு அரசுப் பணியாளர் தேர்வாணையம் அறிவிப்பின் படி&nbsp;...</p></div>
            </div>
        </a><a href='https://tamil.samayam.com/education/exam-results/tnpsc-group-secretariat-jobs-preliminary-exam-results-are-out/articleshow/95383965.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>TNPSC குரூப் 2,2A ப்ரிலிமினரி தேர்வு முடிவுகள் ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSAyivsnp1V4TSThWFb4p95wHBw0E0SPzx3PjUNxF5z88IxR6R9Wmv6JvSLDWdj9wJJypxCXCfJ" alt="TNPSC குரூப் 2,2A ப்ரிலிமினரி தேர்வு முடிவுகள் ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>TNPSC குரூப் 2,2A ப்ரிலிமினரி தேர்வு முடிவுகள் வெளியீடு! Authored by Subash Bose | Samayam Tamil |&nbsp;...</p></div>
            </div>
        </a><a href='https://tamil.asianetnews.com/career/tnpsc-group-2-prelims-result-2022-released-check-on-in-www-tnpsc-gov-in-rl19iw'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>டிஎன்பிஎஸ்சி குரூப் 2, 2A தேர்வு முடிவுகள் ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQk0gSv1dbC-BTDxOb3U92VxPOriG4i5O6w74O2FJ38doWreRUMOvi4OIVvkgWr3QgNug7_2xkU" alt="டிஎன்பிஎஸ்சி குரூப் 2, 2A தேர்வு முடிவுகள் ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>TNPSC Group 2 Exam Result: டிஎன்பிஎஸ்சி குரூப் 2 மற்றும் 2A தேர்வு முடிவுகள் தற்போது வெளியாகி&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}