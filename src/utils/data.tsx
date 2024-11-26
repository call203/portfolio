export const Experiences = [
  {
    title: "프로그라운드",
    subtitle: "프론트엔드 개발자",
    about:
      "러닝 애플리케이션으로 시작해, 최근 Web 3.0 기술과 토큰 경제를 융합하여 새로운 피트니스 플랫폼으로 발전한 스타트업",
    date: "2021.06 - 2022.09  ( 1년 4개월 )",
    jobs: [
      {
        title: "러닝 트래킹 시스템 개발 및 유지보수",
        detail: [
          {
            title:
              "React Native 기반의 iOS/Android 애플리케이션에서 러닝 기록 시스템 구축 중 장시간동안 안정적인 기록하기 위한 챌린지 수행",
            moreDetail: [
              "GPS와 센서데이터를 react-native-geolocation-service 및 react-native-barometer를 이용하여 정확한 위지 및 고도 추적",
              "상태관리에 Redux를 사용하여, 앱 내에서 운동 관련 데이터(거리, 속도, 칼로리 등)를 효율적으로 관리",
              "react-natvie-background-geolocation을 사용하여 백그라운드에서 실시간 위치 추적 및 타이머 기능 최적화"
            ]
          },

          {
            title:
              "실시간 데이터 전송을 위해 WebSocket을 이용하여 실시간 팀 러닝 기능을 구현 및 실시간 응원 기능으로 동기 부여"
          },
          {
            title:
              "GPS, 거리, 속도 및 칼로리 소모량을 실시간으로 계산하고 표시하며 음성 알림을 제공하여 사용자에게 직관적인 피드백 제공 및 안정성 강화"
          }
        ]
      },
      {
        title: "앱 성능 모니터링 및 실시간 업데이트 제공",
        detail: [
          {
            title:
              "Firebase Analytics와 Crashlytics를 사용자 행동을 분석하고, 애플리케이션 오류를 실시간으로 모니터링하여 앱 성능을 지속적으로 향상"
          },
          {
            title:
              "Codepush를 활용하여 핫픽스 배포 및 실시간 앱 업데이트를 제공, 사용자에게 최신 버전의 앱을 빠르게 배포"
          }
        ]
      },
      {
        title: "외부API 통합으로 기능 확장",
        detail: [
          {
            title:
              "Garmin API와 같은 복잡한 인증이 필요한 외부 서비스 API 통합하여 데이터 활용 범위 확장"
          },
          {
            title:
              "기존데이터와 외부데이터를 통합하고, 실시간 맞춤형 데이터를 제공하는 차트와 그래프를 도입하여 운동 증진의 대한 시각적 피드백 제공"
          }
        ]
      },
      {
        title: "블록체인 API통합을 통한 Web3 환경 구축",
        detail: [
          {
            title:
              "블록체인 개발자와 협업하여 Klip 지갑 및 자체 지갑 기능을 앱에 통합하여, 사용자가 코인 관리, NFT 거래 등을 앱 환경 구축",
            moreDetail: []
          },
          {
            title: "NFT 마켓 구현 및 유지보수",
            moreDetail: [
              "NFT의 레벨을 상승시키고, NFT 스왑 및 마켓에서 NFT 판매 기능을 구현하여 Web3 환경 지원",
              "블록체인 개발자와 협업하여 API 연동 로직에 다양한 오류를 사전에 처리하여 안정성을 높임"
            ]
          }
        ]
      }
    ],
    skills: [
      "ReactNative",
      "styled-components",
      "socket.io",
      "Firebase",
      "Redux",
      "Redux-thunk",
      "TypeScript"
    ],
    links: [{ title: "회사 사이트", link: "https://superwalk.io/ko" }]
  },
  {
    title: "포크쇼핑",
    subtitle: "프론트엔드 개발자 (인턴)",
    about:
      "리뷰 커머스 플랫폼으로, 유튜브에서 제품별 리뷰 영상을 모아 최저가에 구매할 수 있는 애플리케이션을 제공하는 스타트업",
    date: "2021.03 - 2021.05 ( 3개월 )",
    jobs: [
      {
        title: "앱 기능 및 관리자 웹 페이지 기능 개발",
        detail: [
          {
            title:
              "React native firebase messaging 서비스를 이용해 서버에서 관리자들이 알림을 제어하고 앱 사용자가 실시간으로 알림을 받을 수 있도록 설정"
          },
          {
            title: "앱 실행 시 알림 및 배너 UI 설계 및 배포하여 화면 전환 유도"
          },
          {
            title: "React를 이용해 관리자 제품 검색 및 등록 시스템의 UI를 개선"
          }
        ]
      }
    ],
    skills: [
      "React",
      "React Native",
      "Firebase",
      "Redux",
      "TypeScript",
      "Flask",
      "Python",
      "Pandas",
      "Numpy"
    ],
    links: [{ title: "회사 사이트", link: "https://home.forc.co.kr/" }]
  },
  {
    title: "룸프렌즈",
    subtitle: "백엔드 개발자 (인턴)",
    about:
      "공간 정보와 더불어 성향/관심사 기반의 프로필을 제공하여 적절한 주거공간과 하우스메이트를 찾는 과정을 돕는 플랫폼",
    date: "2020.08 - 2020.11  ( 4개월 )",
    jobs: [
      {
        title: "관리자 웹 페이지 기능 개발",
        detail: [
          {
            title:
              "Spring Framework와 SpringMVC를 활용하여 RESTAPI 개발 및 서버 유지보수 담당"
          },
          {
            title:
              "사용자 로그인 및 회원가입 폼 오류 수정 및 데이터를 추가하여 가입 서비스 보수 작업"
          },
          {
            title:
              "새로운 방 등록에서 개인 성향 키워드를 포함한 필요한 API를 추가 및 수정"
          }
        ]
      }
    ],
    skills: ["Spring MVC", "Java", "MySQL"],
    links: [{ title: "회사 사이트", link: "https://www.roomfriends.kr/" }]
  }
];

