import React from 'react'
import { FcFlashOn, FcLike, FcClock, FcRatings } from 'react-icons/fc'

const Benefit = () => {
  return (
    <div className='w-full min-h-screen'>
      <div className='grid grid-cols-1 md:grid-cols-2 items-center text-center my-[80px]'>
        <div>
          <FcFlashOn size={80} />
          <h3 className='text-xl font-bold'>Trả lời thông minh</h3>
          <p>Hiểu rõ vấn đề và phản hồi câu hỏi.</p>
        </div>
        <div>
          <FcClock size={80} />
          <h3 className='text-xl font-bold'>Tăng hiệu suất học tập</h3>
          <p>Tiết kiệm thời gian trong học tập.</p>
        </div>
        <div>
          <FcLike size={80} />
          <h3 className='text-xl font-bold'>Xây dựng sức khỏe tinh thần</h3>
          <p>Lắng nghe, thấu hiểu nâng cao sức khỏe tinh thần.</p>
        </div>
        <div>
          <FcRatings className='text-[#003398]' size={80} />
          <h3 className='text-xl font-bold'>Định hướng tương lai</h3>
          <p>Giúp sinh viên hiểu rõ hơn về mong muốn và hướng đi trong tương lai.</p>
        </div>
      </div>
      <div className='bg-black h-[100px] flex justify-center items-center'>
        <h1 className='text-white text-4xl font-bold'>Ứng dụng trí tuệ nhân tạo nhằm hỗ trợ sinh viên thời đại mới</h1>
      </div>
    </div>
  )
}

export default Benefit
