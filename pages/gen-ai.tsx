import { InternalContentPage } from "@/components/landing/InternalContentPage";
import { internalPages } from "@/components/landing/internalPages";

export default function GenAIPage() {
  return <InternalContentPage page={internalPages["gen-ai"]} />;
}
