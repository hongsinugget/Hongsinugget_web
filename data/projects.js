export const projects = [
    {
        id: 'gimjepay',
        category: 'dev',
        title: '김제페이',
        shortDesc: '김제페이:일상회복지원금 사용처를 한눈에!<br> 김제시에서 지원하는 일상회복지원금의 사용처를 한눈에 볼수있게 지도서비스를 제작',
        fullDesc: `
      <h4>프로젝트 개요</h4>
      김제페이의 사용자 경험을 개선하고, 지역 내 사용률을 높이기 위해 직접적인 데이터 수집과 개발을 진행했습니다.<br>
      기존에 김제시에서 가맹점 정보가 체계적으로 정리되지 않아, 실사용자의 니즈를 반영한 개선이 어려운 상황이었습니다.<br><br>

      - 김제시 커뮤니티 다수 회복 지원금 사용처를 물어보는 유저 voc를 듣고 기획<br>
      - 빠르게 배포하는만큼 최소한의 기능으로 제작 (검색,사용가능확인,제보,실시간위치확인)<br>
      - 트위터 홍보 약 1.6만 조회수 증가<br><br>

      <h4>해결한 문제 및 개선점</h4>
      가맹점 정보 부족 → 직접 데이터 수집 및 정리<br><br>
      - 온라인에서 김제페이 관련 커뮤니티를 직접 분석하여 사용자 후기와 문제점을 정리<br>
      - 김제 지역 내 가맹점을 직접 방문하여 결제 가능 여부를 수기로 기록, 데이터화<br>
      - 사용자 제보 시스템을 운영하여 실제 이용자의 경험을 반영한 데이터 수집
    `,
        tags: ['Figma', 'Html/css', 'Nodejs', 'jquery', 'javascript', 'vercel', 'Notion', 'kakao/naver API'],
        thumbnail: '/images/gimjepay/gimje_1.png',
        images: [
            '/images/gimjepay/gimje_2.png',
            '/images/gimjepay/gimje_3.png',
            '/images/gimjepay/gimje_map.png'
        ]
    },
    {
        id: 'jipyeong',
        category: 'dev',
        title: '지평선 전생테스트',
        shortDesc: '200년 전으로 돌아가게 된 당신...<br> 5개의 질문을 통해 당신의 전생 모습을 찾아보세요!',
        fullDesc: `
      <h4>프로젝트 개요</h4>
      지평선 축제를 자연스럽게 홍보하고 사용자 참여를 유도하기 위해 전생 테스트 웹 서비스를 기획·디자인·개발했습니다.<br>
      축제 D-day가 다가오는 상황에서 빠른 배포, 가벼운 UX, 자연스러운 확산성을 목표로 진행했습니다.<br><br>

      <h4>김제시 공식 인스타그램 콘텐츠를 기반으로 아이디어 발굴</h4>
      - ‘200년 전으로 돌아간다’는 콘셉트의 테스트 제작 (MBTI → 지역 전통 체험 → 전생 테스트)<br>
      - 사용자 테스트 결과를 반영한 커스텀 캐릭터 일러스트 제작<br>
      - 핵심 기능만 최소화하여 빠른 배포 (결과 페이지, 소셜 공유용 OG 이미지)<br>
      - 바이브코딩 활용(GPT → Claude 4.5)으로 개발 속도를 3배 단축<br><br>

      <h4>결과</h4>
      축제 아이덴티티와 연계된 인터랙티브 콘텐츠 완성
    `,
        tags: ['Figma', 'Html/CSS', 'JavaScript', 'Vercel', 'Notion', 'Claude'],
        thumbnail: '/images/jipyeong/jipyeong_main.png',
        images: [
            '/images/jipyeong/jipyeong_main.png',
            '/images/jipyeong/jipyeong_2.png',
            '/images/jipyeong/jipyeong_3.png',
            '/images/jipyeong/jipyeong_4.png'
        ]
    },
    {
        id: 'nullz',
        category: 'design',
        title: 'NULLZ 크리에이터',
        shortDesc: 'Nullz 핫크리에이터 등극 & 널즈(Nulz) 파트너 크리에이터 활동',
        fullDesc: `
      <h4>프로젝트 개요</h4>
      처음에는 널즈에서 일반 판매자로 활동하며 디자인 리소스를 제작·판매했지만, 이후 널즈의 파트너 크리에이터로 선정되어 월별 수익을 받으며 프리랜서로 활동했습니다.<br>
      단순한 디자인 판매가 아니라, 양질의 디자인 리소스를 제공하는 것을 목표로 하여 매월 50개의 새로운 디자인을 제작하며 크리에이터 활동을 지속했습니다.<br><br>

      <h4>결과물</h4>
      - 기존 플랫폼의 디자인 리소스의 품질 향상 → 차별화된 디자인 제공<br>
      - 기존 판매 데이터를 분석하여 수요가 높은 디자인 유형을 반영<br>
      - 널즈에서 활동하는 다양한 크리에이터들의 작업물을 참고하며 디자인 감각을 확장<br>
      - 회사 경험을 통해 더욱 능숙한 디자인 작업 프로세스 구축<br>
      - 콘텐츠 노출 극대화 → 널즈 공식 홍보 채널 활용<br>
      - 널즈에서 직접 디자인을 선정하여 인스타그램 홍보 진행<br>
      - 지속적인 업로드를 통해 총 149개의 디자인 리소스를 등록, 그중 144개 판매
    `,
        tags: ['Illustrator', 'Figma'],
        thumbnail: '/images/nullz/nullz_main.png',
        images: [
            '/images/nullz/nullz_main.png',
            '/images/nullz/nullz_1.png',
            '/images/nullz/nullz_2.png',
            '/images/nullz/nullz_3.png'
        ]
    },
    {
        id: 'marketer',
        category: 'data',
        title: '청년마케터 서포터즈',
        shortDesc: '청년마케터 서포터즈 대외활동',
        fullDesc: `
      <h4>프로젝트 개요</h4>
      처음에는 청년마케터 서포터즈 1기에 합격하여 발대식 및 정기 모임에 참여하며,<br>
      이후 청년마케터 서포터즈의 주요 멤버로 활동했습니다.<br>
      서포터즈 기간에는 오프라인 월간 모임 홍보 및 후기 작성을 기반으로 콘텐츠 홍보 서포트 업무를 수행했고,<br>
      이후 커뮤니티 내부에서도 지속적으로 생생한 후기 공유 및 홍보 역할을 담당했습니다.<br><br>
      - 2023년 3월, 청년마케터 서포터즈 1기 합격 및 발대식 참여<br>
      - 서포터즈 활동 당시 매달 월간 모임 후기 작성 및 홍보 콘텐츠 제작<br>
      - 이후 커뮤니티 멤버로 연속 참여하며 콘텐츠 홍보 및 후기 기여 지속<br><br>

      <h4>서포터즈 내 활동</h4>
      - 단순 후기 작성이 아닌, 월간모임 마케팅 주제 중심 강의 후기와 인사이트 정리<br>
      - 강연 후기를 통해 모임의 가치와 배움을 구체적으로 공유하여 활동 홍보<br>
      - 인스타·블로그를 통해 모임 소개, 주요 강사 소개, 강연 내용 요약 등을 콘텐츠화<br>
      - 후기 게시글로 행사 참가자 유치 및 브랜드 이미지 제고에 도움<br><br>

      <h4>성과</h4>
      - 정식 1기 서포터즈 활동 후기 작성 → 강연 요약 콘텐츠와 독서 콘텐츠 가치 제공
      - 매월 후기 포스팅과 공유 및 조회수를 통해 커뮤니티 인지도 향상
      - 후기 콘텐츠를 기반으로 청년마케터 공식 홍보 채널 유입에 기여
      - GA 합격 및 마케팅 인턴 합격
    `,
        tags: ['supporters', 'marketing'],
        thumbnail: '/images/marketer/marketer_main.png',
        images: [
            '/images/marketer/marketer_main.png',
            '/images/marketer/marketer_1.png',
            '/images/marketer/marketer_2.png',
            '/images/marketer/marketer_3.png'
        ]
    },
    {
        id: 'silentmonster',
        category: 'design',
        title: 'SilentMonster',
        shortDesc: 'SilentMonster 창업',
        fullDesc: `
      <h4>프로젝트 개요</h4><br>
      2024년 5월, 서울 강남구에 사업장을 두고 디자인 스튜디오 ‘사일런트 몬스터’를 창업했습니다.<br>
      사일런트 몬스터는 ‘조용하지만 강력한 존재’라는 의미를 담아,<br>
      남들과 차별화된 디자인과 브랜드 아이덴티티를 구축하는 것을 목표로 운영되었습니다.<br><br>

      프리랜서로 활동하며 셀프 브랜딩을 진행했으며, 인스타그램을 활용한 홍보, 널즈(Nulz) 및 외주 작업을 중심으로 수익을 창출했습니다.<br><br>

      <h4>결과물</h4><br>
      브랜드 아이덴티티 구축 → 차별화된 디자인 컨셉 정립<br>

      - 단순한 디자인 서비스가 아닌, 조용하지만 강력한 브랜드 메시지를 담은 스튜디오 운영<br>
      - ‘우리는 조용하지만, 악동 몬스터들’이라는 슬로건을 기반으로 브랜드 차별화<br>
      - 회사 경험을 통해 더욱 능숙한 디자인 작업 프로세스 구축<br>
      - 널즈(Nulz) 및 외주 프로젝트 중심으로 디자인 작업 진행<br>
      - 인스타그램을 활용한 셀프 브랜딩 및 고객 유입 증가<br><br>

      <h4>프리랜서 경험을 통한 차기 단계 모색 → IT 분야로 개인서비스 확장 준비</h4><br>

      - 그래픽 디자인 중심의 작업에서 IT 서비스로 방향 설정<br>
      - 단순한 디자인 스튜디오를 넘어 새로운 팀을 구성할 계획
    `,
        tags: ['Illustrator', 'Figma', 'Imweb'],
        thumbnail: '/images/silentmonster/silentmonster_main.png',
        images: [
            '/images/silentmonster/silentmonster_main.png',
            '/images/silentmonster/silentmonster_1.png',
            '/images/silentmonster/silentmonster_2.png',
            '/images/silentmonster/silentmonster_3.png'
        ]
    },
    {
        id: 'designer',
        category: 'design',
        title: '디자인작업물',
        shortDesc: '프리랜서 디자인 작업물',
        fullDesc: `
      <h4>프리랜서 디자이너 활동</h4>
      프리랜서로 디자인을 활동하면서 작업한 작업물입니다.<br><br>

      <h4>각종 담당 작업프로젝트</h4><br>
      - 폴카닷 디자인 제작 현장 작업물<br>
      - 이드서울 메인 키비주얼 및 전체적인 디자인 담당<br>
      - gvcn 디자인 참여<br>
      - Devstory 이벤트 홍보물 포스터 제작 (개인제작)등
    `,
        tags: ['Illustrator', 'Figma'],
        thumbnail: '/images/designer/designer_main.png',
        images: [
            '/images/designer/designer_main.png',
            '/images/designer/designer_1.png',
            '/images/designer/designer_2.png',
            '/images/designer/designer_3.png',
            '/images/designer/designer_4.png'
        ]
    }
];
