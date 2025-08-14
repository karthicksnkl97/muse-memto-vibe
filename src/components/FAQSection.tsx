import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "How to join?",
    answer: "Simply click 'Join the Meme Battle Now' button or scan the QR code to download the Memto app and start creating memes!"
  },
  {
    question: "Is it free?",
    answer: "Yes! Joining the meme battle is completely free. You can participate, win prizes, and get café discounts without any cost."
  },
  {
    question: "Can I submit more than one meme?",
    answer: "Absolutely! You can submit as many memes as you want for each weekly theme. More submissions = higher chances of winning!"
  },
  {
    question: "Prize claim process?",
    answer: "Winners are announced weekly on Memto socials. Prizes are credited to your Memto wallet or sent as vouchers directly to your registered contact."
  }
];

export const FAQSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-foreground">
          ❓ Quick FAQ
        </h2>
        
        <Card className="bg-card/80 border-border shadow-card">
          <CardContent className="p-8">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-semibold text-card-foreground">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};