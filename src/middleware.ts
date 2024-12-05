import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getUser } from './lib/service'



export async function middleware(request: NextRequest) {

    const user = await getUser()

    if (!user?.success) {
        return NextResponse.redirect(new URL('/auth/sign-in', request.url))

    } else {
        return NextResponse.next()
    }


}


export const config = {
    matcher: ['/payment', '/shipping-address', '/success','/contact', '/dashboard/:page*'],
}





// const authRoute = ['/auth/sign-in', '/auth/sign-up']