export const Projects = [
  {
    title: "Chat Platform",
    subtitle: "개인 프로젝트",
    about:
      "백엔드 체계를 이해해 보고 싶어 시작한 WebSocket 기반 팔로우 및 사용자 실시간 채팅 시스템",
    date: "2024.06 - 2024.10",
    skills: [
      "TypeScript",
      "React",
      "NestJS",
      "Redux",
      "MySQL",
      "Zustand",
      "React-query",
      "Socket.io",
      "TailwindCSS"
    ],
    jobs: [
      {
        title: "UI/UX 최적화",
        detail: [
          {
            title: "TailwindCSS로 빠르고 효율적인 반응형 디자인 구현"
          },
          {
            title:
              "Framer-motion과 React-toastify를 활용하여 애니메이션 효과와 상태 변화에 따른 알림 메시지 추가"
          }
        ]
      },
      {
        title: "실시간 통신 및 상태 관리",
        detail: [
          {
            title:
              "Socket.io를 활용한 실시간 채팅 및 팔로워 상태 업데이트 기능 구현"
          },
          {
            title:
              "Redux 대신 Zustand를 도입하여 상태변경을 더 간결하게 처리하고 성능 최적화"
          },
          {
            title:
              "React Query를 도입하여 클라이언트 상태와 분리하고 데이터 fetching과 서버 상태 관리 최적화"
          }
        ]
      },

      {
        title: "NestJS 기반 API 설계 및 구현",
        detail: [
          {
            title:
              "NestJS로 백엔드 API 설계 및 구현해 모둘화된 아키첵처로 확장성과 유지보수성 극대화"
          },
          { title: "TypeORM을 사용해서 MySQL 데이터베이스 관리" },
          {
            title:
              "express-session과 bcrypt를 사용해서 사용자 인증(Authentication) 시스템 구축"
          }
        ]
      }
    ],
    links: [
      {
        title: "프로젝트 설명",
        link: "https://jelly-rain-253.notion.site/Chat-Platform-135294064dcc8034abf5ed17af27f3e6"
      },
      {
        title: "Zustand와 React-Query의 대한 블로그",
        link: "https://medium.com/@freeyeon96/zustand-react-query-new-state-management-7aad6090af56"
      }
    ]
  },
  {
    title: "Local Service Provider Matching Platform",
    subtitle: "팀 프로젝트 - Front1명 백1 데브옵스1명",
    about:
      "사용자가 필요한 기술자를 직접 찾을 수 있도록 도와주는 생활 서비스 매칭 플랫폼",
    date: "2023.09 - 2023.12",
    jobs: [
      {
        title:
          "GDPR (유럽연합 데이터 보호 규정)을 고려한 Cookie 및 Session 관리",
        detail: [
          {
            title:
              "Middleware를 통해 쿠키와 세션 검사를 수행하여 세션 유지되는 동안 로그인 상태를 지속적으로 관리"
          },
          {
            title:
              "SSR(서버 사이드 렌더링)에서 인증 토큰 검증을 통해 중요한 데이터를 안전하게 보호하고, 빠르게 인증을 검증하여 성능 최적화"
          }
        ]
      },
      {
        title: "UI/UX 설계 및 반응형 웹 개발 리드",
        detail: [
          {
            title:
              "TailwindCSS를 활용해 반응형 웹 디자인으로 빠르게 효율적으로 구현"
          },
          {
            title:
              "Formik과 ChakraUI를 사용하여 폼 관리와 UI요소를 효율적으로 구현하고, 코드 간결화 및 유지보수성 강화"
          }
        ]
      },
      {
        title: "CI/CD 파이프라인 구축 및 프로젝트 관리 ",
        detail: [
          {
            title:
              "GitHub Actions를 활용해 자동 빌드 및 테스트 프로세스를 설정하고, Docker를 사용해 모든 팀원이 동일한 개발 환경을 구축하도록 지원"
          },
          {
            title:
              "Git Kanban 보드를 활용해 프로젝트 진행 상황을 체계적으로 관리하고, 주간 스프린트를 계획 및 실행"
          }
        ]
      }
    ],
    skills: [
      "NextJS",
      "NextJS",
      "TypeScript",
      "Prisma",
      "Reudx",
      "Docker",
      "ChakraUI",
      "TailwindCSS",
      "Git Action",
      "MySQL"
    ],
    links: [
      {
        title: "프로젝트 설명",
        link: "https://jelly-rain-253.notion.site/Local-Service-Provider-Connection-Platform-134294064dcc80f39497df7393a2ba4b?pvs=74"
      },
      {
        title: "Cookie, Sessions and JWT의 대한 블로그",
        link: "https://medium.com/@freeyeon96/cookies-sessions-and-jwt-04a59cd62709"
      }
    ]
  },
  {
    title: "Investigate JavaScript code smells using SonarQube",
    subtitle: "석사논문",
    about:
      "SonarQube를 활용해 JavaScript 애플리케이션의 Code smell들을 분석하고, 이들의 결함 발생 가능성 연구",
    date: "2024.06 - 2024.09",
    jobs: [
      {
        title: "주요 방법론",
        detail: [
          {
            title:
              "가장 유명한 코드분석 툴 SonarQube를 이용하여 21개의 가장 유명한 오픈소스 JavaScript 프로젝트에서 발생한 코드스멜을 추출"
          },
          {
            title:
              "Logistic Regression과 Recursive Feature Elimination(RFE) 기법을 사용하여 Code smell의 중요도를 평가"
          },
          {
            title:
              "Kaplan-Meier 모델과 Cox 비례 위험 모델을 활용해 코드 스멜이 결함 발생 가능성에 미치는 영향 분석"
          }
        ]
      },
      {
        title: "주요 발견 사항",
        detail: [
          {
            title:
              "16,122개의 커밋에서 총 199개 코드 스멜을 식별, 그 중 결함 발생 가능성이 높은 5개의 SonarQube code smell 추출"
          },
          {
            title:
              "21개 프로젝트 중 18개는 SonarQube coe smell이 결함 발생 가능성에 부정적인 영향을 미쳤음"
          }
        ]
      }
    ],
    skills: ["JavaScript", "Python", "SonarQube", "Pandas", "Sklearn"],
    links: [
      {
        title: "논문",
        link: "https://drive.google.com/file/d/1pc-03rWQrBK4EzLBxWBrj6zXlpQTAxCa/view?usp=sharing"
      }
    ]
  }
];

