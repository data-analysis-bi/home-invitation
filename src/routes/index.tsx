import { createFileRoute } from "@tanstack/react-router";
import { Gathering } from "@/components/gathering";
import { InviteCard } from "@/components/invite-card";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <main className="stage">
      <div className="stage-bg" aria-hidden="true" />
      <div className="wrap">
        <InviteCard />
        <Gathering />
      </div>
    </main>
  );
}
