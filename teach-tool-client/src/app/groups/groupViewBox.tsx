import React, { useEffect, useState } from "react"
import AddGroup from "./addGroup"
import ViewGroup from "./viewGroup"

type GroupViewBoxProps = {

}

type Group = {
    imagePath: string,
    title: string,
    message: string
}

const GroupViewBox : React.FC<GroupViewBoxProps> = () => {
    const [groups, setGroups] = useState<Group[]>([])

    useEffect(() => {
        fetchGroups();
    }, [])

    const fetchGroups = async () => {
        const response = await fetch('/addedGroups.json');
        const data = await response.json();
        setGroups(data.groups);
    }

    return(
        <div style={{height: '90vh', overflowY: 'auto', overflowX: 'hidden'}}>
            <AddGroup addGroupHandler={() => {
                setGroups([...groups, {
                    title: 'New title',
                    imagePath: 'next.svg',
                    message: 'New message'
                }])
            }} />

            {groups.map((group, index) => (
                <ViewGroup key={index} imagePath={group.imagePath} message={group.title} title={group.message} />
            ))}
        </div>

    )
}

export default GroupViewBox