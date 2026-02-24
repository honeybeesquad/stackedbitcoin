import Footer from "@/components/Footer";
import Header from "@/components/Header";

interface LegalPageLayoutProps {
  html: string;
}

const LegalPageLayout = ({ html }: LegalPageLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-md"
      >
        Skip to content
      </a>
      <Header />
      <main id="main-content" className="pt-28 pb-12 md:pt-32 md:pb-16 lg:pt-36 lg:pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto rounded-xl border border-border bg-card p-5 md:p-8 lg:p-10">
            <div className="legal-content" dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LegalPageLayout;
