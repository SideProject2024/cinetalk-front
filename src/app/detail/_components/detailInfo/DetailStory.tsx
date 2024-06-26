"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

import { CaretDownGrayMd, CaretDownMd } from "../../../../../public/icons";

export default function DetailStory() {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="h-fit w-full rounded-[12px] bg-Black px-4 pt-5 Laptop:w-1/2 Laptop:bg-D1_Gray Laptop:px-8 Laptop:pt-7">
      <p
        className={`overflow-hidden transition-[height] Text-s-Regular Laptop:Text-m-Regular ${clicked ? "h-fit" : "line-clamp-[3] h-[62px] text-ellipsis Laptop:line-clamp-[8] Laptop:h-[196px]"}`}
      >
        세상에서 가장 달콤한 여정 좋은 일은 모두 꿈에서부터 시작된다! 마법사이자
        초콜릿 메이커 ‘윌리 웡카’의 꿈은 디저트의 성지, ‘달콤 백화점’에 자신만의
        초콜릿 가게를 여는 것. 가진 것이라고는 낡은 모자 가득한 꿈과 단돈
        12소버린 뿐이지만 특별한 마법의 초콜릿으로 사람들을 사로잡을 자신이
        있다. 하지만 먹을 것도, 잠잘 곳도, 의지할 사람도 없는 상황 속에서 낡은
        여인숙에 머물게 된 ‘웡카’는 ‘스크러빗 부인’과 ‘블리처’의 계략에 빠져
        눈더미처럼 불어난 숙박비로 인해 순식간에 빚더미에 오른다. 게다가 밤마다
        초콜릿을 훔쳐가는 작은 도둑 ‘움파 룸파’의 등장과 ‘달콤 백화점’을 독점한
        초콜릿 카르텔의 강력한 견제까지. 게다가 밤마다 초콜릿을 훔쳐가는 작은
        도둑 ‘움파 룸파’의 등장과 ‘달콤 백화점’을 독점한 초콜릿 카르텔의 강력한
        견제까지. 게다가 밤마다 초콜릿을 훔쳐가는 작은 도둑 ‘움파 룸파’의 등장과
        ‘달콤 백화점’을 독점한 초콜릿 카르텔의 강력한 견제까지. 세계 최고의
        초콜릿 메이커가 되는 길은 험난하기만 한데…
      </p>
      <div className="my-1 flex h-6 items-center justify-center">
        <Image
          src={CaretDownGrayMd}
          alt="더보기"
          className={`cursor-pointer select-none Laptop:hidden ${clicked ? "scale-[-1]" : "scale-1"} transition-transform`}
          onClick={() => setClicked(!clicked)}
        />
        <Image
          src={CaretDownMd}
          alt="더보기"
          className={`hidden cursor-pointer select-none Laptop:block ${clicked ? "scale-[-1]" : "scale-1"} transition-transform`}
          onClick={() => setClicked(!clicked)}
        />
      </div>
    </div>
  );
}
