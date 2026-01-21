import type { FilterType } from "@/types";

export const getFilterTranslationKey = (filter: FilterType): string => {
  const mapping: Record<FilterType, string> = {
    Todos: "filters.all",
    Fullstack: "filters.fullstack",
    Frontend: "filters.frontend",
    Backend: "filters.backend",
  };
  return mapping[filter];
};
