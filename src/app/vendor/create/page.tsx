import React from 'react'
import { ChevronUpIcon } from 'lucide-react'

import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import DropdownMenuCustom from '@/components/dropdown-menu-custom'
import { Input } from '@/components/ui/input'

const CreateVendor = () => {
  const dataVendorType = [
    {
      name: 'vendor1'
    }
  ]

  return (
    <div className='flex'>
      <div className='p-4 gap-3 flex flex-col'>
        <p className='text-sm font-medium'>On This Page</p>
        <div className='flex flex-col gap-1'>
          <p className='text-sm cursor-pointer'>Primary Information</p>
          <p className='text-sm cursor-pointer'>Address</p>
          <p className='text-sm cursor-pointer'>Tax Information</p>
          <p className='text-sm cursor-pointer'>Bank Information</p>
          <p className='text-sm cursor-pointer'>Account Information</p>
        </div>
      </div>
      <div className='p-4 flex flex-col gap-2 w-full'>
        <p className='text-lg font-semibold'>Create Vendor</p>
        <p className='text-sm'>Fill in all forms.</p>
        <p className='text-sm font-medium'>Primary Information</p>
        <div className='grid gap-3'>
          <p className='text-sm font-medium'>Type</p>
          <div>
            <RadioGroup defaultValue="option-one" className='flex gap-5'>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="company" id="company" />
                <p className='text-sm'>Company</p>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="perorangan" id="perorangan" />
                <p className='text-sm'>Perorangan</p>
              </div>
            </RadioGroup>
          </div>
          <div className='grid grid-cols-2 gap-6'>
            <div className='grid gap-3'>
              <div>
                <p>Vendor Type *</p>
                <DropdownMenuCustom
                  data={dataVendorType}
                  iconRight={<ChevronUpIcon />}
                  title='Select Vendor Type'
                  classnames='w-full flex justify-between color-[#94A3B8]'
                />
              </div>
              <div>
                <p>Company Name *</p>
                <Input placeholder='Input Company Name' />
              </div>
              <div>
                <p>Document Link *</p>
                <Input placeholder='https://' />
              </div>
              <div>
                <p>Subsidairy *</p>
                <DropdownMenuCustom
                  data={dataVendorType}
                  iconRight={<ChevronUpIcon />}
                  title='Select Subsidairy'
                  classnames='w-full flex justify-between color-[#94A3B8]'
                />
              </div>
            </div>

            <div className='grid gap-3'>
              <div>
                <p>Category</p>
                <DropdownMenuCustom
                  data={dataVendorType}
                  iconRight={<ChevronUpIcon />}
                  title='Select Category'
                  classnames='w-full flex justify-between color-white'
                />
              </div>
              <div>
                <p>Vendor ID</p>
                <Input placeholder='Vendor ID' />
              </div>
              <div>
                <p>PIC Name</p>
                <Input placeholder='PIC Name' />
              </div>
              <div>
                <p>Vendor Origin</p>
                <Input placeholder='Vendor Origin' />
              </div>
            </div>
          </div>
        </div>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <p className='text-sm font-medium'>Address</p>
        <div>
          <div>
            <p>No. KTP</p>
            <Input placeholder='Input 16 Digit Number' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateVendor