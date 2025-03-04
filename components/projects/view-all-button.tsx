"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation'
import { ArrowRight } from "lucide-react";

export function ViewAllButton() {
  const router = useRouter();

  return (
    <Button
      variant="outline"
      size="lg"
      onClick={() => router.push("/projects")}
      className="group"
    >
      View All Projects
      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
    </Button>
  );
}
