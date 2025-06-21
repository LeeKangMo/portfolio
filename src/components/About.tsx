export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            8년 7개월 경력의 백엔드/서버 개발자로서 API 개발과 웹 서비스 구축을 전문으로 합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              백엔드 개발자로서의 여정
            </h3>            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              2016년 개발자로 시작하여 현재까지 8년 7개월간 백엔드/서버 개발에 집중해왔습니다. 
              폴리인스퍼레이션에서 과장/팀원으로 재직 중이며, RestAPI 개발 및 웹 프로젝트 관리를 담당하고 있습니다.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Java, PostgreSQL, JavaScript, MyBatis 등의 기술을 활용하여 안정적이고 확장 가능한 
              서버 시스템을 구축합니다. 항상 최신 기술 동향을 주시하며 끊임없이 학습하는 자세를 갖추고 있습니다.
            </p>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                주요 경력
              </h4>              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  폴리인스퍼레이션 개발2팀 과장 (2021.02 ~ 현재)
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  제이넷 백엔드 개발자 (2017.10 ~ 2020.11)
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  포씨소프트 응용SW개발자 (2016.07 ~ 2017.09)
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  쌍용교육센터 Java 웹 개발 과정 수료 (2017.01 ~ 2017.06)
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  중부대학교 토목공학과 졸업 (2016.03)
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-700 rounded-lg p-8">
            <div className="space-y-6">              <h4 className="text-xl font-semibold text-gray-900 dark:text-white text-center">
                개발 철학
              </h4>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h5 className="font-semibold text-gray-900 dark:text-white">안정성 우선</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    신뢰할 수 있는 백엔드 시스템과 API를 구축합니다.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-600 dark:bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h5 className="font-semibold text-gray-900 dark:text-white">성능 최적화</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    데이터베이스 쿼리 최적화와 서버 성능 향상에 집중합니다.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-600 dark:bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h5 className="font-semibold text-gray-900 dark:text-white">지속 학습</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    새로운 기술과 트렌드를 학습하며 지속적으로 성장합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
