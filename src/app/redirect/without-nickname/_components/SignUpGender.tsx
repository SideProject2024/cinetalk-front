import clsx from "clsx";
import React, { Dispatch, SetStateAction } from "react";

import Button from "@/components/buttons/Button";

interface SignUpGenderProps {
  gender: string;
  setGender: Dispatch<SetStateAction<string>>;
}

export default function SignUpGender({ gender, setGender }: SignUpGenderProps) {
  return (
    <section className="mt-6 Tablet:mt-5">
      <p className="text-White Text-xs-Regular">성별</p>
      <section className="mt-1 flex gap-3">
        <Button
          onClick={() => setGender("남자")}
          variant="line"
          size="md"
          className={clsx(
            "w-full rounded-xl",
            gender === "남자" && "bg-D2_Gray",
          )}
        >
          남자
        </Button>
        <Button
          onClick={() => setGender("여자")}
          variant="line"
          size="md"
          className={clsx(
            "w-full rounded-xl",
            gender === "여자" && "bg-D2_Gray",
          )}
        >
          여자
        </Button>
        <Button
          onClick={() => setGender("기타")}
          variant="line"
          size="md"
          className={clsx(
            "w-full rounded-xl",
            gender === "기타" && "bg-D2_Gray",
          )}
        >
          기타
        </Button>
      </section>
    </section>
  );
}