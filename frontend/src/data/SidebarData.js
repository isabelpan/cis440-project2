import { BsFillCalendarDateFill, BsFillFileBarGraphFill } from 'react-icons/bs';
import { IoIosListBox } from 'react-icons/io';
import { GrLinkedin } from 'react-icons/gr';
import { ImGoogle2, ImProfile } from 'react-icons/im';
import { MdDashboard, MdFeed } from 'react-icons/md'

 
const IsMentor = () => {

}

export const links = [
    {
        title: 'Pages',
        links: [
            {
                name: 'dashboard',
                icon: <MdDashboard />
            },
            {
                name: 'calendar',
                icon: <BsFillCalendarDateFill />,
            },
            {
                name: 'tasks',
                icon: <IoIosListBox />
            },
            {
                name: 'goals',
                icon: <BsFillFileBarGraphFill />
            },
            {
                name: 'feedback',
                icon: <MdFeed />
            }
        ]
    },
    {
        title: 'Links',
        links: [
            {
                name: 'my mentor',
                icon: <ImProfile />
            },
            {
                name: 'linkedIn',
                icon: <GrLinkedin />
            },
            {
                name: 'Google',
                icon: <ImGoogle2 />
            }
        ]
    }
]