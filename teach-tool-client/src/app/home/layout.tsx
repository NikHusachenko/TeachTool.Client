export default function HomeLayout({ children } : {children: React.ReactNode}) {
    return(
        <>
            <div>
                Home Layout
            </div>
            <div>{children}</div>
        </>
    )
}