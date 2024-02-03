import "./style.scss";

const Notification:React.FC = () => {
  return (
    <div className='notify bg-white w-60'>
      <div className="heading">Notifications</div>
      <div className="notices">
        {data?.map((item)=>{
            return(
                <div key={item.id} className="notice">
                    <div className="notice-name"><em>{item.notice_head}</em></div>
                    <div className="content"></div>
                </div>
            )
        })}
      </div>
    </div>
  )
}

const data=[
    {
        "id": 1,
        "notice_head": "Tommorow is a holiday",
        "notice_body": "Please be informed that School will be closed on Republic Day, January 26, 2024. Classes will resume on January 27, 2024."
    },
    {
        "id": 2,
        "notice_head": "Tommorow is a holiday",
        "notice_body": "Please be informed that School will be closed on Republic Day, January 26, 2024. Classes will resume on January 27, 2024."
    },
    {
        "id": 3,
        "notice_head": "Tommorow is a holiday",
        "notice_body": "Please be informed that School will be closed on Republic Day, January 26, 2024. Classes will resume on January 27, 2024."
    },
    {
        "id": 4,
        "notice_head": "Tommorow is a holiday",
        "notice_body": "Please be informed that School will be closed on Republic Day, January 26, 2024. Classes will resume on January 27, 2024."
    }
]
export default Notification
