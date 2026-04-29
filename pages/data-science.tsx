import { InternalContentPage } from "@/components/landing/InternalContentPage";
import { internalPages } from "@/components/landing/internalPages";

export default function DataSciencePage() {
  return <InternalContentPage page={internalPages["data-science"]} />;
}
