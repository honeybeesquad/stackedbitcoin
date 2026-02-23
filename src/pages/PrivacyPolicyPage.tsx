import LegalPageLayout from "@/components/LegalPageLayout";
import privacyPolicyHtml from "@/content/legal/privacy-policy.html?raw";

const PrivacyPolicyPage = () => {
  return <LegalPageLayout html={privacyPolicyHtml} />;
};

export default PrivacyPolicyPage;
