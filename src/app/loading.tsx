export default function Loading() {
  return (
    <div className="flex h-[50vh] w-full flex-col items-center justify-center gap-4">
      <div className="flex items-center gap-2">
        <div className="h-4 w-4 animate-bounce rounded-full bg-primary" style={{ animationDelay: "0ms" }}></div>
        <div className="h-4 w-4 animate-bounce rounded-full bg-primary" style={{ animationDelay: "150ms" }}></div>
        <div className="h-4 w-4 animate-bounce rounded-full bg-primary" style={{ animationDelay: "300ms" }}></div>
      </div>
      <p className="text-sm font-medium text-muted-foreground animate-pulse">Loading content...</p>
    </div>
  );
}
