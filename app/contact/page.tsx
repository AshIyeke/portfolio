import ContactPage from "@/components/ContactPage";
import { FAQSection } from "@/components/FAQSection";

export default function Page() {
  return (
    <div className="mt-20">
      <div className="flex flex-col">
        <ContactPage />
        <FAQSection />
      </div>
    </div>
  );
}
