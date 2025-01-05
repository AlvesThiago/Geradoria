import React from 'react';
import { TEMPLATE } from './TemplateListSection';
import Image from 'next/image';
import Link from 'next/link';

function TemplateCard(item: TEMPLATE) {
  return (
    <Link href={'/dashboard/content/' + item?.slug}>
      <div className="p-5 shadow-md rounded-md border bg-white flex flex-col gap-3 cursor-pointer hover:scale-105 transition-all min-h-[250px] max-h-[300px]">
        <div className="flex justify-center items-center h-[60px]">
          <Image src={item.icon} alt="icon" width={50} height={50} />
        </div>
        <h2 className="font-medium text-lg text-center">{item.name}</h2>
        <p className="text-gray-500 line-clamp-3 text-sm">{item.desc}</p>
      </div>
    </Link>
  );
}

export default TemplateCard;
