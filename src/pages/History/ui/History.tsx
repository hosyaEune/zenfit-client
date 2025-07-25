import { PageWithHeader } from "@/shared/ui/PageWithHeader";
import { PageWithNavigation } from "@/shared/ui/PageWithNavigation";
import { PageWithPadding } from "@/shared/ui/PageWithPadding";

export default function History() {
  return (
    <PageWithNavigation>
      <PageWithPadding>
        <PageWithHeader centerElement="history">History</PageWithHeader>
      </PageWithPadding>
    </PageWithNavigation>
  );
}
