import React from 'react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

type DropdownMenuCustom = {
  iconRight?: any | null;
  iconLeft?: any | null;
  data: any;
  classnames?: string;
  title: string;
}

const DropdownMenuCustom = (props: DropdownMenuCustom) => {
  const { iconRight, iconLeft, data, classnames, title } = props;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
          <Button variant="outline" className={`${classnames}`}>
            {iconLeft} {title} {iconRight}
          </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {data.map((res: any, i: number) => (
          <DropdownMenuItem key={i}>
            {res.linkto ? (
              <Link href={res.linkto}>{res.name}</Link>
            ) : (res.name)}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default DropdownMenuCustom;