import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { hasDemoSession } from "@/lib/demo-session";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jana Prvt Course" },
      { name: "robots", content: "noindex" },
      { name: "description", content: "Jana Prvt Course study app." },
    ],
  }),
  component: HomeRedirect,
});

function HomeRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    void navigate({ to: hasDemoSession() ? "/courses" : "/login", replace: true });
  }, [navigate]);

  return <div className="min-h-[100dvh] bg-background" />;
}
