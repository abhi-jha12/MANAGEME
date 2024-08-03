import { Link } from 'react-router-dom'
import { CalendarImage, ClockImage, HomeImage, UserImage } from '../assets'
import AddButton from './AddButton'

const RouterTab = () => {
  return (
    <div className='flex flex-row text-white bg-card_background items-center justify-between px-3 py-2'>
        <Link to={"/"} className='flex flex-col gap-2 items-center justify-center text-xs tracking-wide'>
            <img src={HomeImage}/>
            <p>Home</p>

        </Link>
        <Link to={"/calender"} className='flex flex-col gap-2 items-center justify-center text-xs tracking-wide'>
        <img src={CalendarImage}/>
            <p>Calendar</p>
            
        </Link>
        <Link to={"/addtask"}>
        <div className='-mt-4'>

        <AddButton/>
        </div></Link>
        
        
        <Link to={"/expenses"} className='flex flex-col gap-2 items-center justify-center text-xs tracking-wide'>
        <img src={ClockImage}/>
        <p>Expenses</p>
            
        </Link>
        <Link to={"/profile"} className='flex flex-col gap-2 items-center justify-center text-xs tracking-wide'>
        <img src={UserImage}/>
        <p>Profile</p>
            
        </Link>
    </div>
  )
}

export default RouterTab