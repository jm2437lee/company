"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedTitle, setSelectedTitle] = useState<string>("");

  // ESC 키로 모달 닫기
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && selectedImage) {
        setSelectedImage(null);
      }
    };

    document.addEventListener("keydown", handleEscKey);
    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [selectedImage]);

  const portfolioItems = [
    {
      id: 1,
      title: "럭셔리 브랜드 웹사이트",
      category: "기업 웹사이트",
      description:
        "프리미엄 브랜드의 정체성을 완벽하게 반영한 고급스러운 웹사이트",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      image: "/portfolio/p_01.png",
      gradient: "from-purple-600 to-pink-600",
      year: "2025",
    },
    {
      id: 2,
      title: "크리에이터 포트폴리오",
      category: "포트폴리오",
      description: "개인 브랜딩을 극대화한 인터랙티브 포트폴리오 사이트",
      tech: ["React", "Three.js", "GSAP", "Styled Components"],
      image: "/portfolio/p_02.png",
      gradient: "from-cyan-500 to-blue-600",
      year: "2025",
    },
    {
      id: 3,
      title: "스타트업 랜딩페이지",
      category: "랜딩페이지",
      description: "전환율 최적화에 특화된 고성능 마케팅 랜딩페이지",
      tech: ["Vue.js", "Nuxt.js", "SCSS", "AOS"],
      image: "/portfolio/p_03.png",
      gradient: "from-green-500 to-teal-600",
      year: "2025",
    },
    {
      id: 4,
      title: "이커머스 플랫폼",
      category: "기업 웹사이트",
      description: "사용자 경험을 중심으로 설계된 모던 쇼핑몰 플랫폼",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "/portfolio/p_04.png",
      gradient: "from-orange-500 to-red-600",
      year: "2024",
    },
    {
      id: 5,
      title: "아티스트 갤러리",
      category: "포트폴리오",
      description: "작품의 아름다움을 극대화하는 미니멀 갤러리 웹사이트",
      tech: ["Gatsby", "GraphQL", "Contentful", "Lightbox"],
      image: "/portfolio/p_05.png",
      gradient: "from-indigo-500 to-purple-600",
      year: "2024",
    },
    {
      id: 6,
      title: "테크 스타트업 사이트",
      category: "랜딩페이지",
      description: "혁신적인 기술을 어필하는 인터랙티브 기업 사이트",
      tech: ["Next.js", "TypeScript", "Three.js", "Vercel"],
      image: "/portfolio/p_06.png",
      gradient: "from-blue-600 to-cyan-500",
      year: "2023",
    },
  ];

  const categories = ["전체", "기업 웹사이트", "포트폴리오", "랜딩페이지"];

  // 선택된 카테고리에 따라 포트폴리오 아이템 필터링
  const filteredItems =
    selectedCategory === "전체"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">J</span>
                </div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  <Link href="/">Jamescode</Link>
                </h1>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link
                  href="/#services"
                  className="text-white/80 hover:text-white px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/10"
                >
                  서비스
                </Link>
                <Link
                  href="/portfolio"
                  className="text-white px-3 py-2 rounded-lg text-sm font-medium bg-white/20"
                >
                  포트폴리오
                </Link>
                <Link
                  href="/#features"
                  className="text-white/80 hover:text-white px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/10"
                >
                  특징
                </Link>
                <Link
                  href="/#contact"
                  className="text-white/80 hover:text-white px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/10"
                >
                  연락처
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white/90 text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
            포트폴리오
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-8">
            <span className="bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent">
              창의적 솔루션으로
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              만든 작품들
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            각각의 프로젝트마다 고유한 스토리와 목적을 가지고 있습니다.
            <br />
            <span className="text-cyan-300">브랜드의 가치</span>를 극대화하는{" "}
            <span className="text-purple-300">맞춤형 웹 경험</span>을
            확인해보세요.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-3 backdrop-blur-sm border rounded-2xl font-semibold transition-all duration-300 hover:scale-105 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-cyan-500 to-purple-600 border-cyan-400 text-white shadow-lg shadow-cyan-500/25"
                    : "bg-white/10 border-white/20 text-white hover:bg-white/20"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="group relative animate-in fade-in duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Background Glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300`}
                ></div>

                {/* Card */}
                <div className="relative bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 overflow-hidden">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 cursor-pointer"
                      onClick={() => {
                        setSelectedImage(item.image);
                        setSelectedTitle(item.title);
                      }}
                    />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                        {item.category}
                      </span>
                    </div>

                    {/* Year Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-black/30 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                        {item.year}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-white/70 mb-4 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-white/10 rounded-lg text-white/80 text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6">
            다음 프로젝트의
            <br />
            주인공이 되어보세요
          </h2>
          <p className="text-xl text-white/60 mb-8">
            여러분의 브랜드도 이런 혁신적인 웹사이트를 가질 수 있습니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="https://open.kakao.com/o/sFCB6qzh"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl font-semibold text-white shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10">프로젝트 문의하기</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <Link
              href="/"
              className="group px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl font-semibold text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              홈으로 돌아가기
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300 inline-block">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold">J</span>
              </div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Jamescode
              </h3>
            </div>
            <p className="text-white/60 text-lg mb-6">
              브랜드의 가치를 극대화하는 차세대 웹 솔루션
            </p>
            <p className="text-white/40 text-sm">
              © 2024 Jamescode. All rights reserved. | 혁신적인 웹 솔루션으로
              미래를 만들어갑니다.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating KakaoTalk Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <a
          href="https://open.kakao.com/o/sFCB6qzh"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full shadow-2xl shadow-yellow-500/25 hover:shadow-yellow-500/40 transition-all duration-300 hover:scale-110"
        >
          {/* KakaoTalk Icon */}
          <svg
            className="w-8 h-8 text-black"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 3C6.48 3 2 6.58 2 11c0 2.8 1.8 5.27 4.5 6.75L5.5 21l3.25-1.5C9.8 19.83 10.88 20 12 20c5.52 0 10-3.58 10-8s-4.48-8-10-8zm0 14c-1.12 0-2.2-.17-3.25-.5L6 18l1.25-2.25C5.8 14.27 4 12.8 4 11c0-3.31 3.58-6 8-6s8 2.69 8 6-3.58 6-8 6z" />
          </svg>

          {/* Tooltip */}
          <div className="absolute right-full mr-4 px-3 py-2 bg-black/80 backdrop-blur-sm text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            카카오톡 문의
            <div className="absolute top-1/2 -right-1 transform -translate-y-1/2 w-2 h-2 bg-black/80 rotate-45"></div>
          </div>

          {/* Pulse Animation */}
          <div className="absolute inset-0 bg-yellow-400 rounded-full animate-ping opacity-20"></div>
        </a>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-7xl max-h-full">
            {/* Close Button */}
            <button
              className="absolute -top-12 right-0 text-white/80 hover:text-white text-2xl font-bold z-10 bg-black/50 rounded-full w-10 h-10 flex items-center justify-center transition-all duration-300 hover:bg-black/70"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>

            {/* Image */}
            <img
              src={selectedImage}
              alt={selectedTitle}
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Title */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              <h3 className="text-white text-xl font-bold">{selectedTitle}</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
