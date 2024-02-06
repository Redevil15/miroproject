"use client";

import Image from "next/image";
import {
  useOrganization,
  useOrganizationList
} from "@clerk/nextjs";
import { cn } from "@/lib/utils";

interface ItemProps {
  id: string;
  name: string;
  imageUrl: string;
}

export const Item = ({
  id,
  name,
  imageUrl
}: ItemProps) => {
  const { organization } = useOrganization();
  const { setActive } = useOrganizationList();

  const isActive = organization?.id === id;

  const onClick = () => {
    if (!setActive) return;

    setActive({ organization: id });
  }

  console.log({
    id,
    name,
    imageUrl,
  })

  return (
    <div className="apect-square relative">
      <Image
        src={imageUrl}
        alt={name}
        fill
        onClick={onClick}
        className={cn(
          "rounded-md cursor-pointer hover:opacity-100 transition opacity-75",
          isActive && "opacity-100"
        )}
      />
    </div>
  )
}