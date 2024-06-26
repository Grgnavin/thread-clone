'use client';
import { sidebarLinks } from '@/constants/index'
import { SignedIn, SignedOut, SignOutButton } from '@clerk/nextjs';
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useClerk } from '@clerk/nextjs';
function LeftSideBar() {
    const router = useRouter();
    const pathname = usePathname();
    const { signOut } = useClerk();

    const RedirectToSignin =async () => {
        router.replace('/sign-in')
        await signOut();
    }

    return (
        <section className="custom-scrollbar leftsidebar">
            <div className="flex w-full flex-col gap-6 px-6">
                {sidebarLinks.map((link) => {
                    const isActive = (pathname.includes(link.route) && link.route.length> 1 ) ||
                                        pathname === link.route;
                    return (
                        <Link 
                            href={link.route}
                            key={link.label}
                            className={`leftsidebar_link
                                ${isActive && 'bg-primary-500'}`
                            }
                            >
                            <Image
                            src={link.imgURL}
                            alt={link.label}
                            width={24}
                            height={24}
                            />
                            <p className='text-light-1 max-lg:hidden'>{link.label}</p>
                        </Link>
                    )})}
            </div>
            <div className='mt-10 px-6 gap-4 p-4'>
            <SignedIn>
                            <div className="flex cursor-pointer" onClick={RedirectToSignin}>
                                <Image
                                src="/assets/logout.svg"
                                alt="logout"
                                width={24}
                                height={24}
                                />
                                <p className='text-light-2 max-lg-hidden'>Logout</p>
                            </div >
                    </SignedIn>
            </div>
        </section>
    )
}

export default LeftSideBar