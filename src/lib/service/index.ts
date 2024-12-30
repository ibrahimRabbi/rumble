import { cookies } from "next/headers"

export const getUser = async () => {
    const token = (await cookies()).get('accessToken')?.value

    const fetching = await fetch(` http://localhost:5000/api/get-user`, {
        method: 'GET',
        headers: {
            Authorization: `${token}`,
        },
    })
    const user = await fetching.json()
    return user


}

