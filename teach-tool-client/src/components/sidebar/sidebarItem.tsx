import Image from 'next/image'

type SidebarItemProps = {
    title: string,
    imageUrl: string
}

const SidebarItem : React.FC<SidebarItemProps> = ({ title, imageUrl }) => {
    return(
        <>
            <div className="row">
                <Image alt={title} src={imageUrl} style={{height: '50px', width: '50px' }} />
                <label>{title}</label>
            </div>
        </>
    )
}

export default SidebarItem