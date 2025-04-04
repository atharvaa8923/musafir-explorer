
import React from "react";
import useTranslation from "@/hooks/useTranslation";

const ChatbotPreview = () => {
  const { t } = useTranslation();
  
  return (
    <section className="py-16 bg-musafir-light/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">{t("travel_assistant")}</h2>
            <p className="text-muted-foreground mb-6">
              {t("budget_friendly")}
            </p>
          </div>
          <div className="md:w-1/2 bg-card rounded-lg p-6 border border-border">
            <div className="flex justify-end mb-4">
              <div className="bg-musafir-meditation/20 text-musafir-meditation p-3 rounded-lg rounded-tr-none max-w-xs">
                <p>{t("type_message")}</p>
              </div>
            </div>
            <div className="mb-4">
              <div className="bg-muted p-3 rounded-lg rounded-tl-none max-w-xs">
                <p>{t("welcome_message")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatbotPreview;