export const Skills = [
  {
    title: "Main",
    skills: [
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "React",
      "React native",
      "Next.js"
    ]
  },
  {
    title: "System/Tool",
    skills: ["Linux", "Git", "Jira", "Slack", "Firebase", "Figma"]
  },
  {
    title: "Once I used",
    skills: [
      "MySQL",
      "Pyton",
      "Java",
      "C",
      "Flutter",
      "Presma",
      "Nest.js",
      "NodeJs",
      "Spring"
    ]
  }
];

export const Educations = [
  {
    title: "Technological University Dublin",
    subtitle: "석사",
    date: "2023.09 - 2024.10     아일랜드 더블린",
    about: "Computer science (Advanced Software Development)"
  },
  {
    title: "강릉원주대학교",
    subtitle: "학사",
    date: "2017.03- 2020.02     강원도 원주",
    about: "컴퓨터공학과 - 학점 4.06 "
  }
];
export const Certificates = [
  {
    title: "정보처리기사",
    subtitle: "한국산업인력공단",
    date: "2020.11"
  }
];

export const Awards = [
  {
    title: "교내 코딩 대회 장려상",
    subtitle: "강릉원주대학교",
    date: "2019.12",
    about:
      "1학년부터 4학년까지 다양한 학년 학생들과 함께 C언어 알고리즘 대회에 참여하여 장려상을 수상"
  },
  {
    title: "영남대 심화창의 융합양성 캠프 동상",
    subtitle: "영남대학교",
    date: "2018.09",
    about:
      "2박 3일 동안 Design Thinking과 창의적 문제해결 기법 강연을 듣고, 팀별 아이디어 도출 및 프로토타입을 제작하여 동상을 수상"
  }
];
