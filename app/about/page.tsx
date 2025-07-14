"use client";

import Image from "next/image";
import Footer from "../components/Footer";

export default function AboutUsPage() {
  return (
    <main>
      <section className="relative w-full h-screen">
        <Image
          src="/images/srt-photo.jpg"
          alt="SRT Team"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="-z-10 opacity-50"
        />
      </section>
      <section id="hero" className="absolute inset-0 grid grid-cols-[35%_65%] h-auto flex items-center justify-center text-white text-center px-5 py-10 mt-4">
        <div className="flex items-center justify-end">
          <img src="/images/soedirmanrobotic.png" alt="Logo" className="w-80 h-auto mr-4"></img>
        </div>
        <div className="flex text-left w-fit-content flex-col items-center justify-center px-5">
          <div>
            <p className="text-3xl my-2">Jenderal Soedirman University</p>
            <h1 className="text-8xl font-black my-2">SOEDIRMAN</h1>
            <h1 className="text-8xl font-black my-2">ROBOTIC</h1>
            <h1 className="text-8xl font-black my-2">TEAM</h1>
            <p className="text-xl my-2 italic">&quot;The Future We Make, For The Better Life&quot;</p>
          </div>
        </div>
      </section>
      <section className="px-5 py-5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 px-24">
          {/* Text Section */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">About Us</h2>
            <p className="text-lg leading-relaxed">
              Soedirman Robotic Team is a student organization at Jenderal Soedirman University which is engaged in robotics research and student development in the organization.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/images/maskot.png" // ganti dengan path gambar kamu
              alt="Robot Mascot"
              className="w-[300px] md:w-[400px] object-contain"
            />
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center space-y-12 px-5 py-10">
        <div className="text-center space-y-3">
          <h1 className="text-3xl font-bold">Vision & Missions</h1>
          <h1 className="text-3xl font-bold">
            Soedirman Robotic Team
          </h1>
        </div>

        <div className="max-w-3xl text-center space-y-4">
          <h3 className="text-2xl font-semibold">Vision</h3>
          <p className="italic text-lg leading-relaxed">
            Making the Soedirman Robotic Team as a robotics team which is superior, highly competitive, inspiring, educational and central Technology Development in the Field of Robotics and Information for students and the surrounding community.
          </p>
        </div>

        <div className="max-w-3xl space-y-4 text-left">
          <h3 className="text-2xl font-semibold text-center">Missions</h3>
          <ul className="space-y-3">
            {[
              "Becoming a forum for scientific research in the field of robotics and development students who are members of the organization.",
              "Conducting training and education to apply knowledge in the field of robotics to students and the surrounding community.",
              "Establish good relationships with alumni, the community and institutions outside.",
              "Playing an active role in various competitions, especially Robotics.",
              "Upholding religious values, tolerance and Tri Dharma Higher education as the main foundation.",
            ].map((mission, i) => (
              <li key={i} className="flex items-start space-x-3">
                <div className="w-1 bg-white mt-1 h-6 rounded" />
                <p className="italic">{mission}</p>
              </li>
            ))}
          </ul>
        </div>

        <button
          onClick={() => window.location.href = "/"}
          className="flex flex-cols justify-center items-center gap-2 border border-white px-8 py-2 rounded-lg hover:bg-white hover:text-black transition text-sm"
        >
          Back to Home
        </button>
      </section>
      <section id="footer" className="px-5 py-10 text-white">
        <Footer />
      </section>
    </main>
  )
}