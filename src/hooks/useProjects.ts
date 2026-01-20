import { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { projectsBase } from "../data/project.data";
import type { FilterType, Project } from "../types";
import { filters } from "../types";

interface UseProjects {
  filters: readonly FilterType[];
  filtered: Project[];
  selectedFilter: FilterType;
  setSelectedFilter: (f: FilterType) => void;
}

export const useProjects = (): UseProjects => {
  const [selectedFilter, setSelectedFilter] = useState<FilterType>("Todos");
  const { t } = useTranslation("projects");

  const projects = useMemo(
    () =>
      projectsBase.map((p) => ({
        ...p,
        title: t(`items.${p.key}.title`),
        description: t(`items.${p.key}.description`),
      })),
    [t],
  );

  const filtered = useMemo(() => {
    if (selectedFilter === "Todos") {
      return projects;
    }
    return projects.filter((p) => p.category === selectedFilter);
  }, [selectedFilter, projects]);

  return {
    filters,
    filtered,
    selectedFilter,
    setSelectedFilter,
  };
};
