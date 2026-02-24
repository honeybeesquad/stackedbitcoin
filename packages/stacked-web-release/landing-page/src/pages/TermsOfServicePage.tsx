import LegalPageLayout from "@/components/LegalPageLayout";
import termsOfServiceHtml from "@/content/legal/terms-of-service.html?raw";

const TermsOfServicePage = () => {
  return <LegalPageLayout html={termsOfServiceHtml} />;
};

export default TermsOfServicePage;
