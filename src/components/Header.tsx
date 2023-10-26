import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="flex items-center p-7 justify-between sticky top-0 bg-white z-50 shadow-md">

      <Link href={"/"} className="flex space-x-2 gap-2 items-center">
        <Image
          src="https://links.papareact.com/4t3"
          alt=""
          width={30}
          height={30}
        ></Image>
        <div>
          <h1 className="text-2xl font-semibold tracking-wider">NUMENTA</h1>

          <h2 className="text-xs">
            Powered by DALL-E 2, Chat GPT & Microsoft Azure
          </h2>
        </div>
      </Link>

      <div className="md:text-lg">
        <Link className="px-2 font-light" href={'https://github.com/WalidAit69'}>Github</Link>
      </div>

    </header>
  );
}

export default Header;
