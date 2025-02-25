import PersonOne from "@/components/person-one";
import PersonTwo from "@/components/person-two";

export default function Home() {
  return (
    <div className="flex flex-col items-center  pt-10  w-screen h-screen">
      <div className="border bg-neutral-800 rounded-tl-xl rounded-br-xl border-black p-4">
        <PersonOne />
        <PersonTwo />
      </div>
    </div>
  );
}
