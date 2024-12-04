
import { getCookie } from 'cookies-next/client'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'




export async function middleware(request: NextRequest) {

    // const authRoute = ['/auth/sign-in', '/auth/sign-up']
    const token = (await cookies()).get('accessToken')?.value

    const fetching = await fetch('http://localhost:5000/api/get-user', {
        method: 'GET',
        headers: {
            Authorization: `${token}`,
        },
    })
    const user = await fetching.json()



    if (!user?.success) {
        return NextResponse.redirect(new URL('/auth/sign-in', request.url))

    } else {
        return NextResponse.next()
    }


}


export const config = {
    matcher: ['/payment', '/shipping-address', '/success', '/dashboard/:page*'],
}


