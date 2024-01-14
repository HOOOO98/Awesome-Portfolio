import Image from 'next/image';
import React from 'react';

function ProjectInfo() {
  return (
    <div className='bg-zinc-100 flex flex-col gap-20 items-center'>
      <div className='flex flex-col gap-6 max-w-[700px]'>
        <div>
          <p className='text-3xl font-bold text-center'>SkipAD</p>
          <p className='text-lg font-bold text-center text-gray-400'>
            2023.03.08 - 2023.04.19
          </p>
        </div>
        <div className='flex flex-col justify-center items-center gap-6 bg-stone-200 p-5 '>
          <Image
            src='https://github.com/HOOOO98/SKIPAD/assets/120024673/9da48c22-b3e0-4966-bd2f-40ef0943a900'
            width={680}
            height={680}
            alt='크롬 확장 프로그램 SKIPAD 썸네일'
          />
          <div className='flex flex-col gap-6 text-center'>
            <p className='text-xl leading-normal mb:text-sm'>
              유튜브 5초 광고를 넘겨주는 크롬 확장 프로그램입니다
            </p>
            <p className='text-xl leading-normal mb:text-sm'>
              순수 자바스크립트로 작성하였고 웹 구성 요소를 파악할 수 있는 좋은
              기회였습니다
            </p>
          </div>
        </div>
      </div>

      <div className='flex flex-col max-w-[700px]'>
        <div>
          <p className='text-3xl font-bold text-center'>SWEETY</p>
          <p className='text-lg font-bold text-center text-gray-400 '>
            2023.11.07 - 2023.11.17
          </p>
        </div>
        <div className='flex flex-col justify-center items-center gap-6 bg-stone-200 p-5'>
          <Image
            src='https://github.com/Toy2-Team3/sweety/assets/63582234/3af0d858-4147-4953-bd41-41aae54c9ef9'
            width={680}
            height={680}
            alt='SWEETY 회원가입 썸네일'
          />
          <p className=' text-xl leading-normal mb:text-sm'>
            글자 하나당 타이핑 속도는 평균적으로 0.2 ~ 0.5s 이라고 합니다.
          </p>
          <p className=' text-xl leading-normal mb:text-sm'>
            그래서 debounce를 적용하여 아이디를 잠시 머뭇거릴 시간을 고려한
            1.5초를 주어 api 호출 수를 최소화 했습니다
          </p>
          <p className=' text-xl leading-normal mb:text-sm'>
            최소 아이디 길이가 8자이기 때문에 최대 7번의 api 호출을 감소시킬 수
            있습니다
          </p>
          <p className=' text-xl leading-normal mb:text-sm'>
            중복검사 버튼을 사용하지 않고 즉각적인 피드백을 제공합니다
          </p>
        </div>
        <div className='flex flex-col justify-center items-center gap-6 bg-stone-200 p-5'>
          <Image
            src='https://github.com/Toy2-Team3/sweety/assets/63582234/8fc210ca-0df7-46c1-ab7b-e48c1d0b0553'
            width={680}
            height={680}
            alt='SWEETY 궁합점수 썸네일'
          />
          <p className=' text-xl leading-normal mb:text-sm'>
            회원가입에서 받은 정보를 기반하여 궁합점수 보기 제작하여 채팅에 대한
            부담을 감소시킵니다
          </p>
        </div>
      </div>

      <div className='flex flex-col max-w-[700px]'>
        <div>
          <p className='text-3xl font-bold text-center'>STAYINN</p>
          <p className='text-lg font-bold text-center text-gray-400 '>
            2023.11.17 - 2023.12.15
          </p>
        </div>
        <div className='flex flex-col justify-center items-center gap-6 bg-stone-200 p-5'>
          <Image
            src='https://github.com/HOOOO98/STAYINN/assets/120024673/6280c1c6-352f-4ae8-bcb7-f180c570f304'
            width={680}
            height={680}
            alt='STAYINN 상세 페이지 썸네일'
          />
          <p className=' text-xl leading-normal mb:text-sm'>
            관광공사에서 제공하는 TourAPI를 활용하여 가상 숙박예약 서비스를
            제작했습니다
          </p>
        </div>
        <div className='flex flex-col justify-center items-center gap-6 bg-stone-200 p-5'>
          <Image
            src='https://github.com/HOOOO98/STAYINN/assets/120024673/a23a6d7f-36b1-4f90-8ee0-77d2975140b5'
            width={680}
            height={680}
            alt='STAYINN 마이페이지와 로그인 페이지의 쿠키참조 불가로 발생하는 덜컥임 현상 썸네일'
          />
          <Image
            src='https://github.com/HOOOO98/STAYINN/assets/120024673/90e717b8-00f6-49f0-bab3-345711f78b65'
            width={680}
            height={680}
            alt='STAYINN 덜컥임이 해결된 부드러운 로그인 페이지 이동 썸네일'
          />
          <p className=' text-xl leading-normal mb:text-sm'>
            NEXT SSR 서버에서 직접 쿠키에 접근할 수 없는 이슈로 동적으로 로그인
            화면과 마이페이지 화면을 렌더링하는 과정에 짧은 깜빡임이
            발생했습니다
          </p>
          <p className=' text-xl leading-normal mb:text-sm'>
            ‘next-client-cookies’와 미들웨어를 적용하여 쿠키문제와 깜빡임 현상을
            해결했습니다
          </p>
          <p className=' text-xl leading-normal mb:text-sm'>
            JWT를 쿠키에 저장하고 http-only속성을 부여하여 인증 인가에 보안을
            적용했습니다
          </p>
        </div>
      </div>

      <div className='flex flex-col max-w-[700px]'>
        <div>
          <p className='text-3xl font-bold text-center'>TripVote</p>
          <p className='text-lg font-bold text-center text-gray-400 '>
            2023.12.22 - 진행중
          </p>
        </div>
        <div className='flex flex-col justify-center items-center gap-6 bg-stone-200 p-5'>
          <p className=' text-xl leading-normal mb:text-sm'>
            ...일행과 함께 세우는 여행 일정 서비스
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProjectInfo;
