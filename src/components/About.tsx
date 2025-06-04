export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            저는 사용자 중심의 웹 애플리케이션을 개발하는 것을 좋아하는 풀스택 개발자입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              개발자로서의 여정
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              웹 개발에 관심을 가지게 된 이후, 끊임없이 새로운 기술을 학습하고 
              실무에 적용하는 것을 즐기고 있습니다. 특히 사용자 경험을 개선하고 
              성능을 최적화하는 데 관심이 많습니다.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              프론트엔드와 백엔드 모두에 경험이 있으며, 모던 웹 기술 스택을 
              활용하여 확장 가능하고 유지보수성이 좋은 애플리케이션을 구축합니다.
            </p>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                주요 경험
              </h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  React 및 Next.js를 활용한 SPA 개발
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  Node.js 및 Express.js 백엔드 API 개발
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  데이터베이스 설계 및 최적화
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  클라우드 서비스를 활용한 배포 및 운영
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-700 rounded-lg p-8">
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white text-center">
                개발 철학
              </h4>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                    </svg>
                  </div>
                  <h5 className="font-semibold text-gray-900 dark:text-white">사용자 중심</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    항상 사용자의 관점에서 생각하며 직관적인 인터페이스를 설계합니다.
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
                    빠르고 효율적인 애플리케이션을 위해 성능 최적화에 집중합니다.
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
