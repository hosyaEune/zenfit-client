import { PageWithHeader } from "@/shared/ui/PageWithHeader";
import { PageWithNavigation } from "@/shared/ui/PageWithNavigation";
import { PageWithPadding } from "@/shared/ui/PageWithPadding";

export default function Report() {
  return (
    <PageWithNavigation>
      <PageWithPadding>
        <PageWithHeader centerElement="report">Report</PageWithHeader>
      </PageWithPadding>
    </PageWithNavigation>
  );
}
