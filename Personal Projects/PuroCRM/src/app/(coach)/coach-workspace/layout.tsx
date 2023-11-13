import { Authenticated } from "@/components";
import { ToastProvider } from "@/providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Authenticated>
      <div>
        <ToastProvider />
        {children}
      </div>
    </Authenticated>
  );
}
