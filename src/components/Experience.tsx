'use client'

export default function Experience() {  const experiences = [
    {
      year: "2021.02 - 현재",
      title: "개발2팀 과장",
      company: "폴리인스퍼레이션",
      description: "교육 플랫폼 및 학습 솔루션 API 개발, 모바일 앱 백엔드 시스템 구축",
      technologies: ["Java", "Spring Boot", "API", "MSSQL", "PostgreSQL", "JSP", "JavaScript", "Velocity", "ExtJS"],
      achievements: [
        "NAC 학부모 App API 및 결제 시스템 개발",
        "AI Vocab App Wordit API 개발",
        "CANB, IDN 학습 플랫폼 (Big 5 OCEAN) 개발",
        "학습지원솔루션 Alex 시리즈 (CANB, Vietnam, Indonesia) API 개발",
        "ExtJs 기반 Admin 시스템 개발",
        "13개 프로젝트 서비스 관리 및 유지보수"
      ]
    },
    {
      year: "2017.10 - 2020.11",
      title: "백엔드 개발자",
      company: "제이넷",
      description: "공공기관 웹사이트 개발, 도서관 시스템 구축, RFID 시스템 유지보수",
      technologies: ["Java", "JSP", "JavaScript", "Oracle", "MySQL", "대출반납관리"],
      achievements: [
        "경기도사이버도서관 개발 및 유지보수",
        "성남시 반응형 웹 개편 및 사이트 통합",
        "남양주시 도서관 홈페이지 개편",
        "성북구립도서관 CMS 업그레이드",
        "종량제봉투판매소 온라인 결제 시스템 구축",
        "대출/반납 시스템 개발",
        "경기도교육청 대표 홈페이지 유지관리"
      ]
    },
    {
      year: "2016.07 - 2017.09",
      title: "응용SW개발자",
      company: "포씨소프트",
      description: "교육기관 통합시스템 개발, 사이버 교육 플랫폼 구축 및 유지보수",
      technologies: ["Java", "JSP", "JavaScript", "Oracle", "MySQL", "Spring"],
      achievements: [
        "교육통합시스템 고도화 2단계 사업 참여",
        "도로교통공사 사이버교통학교 유지보수",
        "전기공사인력개발원 원격훈련교육센터 개발",
        "경기대학교 인재개발처 시스템 구축",
        "사서교육시스템 고도화 개발",
        "교육관리시스템 기능개선",
        "첨단교육혁신 지원시스템 EDELWEIS 개발"
      ]
    },
    {
      year: "2017.01 - 2017.06",
      title: "교육생",
      company: "쌍용교육센터",
      description: "Java 기반 웹 개발 교육과정 이수, 실무 프로젝트 경험",
      technologies: ["Java", "JSP", "Spring", "Oracle", "JavaScript", "HTML/CSS"],
      achievements: [
        "Java 웹 개발 과정 수료",
        "팀 프로젝트 리더 경험",
        "MVC 패턴 기반 웹 애플리케이션 개발",
        "데이터베이스 설계 및 관리"
      ]
    }
  ]

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            경험 & 이력
          </h2>          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            2017년부터 현재까지 8년 7개월간 교육 플랫폼과 공공기관 웹 서비스 개발 경험을 쌓아왔습니다.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-300 dark:bg-gray-600"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-800"></div>

                {/* Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                    <div className={`flex items-center mb-2 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                      <span className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900 px-3 py-1 rounded-full">
                        {exp.year}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {exp.title}
                    </h3>
                    
                    <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">
                      {exp.company}
                    </h4>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {exp.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-4">
                      <h5 className="font-medium text-gray-900 dark:text-white mb-2">주요 기술:</h5>
                      <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h5 className="font-medium text-gray-900 dark:text-white mb-2">주요 성과:</h5>
                      <ul className={`space-y-1 text-sm text-gray-600 dark:text-gray-300 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-center">
                            {index % 2 === 0 ? (
                              <>
                                <span>{achievement}</span>
                                <svg className="w-4 h-4 text-green-500 ml-2" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                              </>
                            ) : (
                              <>
                                <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span>{achievement}</span>
                              </>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">7+</div>
            <div className="text-gray-600 dark:text-gray-300">년 경력</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">30+</div>
            <div className="text-gray-600 dark:text-gray-300">완료 프로젝트</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">13+</div>
            <div className="text-gray-600 dark:text-gray-300">관리 서비스</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-600 dark:text-red-400 mb-2">교육</div>
            <div className="text-gray-600 dark:text-gray-300">전문 분야</div>
          </div>
        </div>
      </div>
    </section>
  )
}
