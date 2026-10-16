import { createFileRoute, Outlet, useRouterState } from "@tanstack/react-router";
import { motion } from "motion/react";
import { TabBar } from "@/components/ios/TabBar";
import { useStudyTimer } from "@/lib/activity";
import { useEffect } from "react";
import { courses } from "@/lib/courses";
import avatarJana from "@/assets/avatar-jana.webp";

export const Route = createFileRoute("/_tabs")({
  component: TabsLayout,
});

function TabsLayout() {
  useStudyTimer();
  useEffect(() => {
    // Warm the image cache so every picture appears instantly
    [...courses.map((c) => c.image).filter(Boolean), avatarJana].forEach((src) => {
      const img = new Image();
      img.decoding = "async";
      img.src = src as string;
    });
  }, []);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="min-h-[100dvh] bg-background flex flex-col">
      <div
        className="mx-auto w-full max-w-md px-5 safe-top flex-1 flex flex-col"
      >
        <Outlet />
      </div>
      <TabBar />
    </div>
  );
}
