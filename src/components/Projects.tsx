export default function Projects() {
  const projects = [    {
      id: 1,
      title: "NAC 학부모 App",
      description: "NAC 학부모를 위한 모바일 애플리케이션 백엔드 개발. API, WebView, 결제 시스템을 구현하여 학부모와 학습자 간의 소통을 원활하게 지원합니다.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      technologies: ["Java", "RestAPI", "MSSQL", "결제시스템", "WebView"],
      status: "운영중",
      period: "2021년 ~ 현재",
      features: ["학부모-학습자 소통", "결제 시스템", "실시간 학습 현황", "모바일 최적화"]
    },    {
      id: 2,
      title: "CANB & IDN 학습 플랫폼",
      description: "Big 5 OCEAN 기반의 학습 플랫폼 개발. 개인 성향 분석을 통한 맞춤형 학습 서비스를 제공하는 백엔드 시스템을 구축했습니다.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      technologies: ["Java", "PostgreSQL", "RestAPI", "MyBatis", "Big5 OCEAN"],
      status: "운영중",
      period: "2022년 ~ 현재",
      features: ["성향 분석", "맞춤형 학습", "학습 데이터 분석", "다국가 지원"]
    },    {
      id: 3,
      title: "AI Vocab App - Wordit",
      description: "AI 기반 어휘 학습 애플리케이션의 백엔드 API 개발. 사용자 학습 패턴을 분석하여 효과적인 어휘 학습 경험을 제공합니다.",
      image: "https://images.unsplash.com/photo-1485796826113-174aa68fd81b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      technologies: ["Java", "RestAPI", "AI Integration", "PostgreSQL", "MyBatis"],
      status: "운영중",
      period: "2023년 ~ 현재",
      features: ["AI 어휘 추천", "학습 패턴 분석", "진도 관리", "개인화 학습"]
    },    {
      id: 4,
      title: "학습지원솔루션 Alex 시리즈",
      description: "CANB Alex, Vietnam Alex, Indonesia Alex 등 다국가 학습 지원 솔루션 개발. API 및 ExtJs 기반 관리자 시스템을 구축했습니다.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      technologies: ["Java", "ExtJs", "RestAPI", "MSSQL", "다국가 지원"],
      status: "운영중",
      period: "2021년 ~ 현재",
      features: ["다국가 서비스", "관리자 대시보드", "학습 콘텐츠 관리", "실시간 모니터링"]
    },    {
      id: 5,
      title: "도서관 통합 관리 시스템",
      description: "경기도사이버도서관, 성남시도서관 등 다수의 도서관 시스템 개발 및 유지보수. RFID 시스템과 연동된 통합 도서관 관리 솔루션입니다.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      technologies: ["Java", "Oracle", "대출반납관리", "CMS", "반응형 웹"],
      status: "완료",
      period: "2017년 ~ 2020년",
      features: ["대출/반납 관리", "도서 관리", "홈페이지 관리", "통계 및 분석"]
    },    {
      id: 6,
      title: "교육통합시스템",
      description: "교육기관을 위한 통합 관리 시스템 개발. 사서교육시스템, 교육관리시스템 등 다양한 교육 플랫폼의 고도화 작업을 수행했습니다.",
      image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      technologies: ["Java", "Oracle", "MyBatis", "교육시스템", "웹개발"],
      status: "완료",
      period: "2016년 ~ 2017년",
      features: ["교육 과정 관리", "수강생 관리", "평가 시스템", "리포팅"]
    }
  ]

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            주요 프로젝트
          </h2>          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            8년 7개월간 다양한 도메인에서 진행한 주요 프로젝트들입니다. 백엔드 API 개발과 시스템 구축을 중심으로 한 실무 경험을 소개합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">              <div className="relative h-48 bg-gray-200 dark:bg-gray-700">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    주요 기능:
                  </h4>
                  <ul className="text-xs text-gray-600 dark:text-gray-300 space-y-1">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-1 h-1 bg-blue-600 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === '운영중' 
                        ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {project.period}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>        <div className="text-center mt-12">
          <div className="inline-flex items-center px-6 py-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <svg className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-blue-600 dark:text-blue-400 font-medium">
              총 30+ 프로젝트 완료 • 8년 7개월 경력
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
