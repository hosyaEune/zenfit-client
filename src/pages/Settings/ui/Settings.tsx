import { PageWithHeader } from "@/shared/ui/PageWithHeader";
import { PageWithNavigation } from "@/shared/ui/PageWithNavigation";
import { PageWithPadding } from "@/shared/ui/PageWithPadding";

export default function Settings() {
  return (
    <PageWithNavigation>
      <PageWithPadding>
        <PageWithHeader centerElement="settings">Settings</PageWithHeader>
      </PageWithPadding>
    </PageWithNavigation>
  );
}
