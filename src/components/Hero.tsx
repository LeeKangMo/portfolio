export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white">
              안녕하세요, 저는{' '}
              <span className="text-blue-600 dark:text-blue-400">이강모</span>입니다
            </h1>            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              8년 7개월 경력의 백엔드/서버 개발자로서 RestAPI와 웹 서비스 구축을 전문으로 합니다
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              프로젝트 보기
            </a>            <a
              href="#experience"
              className="inline-flex items-center px-8 py-3 border border-blue-600 text-base font-medium rounded-md text-blue-600 bg-transparent hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
            >
              경력 보기
            </a>          </div>
        </div>
      </div>
    </section>
  )
}
