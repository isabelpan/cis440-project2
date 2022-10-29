import { BsFillCalendarDateFill, BsFillFileBarGraphFill } from 'react-icons/bs';
import { IoIosListBox } from 'react-icons/io';
import { GrLinkedin } from 'react-icons/gr';
import { ImGoogle2, ImProfile } from 'react-icons/im';
import { MdDashboard } from 'react-icons/md'

const IsMentee = () => {

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