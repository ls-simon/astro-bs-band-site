import type { Section } from "../models/Models";
import { getSections } from "./hygraph";

export async function getLoadedSectionComponents(sections: Section[]) {
  const loadSectionComponent = async (sectionId: string) => {
    const componentFileName =
      sectionId && sectionId.charAt(0).toUpperCase() + sectionId.slice(1);
    const module = await import(
      /* @vite-ignore */ `${import.meta.env.SECTION_COMPONENTS_DIR_PATH}/${componentFileName}.astro`
    );
    return module.default;
  };

  const sectionComponents = await Promise.all(
    sections
      .filter((section) => section.sectionId !== null)
      .map(async (section) => ({
        section,
        component: await loadSectionComponent(section.sectionId),
      }))
  );
  const componentsSortedByOrder = sectionComponents.sort(
    (scPrev, scNext) => scPrev.section.order - scNext.section.order
  );
  return componentsSortedByOrder;
}

export async function getSectionsSortedByOrderId() {
  const sectionsData = await getSections();
  const sections = sectionsData.data.sections as Section[];
  return sections.sort(
    (prevSection, nextSection) => prevSection.order - nextSection.order
  );
}