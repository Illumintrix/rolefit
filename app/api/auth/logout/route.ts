import{endSession}from'../../../../lib/session';import{NextResponse}from'next/server';export async function POST(){await endSession();return NextResponse.json({ok:true})}
