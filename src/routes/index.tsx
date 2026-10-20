import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/home";
import { RegionProvider } from "@/studio/region";
import { StudioProvider } from "@/studio/studio-context";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <RegionProvider>
      <StudioProvider>
        <HomePage />
      </StudioProvider>
    </RegionProvider>
  );
}
