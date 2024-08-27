"use client";
import { useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";
import styles from "@/styles/Faq/Faq.module.scss";
import FaqPageData from "@/utils/faqData";

function FaqPage() {

    interface FAQItem {
        id: number;
        question: string;
        answer: string;
    }
    
    interface FAQResponse {
        error: boolean;
        data: FAQItem[];
        message: string;
        code: number;
        status: boolean;
    }

    const [faqData, setFaqData] = useState<FAQItem[]>([]);
    const [activeKey, setActiveKey] = useState<string | null>(null); 

    useEffect(() => {
        const fetchFaqData = async () => {
            try {
                const res: FAQResponse = await FaqPageData();
                console.log(res,"r5es faq data")
                
                if (res.status && Array.isArray(res.data)) {
                    setFaqData(res.data);
                } else {
                    throw new Error("FAQ data is not available or is not in the expected format");
                }
            } catch (err) {
                console.error(err);
            } 
        };

        fetchFaqData();
    }, []);

    const handleSelect = (key: string | null) => {
        setActiveKey(key === activeKey ? null : key); 
    };

    return (
        <div className={styles.FaqOuter}>
            <div className={"container"}>
                <h3>Frequently Asked Questions</h3>
                <Accordion
                    activeKey={activeKey}
                    onSelect={handleSelect}
                >
                    {faqData.map((item) => (
                        <Accordion.Item eventKey={item.id} key={item.id} className={styles.AcdOuter}>
                            <Accordion.Header className={styles.AcdHdr}>
                                {item.question}
                            </Accordion.Header>
                            <Accordion.Body className={styles.AcdBody}>
                                <p>{item.answer}</p>
                            </Accordion.Body>
                        </Accordion.Item>
                    ))}
                </Accordion>
            </div>
        </div>
    );
}

export default FaqPage;
