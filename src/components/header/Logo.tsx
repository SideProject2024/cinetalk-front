import Image from "next/image";
import Link from "next/link";
import React from "react";

import { FullLogo } from "../../../public/images";

function Logo() {
  return (
    <Link
      href="/"
      className={`absolute left-[50%] h-5 w-[120px] translate-x-[-50%] Tablet:relative Tablet:left-0 Tablet:h-6 Tablet:w-[144px] Tablet:w-[192px] Tablet:translate-x-0 Laptop:h-8`}
    >
      <Image src={FullLogo} alt="로고" />
    </Link>
  );
}

export default Logo;
