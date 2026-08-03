import { ProductCard } from "./ProductCard";
import iconMoozhaf from "~/assets/home/icon-moozhaf.svg";
import iconToolhub from "~/assets/home/icon-toolhub.svg";
import iconOppiaWriter from "~/assets/home/icon-oppia-writer.svg";
import accentMoozhaf from "~/assets/home/accent-moozhaf.svg";
import accentToolhub from "~/assets/home/accent-toolhub.svg";
import accentOppiaWriter from "~/assets/home/accent-oppia-writer.svg";

export function ProductMosaic() {
  return (
    <section className="mx-auto max-w-[1120px] px-6">
      <div className="grid gap-12 md:grid-cols-3">
        <ProductCard
          name="Moozhaf"
          description={[
            "The curated repository. Explore",
            "a digital library designed for deep",
            "immersion and distraction-free",
            "knowledge acquisition.",
          ]}
          href="https://moozhaf.oppia.world"
          ctaLabel="EXPLORE KNOWLEDGE"
          iconSrc={iconMoozhaf}
          accentSrc={accentMoozhaf}
          accentClassName="w-[146.667px] h-[106.667px]"
        />
        <ProductCard
          name="Toolhub"
          description={[
            "The workshop. A suite of high-",
            "signal utilities built to refine",
            "workflows and distill complex",
            "information into actionable",
            "insights.",
          ]}
          href="https://toolhub.oppia.world"
          ctaLabel="ACCESS UTILITIES"
          iconSrc={iconToolhub}
          accentSrc={accentToolhub}
          accentClassName="w-[123.5px] h-[120.167px]"
          featured
        />
        <ProductCard
          name="Oppia Writer"
          description={[
            "The canvas. A workspace for the",
            "literary mind, focusing on",
            "cadence, structure, and the",
            "tactile beauty of digital",
            "composition.",
          ]}
          href="https://write.oppia.world"
          ctaLabel="BEGIN WRITING"
          iconSrc={iconOppiaWriter}
          accentSrc={accentOppiaWriter}
          accentClassName="w-[130px] h-[106.667px]"
        />
      </div>
    </section>
  );
}
