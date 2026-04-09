import Header from "@/components/Header";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex-1 mx-auto max-w-6xl w-full px-6 py-8">
      {children}
    </main>
  );
}
