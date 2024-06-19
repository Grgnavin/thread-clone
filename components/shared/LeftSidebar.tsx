import { sidebarLinks } from '@/constants/index'
function LeftSideBar() {
    return (
        <section className="custom-scrollba leftsidebar">
            <div className="flex w-full flex-col gap-6 px-6">
                {sidebarLinks.map((link) => (
                    <div>
                        Link
                    </div>
                ))}
            </div>
        </section>
    )
}

export default LeftSideBar