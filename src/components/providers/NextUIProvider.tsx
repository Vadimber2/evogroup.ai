'use client'

import { NextUIProvider as NextProvider } from '@nextui-org/react'
import { useRouter } from 'next/navigation'

export function NextUIProvider({ children }: { children: React.ReactNode }) {
    const router = useRouter()

    return (
        <NextProvider navigate={router.push}>
            {children}
        </NextProvider>
    )
}
