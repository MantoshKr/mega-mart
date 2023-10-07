import { Electronic } from "@/lib/model/electronic";
import { connectionStr } from "@/lib/db";
import mongoose from 'mongoose'
import { NextResponse } from "next/server";

export async function PUT (request , content){
   const electronicsId=content.params.electronicsid;
   const filter={_id:electronicsId}
   const payload = await request.json();
    console.log(payload);
    await mongoose.connect(connectionStr);
    const result = await Electronic.findOneAndUpdate(filter,payload)
    return NextResponse.json({result, success:true})
}


export async function GET(request , content){
    const electronicsId=content.params.electronicsid;
    const record={_id:electronicsId}
     await mongoose.connect(connectionStr);
     const result = await Electronic.findById(record)
     return NextResponse.json({result, success:true})
 }


 export async function DELETE(request , content){
    const electronicsId=content.params.electronicsid;
    const record={_id:electronicsId}
     await mongoose.connect(connectionStr);
     const result = await Electronic.deleteOne(record)
     return NextResponse.json({result, success:true})
 }