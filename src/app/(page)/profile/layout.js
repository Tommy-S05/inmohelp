import MultiSidebar from "@/app/(page)/profile/components/sidebar";

export const metadata = {
  title: "Perfil",
  description: "Generated by create next app",
};

export default function ProfileLayout({ children }) {
  return (
    <main className={"flex"}>
      <MultiSidebar />
      {children}
    </main>
  );
}
