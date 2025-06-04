export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "React와 Node.js로 구축된 풀스택 전자상거래 플랫폼입니다. 결제 시스템, 재고 관리, 사용자 인증 등의 기능을 포함합니다.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      features: ["반응형 디자인", "실시간 재고 관리", "안전한 결제 시스템", "관리자 대시보드"]
    },
    {
      id: 2,
      title: "Task Management App",
      description: "팀 협업을 위한 태스크 관리 애플리케이션입니다. 드래그 앤 드롭, 실시간 업데이트, 알림 기능을 제공합니다.",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "TypeScript", "MongoDB", "Socket.io", "Tailwind"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      features: ["실시간 협업", "칸반 보드", "파일 첨부", "알림 시스템"]
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "날씨 API를 활용한 인터랙티브 날씨 대시보드입니다. 지역별 날씨 정보와 7일 예보를 제공합니다.",
      image: "/api/placeholder/600/400",
      technologies: ["Vue.js", "Express.js", "Chart.js", "OpenWeather API"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      features: ["지역별 검색", "시각적 차트", "7일 예보", "즐겨찾기"]
    },
    {
      id: 4,
      title: "Blog Platform",
      description: "마크다운 에디터를 포함한 개인 블로그 플랫폼입니다. SEO 최적화와 댓글 시스템을 구현했습니다.",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "Prisma", "MySQL", "NextAuth.js"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      features: ["마크다운 에디터", "SEO 최적화", "댓글 시스템", "태그 관리"]
    },
    {
      id: 5,
      title: "Real-time Chat App",
      description: "Socket.io를 사용한 실시간 채팅 애플리케이션입니다. 그룹 채팅, 파일 공유, 온라인 상태 표시 기능을 포함합니다.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Socket.io", "Node.js", "Redis", "AWS S3"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      features: ["실시간 메시징", "파일 공유", "그룹 채팅", "알림"]
    },
    {
      id: 6,
      title: "Portfolio Website",
      description: "이 포트폴리오 웹사이트입니다. Next.js와 Tailwind CSS를 사용하여 반응형으로 제작했습니다.",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      features: ["반응형 디자인", "다크 모드", "애니메이션", "SEO 최적화"]
    }
  ]

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            다양한 기술 스택을 활용하여 구현한 프로젝트들입니다. 각 프로젝트는 실제 문제를 해결하고자 만들어졌습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 bg-gray-200 dark:bg-gray-700">
                {/* Placeholder for project image */}
                <div className="w-full h-full flex items-center justify-center text-gray-500 dark:text-gray-400">
                  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
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
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-blue-600 text-base font-medium rounded-md text-blue-600 bg-transparent hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            모든 프로젝트 보기
          </a>
        </div>
      </div>
    </section>
  )
}
