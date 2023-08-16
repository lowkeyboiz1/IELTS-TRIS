import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex gap-3">
      <Link href={"/"}></Link>
      <Link href={"/Add"}>add</Link>
      <Link href={"/Khang"}>khang</Link>
    </div>
  );
}
