export interface GuideSection {
  title: string;
  content: Array<{
    subtitle: string;
    text: string;
  }>;
}

export interface PromoCard {
  icon: string;
  title: string;
  description: string;
  buttonText: string;
  href: string;
}

export interface GuideContent {
  id: string;
  stepNumber: number;
  step: string;
  title: string;
  imageUrl: string;
  intro: string;
  sections: GuideSection[];
  tips: string[];
  warnings: string[];
  promo?: PromoCard;
}

export const GUIDE_CONTENTS: Record<string, GuideContent> = {
  '1': {
    id: '1',
    stepNumber: 1,
    step: 'STEP 1',
    title: '워킹홀리데이 준비 시작',
    imageUrl: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600',
    intro:
      '워킹홀리데이는 인생에서 한 번뿐인 특별한 경험입니다. 출발 전 자격 요건을 확인하고, 충분한 예산을 준비하며, 여권 유효기간을 체크하는 것이 첫 단계입니다.',
    sections: [
      {
        title: '자격 요건 확인하기',
        content: [
          {
            subtitle: '📅 나이 제한',
            text: '만 18세~30세 이하여야 합니다. 일부 국가는 만 35세까지 가능하니 확인이 필요합니다.',
          },
          {
            subtitle: '🛂 비자 발급 이력',
            text: '해당 국가의 워킹홀리데이 비자를 이전에 받은 적이 없어야 합니다. 평생 1회만 가능합니다.',
          },
          {
            subtitle: '💰 자금 증명',
            text: '호주의 경우 최소 AUD $5,000 이상의 잔고 증명이 필요합니다. 약 500만원 정도 준비하세요.',
          },
        ],
      },
      {
        title: '예산 계획 세우기',
        content: [
          {
            subtitle: '✈️ 항공권',
            text: '편도 기준 60~120만원 정도 예상됩니다. 성수기를 피하면 더 저렴하게 구매할 수 있습니다.',
          },
          {
            subtitle: '🏠 초기 숙박비',
            text: '1~2주 임시 숙소 비용으로 30~60만원 정도 필요합니다. 백패커는 하루 3~5만원 수준입니다.',
          },
          {
            subtitle: '💳 생활비',
            text: '일자리를 구하기 전까지 최소 2~3개월 생활비로 200~300만원 정도 준비하는 것이 안전합니다.',
          },
        ],
      },
    ],
    tips: [
      '출발 6개월 전부터 준비를 시작하세요',
      '워홀 커뮤니티(네이버 카페, 페이스북 그룹)에 가입하여 정보를 수집하세요',
      '영어 회화 실력을 미리 준비하면 현지 적응이 훨씬 수월합니다',
      '가족과 충분히 상의하고 동의를 구하는 것이 중요합니다',
    ],
    warnings: [
      '여권 유효기간이 최소 6개월 이상 남아있어야 합니다',
      '예산이 부족하면 현지에서 어려움을 겪을 수 있으니 충분히 준비하세요',
      '워킹홀리데이 비자는 평생 1회만 발급 가능합니다',
    ],
  },
  '2': {
    id: '2',
    stepNumber: 2,
    step: 'STEP 2',
    title: '워홀 비자 신청',
    imageUrl: 'https://images.unsplash.com/photo-1554224311-beee2f770c4f?w=600',
    intro:
      '호주 워킹홀리데이 비자(subclass 417)는 온라인으로 신청합니다. ImmiAccount를 생성하고 필요한 서류를 준비한 후, 약 $635 AUD의 수수료를 결제하면 평균 2~4주 내에 승인됩니다.',
    sections: [
      {
        title: 'ImmiAccount 생성하기',
        content: [
          {
            subtitle: '🌐 호주 이민성 웹사이트',
            text: 'immi.homeaffairs.gov.au에 접속하여 ImmiAccount를 생성합니다. 이메일 인증이 필요합니다.',
          },
          {
            subtitle: '📝 계정 정보 입력',
            text: '개인정보, 여권 정보, 연락처 등을 정확하게 입력합니다. 나중에 수정이 어려우니 신중하게 작성하세요.',
          },
        ],
      },
      {
        title: '필요 서류 준비',
        content: [
          {
            subtitle: '🛂 여권 사본',
            text: '여권 정보면을 스캔하거나 선명하게 사진 촬영합니다. 파일 크기는 5MB 이하로 준비하세요.',
          },
          {
            subtitle: '📸 증명사진',
            text: '여권용 사진 규격(35mm x 45mm)에 맞는 사진을 준비합니다. 최근 6개월 이내 촬영한 사진이어야 합니다.',
          },
          {
            subtitle: '💰 잔고 증명서',
            text: '은행에서 영문 잔고 증명서를 발급받습니다. 최소 AUD $5,000 이상이 필요합니다.',
          },
        ],
      },
      {
        title: '비자 신청 및 승인',
        content: [
          {
            subtitle: '💳 수수료 결제',
            text: '비자 신청 수수료 약 $635 AUD를 신용카드로 결제합니다. 환율에 따라 약 60만원 정도입니다.',
          },
          {
            subtitle: '⏰ 승인 대기',
            text: '평균 2~4주 소요되며, 빠르면 24시간 내에 승인되기도 합니다. 이메일을 자주 확인하세요.',
          },
          {
            subtitle: '🏥 건강검진',
            text: '필요시 지정 병원에서 건강검진을 받아야 합니다. 이민성에서 요청하면 진행하세요.',
          },
        ],
      },
    ],
    tips: [
      '비자 신청은 출발 3~6개월 전에 하는 것이 좋습니다',
      '승인 후 1년 내에 입국해야 하며, 입국일로부터 1년간 체류 가능합니다',
      '비자 승인 레터는 PDF로 저장하고 출력본도 준비하세요',
      '건강검진은 서울, 부산 등 주요 도시의 지정 병원에서 가능합니다',
    ],
    warnings: [
      '신청서 작성 시 거짓 정보를 입력하면 비자가 거부될 수 있습니다',
      '여권 만료일이 체류 기간보다 길어야 합니다',
      '비자 수수료는 환불되지 않으니 신중하게 신청하세요',
    ],
    promo: {
      icon: '🏥',
      title: '워홀 건강검진 할인',
      description: '지정 병원 건강검진 10% 할인 쿠폰',
      buttonText: '쿠폰 받기',
      href: '#',
    },
  },
  '3': {
    id: '3',
    stepNumber: 3,
    step: 'STEP 3',
    title: '출국 준비',
    imageUrl: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600',
    intro:
      '비자가 승인되면 본격적인 출국 준비를 시작합니다. 항공권 예약, 여행자 보험 가입, 짐싸기 등을 체계적으로 준비하면 현지 적응이 훨씬 수월합니다.',
    sections: [
      {
        title: '항공권 예약하기',
        content: [
          {
            subtitle: '✈️ 편도 vs 왕복',
            text: '편도 항공권을 추천합니다. 귀국 일정이 불확실하고, 왕복권은 변경 수수료가 비쌉니다.',
          },
          {
            subtitle: '💰 저렴하게 구매하는 법',
            text: '스카이스캐너, 구글 플라이트 등에서 가격을 비교하세요. 3개월 전 예약 시 가장 저렴합니다.',
          },
          {
            subtitle: '📅 출발 시기',
            text: '호주는 9~11월(봄), 3~5월(가을)이 날씨가 좋고 일자리도 많습니다.',
          },
        ],
      },
      {
        title: '여행자 보험 가입',
        content: [
          {
            subtitle: '🛡️ 보험 종류',
            text: '워킹홀리데이 전용 보험을 추천합니다. 일반 여행자 보험보다 장기 체류에 적합합니다.',
          },
          {
            subtitle: '💊 보장 범위',
            text: '의료비, 휴대품 손해, 배상 책임 등을 포함하는 상품을 선택하세요. 치과는 별도 가입이 필요합니다.',
          },
          {
            subtitle: '💳 비용',
            text: '6개월 기준 30~50만원 정도이며, 삼성화재, 현대해상 등에서 가입 가능합니다.',
          },
        ],
      },
      {
        title: '짐싸기 및 준비물',
        content: [
          {
            subtitle: '🎒 짐 무게 제한',
            text: '항공사마다 다르지만 보통 위탁 수하물 23kg, 기내 수하물 7kg입니다.',
          },
          {
            subtitle: '📱 전자기기',
            text: '노트북, 휴대폰, 충전기, 멀티탭 등을 준비하세요. 호주는 220V를 사용합니다.',
          },
          {
            subtitle: '👕 의류',
            text: '계절에 맞는 옷을 준비하되, 현지에서 구매하는 것도 좋습니다. 속옷과 양말은 넉넉히 챙기세요.',
          },
        ],
      },
    ],
    tips: [
      'AI 짐싸기 체크리스트를 활용하여 빠뜨리는 물건이 없도록 하세요',
      '중요한 서류는 사본과 디지털 백업을 모두 준비하세요',
      '환전은 공항보다 시중 은행이나 환전소가 더 저렴합니다',
      '국제 운전면허증은 경찰서에서 발급받을 수 있습니다',
    ],
    warnings: [
      '액체류는 100ml 이하로 준비하거나 위탁 수하물에 넣으세요',
      '보조배터리는 반드시 기내 수하물로 가져가야 합니다',
      '호주는 검역이 매우 엄격하니 식품류는 가져가지 마세요',
    ],
    promo: {
      icon: '✈️',
      title: '항공권 예약 할인',
      description: '스카이스캐너 앱 첫 예약 5% 할인',
      buttonText: '할인받기',
      href: '#',
    },
  },
  '4': {
    id: '4',
    stepNumber: 4,
    step: 'STEP 4',
    title: '임시 숙소 예약하기',
    imageUrl: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600',
    intro:
      '호주에 도착해서 바로 쉐어하우스로 들어가는 건 위험해요. 직접 눈으로 집 상태를 확인하기 전까지 머물 임시 숙소(1주~2주)가 필요합니다.',
    sections: [
      {
        title: '어떤 숙소가 좋을까요?',
        content: [
          {
            subtitle: '🎒 백패커 (Backpacker)',
            text: '저렴하고 외국인 친구 사귀기 좋지만, 보안이 취약할 수 있어요. 하루 $30~$50 수준입니다.',
          },
          {
            subtitle: '🏨 한인 민박 / 에어비앤비',
            text: '편안하고 안전하지만 가격이 비쌉니다. 2인 이상이라면 에어비앤비가 합리적일 수 있어요.',
          },
          {
            subtitle: '🏠 호스텔',
            text: 'YHA 같은 체인 호스텔은 시설이 깔끔하고 안전합니다. 가격은 백패커보다 조금 비쌉니다.',
          },
        ],
      },
      {
        title: '예약 플랫폼 활용하기',
        content: [
          {
            subtitle: '📱 Booking.com',
            text: '가장 많이 사용하는 플랫폼입니다. 무료 취소 가능한 숙소를 선택하면 안전합니다.',
          },
          {
            subtitle: '🌍 Hostelworld',
            text: '백패커와 호스텔 전문 플랫폼입니다. 리뷰가 많아 선택하기 좋습니다.',
          },
          {
            subtitle: '🏡 Airbnb',
            text: '개인 숙소를 빌릴 수 있습니다. 2인 이상이면 1인당 비용이 저렴해집니다.',
          },
        ],
      },
      {
        title: '지역별 추천',
        content: [
          {
            subtitle: '🌆 시드니',
            text: 'City, Bondi Beach, Manly 지역이 인기입니다. CBD는 비싸지만 교통이 편리합니다.',
          },
          {
            subtitle: '☕ 멜버른',
            text: 'CBD, St Kilda, Fitzroy 지역을 추천합니다. 멜버른은 카페 문화가 발달했어요.',
          },
          {
            subtitle: '🌴 브리즈번',
            text: 'City, Fortitude Valley 지역이 좋습니다. 날씨가 따뜻하고 생활비가 저렴합니다.',
          },
        ],
      },
    ],
    tips: [
      '최소 1~2주는 예약하세요. 쉐어하우스 구하는 데 시간이 걸립니다',
      '리뷰를 최소 10개 이상 읽고, 빈대(bed bug) 관련 리뷰를 꼭 확인하세요',
      '체크인 시간을 미리 확인하고 늦을 경우 연락하세요',
      'CBD(도심)에 가까울수록 비싸지만 교통비를 절약할 수 있습니다',
    ],
    warnings: [
      '너무 저렴한 숙소는 시설이 열악하거나 보안이 취약할 수 있습니다',
      '보증금 사기를 조심하세요. 정식 플랫폼을 이용하는 것이 안전합니다',
      '환불 정책을 꼭 확인하세요. 무료 취소 가능 여부가 중요합니다',
    ],
    promo: {
      icon: '🏨',
      title: '아고다 워홀러 전용 쿠폰',
      description: '시드니 백패커 예약 시 7% 추가 할인',
      buttonText: '쿠폰받기',
      href: '#',
    },
  },
  '5': {
    id: '5',
    stepNumber: 5,
    step: 'STEP 5',
    title: '입국 및 도착',
    imageUrl: 'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=600',
    intro:
      '드디어 호주에 도착했습니다! 입국 심사를 통과하고, SIM 카드를 구매하며, 교통카드를 발급받는 것이 첫 번째 미션입니다. 차근차근 준비하면 어렵지 않아요.',
    sections: [
      {
        title: '입국 심사 준비',
        content: [
          {
            subtitle: '📝 입국 카드 작성',
            text: '비행기 안에서 입국 카드를 받아 작성합니다. 영어로 작성해야 하며, 거짓 정보는 절대 금지입니다.',
          },
          {
            subtitle: '🛂 입국 심사대',
            text: '여권과 비자 승인 레터를 제시합니다. 간단한 질문(체류 목적, 기간 등)에 답변하세요.',
          },
          {
            subtitle: '🧳 세관 신고',
            text: '식품, 약품 등 신고 대상이 있으면 반드시 신고하세요. 적발 시 벌금이 부과됩니다.',
          },
        ],
      },
      {
        title: 'SIM 카드 구매',
        content: [
          {
            subtitle: '📱 통신사 선택',
            text: 'Optus, Telstra, Vodafone 중 선택합니다. Optus가 가성비가 좋고, Telstra는 커버리지가 넓습니다.',
          },
          {
            subtitle: '💰 요금제',
            text: '한 달 $30~$50 정도의 선불 요금제를 추천합니다. 데이터는 20GB 이상이 적당합니다.',
          },
          {
            subtitle: '🏪 구매 장소',
            text: '공항 내 매장이나 편의점에서 구매 가능합니다. 여권을 지참하세요.',
          },
        ],
      },
      {
        title: '교통카드 발급',
        content: [
          {
            subtitle: '🚇 시드니 - Opal 카드',
            text: '편의점이나 역에서 구매 가능합니다. 최소 $10 충전이 필요하며, 온라인으로 등록하면 편리합니다.',
          },
          {
            subtitle: '🚊 멜버른 - Myki 카드',
            text: '역이나 편의점에서 구매합니다. 카드 비용 $6 + 충전금이 필요합니다.',
          },
          {
            subtitle: '🚌 브리즈번 - Go Card',
            text: '버스, 기차, 페리 모두 사용 가능합니다. 편의점에서 쉽게 구매할 수 있습니다.',
          },
        ],
      },
    ],
    tips: [
      '공항에서 시내까지 대중교통을 이용하면 비용을 절약할 수 있습니다',
      'SIM 카드는 공항보다 시내 매장이 더 저렴할 수 있으니 비교해보세요',
      '교통카드는 온라인 등록하면 분실 시 잔액을 보호받을 수 있습니다',
      '숙소 주소를 미리 메모해두고, 오프라인 지도를 다운로드하세요',
    ],
    warnings: [
      '입국 심사 시 거짓말을 하면 비자가 취소될 수 있습니다',
      '식품류를 신고하지 않으면 최대 $2,664의 벌금이 부과됩니다',
      '공항 택시는 매우 비싸니 대중교통이나 우버를 이용하세요',
    ],
  },
  '6': {
    id: '6',
    stepNumber: 6,
    step: 'STEP 6',
    title: '은행 계좌 개설',
    imageUrl: 'https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?w=600',
    intro:
      '급여를 받고 생활비를 관리하려면 호주 은행 계좌가 필수입니다. 입국 후 6주 이내에 개설하면 간편하게 진행할 수 있습니다.',
    sections: [
      {
        title: '은행 선택하기',
        content: [
          {
            subtitle: '🏦 Commonwealth Bank',
            text: '호주 최대 은행으로 지점이 많고 ATM이 많습니다. 학생 계좌는 수수료가 무료입니다.',
          },
          {
            subtitle: '🏦 NAB (National Australia Bank)',
            text: '워킹홀리데이 메이커에게 인기가 많습니다. 온라인 뱅킹이 편리합니다.',
          },
          {
            subtitle: '🏦 ANZ',
            text: '지점이 많고 서비스가 좋습니다. 학생 계좌 혜택이 있습니다.',
          },
          {
            subtitle: '🏦 Westpac',
            text: '역사가 오래된 은행으로 안정적입니다. 수수료 정책을 확인하세요.',
          },
        ],
      },
      {
        title: '계좌 개설 절차',
        content: [
          {
            subtitle: '📄 필요 서류',
            text: '여권, 비자 승인 레터, 호주 주소 증명(숙소 계약서 또는 은행 편지)이 필요합니다.',
          },
          {
            subtitle: '🏢 은행 방문',
            text: '지점을 방문하거나 온라인으로 신청 가능합니다. 입국 후 6주 이내면 여권만으로 개설 가능합니다.',
          },
          {
            subtitle: '💳 체크카드 발급',
            text: '계좌 개설 후 직불카드를 신청합니다. 우편으로 받으며 보통 1주일 정도 소요됩니다.',
          },
        ],
      },
      {
        title: '온라인 뱅킹 설정',
        content: [
          {
            subtitle: '📱 모바일 앱',
            text: '각 은행의 모바일 앱을 다운로드하고 계정을 등록합니다. 지문 인식을 설정하면 편리합니다.',
          },
          {
            subtitle: '💰 계좌 정보',
            text: 'BSB(은행 코드)와 계좌번호를 확인하세요. 급여 입금 시 고용주에게 제공해야 합니다.',
          },
          {
            subtitle: '🌏 해외 송금',
            text: '한국에서 송금받을 때는 SWIFT 코드가 필요합니다. 은행에 문의하세요.',
          },
        ],
      },
    ],
    tips: [
      '입국 후 6주 이내에 개설하면 절차가 간단합니다',
      '학생 계좌(Student Account)를 신청하면 수수료가 면제됩니다',
      '온라인 뱅킹 비밀번호는 안전하게 보관하세요',
      '소액을 송금하여 계좌가 정상 작동하는지 테스트하세요',
    ],
    warnings: [
      '6주가 지나면 추가 서류(주소 증명 등)가 필요합니다',
      '계좌 유지 수수료가 있는지 확인하세요',
      '피싱 사기를 조심하세요. 은행은 이메일로 비밀번호를 요구하지 않습니다',
    ],
    promo: {
      icon: '🏦',
      title: 'Commonwealth Bank 특별 혜택',
      description: '워홀러 전용 계좌 개설 시 $50 보너스',
      buttonText: '혜택 받기',
      href: '#',
    },
  },
  '7': {
    id: '7',
    stepNumber: 7,
    step: 'STEP 7',
    title: 'TFN 신청',
    imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600',
    intro:
      'TFN(Tax File Number)은 호주에서 일하기 위해 반드시 필요한 세금 번호입니다. 온라인으로 무료로 신청할 수 있으며, 승인까지 최대 28일이 걸립니다.',
    sections: [
      {
        title: 'TFN이란?',
        content: [
          {
            subtitle: '🔢 세금 번호',
            text: 'Tax File Number의 약자로, 한국의 주민등록번호와 비슷한 개념입니다. 급여 수령 시 필수입니다.',
          },
          {
            subtitle: '💼 왜 필요한가요?',
            text: 'TFN이 없으면 급여의 최대 47%를 세금으로 내야 합니다. TFN이 있으면 정상 세율(15~19%)이 적용됩니다.',
          },
          {
            subtitle: '🆓 신청 비용',
            text: 'TFN 신청은 완전 무료입니다. 수수료를 요구하는 곳은 사기이니 주의하세요.',
          },
        ],
      },
      {
        title: '온라인 신청 방법',
        content: [
          {
            subtitle: '🌐 ATO 웹사이트',
            text: 'Australian Taxation Office (ato.gov.au)에 접속하여 "Apply for a TFN"을 클릭합니다.',
          },
          {
            subtitle: '📝 신청서 작성',
            text: '개인정보, 여권 정보, 비자 정보, 호주 주소를 입력합니다. 모든 정보는 정확해야 합니다.',
          },
          {
            subtitle: '✉️ 승인 대기',
            text: '신청 완료 후 확인 이메일을 받습니다. TFN은 28일 이내에 우편 또는 이메일로 발급됩니다.',
          },
        ],
      },
      {
        title: 'TFN 사용하기',
        content: [
          {
            subtitle: '👔 고용주에게 제출',
            text: '일자리를 구한 후 고용주에게 TFN을 제공합니다. TFN Declaration 양식을 작성해야 합니다.',
          },
          {
            subtitle: '🔒 안전하게 보관',
            text: 'TFN은 분실 시 재발급이 어렵습니다. 안전한 곳에 보관하고 타인에게 공유하지 마세요.',
          },
          {
            subtitle: '💰 세금 환급',
            text: '연말에 세금 환급(Tax Return)을 받을 수 있습니다. TFN이 있어야 환급받을 수 있습니다.',
          },
        ],
      },
    ],
    tips: [
      'TFN은 입국 후 바로 신청하세요. 일자리를 구하기 전에 미리 받아두는 것이 좋습니다',
      '신청 시 입력한 주소로 우편이 발송되니 정확한 주소를 입력하세요',
      'TFN은 평생 사용 가능하며, 재입국 시에도 동일한 번호를 사용합니다',
      '온라인 신청이 가장 빠르고 안전합니다',
    ],
    warnings: [
      'TFN 신청 대행 업체는 사기일 가능성이 높습니다. 직접 신청하세요',
      'TFN을 타인에게 알려주면 신원 도용의 위험이 있습니다',
      'TFN 없이 일하면 세금을 많이 내고 환급도 받을 수 없습니다',
    ],
  },
  '8': {
    id: '8',
    stepNumber: 8,
    step: 'STEP 8',
    title: '장기 정착',
    imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600',
    intro:
      '임시 숙소에서 벗어나 쉐어하우스를 구하고, 본격적으로 일자리를 찾을 시간입니다. 이제 진짜 워킹홀리데이 생활이 시작됩니다!',
    sections: [
      {
        title: '쉐어하우스 구하기',
        content: [
          {
            subtitle: '🔍 검색 플랫폼',
            text: 'Flatmates.com.au, Gumtree, 페이스북 그룹 등에서 검색합니다. 사진과 위치를 꼼꼼히 확인하세요.',
          },
          {
            subtitle: '🏠 인스펙션',
            text: '최소 3~5곳을 직접 방문하여 확인합니다. 방 상태, 하우스메이트, 주변 환경을 체크하세요.',
          },
          {
            subtitle: '💰 본드(보증금)',
            text: '보통 2~4주 렌트비를 보증금으로 냅니다. 계약 종료 시 돌려받으니 영수증을 보관하세요.',
          },
          {
            subtitle: '📝 계약서',
            text: '계약서를 꼼꼼히 읽고 서명하세요. 최소 거주 기간, 공과금, 청소 규칙 등을 확인합니다.',
          },
        ],
      },
      {
        title: '일자리 찾기',
        content: [
          {
            subtitle: '📄 영문 이력서',
            text: '호주 형식에 맞게 이력서를 작성합니다. 1~2페이지로 간결하게 작성하세요.',
          },
          {
            subtitle: '🌐 구직 플랫폼',
            text: 'Seek, Indeed, Gumtree에 이력서를 등록합니다. 매일 새로운 공고를 확인하세요.',
          },
          {
            subtitle: '🚶 직접 방문',
            text: '레스토랑, 카페에 직접 이력서를 제출하는 것도 효과적입니다. 점심시간 전후가 좋습니다.',
          },
          {
            subtitle: '🤝 네트워킹',
            text: '워홀러 커뮤니티, 언어 교환 모임 등에서 정보를 얻고 인맥을 쌓으세요.',
          },
        ],
      },
      {
        title: '면접 준비',
        content: [
          {
            subtitle: '💬 자기소개',
            text: '간단한 영어로 자기소개를 준비하세요. 경력, 강점, 지원 동기를 말할 수 있어야 합니다.',
          },
          {
            subtitle: '👔 복장',
            text: '깔끔한 복장으로 면접에 임하세요. 첫인상이 중요합니다.',
          },
          {
            subtitle: '📞 트라이얼',
            text: '많은 곳에서 트라이얼(시범 근무)을 요구합니다. 성실하게 임하면 채용 확률이 높아집니다.',
          },
        ],
      },
    ],
    tips: [
      '쉐어하우스는 CBD에서 멀수록 저렴합니다. 교통비와 비교해보세요',
      '본드는 현금보다 계좌 이체로 지불하고 영수증을 받으세요',
      '일자리는 끈기가 중요합니다. 거절당해도 포기하지 마세요',
      '워홀러 커뮤니티에서 구인 정보를 많이 공유합니다',
    ],
    warnings: [
      '본드를 현금으로 주고 영수증을 받지 않으면 돌려받기 어렵습니다',
      '불법 체류자가 많은 곳은 피하세요. 임금 착취의 위험이 있습니다',
      '계약서 없이 입주하면 분쟁 시 불리합니다',
      '트라이얼도 급여를 받아야 합니다. 무급 트라이얼은 불법입니다',
    ],
    promo: {
      icon: '💼',
      title: 'Seek 프리미엄 무료 체험',
      description: '구직 플랫폼 Seek 프리미엄 1개월 무료',
      buttonText: '무료 체험',
      href: '#',
    },
  },
};

export function getGuideById(id: string): GuideContent | undefined {
  return GUIDE_CONTENTS[id];
}

export function getAllGuides(): GuideContent[] {
  return Object.values(GUIDE_CONTENTS);
}
