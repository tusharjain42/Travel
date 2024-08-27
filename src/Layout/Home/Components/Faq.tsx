"use client";
import { useEffect, useState } from "react";
import styles from "@/styles/Home/Faq.module.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Accordion from "react-bootstrap/Accordion";
import FaqPage from "@/utils/faqData";

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

function Faq() {
  const [faqData, setFaqData] = useState<FAQItem[]>([]);

  useEffect(() => {
    const fetchFaqData = async () => {
      try {
        const res: FAQResponse = await FaqPage();
        
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

 
  return (
    <div className={styles.FaqOuter} id="faqs">
      <div className={"container"}>
        <div className={"text-center pb-4"}>
          <h2>Frequently Asked Questions</h2>
        </div>
        <Row>
          <Col md={4}>
            <div className={styles.FaqImg}>
              <Image src="/assets/faq-img.png" alt="faq-img" />
            </div>
          </Col>

          <Col md={8}>
            <Accordion defaultActiveKey="0">
              {faqData.map((item) => (
                <Accordion.Item eventKey={item.id} key={item.id} className={styles.CustomAccordion}>
                  <Accordion.Header className={styles.CustomAccordionHdr}>
                    {item.question}
                  </Accordion.Header>
                  <Accordion.Body className={styles.CustomAccordionBody}>
                    <p>{item.answer}</p>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Faq;
