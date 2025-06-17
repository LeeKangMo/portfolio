export default function Skills() {  const skillCategories = [
    {
      title: "Backend",
      skills: [
        { name: "Java", level: 95, color: "bg-red-600" },
        { name: "RestAPI", level: 95, color: "bg-green-600" },
        { name: "MSSQL", level: 90, color: "bg-blue-700" },
        { name: "JavaScript", level: 85, color: "bg-yellow-500" },
        { name: "MyBatis", level: 85, color: "bg-purple-600" },
      ]
    },    {
      title: "Frontend",
      skills: [
        { name: "HTML/CSS", level: 80, color: "bg-orange-500" },
        { name: "JavaScript", level: 85, color: "bg-yellow-500" },
        { name: "JSP", level: 80, color: "bg-red-400" },
        { name: "ExtJs", level: 80, color: "bg-gray-600" },
        { name: "jQuery", level: 75, color: "bg-blue-400" },
      ]
    },
    {
      title: "Tools & Infrastructure",
      skills: [
        { name: "Git", level: 90, color: "bg-orange-500" },
        { name: "Linux", level: 85, color: "bg-gray-700" },
        { name: "AWS", level: 75, color: "bg-orange-400" },
        { name: "Apache", level: 80, color: "bg-red-500" },
        { name: "Tomcat", level: 85, color: "bg-yellow-600" },
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            8년 10개월간 축적된 백엔드 개발 경험과 다양한 기술 스택으로 안정적인 시스템을 구축합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className={`${skill.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white text-center mb-8">
            기술 스택별 경험
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Frontend Development
              </h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• React Hooks 및 Context API를 활용한 상태 관리</li>
                <li>• Next.js SSR/SSG를 통한 SEO 최적화</li>
                <li>• 반응형 웹 디자인 및 모바일 퍼스트 접근</li>
                <li>• Webpack, Vite 등 번들러 설정 및 최적화</li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Backend Development
              </h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• RESTful API 설계 및 구현</li>
                <li>• 데이터베이스 스키마 설계 및 쿼리 최적화</li>
                <li>• JWT 인증 및 보안 구현</li>
                <li>• 마이크로서비스 아키텍처 경험</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
