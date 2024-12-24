import React from 'react'
import { ChevronsUpDownIcon, ChevronDownIcon, PlusIcon, SquarePenIcon, Trash2Icon } from 'lucide-react';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import DropdownMenuCustom from '@/components/dropdown-menu-custom';
import { Checkbox } from '@/components/ui/checkbox';

const MasterVendor = () => {
  const dataExport = [
    {
      name: '.pdf',
    },
    {
      name: '.xls',
    },
    {
      name: '.csv',
    }
  ];
  const dataAddVendor = [
    {
      name: 'Create New',
      linkto: '/vendor/create',
    },
    {
      name: 'Import File',
    }
  ];

  const tableData = [
    {
      name: "AAnang",
      pic: "Paid",
      email: "$250.00",
      status: "New",
    },
    {
      name: "BBeni",
      pic: "Pending",
      email: "$150.00",
      status: "Revised",
    },
    {
      name: "CCici",
      pic: "Unpaid",
      email: "$350.00",
      status: "Rejected",
    },
    {
      name: "DDedi",
      pic: "Paid",
      email: "$450.00",
      status: "Rejected",
    },
    {
      name: "EErri",
      pic: "Paid",
      email: "$550.00",
      status: "Approved",
    },
    {
      name: "FFifo",
      pic: "Pending",
      email: "$200.00",
      status: "New",
    },
    {
      name: "GGigi",
      pic: "Unpaid",
      email: "$300.00",
      status: "New",
    },
  ];

  const colorBadge = (status: string) => {
    return status === 'Approved' ? 'bg-[#16A34A]' : status === 'Rejected' ? 'bg-[#DC2626]' : 'bg-[#0F172A]';
  } 

  return (
    <div>
      <h3 className='font-bold text-lg'>Master Vendor</h3>
      <p>Vendors List</p>

      <div className='p-8 border rounded-md mt-1'>
        <div className='grid grid-cols-2 gap-4'>
          <div className='flex gap-2'>
            <Input placeholder='Search...' />
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="ml-auto">
                        Columns <ChevronsUpDownIcon className="h-4 w-4 md:ml-2" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {/* {table
                    .getAllColumns()
                    .filter((column) => column.getCanHide())
                    .map((column) => {
                      return (
                        <DropdownMenuCheckboxItem
                          key={column.id}
                          className="capitalize"
                          checked={column.getIsVisible()}
                          onCheckedChange={(value) =>
                            column.toggleVisibility(!!value)
                          }
                        >
                          {column.id}
                        </DropdownMenuCheckboxItem>
                      );
                    })} */}
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className='flex gap-2 justify-end'>
            <DropdownMenuCustom data={dataExport} iconRight={<ChevronDownIcon />} title='Export' />
            <DropdownMenuCustom
              data={dataAddVendor}
              iconRight={<ChevronDownIcon />}
              iconLeft={<PlusIcon />}
              title='Add Vendor'
              classnames='bg-[#17A34A] text-white'
            />
          </div>
        </div>

        <div className='mt-4 border rounded-md'>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead><Checkbox /></TableHead>
                <TableHead className="w-[150px] flex items-center">
                  Vendor Name <ChevronsUpDownIcon className="h-4 w-4 md:ml-2" />
                </TableHead>
                <TableHead>PIC Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tableData.map((data) => (
                <TableRow key={data.name}>
                  <TableCell><Checkbox /></TableCell>
                  <TableCell className="font-medium">{data.name}</TableCell>
                  <TableCell>{data.pic}</TableCell>
                  <TableCell>{data.email}</TableCell>
                  <TableCell>
                    <span className={`items-center rounded-full text-xs font-semibold py-1 px-2 text-white ${colorBadge(data.status)}`}>{data.status}</span>
                  </TableCell>
                  <TableCell className='flex gap-3'>
                    <SquarePenIcon className="h-5 w-5 cursor-pointer" />
                    <Trash2Icon className="h-5 w-5 cursor-pointer" />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}

export default MasterVendor