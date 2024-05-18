import Container from "@/components/layout/Container";
import Left from "@/components/ui/dashboard/Left";

export default function Home() {
  return (
   <main className="">
    <Container>
    <div className="w-full">
    <Left/>
    <div className="w-[80%] bg-[#EFF5FA] p-6"></div>
    </div>
    </Container>
   </main>
  );
}
