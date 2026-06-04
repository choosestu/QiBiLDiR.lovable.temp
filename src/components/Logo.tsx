import logoAsset from "@/assets/qibildir-logo.asset.json";

export function Logo({ className = "h-8" }: { className?: string }) {
  return <img src={logoAsset.url} alt="QiBiLDiR" className={className} />;
}
