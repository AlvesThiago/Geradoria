'use client'
import { Button } from '@/components/ui/button'
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';
import { useUser } from '@clerk/nextjs'
import { eq } from 'drizzle-orm';
import React, { useContext, useEffect, useState } from 'react'
import { HistoryItem } from '../historico/page';
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext';
import Link from 'next/link';

function UsageTrack() {

    const {user}=useUser();
    const {totalUsage, setTotalUsage} = useContext(TotalUsageContext);


    useEffect(() => {
        user&&GetData();
    },[user])

    const GetData=async()=>{
        {/* @ts-ignore*/}
        const result:HistoryItem[] = await db.select().from(AIOutput).where(eq(AIOutput.createdBy,user?.primaryEmailAddress?.emailAddress));

        GetTotalUsage(result);
    }


    const GetTotalUsage=(result:HistoryItem[])=>{
        let total:number = 0;
        result.forEach(element => {
            total=total+Number(element.aiResponse?.length) ;
        });

        setTotalUsage(total);
        console.log(total);
    }

  return (
    <div className='m-5'>
        <div className='bg-primary text-white rounded-lg p-3'>
            <h2 className='font-medium '>Créditos</h2>
            <div className='h-2 bg-[#9981f9] w-full rounded-full mt-3'>
                <div className='h-2 bg-white rounded-full'
                style={{
                    width:`${(totalUsage/20000)*100}%`
                }}>


                </div>
            </div>
            <h2 className='text-sm my-2'>{totalUsage}/20,000 Créditos usados</h2>
        </div>
        <Link href='/dashboard/planos'>
            <Button className='w-full my-2 font-extrabold'>Upgrade ⭐</Button>
        </Link>

    </div>
  )
}

export default UsageTrack