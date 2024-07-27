import Link from 'next/link'
import GroupEventCard from '../../components/GroupEventCard'
import EventDecisionButton from '../../components/EventChoiceButton'

const groupObj = [
  {
    eventName: 'yuppers',
    eventDate: 'yuppers',
    eventTime: 'yuppers',
    eventLocation: 'yuppers',
    eventMembers: ['Ken', 'Kevin', 'David', 'Shark'],
    groupImgSrc: 'https://www.cnet.com/a/img/resize/efb3b6125b6543c02f147c931d7a0a389c44531d/hub/2018/07/20/b446e3db-e3ec-4b26-b04e-b69c79a82386/rubber-duck-eva-rinaldi-flickr-cc-by-sa-20.jpg?auto=webp&fit=crop&height=675&width=1200',
  }
]

export default function Home() {
  return (
    <div className='flex flex-col gap-5 w-[92%] mx-auto'>
     <GroupEventCard group={groupObj[0]} />
     <div className='flex w-full justify-between'>
     <EventDecisionButton />
     </div>

    </div>
  )
}