"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [visibleElements, setVisibleElements] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    // 애니메이션을 적용할 요소들을 관찰
    const elementsToObserve = document.querySelectorAll("[data-animate]");
    elementsToObserve.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const getAnimationClass = (id: string) => {
    return visibleElements.has(id)
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-8";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">J</span>
                </div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  <Link href="/">Jamescode</Link>
                </h1>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a
                  href="#services"
                  className="text-white/80 hover:text-white px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/10"
                >
                  서비스
                </a>
                <Link
                  href="/portfolio"
                  className="text-white/80 hover:text-white px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/10"
                >
                  포트폴리오
                </Link>
                <a
                  href="#features"
                  className="text-white/80 hover:text-white px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/10"
                >
                  특징
                </a>
                <a
                  href="#contact"
                  className="text-white/80 hover:text-white px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/10"
                >
                  연락처
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/2 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white/90 text-sm font-medium mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              새로운 프로젝트 진행 중
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight">
              <span className="bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent">
                브랜드를
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                혁신하는
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                웹사이트
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              AI 시대에 맞는 차세대 웹 경험을 제공합니다.
              <br />
              <span className="text-cyan-300">맞춤형 디자인</span>과{" "}
              <span className="text-purple-300">최신 기술</span>로 브랜드의
              가치를 극대화하세요.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              <a
                href="#contact"
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl font-semibold text-white shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10">프로젝트 시작하기</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <Link
                href="/portfolio"
                className="group px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl font-semibold text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                포트폴리오 보기
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300 inline-block">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            id="services-header"
            data-animate
            className={`text-center mb-20 transition-all duration-1000 ease-out ${getAnimationClass(
              "services-header"
            )}`}
          >
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white/90 text-sm font-medium mb-8">
              <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
              서비스
            </div>
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6">
              디지털 혁신의
              <br />
              새로운 기준
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              각 프로젝트마다 고유한 스토리와 목적에 맞는 완벽한 솔루션을
              제공합니다.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div
              id="service-card-1"
              data-animate
              className={`group relative transition-all duration-1000 ease-out delay-200 ${getAnimationClass(
                "service-card-1"
              )}`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  기업 웹사이트
                </h3>
                <p className="text-white/70 leading-relaxed">
                  브랜드 아이덴티티를 완벽하게 반영한 프리미엄 기업 홈페이지와
                  이커머스 플랫폼을 구축합니다.
                </p>
                <div className="mt-6 flex items-center text-cyan-400 font-medium">
                  자세히 보기
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Service Card 2 */}
            <div
              id="service-card-2"
              data-animate
              className={`group relative transition-all duration-1000 ease-out delay-400 ${getAnimationClass(
                "service-card-2"
              )}`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  포트폴리오
                </h3>
                <p className="text-white/70 leading-relaxed">
                  창작자와 전문가를 위한 인상적인 포트폴리오 사이트로 개인
                  브랜드의 가치를 극대화합니다.
                </p>
                <div className="mt-6 flex items-center text-purple-400 font-medium">
                  자세히 보기
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Service Card 3 */}
            <div
              id="service-card-3"
              data-animate
              className={`group relative transition-all duration-1000 ease-out delay-600 ${getAnimationClass(
                "service-card-3"
              )}`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-cyan-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  랜딩페이지
                </h3>
                <p className="text-white/70 leading-relaxed">
                  전환율 최적화와 사용자 경험을 극대화한 고성능 마케팅
                  랜딩페이지를 제작합니다.
                </p>
                <div className="mt-6 flex items-center text-pink-400 font-medium">
                  자세히 보기
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            id="features-header"
            data-animate
            className={`text-center mb-20 transition-all duration-1000 ease-out ${getAnimationClass(
              "features-header"
            )}`}
          >
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white/90 text-sm font-medium mb-8">
              <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
              차별화 포인트
            </div>
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6">
              왜 Jamescode
              <br />
              인가요?
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div
              id="features-list"
              data-animate
              className={`space-y-8 transition-all duration-1000 ease-out delay-200 ${getAnimationClass(
                "features-list"
              )}`}
            >
              {/* Feature 1 */}
              <div className="group flex items-start space-x-4 p-6 rounded-2xl hover:bg-white/5 transition-all duration-300">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    AI 기반 맞춤 설계
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    최신 AI 도구와 데이터 분석을 활용하여 브랜드에 최적화된
                    완전히 새로운 웹 경험을 설계합니다.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="group flex items-start space-x-4 p-6 rounded-2xl hover:bg-white/5 transition-all duration-300">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    차세대 반응형 디자인
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    모든 디바이스에서 완벽한 사용자 경험을 제공하는 미래지향적
                    반응형 웹 디자인을 구현합니다.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="group flex items-start space-x-4 p-6 rounded-2xl hover:bg-white/5 transition-all duration-300">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    성능 최적화
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    최신 웹 기술과 최적화 기법을 적용하여 빠르고 안정적인
                    웹사이트를 제작합니다.
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="group flex items-start space-x-4 p-6 rounded-2xl hover:bg-white/5 transition-all duration-300">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    지속적인 파트너십
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    프로젝트 완료 후에도 지속적인 업데이트와 개선을 통해
                    장기적인 성공을 보장합니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Right side - Interactive Element */}
            <div
              id="features-visual"
              data-animate
              className={`relative transition-all duration-1000 ease-out delay-400 ${getAnimationClass(
                "features-visual"
              )}`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-white/10 backdrop-blur-md p-12 rounded-3xl border border-white/20">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full mx-auto mb-8 flex items-center justify-center relative">
                    <div className="absolute inset-2 bg-slate-900 rounded-full flex items-center justify-center">
                      <svg
                        className="w-16 h-16 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                        />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-6">
                    혁신적 솔루션
                  </h3>
                  <p className="text-white/70 text-lg leading-relaxed mb-8">
                    작은 프로젝트부터 대규모 엔터프라이즈까지, 모든 규모의
                    의뢰를 정성껏 제작합니다.
                  </p>
                  <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-6 border border-white/20">
                    <p className="text-cyan-300 font-semibold text-lg">
                      &ldquo;디자인은 단순히 보이는 것이 아니라, 작동하는
                      방식이다&rdquo;
                    </p>
                    <p className="text-white/60 mt-2">- Steve Jobs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            id="contact-header"
            data-animate
            className={`text-center mb-20 transition-all duration-1000 ease-out ${getAnimationClass(
              "contact-header"
            )}`}
          >
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white/90 text-sm font-medium mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              프로젝트 문의
            </div>
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6">
              함께 만들어갈
              <br />
              디지털 미래
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              혁신적인 아이디어를 현실로 만들어보세요. 전문가와의 상담을 통해
              최적의 솔루션을 제안드립니다.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div
              id="contact-info"
              data-animate
              className={`space-y-8 transition-all duration-1000 ease-out delay-200 ${getAnimationClass(
                "contact-info"
              )}`}
            >
              <div>
                <h3 className="text-3xl font-bold text-white mb-8">
                  연락처 정보
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-xl flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">이메일</p>
                      <p className="text-white font-semibold">
                        jamescode.kr@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 8.16c-.169 1.858-.896 6.728-.896 6.728-.377 2.618-1.407 3.671-2.436 3.671-.64 0-1.11-.6-1.11-1.393 0-.553.18-1.058.473-1.469l.553-1.277s.18-.553.18-.914c0-.553-.18-.914-.553-.914-.553 0-.914.361-.914.914 0 .361.18.914.18.914l-.553 1.277c-.293.411-.473.916-.473 1.469 0 .793.47 1.393 1.11 1.393 1.029 0 2.059-1.053 2.436-3.671 0 0 .727-4.87.896-6.728.056-.615-.169-1.11-.553-1.11s-.609.495-.553 1.11z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">카카오톡 오픈채팅</p>
                      <p className="text-white font-semibold">빠른 상담 가능</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <h4 className="text-xl font-bold text-white mb-6">
                  프로젝트 문의 가이드
                </h4>
                <div className="space-y-4">
                  {[
                    "프로젝트 목적 및 비전",
                    "타겟 오디언스 분석",
                    "원하는 디자인 방향성",
                    "필요한 핵심 기능들",
                    "예산 범위 및 일정",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs font-bold">
                          {index + 1}
                        </span>
                      </div>
                      <span className="text-white/70">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div
              id="contact-form"
              data-animate
              className={`relative transition-all duration-1000 ease-out delay-400 ${getAnimationClass(
                "contact-form"
              )}`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-3xl blur-xl"></div>
              <div className="relative bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
                <h3 className="text-3xl font-bold text-white mb-8">
                  빠른 문의
                </h3>
                <div className="space-y-6">
                  <div className="text-center p-8 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-2xl border border-yellow-400/30">
                    <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 8.16c-.169 1.858-.896 6.728-.896 6.728-.377 2.618-1.407 3.671-2.436 3.671-.64 0-1.11-.6-1.11-1.393 0-.553.18-1.058.473-1.469l.553-1.277s.18-.553.18-.914c0-.553-.18-.914-.553-.914-.553 0-.914.361-.914.914 0 .361.18.914.18.914l-.553 1.277c-.293.411-.473.916-.473 1.469 0 .793.47 1.393 1.11 1.393 1.029 0 2.059-1.053 2.436-3.671 0 0 .727-4.87.896-6.728.056-.615-.169-1.11-.553-1.11s-.609.495-.553 1.11z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-3">
                      카카오톡으로 빠른 상담
                    </h4>
                    <p className="text-white/70 mb-6">
                      실시간 채팅으로 더 빠르고 편리하게 상담받으세요!
                      <br />
                      프로젝트 관련 질문이나 견적 문의를 즉시 답변드립니다.
                    </p>
                    <a
                      href="https://open.kakao.com/o/sFCB6qzh"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold rounded-2xl hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 hover:scale-105 shadow-2xl shadow-yellow-500/25"
                    >
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 8.16c-.169 1.858-.896 6.728-.896 6.728-.377 2.618-1.407 3.671-2.436 3.671-.64 0-1.11-.6-1.11-1.393 0-.553.18-1.058.473-1.469l.553-1.277s.18-.553.18-.914c0-.553-.18-.914-.553-.914-.553 0-.914.361-.914.914 0 .361.18.914.18.914l-.553 1.277c-.293.411-.473.916-.473 1.469 0 .793.47 1.393 1.11 1.393 1.029 0 2.059-1.053 2.436-3.671 0 0 .727-4.87.896-6.728.056-.615-.169-1.11-.553-1.11s-.609.495-.553 1.11z" />
                      </svg>
                      카카오톡 오픈채팅 참여하기
                    </a>
                  </div>

                  <div className="text-center">
                    <p className="text-white/50 text-sm">
                      또는 이메일로 문의:{" "}
                      <span className="text-cyan-300">
                        jamescode.kr@gmail.com
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
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
            {/* <div className="flex justify-center space-x-6 mb-8">
              <a
                href="#"
                className="text-white/60 hover:text-white transition-colors duration-300"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-white transition-colors duration-300"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-white transition-colors duration-300"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z" />
                </svg>
              </a>
            </div> */}
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
    </div>
  );
}
