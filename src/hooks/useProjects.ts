import { useState } from "react";
import { initialProjects } from "../data";
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

  const filtered =
    selectedFilter === "Todos" ? initialProjects : initialProjects.filter((p) => p.category === selectedFilter);

  return {
    filters,
    filtered,
    selectedFilter,
    setSelectedFilter,
  };
};
