import React from 'react';



const Progress = ({inProgress,resolved}) => {
 
  return (
    <div class="mx-2 lg:mx-15 gap-5 flex mt-20 " >
      <div class="bg-gradient-to-r from-[#632EE3] via-[#8249EB] to-[#9F62F2] rounded-xl w-full h-50  ">
        <div class="flex flex-col justify-center items-center   bg-[url(../src/assets/vector1.png),_url(../src/assets/vector2.png)] bg-no-repeat bg-[position:left_top,_right_bottom] bg-[length:200px_200px,200px_200px] h-full">
          <p class="text-white text-[24px]">In-Progress</p>
          <p class="text-white font-semibold text-[60px]" >{inProgress}</p>
        </div>
      </div>
      <div class="bg-gradient-to-r from-[#54CF68] via-[#2AA971] to-[#00827A] rounded-xl w-full h-50  ">
        <div class="flex flex-col justify-center items-center   bg-[url(../src/assets/vector1.png),_url(../src/assets/vector2.png)] bg-no-repeat bg-[position:left_top,_right_bottom] bg-[length:200px_200px,200px_200px] h-full">
          <p class="text-white text-[24px]">Resolved</p>
          <p class="text-white font-semibold text-[60px]" >{resolved}</p>
        </div>
      </div>
    </div>
  );
};

export default Progress;