import { NextResponse } from "next/server";
import mongoose from 'mongoose'
import { connectionStr } from '@/lib/db';
import { Electronic } from "@/lib/model/electronic";



export async function GET() {

    let data =[]
    try {
        await mongoose.connect(connectionStr); 
     
      data = await Electronic.find(); 
    } catch (error) {
        data = {success: false}
    }

   
        return NextResponse.json({ result: data , success:true });
       

   
}