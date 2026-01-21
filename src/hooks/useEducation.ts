import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import type { AboutCardData } from "@/types";

export const useEducation = (): AboutCardData[] => {
  const { t } = useTranslation("about");

  return useMemo(
    () => [
      {
        title: t("education.informatics.title"),
        description: t("education.informatics.description"),
        date: t("education.informatics.date"),
      },
      {
        title: t("education.english.title"),
        description: t("education.english.description"),
        date: t("education.english.date"),
      },
    ],
    [t],
  );
};
